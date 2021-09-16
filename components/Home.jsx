import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Categories, ItemsLoader, PizzaItem, Sort } from "../components";
import {
  setCategory,
  setSortBy,
  fetchPizzas,
  addPizzaToCart,
} from "../redux/actions";

const categories = ["Мясные", "Вегетарианские", "Гриль", "Острые", "Акционные"];

const sortBy = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "name" },
];

function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const { categoryIndex, sortType } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(categoryIndex, sortType));
  }, [categoryIndex, sortType]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const onAddPizzaToCart = useCallback((pizza) => {
    dispatch(addPizzaToCart(pizza));
  }, []);

  const activeLabel = categories[categoryIndex];

  return (
    <>
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
        <h2 className="content__title">
          {activeLabel ? `${activeLabel} пиццы` : "Все пиццы"}
        </h2>
        <div className="content__items">
          {isLoaded ? (
            items?.map((item) => {
              return (
                <PizzaItem
                  key={item.id}
                  onAddToCart={onAddPizzaToCart}
                  {...item}
                />
              );
            })
          ) : (
            <ItemsLoader />
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
