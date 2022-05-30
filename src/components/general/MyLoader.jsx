import React from "react";
import ReactLoading from "react-loading";

import loaderStyles from "/sass/modules/_Loader.module.scss";

export default function MyLoader(props) {
  return (
    <div className={loaderStyles.container}>
      <img src="/img/ff_logo.svg" alt="" className={loaderStyles.pulse} />
      <p>{props.message}</p>
      <ReactLoading type={"cubes"} color={"#FFFFFF"} height={100} width={100} />
    </div>
  );
}
