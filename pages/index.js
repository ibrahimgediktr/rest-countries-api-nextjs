import Card from "../components/card";
import unfetch from "isomorphic-unfetch";
import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "styled-components";
import SearchInput from "../components/searchInput";
import FilterSelect from "../components/filterSelect";
import slug from 'slug'

function Home({ countryList }) {
  const [countries, setCountries] = useState(countryList);
  const [searchCountry, setSearchCountry] = useState();
  const [selectCountry, setSelectCountry] = useState();

  useEffect(() => {
    if (searchCountry) setCountries(resultsSearch);
  }, [searchCountry]);

  useEffect(() => {
    if (selectCountry) setCountries(resultsSelect);
  }, [selectCountry]);

  const handleSearch = (search) => {
    setSearchCountry(search);
  };

  const handleSelect = (select) => {
    
    if(select === 'All'){
      setCountries(countryList);
    } else {
      setSelectCountry(select);
    }
  }

  const resultsSearch = countryList.filter((country) =>
    country.name.toLowerCase().includes(searchCountry)
  );

  const resultsSelect = countryList.filter((country) =>
    country.region === selectCountry
  );


  return (
      <HomeContainer>
      <InputContainer>
        <SearchInput 
        handleSearch={handleSearch} />
        <FilterSelect
        handleSelect={handleSelect}

        />
      </InputContainer>
      <CountriesGridContainer>
        {countries.map((country, index) => (
          <Link
            href="/country/[alpha]"
            as={`/country/${country.alpha3Code}`}
            key={index}
          >
            <a>
              <Card country={country} />
            </a>
          </Link>
        ))}
      </CountriesGridContainer>
    </HomeContainer>
  );
}
export async function getStaticProps() {
  const data = await unfetch("https://restcountries.eu/rest/v2/all");
  const countryList = await data.json();

  return {
    props: {
      countryList
    }
  };
};

export default Home;

const HomeContainer = styled.div`

`;

const CountriesGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 75px;
  justify-items: center;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width:992px){
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    margin-bottom:40px;
  }
`;
