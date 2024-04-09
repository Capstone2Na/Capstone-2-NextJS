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
    <div className="w-full h-60 justify-between flex flex-col bg-tertiary text-tertiary rounded-md overflow-hidden">
      <h2 className="w-full text-nowrap bg-buttonHover text-secondary px-3 py-2">
        {label}
      </h2>
      <h6 className="w-full text-[4rem] bg-tertiary pl-4">{String(value)}</h6>
      <p className="pl-5 w-full text-lg">{sub}</p>
    </div>
  );
};

export default Summary;
