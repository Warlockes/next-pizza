import React from "react";
import { SORT_BY } from "../constants";
import { useOutsideClicker } from "../hooks/useOutsideClicker";
import { setSort } from "../redux/filter/slice";
import { SortParams } from "../redux/filter/types";
import { useAppDispatch } from "../redux/hooks";
import { ArrowDown } from "./Icons/ArrowDown";

interface SortingProps {
  sortParams: SortParams;
}

export const Sorting: React.FC<SortingProps> = ({ sortParams }) => {
  const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
  const disptach = useAppDispatch();
  const popupRef = React.useRef<HTMLDivElement>();
  useOutsideClicker(popupRef, () => setVisiblePopup(false));
  const activeSort = SORT_BY.find(({ id }) => id === sortParams.id);

  const handleClickItem = (sort: SortParams) => {
    disptach(setSort(sort));
    setVisiblePopup(false);
  };

  const handleOpenPopup = () => {
    setVisiblePopup(true);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <ArrowDown visiblePopup={visiblePopup} />
        <b>Сортировка по:</b>
        <span onClick={handleOpenPopup}>{activeSort.name}</span>
      </div>
      {visiblePopup && (
        <div ref={popupRef} className="sort__popup">
          <ul>
            {SORT_BY.map((sort) => {
              const { id, name } = sort;

              return (
                <li
                  key={id}
                  className={id === sortParams.id ? "active" : ""}
                  onClick={() => handleClickItem({ ...sort })}
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
