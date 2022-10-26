import React, { FC } from "react";
import Place from "../../types/Place/Place";
import "./ListAddress.scss";

type ListAddressTypeProps = {
  results: Place[];
};
const ListAddress: FC<ListAddressTypeProps> = ({ results }) => {
  return (
    <div className="ListAddress">
      <h2>Адреса</h2>
      {results.map((address) => {
        return <p key={address.id}>{address.value}</p>;
      })}
    </div>
  );
};

export default ListAddress;
