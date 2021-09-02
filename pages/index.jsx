import React, { useEffect, useState } from "react";

import axios from "axios";

import { Categories, Header, PizzaItem, Sort } from "../components";

function Index() {
  const [pizzaItems, setPizzaItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:30001/pizzas").then(({ data }) => {
      setPizzaItems(data);
    });
  }, []);

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
              {pizzaItems?.map((item) => (
                <PizzaItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
