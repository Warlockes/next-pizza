import { useState, memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Categories = memo(function Categories({ categories, onClick }) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const onSelect = (index) => {
    setSelectedItemIndex(index);
    onClick(index);
  };

  return (
    <>
      <ul className="categories">
        <li
          onClick={() => onSelect(null)}
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
              onClick={() => onSelect(index)}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </>
  );
});

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

Categories.defaultProps = {
  categories: [],
};

export default Categories;
