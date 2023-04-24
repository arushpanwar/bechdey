import React, { ReactNode } from 'react';
import Header from "./Header";
import FooterMain from "./FooterMain";

interface Props {
    children: ReactNode;
  }

const Layout = ({ children }:Props) => {
  return (
    <div>
      <Header />
      {children}
      <FooterMain />
    </div>
  );
};

export default Layout;
