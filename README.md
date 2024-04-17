# Example forms in Sanity.io

This repository shows various examples of how to integrate forms with a Sanity Studio and React front end.

## HTML Form and HTML form fields

These are showing how to do basic form building within Sanity, including Presentation

### HTML form

Mostly to show an example of building a basic form, most other integrations have a copy of this code repurposed for their specific needs.

### HTML form fields

Used in most of the examples. The schema and component only show a basic variety of fields, but the list of options could be added to

## Formspree Form

A Sanity-controlled Formspree form. As far as I can tell, there's no API to sync form IDs from Formspree to Sanity, so this set up requires some manual copy+pasting until that's possible.

### Files to look at

```
./sanity/schemas/formspree-form.ts
./components/formspree-form.tsx
```

### Packages to install

```bash
npm install @formspree/react
```

### Formspree docs

[Formspree Nextjs Guide](https://formspree.io/guides/nextjs/)

## KwesForms Form

### Sync API handler

`./app/api/sync-kwesforms/route.ts` contains logic for fetching from KwesForm's API and syncing forms in their platform with Sanity in a 'read-only' mode. The included schema + component then allows Studio users to add fields to the synced Kwesforms.

### Component + schema

### Files to look at

```
./sanity/schemas/kwesforms-form.ts
./components/kwesforms-form.tsx
```

### Packages to install

This example doesn't use the package below, but their [getting started guide](https://kwesforms.com/docs/v2/form-setup) provides it as an optional step.

```bash
npm install kwesforms
```

### KwesForms docs

[Kwesforms Setup Guide](https://kwesforms.com/docs/v2/form-setup)

## To do

- Formium
- Hubspot
  1. Create api route to hit /forms/v2/forms https://legacydocs.hubspot.com/docs/methods/forms/v2/get_forms
  2. create/update comparing Sanity's updatedAt and hubspot's
  3. guid and portalId to next-hubspot? https://github.com/snelsi/next-hubspot/tree/master
- Typeform https://www.typeform.com/developers/create/reference/retrieve-forms/#retrieve-forms
