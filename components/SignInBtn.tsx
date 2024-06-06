"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import { Button, buttonVariants } from "./ui/button";
import { signIn, signOut } from "next-auth/react";

const SignInBtn = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await signIn("github");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <Dialog>
      <DialogTrigger className={buttonVariants({ variant: "default" })}>
        Login
      </DialogTrigger>
      <DialogContent className="w-fit px-16">
        <DialogHeader className="justify-center items-center gap-4">
          <DialogTitle>Login to your account</DialogTitle>

          <Button onClick={handleSubmit}>Sign in with GitHub</Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export const LogoutBtn = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await signOut();
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog>
      <DialogTrigger className={buttonVariants({ variant: "default" })}>
        Logout
      </DialogTrigger>
      <DialogContent className="w-fit px-16">
        <DialogHeader className="justify-center items-center gap-4">
          <DialogTitle>Are you sure you want to logout?</DialogTitle>
          <div className="w-full flex justify-center gap-4 items-center ">
            <DialogClose className={buttonVariants({ variant: "default" })}>
              Cancle
            </DialogClose>
            <Button onClick={handleSubmit}>
              {loading ? "Logging out..." : "Logout"}
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SignInBtn;
