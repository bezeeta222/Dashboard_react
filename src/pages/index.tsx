import React from "react";
import type { ReactElement } from "react";



import SignIn from "./auth/sign-in";
import AuthLayout from "../layouts/Auth";


function Presentation() {
  return (
    <React.Fragment>
      <SignIn />
    </React.Fragment>
  );
}

Presentation.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Presentation;
