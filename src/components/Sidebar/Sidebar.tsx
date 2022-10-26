import React from "react";

import { menu } from "../../constants";
import ComplexItemMenu from "../ComplexItemMenu/ComplexItemMenu";
import SimpleItemMenu from "../SimpleItemMenu/SimpleItemMenu";

import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <h2>Меню</h2>
      <div className="Menu">
        {menu.map((item) => {
          return !item.children ? (
            <SimpleItemMenu key={item.id} options={item} />
          ) : (
            <ComplexItemMenu key={item.id} options={item} />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
