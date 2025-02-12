import React, { useEffect, useState } from 'react'
import datas from '../../rest-countries-api-with-color-theme-switcher-master/data.json'
import SearchBar from '../components/SearchBar'
import CountriesCard from '../components/CountriesCard'
import FilterSearch from '../components/FilterSearch'
import useDebounce from '../hooks/useDebounce'

const Home = ({ selectedRegion }) => {
  const [record, setRecord] = useState([]);
  const [search, setSearch] = useState('');
  const [filterRegion, setFilterRegion] = useState('');
  const debouncedSearch = useDebounce(search);

  function Search(e) {
    setSearch(e.target.value);
  }

  function filterSearch(e) {
    setFilterRegion(e.target.value);
  }

  useEffect(() => {
    const result = debouncedSearch ? datas.filter((data) => 
      data.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    ) : filterRegion ? datas.filter((data) =>
      data.region == filterRegion
    ) : datas;

    setRecord(result)
  }, [debouncedSearch, filterRegion])


  return (
    <>
      <main className='w-[90%] max-w-[1100px] m-auto'>
        <div className='flex justify-between items-center py-2 max-[620px]:flex-col max-[620px]:mb-8'>
          <SearchBar onChange={Search} search={search} />
          <FilterSearch onchange={filterSearch} filterRegion={filterRegion} />
        </div>
        <div className='mt-4 grid grid-cols-1 gap-8 min-[620px]:grid-cols-2 min-[920px]:grid-cols-3 min-[1200px]:grid-cols-4 '>
          {record != '' ? record.map((data) =>
            <CountriesCard key={data.name} selectedRegion={selectedRegion} data={data} />
          ) : (<p className='text-xl'>"No Countries Found"</p>)}
        </div>
      </main>
    </>
  )
}

export default Home