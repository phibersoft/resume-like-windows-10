import type { NextPage } from "next";
import { Desktop } from "../components/Desktop";
import {useEffect, useState} from 'react';

const Home: NextPage = () => {
  const [configured, setConfigured] = useState(false);

  useEffect(() => {
    const { outerWidth } = window;

    if(outerWidth <= 500){
      document.documentElement.style.setProperty('--shortcut-size', '56px');
    }

    setConfigured(true);
  }, []);

  if(!configured) return null;
  return <Desktop />;
};

export default Home;
