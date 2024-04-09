import PageBottomButtons from "@/components/molecules/PageBottomButtons";
import PageUpper from "@/components/molecules/PageUpper";
import React from "react";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PageUpper />
      <main className="section h-full overflow-x-hidden overflow-y-auto text-secondary relative">
        {children}
      </main>
      <PageBottomButtons />
    </>
  );
};

export default template;
