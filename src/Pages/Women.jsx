import React from 'react'
import Collection from '../Components/Collection/Collection'
import SectionBanner from '../Components/SectionBanner/SectionBanner'

const Women = () => {
  return (
    <>
        <SectionBanner
        img={require("../Assets/hero_image.png")}
        />
        <Collection
        category='women'
        />
    </>
  )
}

export default Women
