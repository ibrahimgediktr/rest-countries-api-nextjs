import React from "react";
import styled from "styled-components";
import slug from 'slug'


function Card({country}) {
  

  return (
    <>
    <CardSection>
        <CardContainer>
          <CardHeader>
            <CardImage src={country.flag} />
          </CardHeader>
          <CardBody>
            <CardBodyContainer>
              <CountryName>{country.name}</CountryName>
              <CountryInfo>
                <CountryPopulation>
                  <Bold>Population:</Bold>
                  <Span>{country.population}</Span>
                </CountryPopulation>
                <CountryRegion>
                 <Bold>Region:</Bold>
                 <Span>{country.region}</Span>
                </CountryRegion>
                <CountryCapital>
                  <Bold>Capital:</Bold>
                  <Span>{country.capital}</Span>
                </CountryCapital>
              </CountryInfo>
            </CardBodyContainer>
          </CardBody>
        </CardContainer>
      </CardSection>
    </>
  );
}



export default Card;

const CardSection = styled.div`
  width: 100%;
  max-width: 265px;
  height: auto;
  box-shadow: 0px 4px 15px -3px ${(props) => props.theme.shadow};
  border-radius: 5px;
  background-color:${(props) => props.theme.input};
  @media screen and (max-width: 768px) {
    max-width: 530px;
    height: auto;
  }
  @media screen and (max-width: 576px) {
    height: auto;
  }
`;
const CardContainer = styled.div``;
const CardHeader = styled.div``;
const CardImage = styled.img`
  width: 100%;
  object-fit:cover;
  max-width:265px;
  height:160px;
  @media screen and (max-width: 768px) {
    max-width:100%;
    height:100%;
  }
`;
const CardBody = styled.div``;
const CardBodyContainer = styled.div`
  padding: 40px 25px;
  color:${(props) => props.theme.text};
`;
const CountryName = styled.div`
  font-weight: 800;
`;
const CountryInfo = styled.div`
  margin-top: 25px;
`;
const CountryPopulation = styled.div`
  display: flex;
`;
const CountryRegion = styled.div`
  display: flex;
`;
const CountryCapital = styled.div`
  display: flex;
`;
const Bold = styled.div`
  font-weight:600;
`

const Span = styled.span`
  margin-left:2px;
`
