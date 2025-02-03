import { BrowserRouter, Route, Routes } from "react-router"
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import Header from "./components/Header";
import { useState } from "react";


function App() {
  const [selectedCountry, setSelectedCountry] = useState('');

  function selectedRegion(da) {
    setSelectedCountry(da);
  }

  return (
    <>
      <div className="background h-full">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home selectedRegion={selectedRegion} />} />
            <Route path="/countryDetails" element={<CountryDetails data={selectedCountry} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
