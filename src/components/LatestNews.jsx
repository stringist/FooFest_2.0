import { useRef, useState } from "react";
import News from "./News";

export default function LatestNews() {
  return (
    <>
      <h3>Latest News</h3>
      <News title="Artist Spotlight" img="/img/terminalist.webp" desc="" cta="" />
      <News title="Become a Volunteer" img="/img/volunteers.webp" desc="From pouring drinks, setting up stages, and everything in between, there's a place for everyone on our volunteer team." cta="Learn about sign up & benefits." />
    </>
  );
}
