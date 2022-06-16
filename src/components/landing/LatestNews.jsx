import { useRef, useState } from "react";
import createUID from "create-unique-id";

import News from "./News";
import Spotlight from "./Spotlight";
export default function LatestNews() {
  return (
    <>
      <h3>Latest News</h3>
      <Spotlight title="Artist Spotlight"  className="spotlight" desc="" cta="" key={createUID(4)} />
      <News
        title="Become a Volunteer"
        img="/img/volunteers.webp"
        desc="From pouring drinks, setting up stages, and everything in between, there's a place for everyone on our volunteer team."
        cta="Learn about sign up & benefits."
        key={createUID(4)}
      />
    </>
  );
}
