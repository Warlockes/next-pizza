import React, { useState } from "react";

import classNames from "classnames";

export default function Categories({ categories }) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const onSelectItem = (index) => {
    setSelectedItemIndex(index);
  };

  return (
    <>
      <ul className="categories">
        <li
          onClick={() => onSelectItem(null)}
          className={classNames("categories__item", {
            active: selectedItemIndex === null,
          })}
        >
          Все
        </li>
        {categories?.map((category, index) => {
          return (
            <li
              key={`${category}_${index}`}
              className={classNames("categories__item", {
                active: selectedItemIndex === index,
              })}
              onClick={() => onSelectItem(index)}
            >
              {category}
            </li>
          );
          console.log(category);
        })}
      </ul>
    </>
  );
}
