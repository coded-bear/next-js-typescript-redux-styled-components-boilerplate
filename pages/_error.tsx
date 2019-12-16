import React from "react";
import Router from "next/router";
import { Res, ErrInterface } from "../common/utils/types";

function Error({ statusCode }: { statusCode: number }) {
  return (
    <div>
      <h2>{statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client"}</h2>
      <button onClick={() => Router.back()}>Go back to the previous page</button>
    </div>
  );
}

Error.getInitialProps = async ({ res, err }: { res: Res; err: ErrInterface }): Promise<any> => {
  console.log(err);
  const statusCode: number = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
