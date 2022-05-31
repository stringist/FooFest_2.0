import { useRef, useState } from "react";
import CampingOptions from "./CampingOptions";
import Summary from "../../form_components/Summary";
import form2Styles from "/sass/modules/_Form2.module.scss";

export default function FormStep2(props) {
  //  const endpoint = "https://kea2semester-e216.restdb.io/rest/foofest";
  //   const key = "615d83068597142da1745455";

  return (
    <>
<CampingOptions  {...props}/>
<Summary {...props}/>
    </>
  );
}
