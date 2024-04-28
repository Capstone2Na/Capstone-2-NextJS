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
    <div className="w-full h-24 lg:h-60 justify-between flex flex-col bg-tertiary text-black rounded-md overflow-hidden">
      <h2 className="text-xs lg:text-lg w-full text-nowrap bg-gradient-to-r from-blue-500 to-blue-300 text-primary px-1 py-1 lg:px-3 lg:py-2">
        {label}
      </h2>
      <h6 className="w-full text-xl lg:text-[4rem] bg-tertiary pl-4 font-semibold">
        {String(value.toFixed(2))}
      </h6>
      <p className="pl-5 w-full text-xs lg:text-lg">{sub}</p>
    </div>
  );
};

export default Summary;
