import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Categories, Header, PizzaItem, Sort } from "../components";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const categories = ["Мясная", "Вегетарианская", "Гриль", "Острая", "Закрытая"];

const sortBy = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const category = useSelector(({ filters }) => filters.category);
  const sort = useSelector(({ filters }) => filters.sortBy);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [category, sort]);

  const onClickCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onClickSort = useCallback((type) => {
    dispatch(setSortBy(type));
  });

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header />
          <div className="content">
            <div className="content__top">
              <Categories categories={categories} onClick={onClickCategory} />
              <Sort sortBy={sortBy} onClick={onClickSort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {items?.map((item) => (
                <PizzaItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
