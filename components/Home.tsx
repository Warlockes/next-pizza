import React from "react";

import { Categories } from "./Categories";
import { PizzaItem } from "./PizzaItem";
import { ItemsLoader } from "./PizzaItem/ItemsLoader";
import { Sort } from "./Sort";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectPizzasData } from "../redux/pizzas/selectors";
import { LoadingStatus } from "../redux/pizzas/types";
import { fetchPizzas } from "../redux/pizzas/asyncActions";
import { CATEGORIES } from "../constants";
import { selectFilterData } from "../redux/filter/selectors";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, loadingStatus } = useAppSelector(selectPizzasData);
  const { categoryIndex, sortType } = useAppSelector(selectFilterData);
  const activeLabel = CATEGORIES[categoryIndex];
  const isLoaded = loadingStatus === LoadingStatus.LOADED;

  React.useEffect(() => {
    dispatch(fetchPizzas({ categoryIndex, sortType }));
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
