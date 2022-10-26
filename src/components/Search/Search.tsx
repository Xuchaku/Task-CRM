import React, { FC } from "react";
import "./Search.scss";
import InputText from "../../UI/InputText/InputText";
import Button from "../../UI/Button/Button";
import { ReactComponent as Lens } from "../../assets/svgs/lens.svg";

type SearchTypeProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  startSearchHandler: () => void;
};
const Search: FC<SearchTypeProps> = ({
  search,
  setSearch,
  startSearchHandler,
}) => {
  return (
    <div className="Search">
      <InputText
        search={search}
        setSearch={setSearch}
        placeholder="Введите интересующий вас адрес"
      ></InputText>
      <Button onClick={startSearchHandler} icon={Lens} text="Поиск"></Button>
    </div>
  );
};

export default Search;
