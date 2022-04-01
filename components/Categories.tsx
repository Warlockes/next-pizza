import classNames from "classnames";
import { useDispatch } from "react-redux";
import { CATEGORIES } from "../constants";
import { setCategoryIndex } from "../redux/ducks/filters/actionCreator";

interface CategoriesProps {
  activeCategoryIndex: number | null;
}

export const Categories: React.FC<CategoriesProps> = ({
  activeCategoryIndex,
}) => {
  const dispath = useDispatch();

  const handleClickItem = (index: number | null) => {
    dispath(setCategoryIndex(index));
  };

  return (
    <ul className="categories">
      <li
        onClick={() => handleClickItem(null)}
        className={classNames("categories__item", {
          active: activeCategoryIndex === null,
        })}
      >
        Все
      </li>
      {CATEGORIES.map((category, index) => (
        <li
          key={`${category}_${index}`}
          className={classNames("categories__item", {
            active: activeCategoryIndex === index,
          })}
          onClick={() => handleClickItem(index)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};
