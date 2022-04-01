import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Categories } from "./Categories";
import { PizzaItem } from "./PizzaItem";
import { ItemsLoader } from "./PizzaItem/ItemsLoader";
import { Sort } from "./Sort";
import { CATEGORIES } from "../constants";
import { selectPizzasState } from "../redux/ducks/pizzas/selectors";
import { LoadingStatus } from "../redux/ducks/pizzas/state";
import { selectFiltersState } from "../redux/ducks/filters/selectors";
import { fetchPizzas } from "../redux/ducks/pizzas/actionCreator";

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { items, loadingStatus } = useSelector(selectPizzasState);
  const { categoryIndex, sortType } = useSelector(selectFiltersState);
  const activeLabel = CATEGORIES[categoryIndex];
  const isLoaded = loadingStatus === LoadingStatus.LOADED;

  React.useEffect(() => {
    dispatch(fetchPizzas(categoryIndex, sortType));
  }, [categoryIndex, sortType]);

  return (
    <div className="content">
      <div className="content__top">
        <Categories activeCategoryIndex={categoryIndex} />
        <Sort activeSortType={sortType} />
      </div>
      <h2 className="content__title">
        {activeLabel ? `${activeLabel} пиццы` : "Все пиццы"}
      </h2>
      <div className="content__items">
        {isLoaded ? (
          <>
            {items.map((item) => (
              <PizzaItem key={item.id} item={item} />
            ))}
          </>
        ) : (
          <ItemsLoader />
        )}
      </div>
    </div>
  );
};
