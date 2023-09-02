import React from "react";

const Header = (props) => {
  const { date, changeHandler } = props;
  return (
    <header>
      <img
        src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
        alt="sa"
      />
      <input type="date" name="tarih" value={date} onChange={changeHandler} />
    </header>
  );
};

export default Header;
