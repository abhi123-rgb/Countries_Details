import React from 'react'
import { Link } from 'react-router'

const CountryDetails = ({ data }) => {

  let currency;
  for (let i in data.currencies) {
    currency = data.currencies[i].name;
  }

  return (
    <>
      <section className='w-[90%] pt-4 m-auto h-svh'>
        <Link to="/" className='px-6 py-2 bg-white my-4 shadow-md rounded-md text-base inline-flex items-center '><ion-icon name="arrow-back-outline" ></ion-icon>Back</Link>
        <div className='py-10 min-[625px]:gap-10 min-[950px]:flex min-[1200px]:gap-25 min-[950px]:items-center'>
          <div className='min-[620px]:flex-1'>
            <img src={data.flag} alt="" className=' py-4 ' />
          </div>

          <div className='flex-1'>
            <div className='gap-10  min-[620px]:flex min-[1200px]:gap-20 min-[620px]:items-center'>
              <div className='py-2'>
                <h1 className='font-bold text-xl py-2'>{data.name}</h1>
                <p className='py-1 font-light'><span className='font-medium'>Native Name:</span> {data.nativeName} </p>
                <p className='py-1 font-light'><span className='font-medium'>Population:</span> {data.population} </p>
                <p className='py-1 font-light'><span className='font-medium'>Region:</span> {data.region} </p>
                <p className='py-1 font-light'><span className='font-medium'>Sub Region:</span> {data.subregion} </p>
                <p className='py-1 font-light'><span className='font-medium'>Capital:</span> {data.capital} </p>
              </div>

              <div className='py-3'>
                <p className='py-1 font-light'><span className='font-medium'>Top Level Domain:</span> {data.topLevelDomain}</p>
                <p className='py-1 font-light'><span className='font-medium'>Currencies:</span>  {currency}</p>
                <p className='py-1 font-light'><span className='font-medium'>Languages:</span> {data.languages && data.languages.map(lang => lang.name).join(',') || "N/A"} </p>
              </div>
            </div>
            <div className='min-[920px]:flex min-[620px]:items-center'>
              <h2 className='font-bold'> Border Countries: </h2>
              <div className='flex w-[100%] min-[620px]:w-[70%]'>
                {data.borders ?
                  data.borders.map((bc, i) =>
                    i < 3 ?
                      <p key={bc} className='flex-1 text-center py-2 mx-1 my-6 shadow-md'>{bc}</p>
                      : null)
                  : <p> N/A </p>}
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default CountryDetails