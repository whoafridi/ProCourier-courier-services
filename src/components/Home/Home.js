import React from 'react'
import Analysis from '../Analysis/Analysis'
import Faq from '../Faq/Faq'
import Interest from '../Interest/Interest'
import Review from '../Review/Review'
import Slider from '../Slider/Slider'
import Track from '../Track/Track'

const Home = () => {
    return (
        <div>
            <Slider/>
            <Track/>
            <Analysis/>
            <Review/>
            <Interest/>
            <Faq/>
        </div>
    )
}

export default Home
