import React, { useState } from "react";

import ListAddress from "../../components/ListAddress/ListAddress";
import Search from "../../components/Search/Search";
import { POINT_API } from "../../constants";
import useFetching from "../../hooks/useFetching";
import Loader from "../../UI/Loader/Loader";

import "./Address.scss";

const Address = () => {
  const [search, setSearch] = useState<string>("");
  const { loading, error, results, fetchData } = useFetching(POINT_API, search);
  function startSearchHandler() {
    if (search.length > 3) {
      fetchData();
    }
  }
  return (
    <div className="Address">
      <h2>Поиск адресов</h2>
      <h3>Введите интересующий вас адрес</h3>
      <Search
        startSearchHandler={startSearchHandler}
        search={search}
        setSearch={setSearch}
      ></Search>
      {loading ? (
        <Loader></Loader>
      ) : (
        results.length > 0 && <ListAddress results={results}></ListAddress>
      )}
    </div>
  );
};

export default Address;
