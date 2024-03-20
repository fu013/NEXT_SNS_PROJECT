import React from "react";

const HomeLayout = async ({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> => {
  return <div>{children}</div>;
};

export default HomeLayout;
