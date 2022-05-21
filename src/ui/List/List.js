import React from "react";
import  EachItem  from "../EachItem";

const List = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <EachItem item={item} key={item.id} />
      ))}
    </>
  );
};

export default List;
