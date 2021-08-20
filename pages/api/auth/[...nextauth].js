import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
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
    // ...add more providers here
  ],
});
