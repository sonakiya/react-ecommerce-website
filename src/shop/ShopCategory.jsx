import React from "react";
import Data from "../products.json"

const ShopCategory = ({
  filterItem,
  setItem,
  menuItems,
  setProducts,
  selectCategory,
}) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All</h5>
      </div>
      <div>
        <button onClick={()=>setProducts(Data)} className={`m-2 ${selectCategory === "All" ? "bg-warning" : ""}`}>All</button>
        {menuItems.map((Val, id) => {
          return (
            <button
              className={`m-2 ${selectCategory === Val ? "bg-warning" : ""}`}
              key={id}
              onClick={()=> filterItem(Val)}
            >
              {Val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ShopCategory;
