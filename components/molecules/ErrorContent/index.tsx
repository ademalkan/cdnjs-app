import Image from "next/image";
import React from "react";

const ErrorContent = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image alt="Error" width={250} height={250} src={"/images/404.gif"} />
      <h6 className="text-xl">Not Found Content</h6>
    </div>
  );
};

export default ErrorContent;
