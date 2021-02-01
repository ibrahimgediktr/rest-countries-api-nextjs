import React, { useState, useEffect } from "react";
import unfetch from "isomorphic-fetch";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

function CardDetail({ countryDetail }) {
  const [country, setCountry] = useState(countryDetail);
  useEffect(() => {
    setCountry(countryDetail);
  }, []);
  return (
    <>
      <Link href="/">
        <BackLink>
          <ArrowBack />
          <ArrowText>Back</ArrowText>
        </BackLink>
      </Link>
      <CardDetailSection>
        <CardDetailHeader>
          <CardImage src={country.flag} alt={country.name}></CardImage>
        </CardDetailHeader>
        <CardDetailBody>
          <CountryName>{country.name}</CountryName>
          <CountryInfo>
            <NativeName>
              <Bold>Native Name: </Bold>
              <Span>{country.nativeName}</Span>
            </NativeName>
            <Population>
              <Bold>Population: </Bold>
              <Span>{country.population}</Span>
            </Population>
            <Region>
              <Bold>Region: </Bold>
              <Span>{country.region}</Span>
            </Region>
            <SubRegion>
              <Bold>Sub Region: </Bold>
              <Span>{country.subregion}</Span>
            </SubRegion>
            <Capital>
              <Bold>Capital: </Bold>
              {country.capital}
            </Capital>
            <TopLevelDomain>
              <Bold>Top Level Domain: </Bold>
              {country.topLevelDomain.map((domain, index) => (
                <Span key={index}>{domain}</Span>
              ))}
            </TopLevelDomain>
            <Currencies>
              <Bold>Currencies: </Bold>
              {country.currencies.map((currency, index) => (
                <Span key={index}>{currency.name}</Span>
              ))}
            </Currencies>
            <Languages>
              <Bold>Languages: </Bold>
              {country.languages.map((language, index) => (
                <Span key={index}>{language.name}</Span>
              ))}
            </Languages>
          </CountryInfo>
          <CountryBorders>
            <Bold>Border Countries: </Bold>
            <Borders>
            {country.borders.map((border, index) => (
                <Span key={index}>{border}</Span>
            ))}
            </Borders>
          </CountryBorders>
        </CardDetailBody>
      </CardDetailSection>
    </>
  );
}

CardDetail.getInitialProps = async (context) => {
  const data = await unfetch(
    `https://restcountries.eu/rest/v2/name/${context.query.name}`
  );
  const json = await data.json();

  return {
    countryDetail: json[0],
  };
};

export default CardDetail;

const BackLink = styled.a`
  cursor:pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width:135px;
  height:40px;
  box-shadow: 0px 0px 8px 0px ${(props) => props.theme.shadow};;
  border-radius:5px;
  margin-bottom:80px;
  background:${(props) => props.theme.input};
`;

const ArrowBack = styled(BiArrowBack)`
`;

const ArrowText = styled.span`
margin-left:10px;

`

const CardDetailSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: inherit;
  }
`;
const CardDetailHeader = styled.div`
  flex: 50%;
  @media screen and (max-width: 992px) {
    flex: 100%;
  }
`;
const CardImage = styled.img`
  width: 100%;
  max-width: 560px;
  height: 400px;
  object-fit: cover;
  @media screen and (max-width: 992px) {
    width: 100%;
    height: auto;
  }
`;
const CardDetailBody = styled.div`
  flex: 50%;
  padding-left: 5%;
  @media screen and (max-width: 992px) {
    flex: 100%;
    padding-left: 0;
  }
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: auto;
  }
`;
const CountryName = styled.div`
  font-weight: 800;
  font-size: 28px;
  @media screen and (max-width: 992px) {
    margin-top: 5%;
  }
`;
const CountryInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: 35px 0 65px;
  div {
    display: flex;
  }
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
const Bold = styled.div`
  font-weight: 600;
  padding-right: 5px;
`;
const Span = styled.span``;

const NativeName = styled.div`
  ${Bold} {
    color:${(props) => props.theme.text};;
  }
`;
const Population = styled.div``;
const Region = styled.div``;
const SubRegion = styled.div``;
const Capital = styled.div``;
const TopLevelDomain = styled.div``;
const Currencies = styled.div``;
const Languages = styled.div``;

const Borders = styled.div``
const CountryBorders = styled.div`
  display: flex;
  align-items: center;
  ${Span} {
    padding: 7px 13px;
    box-shadow: 0px 0px 3px 0px ${(props) => props.theme.shadow};;
    margin-right: 10px;
    border-radius: 5px;
    background:${(props) => props.theme.input};
  }
  ${Borders}{
    display:flex;
    flex-wrap:wrap;
    @media screen and ( max-width:768px){
      margin-top:45px;
    }
  }
  @media screen and (max-width:768px){
    flex-direction:column;
    align-items:flex-start;
}

`;
