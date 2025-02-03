import React from 'react'
import { memo } from 'react'

const SearchBar = ({ onChange, search }) => {
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={onChange}
        placeholder='Search for a country...'
        className='px-4 py-3 max-w-full w-[400px] text-sm bg-white rounded-md my-5 shadow-md md:my-5 '
      />
    </>
  )
}

export default memo(SearchBar)