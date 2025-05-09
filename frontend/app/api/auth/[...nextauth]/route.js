// import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
// import GitHubProvider from "next-auth/providers/github";

// export const authoptions = NextAuth({
//   providers: [
//     // OAuth authentication providers...
//     GitHubProvider({
//         clientId: process.env.GITHUB_ID,
//         clientSecret: process.env.GITHUB_SECRET
//     }),
//     // AppleProvider({
//     //   clientId: process.env.APPLE_ID,
//     //   clientSecret: process.env.APPLE_SECRET
//     // }),
//     // FacebookProvider({
//     //   clientId: process.env.FACEBOOK_ID,
//     //   clientSecret: process.env.FACEBOOK_SECRET
//     // }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET
//     }),
//     // // Passwordless / email sign in
//     // EmailProvider({
//     //   server: process.env.MAIL_SERVER,
//     //   from: 'NextAuth.js <no-reply@example.com>'
//     // }),
//   ],
//   callbacks: {
//     async session({ session, token }) {
//       // Include additional profile information if needed
//       if (token) {
//         session.user.name = token.name;
//         session.user.email = token.email;
//         session.user.image = token.picture;
//       }
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.name = user.name;
//         token.email = user.email;
//         token.picture = user.image;
//       }
//       return token;
//     },
// }})

// export { authoptions as GET, authoptions as POST }

// app/api/auth/[...nextauth]/route.js (or route.ts for TypeScript)
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
