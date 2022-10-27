import type { NextPage } from "next";
import { Desktop } from "../components/Desktop";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [configured, setConfigured] = useState(false);

  useEffect(() => {
    const { outerWidth } = window;

    if (outerWidth <= 500) {
      document.documentElement.style.setProperty("--shortcut-size", "56px");
      document.documentElement.style.setProperty(
        "--program-max-size",
        "1000px"
      );
    }

    // font ('Poppins') check
    let tryCount = 0;

    const interval = setInterval(() => {
      if (document.fonts.check("1em Poppins")) {
        setConfigured(true);
        clearInterval(interval);
        alert("font loaded");
      }

      tryCount++;
      if (tryCount > 10) {
        clearInterval(interval);
        console.log(`Font load failed`);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!configured) return null;
  return <Desktop />;
};

export default Home;
