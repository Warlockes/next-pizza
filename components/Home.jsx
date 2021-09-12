import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Categories,
  Header,
  ItemsLoader,
  PizzaItem,
  Sort,
} from "../components";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const categories = ["Мясная", "Вегетарианская", "Гриль", "Острая", "Акции"];

const sortBy = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "name" },
];

function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  // дополнительные ререндеры из-за useSelector filters
  // мемоизация - решение?
  // чекнуть hooks react-redux
  const { categoryIndex, sortType } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(categoryIndex, sortType));
  }, [categoryIndex, sortType]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((item) => {
    dispatch(setSortBy(item));
  });

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header />
          <div className="content">
            <div className="content__top">
              <Categories
                activeCategoryIndex={categoryIndex}
                categories={categories}
                onClick={onSelectCategory}
              />
              <Sort
                activeSortType={sortType}
                sortBy={sortBy}
                onClick={onSelectSortType}
              />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {isLoaded ? (
                items?.map((item) => {
                  return <PizzaItem key={item.id} {...item} />;
                })
              ) : (
                <ItemsLoader />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
