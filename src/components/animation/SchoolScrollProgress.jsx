import React from "react";
import { useScroll } from "../../hooks/useSchoolScroll";

export function ScrollProgress() {
  const bar = useScroll();
  // Note the curly braces ref={bar}, NOT ref="bar"
  return <div ref={bar} className="scroll-progress" aria-hidden="true" />;
}

export default ScrollProgress;
