import React from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/atoms/Loading";

const Analytics = () => {
  return (
    <div className="section h-full overflow-x-hidden overflow-y-auto text-secondary">
      <div className="content flex-col justify-between items-center h-full py-4 ">
        Analytics
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Analytics), {
  ssr: true,
  loading: () => <Loading />,
});
