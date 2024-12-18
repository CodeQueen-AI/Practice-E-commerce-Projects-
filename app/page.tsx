import React from 'react'
import Hero from '../components/hero'
import Services from '../components/services'
import Promotions from '../components/promptions'
import Category from '../components/categories'
import Gift from '../components/gift'

const page = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <Promotions/>
      <Category/>
      <Gift/>
    </div>
  )
}

export default page
