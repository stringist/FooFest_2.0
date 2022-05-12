import { useEffect, useState } from "react";

export default function Act(act) {
  return (
    <li>
      {act.start} - {act.end} -- {act.act}
    </li>
  );
}
