import type { NextPage } from "next";
import {Profile} from '../components/Profile';
import {useEffect, useLayoutEffect} from 'react';

const Home: NextPage = () => {

  return <main>
    <Profile />
  </main>
};

export default Home;
