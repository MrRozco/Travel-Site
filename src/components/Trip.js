import React from 'react'
import TripData from './TripData';



function Trip({ 
    tripTitle, TripSubtitle,
    boxOneImg, boxOneHeading, boxOneContent, 
    boxTwoImg, boxTwoHeading, boxTwoContent, 
    boxThreeImg, boxThreeHeading, boxThreeContent 
  }) {
  return (
    <div className=' mx-auto px-4 my-8 py-4 px-8' >
        <div className='text-center' >
            <h1 className='text-4xl sm:text-5xl font-bold text-black mb-2' >{tripTitle}</h1>
            <p className=' text-1xl sm:text-2xl text-black' >{TripSubtitle}</p>
        </div>
       
        <TripData
            boxOneImg={boxOneImg}
            boxOneHeading={boxOneHeading}
            boxOneContent={boxOneContent}

            boxTwoImg={boxTwoImg}
            boxTwoHeading={boxTwoHeading}
            boxTwoContent={boxTwoContent}

            boxThreeImg={boxThreeImg}
            boxThreeHeading={boxThreeHeading}
            boxThreeContent={boxThreeContent}
        />
    </div>
  )
}

export default Trip