import HeaderTitle from "@/components/molecules/HeaderTitle";
import React from "react";
import { HeaderPropsI } from "./interface";

const Header = (props: HeaderPropsI): React.ReactNode => {
  const { title } = props;
  return (
    <>
      <HeaderTitle title={title} />
    </>
  );
};

export default Header;
