import React from 'react'
import SectionBanner from '../Components/SectionBanner/SectionBanner'
import Collection from '../Components/Collection/Collection'

const Kids = () => {
  return (
    <>
        <SectionBanner
        img={require("../Assets/kids_banner.png")}
        />
        <Collection
        category='kid'
        />
    </>
  )
}

export default Kids
