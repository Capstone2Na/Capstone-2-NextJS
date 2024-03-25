import PageBottomButtons from "@/components/2md/PageBottomButtons";
import PageUpper from "@/components/2md/PageUpper";
import React from "react";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex section section flex-col justify-between bg-secondary text-secondary font-normal w-screen h-lvh">
      <PageUpper />
      {children}
      <PageBottomButtons />
    </div>
  );
};

export default template;
