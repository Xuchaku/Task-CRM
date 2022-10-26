import React, { ChangeEvent, FC } from "react";

import "./InputText.scss";

type InputTextPropsType = {
  placeholder: string;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const InputText: FC<InputTextPropsType> = ({
  placeholder,
  search,
  setSearch,
}) => {
  function changeSearchHandler(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <input
      className="InputText"
      value={search}
      type="text"
      onChange={changeSearchHandler}
      placeholder={placeholder}
    />
  );
};

export default InputText;
