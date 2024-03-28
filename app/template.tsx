"use client"; //please do no remove hahaha maguba ang frontend
import PageBottomButtons from "@/components/molecules/PageBottomButtons";
import PageUpper from "@/components/molecules/PageUpper";
import React from "react";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PageUpper />
      {children}
      <PageBottomButtons />
    </>
  );
};

export default template;
