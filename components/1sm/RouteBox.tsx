import { ReactNode } from "react";

const RouteBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="section w-screen h-full overflow-y-hidden overflow-x-scroll text-secondary">
      <div className="content flex-col justify-between items-center h-full py-4">
        {children}
      </div>
    </div>
  );
};

export default RouteBox;
