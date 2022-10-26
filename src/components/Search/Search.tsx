import React from "react";
import "./Search.scss";
import InputText from "../../UI/InputText/InputText";
import Button from "../../UI/Button/Button";
import { ReactComponent as Lens } from "../../assets/svgs/lens.svg";
const Search = () => {
  return (
    <div className="Search">
      <InputText placeholder="Введите интересующий вас адрес"></InputText>
      <Button icon={Lens} text="Поиск"></Button>
    </div>
  );
};

export default Search;
