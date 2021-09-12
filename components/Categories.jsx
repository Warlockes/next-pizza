import { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Categories = memo(function Categories({
  activeCategoryIndex,
  categories,
  onClick,
}) {
  return (
    <>
      <ul className="categories">
        <li
          onClick={() => onClick(null)}
          className={classNames("categories__item", {
            active: activeCategoryIndex === null,
          })}
        >
          Все
        </li>
        {categories?.map((category, index) => {
          return (
            <li
              key={`${category}_${index}`}
              className={classNames("categories__item", {
                active: activeCategoryIndex === index,
              })}
              onClick={() => onClick(index)}
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
  activeCategoryIndex: PropTypes.number,
  categories: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  activeCategoryIndex: null,
  categories: [],
};

export default Categories;
