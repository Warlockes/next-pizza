import React from "react";
import { NextPage } from "next";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectPizzasData } from "../redux/pizzas/selectors";
import { LoadingStatus } from "../redux/pizzas/types";
import { fetchPizzas } from "../redux/pizzas/asyncActions";
import { CATEGORIES } from "../constants";
import { selectFilterData } from "../redux/filter/selectors";
import { Categories } from "../components/Categories";
import { Sorting } from "../components/Sorting";
import { PizzaItem } from "../components/PizzaItem";
import { ItemsLoader } from "../components/PizzaItem/ItemsLoader";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const { items, loadingStatus } = useAppSelector(selectPizzasData);
  const { categoryIndex, sort } = useAppSelector(selectFilterData);
  const activeLabel = CATEGORIES[categoryIndex];
  const isLoaded = loadingStatus === LoadingStatus.LOADED;

  React.useEffect(() => {
    dispatch(fetchPizzas({ categoryIndex, sort }));
  }, [categoryIndex, sort]);

  return (
    <div className="content">
      <div className="content__top">
        <Categories activeCategoryIndex={categoryIndex} />
        <Sorting sortParams={sort} />
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

export default Home;
