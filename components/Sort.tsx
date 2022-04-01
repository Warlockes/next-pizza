import React from "react";
import { useDispatch } from "react-redux";
import { SORT_BY } from "../constants";
import { useOutsideClicker } from "../hooks/useOutsideClicker";
import { setSortType } from "../redux/ducks/filters/actionCreator";
import { ArrowDown } from "./Icons/ArrowDown";

interface SortProps {
  activeSortType: string;
}

export const Sort: React.FC<SortProps> = ({ activeSortType }) => {
  const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
  const disptach = useDispatch();
  const popupRef = React.useRef<HTMLDivElement | null>(null);
  useOutsideClicker(popupRef, () => setVisiblePopup(false));
  const activeLabel = SORT_BY.find(({ type }) => type === activeSortType).name;

  const tooglePopupVisible = () => {
    setVisiblePopup((prev) => !prev);
  };

  const handleClickItem = (sortType: string) => {
    disptach(setSortType(sortType));
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <ArrowDown visiblePopup={visiblePopup} />
        <b>Сортировка по:</b>
        <span onClick={tooglePopupVisible}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div ref={popupRef} className="sort__popup">
          <ul>
            {SORT_BY.map(({ name, type }) => (
              <li
                key={name}
                className={activeSortType === type ? "active" : ""}
                onClick={() => handleClickItem(type)}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
