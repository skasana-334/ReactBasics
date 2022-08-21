import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Head from './Head';
const Home = () => {
  return (
    <>
<Head/>
<Outlet/>

    </>
  )
}

export default Home;
