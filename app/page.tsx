
"use client";
import React, {useState} from 'react'

import Navbar from './components/Navigation/Navbar';
import Explore from './components/Explore/Explore';
import LogoCaraousel from './components/Logo-Caraousel/LogoCaraousel';
import Cards from './components/Cards/Cards';
import DiscoverNow from './components/DiscoverNow/DiscoverNow';
import ExploreMore from './components/ExploreMore/ExploreMore';
import Features from './components/Features/Features';
import Integrations from './components/Integrations/Integrations';
import Blogs from './components/Blogs/Blogs';
import Reviews from './components/Reviews/Reviews';
import PageEnd from './components/PageEnd/PageEnd';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Explore/>
      <LogoCaraousel/>
      <Cards/>
      <DiscoverNow/>
      <ExploreMore/>
      <Features/>
      <Integrations/>
      <Blogs/>
      <Reviews/>
      <PageEnd/>
    </div>
  )
}

export default page
