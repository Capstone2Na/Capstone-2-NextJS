import React from "react";

const Summary = ({
  value,
  label,
  sub,
}: {
  value: Number;
  label: String;
  sub: String;
}) => {
  return (
    <div className="w-full h-40 lg:h-60 justify-between flex flex-col bg-tertiary text-black rounded-md overflow-hidden">
      <h2 className="w-full text-nowrap bg-gradient-to-r from-blue-500 to-blue-300 text-primary px-3 py-2">
        {label}
      </h2>
      <h6 className="w-full text-5xl lg:text-[4rem] bg-tertiary pl-4 font-semibold">
        {String(value)}
      </h6>
      <p className="pl-5 w-full text-xl lg:text-lg">{sub}</p>
    </div>
  );
};

export default Summary;
