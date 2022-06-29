import classNames from "classnames";
import { CATEGORIES } from "../constants";
import { setCategoryIndex } from "../redux/filter/slice";
import { useAppDispatch } from "../redux/hooks";

interface CategoriesProps {
  activeCategoryIndex: number | null;
}

export const Categories: React.FC<CategoriesProps> = ({
  activeCategoryIndex,
}) => {
  const dispath = useAppDispatch();

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
