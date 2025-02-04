import React from 'react'
import { Link } from 'react-router'

const CountriesCard = ({selectedRegion, data }) => {

  return (
    <Link to="countryDetails" onClick={() =>{selectedRegion(data)}}>
      <div className='rounded-md gap-4 bg-white shadow-md min-w-[240px] '>
        <img src={data.flags.svg} alt={data.name} className='rounded-tl-md rounded-tr-md aspect-3/2 object-cover' />
        <div className='p-6 pb-10'>
          <h2 className='font-bold mb-4'>{data.name}</h2>
          <p><b>Population:</b> {data.population}</p>
          <p><b>Region:</b> {data.region ? data.region : 'N/A'}</p>
          <p><b>Capital:</b> {data.capital ? data.capital : 'N/A'}</p>
        </div>
      </div>
    </Link>
  )
}

export default CountriesCard