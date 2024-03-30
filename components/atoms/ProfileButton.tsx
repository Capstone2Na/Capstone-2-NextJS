"use client";
import React, { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SignIn, SignInButton } from "@clerk/clerk-react";

const ProfileButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
        </SignedIn>

        <SignedOut>
          <SignInButton/>
        </SignedOut>
        </> 
  );
};

export default ProfileButton;
