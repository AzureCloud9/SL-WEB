import DefaultLayout from '@/Layouts/DefaultLayout'
import React from 'react'
import Overons from './Sections/About/Overons'
import HowItWorks from './Sections/Home/HowItWorks'
import WhyChoose from './Sections/About/WhyChoose'
import KeyFeatures from '@/Components/cards/KeyFeatures'

export default function AboutUs() {
  return (
    <DefaultLayout>
           <Overons />
           <HowItWorks />
           <WhyChoose />
    </DefaultLayout>
    )
}
