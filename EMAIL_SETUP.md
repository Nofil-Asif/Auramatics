# Email Setup Guide

How the AURAMATICS contact form delivers messages.

## Overview

The site is a static export hosted on GitHub Pages, so there is no backend to
send email. The contact form posts to **Web3Forms**, a third-party form
backend, which relays each submission to the inbox that owns the access key.

Relevant file: `src/app/contact/page.tsx`

## How It Works

1. The user fills out the contact form.
2. `handleSubmit` posts the form data as JSON to `https://api.web3forms.com/submit`.
3. Web3Forms emails the submission to the address the access key is registered to.
4. On success the form clears and a thank-you dialog confirms a reply within 2 working days.
5. On failure an inline error message is shown and the entered data is preserved.

The request is sent with `fetch` rather than a native form POST so the page is
never navigated away from, which is what allows the confirmation dialog to appear.

## Configuration

The access key is defined at the top of `src/app/contact/page.tsx`:

```ts
const WEB3FORMS_ACCESS_KEY = "...";
```

Fields sent with each submission:

| Field | Purpose |
| --- | --- |
| `access_key` | Identifies the Web3Forms account and determines the destination inbox |
| `from_name` | Sender label shown in the notification email |
| `subject` | Subject line of the notification email |
| `name`, `email`, `company`, `message` | User-entered values |
| `enquiry_subject` | The user's own subject line, kept separate from the email subject |
| `botcheck` | Hidden honeypot field for spam filtering |

## Changing the Destination Inbox

The destination is **not** set in code. It is bound server-side to the access
key, because the key is publicly visible in the client bundle; allowing a
client-specified destination would make the form an open email relay.

To change where submissions go, request a new access key at
[web3forms.com](https://web3forms.com) using the desired address, then replace
`WEB3FORMS_ACCESS_KEY`. Requesting a key does not create an account: you enter
an address and the key is emailed to it.

Sending to more than one recipient (the `ccemail` field) requires a paid plan.

## Testing

Local:

```bash
npm run dev
```

Then submit the form at <http://localhost:3000/contact/>. Submissions from
localhost work with the same key and are delivered for real, so use obviously
fake data when testing.

Note that Web3Forms rejects server-side requests on the free tier
(`403 "This method is not allowed"`), so the form can only be exercised from a
browser, not from `curl` or a CI script.

## Troubleshooting

**Submissions succeed but no email arrives.** The key is likely registered to a
different address than expected. Check the inbox the key was issued to. If the
destination is on Microsoft 365, also check the quarantine at
`security.microsoft.com`, which is separate from the Junk folder.

**Submissions stopped working after an edit.** Web3Forms validates the fields it
recognises. An empty or malformed value in a reserved field can cause a
rejection, so verify any newly added hidden fields against their documentation.

## History

The form previously used FormSubmit. It was replaced because FormSubmit
required a separate activation per submitting domain (so localhost and
production were independent setups) and offered no dashboard, meaning a
submission lost to a spam filter left no record. The prior implementation is
kept at `backup/contact-page.formsubmit.tsx.bak` for reference.
