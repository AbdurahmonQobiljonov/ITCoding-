import { useState, useEffect } from "react";
import { CountUp } from "use-count-up";

const CountUps = (cnt) => {
  const [first, setfirst] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setfirst(true);
    });
  }, []);

  return (
    <>
      {first ? (
        <span>
          <CountUp isCounting end={cnt} duration={5} />+
        </span>
      ) : (
        0
      )}
    </>
  );
};

export default CountUps;
