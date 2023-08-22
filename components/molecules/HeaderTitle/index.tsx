import React from "react";
import Link from "next/link";
import { HeaderTitlePropsI } from "./interface";
const HeaderTitle = (props: HeaderTitlePropsI): React.ReactNode => {
  const { title } = props;
  return (
    <div className="bg-slate-300 text-3xl font-mono text-center p-4">
      <Link href={"/"}>{title}</Link>
    </div>
  );
};

export default HeaderTitle;
