import React, { useState } from "react";
import styled from "styled-components";

const options = [
  {
    name: "Filter a region",
    value: "All",
  },
  {
    name: "Europe",
    value: "Europe",
  },
  {
    name: "Asia",
    value: "Asia",
  },
  {
    name: "Africa",
    value: "Africa",
  },
  {
    name: "America",
    value: "Americas",
  },
  {
    name: "Oceania",
    value: "Oceania",
  },
];

function FilterSelect({ handleSelect }) {
  const [filter, setFilter] = useState("");
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);



  return (
    <SelectSection>
      <Select onClick={handleClick}>
        { filter ? <p>{filter}</p> : <p>Filter by region</p>}
        <SelectList click={click}>
          {options.map((option, index) => {
            return (
              <SelectListItem
                key={index}
                onClick={() => {
                  handleSelect(`${option.value}`);
                  setFilter(`${option.value}`)
                }}
              >
                {option.name}
              </SelectListItem>
            );
          })}
        </SelectList>
      </Select>
    </SelectSection>
  );
}

export default FilterSelect;

const SelectSection = styled.div`
  max-width: 200px;
  width: 100%;
  min-height: 55px;
  height: 100%;
  background-color: ${(props) => props.theme.input};
  box-shadow: 0px 0px 8px 0px ${(props) => props.theme.shadow};
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  border-radius: 5px;
  position: relative;
`;

const Select = styled.div`
cursor:pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 15px;
  font-size: 14px;
`;

const SelectList = styled.div`
  display: ${({ click }) => (click ? "flex" : "none")};
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  position: absolute;
  width: 100%;
  height: 250px;
  left: 0;
  right: 0;
  top: 110%;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.input};
  box-shadow: 0px 0px 8px 0px ${(props) => props.theme.shadow};
  padding: 15px 0px 15px 15px;
`;
const SelectListItem = styled.div`
  background: ${(props) => props.theme.input};
  cursor: pointer;
  margin: 3px 0;
  flex-direction: column;
  height: 100%;
`;

const Span = styled.span``;
