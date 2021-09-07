import React from "react";
import { useSelector } from "react-redux";

import { Categories, Header, PizzaItem, Sort } from "../components";

function Home() {
  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });

  const categories = [
    "Мясная",
    "Вегетарианская",
    "Гриль",
    "Острая",
    "Закрытая",
  ];

  const sortBy = [
    { name: "популярности", type: "popular" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "alphabet" },
  ];

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header />
          <div className="content">
            <div className="content__top">
              <Categories categories={categories} />
              <Sort sortBy={sortBy} />
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
