import React from "react";
import styled from "styled-components";

const Header = (props) => {
  const { date, changeHandler } = props;

  const HeaderDiv = styled.div`
    border: 4px solid green;
    width: 200px;
    height: 200px;
  `;
  return (
    <HeaderDiv>
      <img
        src="https://cdn.icon-icons.com/icons2/2699/PNG/512/nasa_logo_icon_170926.png"
        alt="sa"
      />
      <input type="date" name="tarih" value={date} onChange={changeHandler} />
    </HeaderDiv>
  );
};

export default Header;
