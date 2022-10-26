import React from "react";
import Search from "../../components/Search/Search";
import "./Address.scss";
const Address = () => {
  return (
    <div className="Address">
      <h2>Поиск адресов</h2>
      <h3>Введите интересующий вас адрес</h3>
      <Search></Search>
    </div>
  );
};

export default Address;
