import { Component, Suspense } from "react";

// project import
import Loader from "./Loader";

const Loadable: React.FC = (props) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
