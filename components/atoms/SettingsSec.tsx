import { ReactNode } from "react";

const SettingsSec = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="w-full justify-center flex-col">
      <div className="px-3 py-2">
        <h6 className="text-secondary bg-transparent opacity-70">{title}</h6>
      </div>
      <div className="section bg-secondary text-secondary w-full flex flex-col py-4">
        {children}
      </div>
    </div>
  );
};

export default SettingsSec;
