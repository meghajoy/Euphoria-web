import React from 'react'
import Header from '../components/common/Header'
import SpotlightScreen from './Spotlight'
import ExploreScreen from './ExploreScreen'
import NewArrivalScreen from './NewArrivalScreen'
import PosterScreen from './PosterScreen'
import MensCategoryScreen from './MensCategoryScreen'
import WomensCategoryScreen from './WomensCategoryScreen'
import BrandsScreen from './BrandScreen'
import LimeLightScreen from './LimeLightScreen'
import FeedbackScreen from './FeedbackScreen'
import Footer from '../components/common/Footer'

function Main() {
  return (
    <>
        <Header />
        <SpotlightScreen />
        <ExploreScreen />
        <NewArrivalScreen />
        <PosterScreen />
        <MensCategoryScreen />
        <WomensCategoryScreen />
        <BrandsScreen />
        <LimeLightScreen />
        <FeedbackScreen />
        <Footer />
    </>
  )
}

export default Main