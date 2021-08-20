This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Use case: A small trick to allow use next-auth's Okta provider with multiple okta tenants.
 

You can use the existing OKTA provider  multiple time and override the values to make it unique.

Export unique ENV for CLIENT_ID,CLIENT_SECRET domain 

> 
````
 providers: [
    Providers.Okta({
      id: "dev-02783336",
      name: "dev-02783336",
      clientId: process.env.OKTA1_CLIENT_ID,
      clientSecret: process.env.OKTA1_CLIENT_SECRET,
      domain: process.env.OKTA1_DOMAIN,
    }),
    Providers.Okta({
      id: "venuokta",
      name: "venuokta",
      clientId: process.env.OKTA2_CLIENT_ID,
      clientSecret: process.env.OKTA2_CLIENT_SECRET,
      domain: process.env.OKTA2_DOMAIN,
    })
````
> NOTE: the callback url will have the id you have provided above, use this to configure "Sign-in redirect URIs"
> http://localhost:3000/api/auth/callback/[id]

example: 
* > http://localhost:3000/api/auth/callback/dev-02783336
* > http://localhost:3000/api/auth/callback/venuokta

