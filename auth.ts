import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import { connectDb } from "./lib/dbConnect";
import User from "./models/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [github],
  callbacks: {
    async signIn({ profile }) {
      try {
        connectDb();

        const UserExists = await User.findOne({ email: profile?.email });

        if (!UserExists) {
          const user = await User.create({
            name: profile?.name,
            email: profile?.email,
            image: profile?.avatar_url,
            username: profile?.login,
            github: profile?.html_url,
            role:profile?.email==="shivayadavsy1256@gmail.com"?"admin":"user",
          });
          console.log(user);
        }

        return true;
      } catch (error) {
        return false;
      }
    },
  },
});
