import PageBottomButtons from "@/components/molecules/PageBottomButtons";
import PageUpper from "@/components/molecules/PageUpper";
import React from "react";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between bg-secondary text-secondary font-normal full h-lvh mx-auto">
      <PageUpper />
      {children}
      <PageBottomButtons />
    </div>
  );
};

export default template;
