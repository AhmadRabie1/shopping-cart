import React from 'react'
import { allProducts } from './assets/ahmad'
import Cartitem from './components/Cartitem'

const App = () => {
  return (
    <div className='grid place-items-center py-20'>
      <h1 className='text-5xl italic text-gray-500 mb-16'>
        Trend Alerts: Must-Have Outfits of the Season
      </h1>
      <div className='grid grid-cols-3 place-items-start gap-10'>
        {allProducts?.map((item) => {
          return <Cartitem key={item.id} item={item}/>
        })}
      </div>
    </div>
  )
}

export default App