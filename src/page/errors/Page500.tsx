import React from "react";
import { Outlet } from "react-router-dom";

const Page500: React.FC = (props) => {
  return (
    <React.Fragment>
      Page404
      <Outlet/>
    </React.Fragment>
  );
};
export default Page500;
