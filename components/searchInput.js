import React, { useState } from "react";
import styled from "styled-components";

function SearchInput({ handleSearch }) {
  const [searchCountry, setSearchCountry] = useState("");

  const handleType = (e) => {
    setSearchCountry(e.target.value);
    handleSearch(searchCountry);
  };


  return (
    <InputSection>
      <Input
        type="text"
        placeholder="Search for a country"
        onChange={(e) => handleType(e)}
        value={searchCountry}
      />
    </InputSection>
    
  );
}

export default SearchInput;

const InputSection = styled.div`
  max-width: 470px;
  width: 100%;
  margin-bottom: 45px;
  @media screen and (max-width:992px){
    margin-bottom: 20px;

  }
`;
const Input = styled.input`
  width: 100%;
  height: 55px;
  box-shadow: 0px 0px 8px 0px ${(props) => props.theme.shadow};
  border: none;
  padding-left: 15px;
  border-radius: 5px;
  background-color:${(props) => props.theme.input};
  color:${(props) => props.theme.text};
`;
