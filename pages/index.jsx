import React from "react";

import { Categories, Header, PizzaItem, Sort } from "../components";

export default function Index() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header />
          <div className="content">
            <div className="content__top">
              <Categories
                categories={[
                  "Мясная",
                  "Вегетарианская",
                  "Гриль",
                  "Острая",
                  "Закрытая",
                ]}
              />
              <Sort items={["популярности", "цене", "алфавиту"]} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaItem />
              <PizzaItem />
              <PizzaItem />
              <PizzaItem />
              <PizzaItem />
              <PizzaItem />
              <PizzaItem />
              <PizzaItem />
              <PizzaItem />
              <PizzaItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
