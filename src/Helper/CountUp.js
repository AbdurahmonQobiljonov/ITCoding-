import { useState, useEffect } from "react";
import { CountUp } from "use-count-up";

const CountUps = (cnt) => {
  const [first, setFirst] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setFirst(true);
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
