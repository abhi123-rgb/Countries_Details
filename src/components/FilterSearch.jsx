import React from 'react'

const FilterSearch = ({onchange, filterRegion}) => {
  return (
   <select value={filterRegion}  onChange={onchange} className='px-4 py-3 bg-white shadow-md rounded-md text-base'>
    <option value="select option" hidden >select option</option>
    <option value="Africa">Africa</option>
    <option value="Americas">Americas</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
    <option value="Polar">Polar</option>
   </select>
  )
}

export default FilterSearch