import React from "react";
import { GetStaticProps, NextPage } from "next";

import { Pizza } from "../../redux/pizzas/types";
import { Api } from "../../api";
import { Button } from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectCartData } from "../../redux/cart/selectors";
import { addItem, incrementItem } from "../../redux/cart/slice";
import { AddedItem } from "../../redux/cart/types";
import { useRouter } from "next/router";
import { Routes } from "../../constants";

interface PizzaPageProps {
  pizza: Pizza;
}

const PizzaPage: NextPage<PizzaPageProps> = ({ pizza }) => {
  const [selectedTypeIndex, setSelectedTypeIndex] = React.useState<number>(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = React.useState<number>(0);
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const { addedItems } = useAppSelector(selectCartData);
  const { imageUrl, name, prices, sizes, types, id } = pizza;
  const renderedTypes = Object.values(types);
  const doughTypes = Object.keys(types);
  const selectedDoughType = doughTypes[selectedTypeIndex];
  const selectedDoughTypePrices: number[] = prices[selectedDoughType];
  const selectedPizzaPrice = selectedDoughTypePrices[selectedSizeIndex];
  const addedPizzaId = `${selectedTypeIndex}${selectedSizeIndex}${id}`;
  const isAddedPizza = addedItems.find((item) => item.id === addedPizzaId);

  const handleSelectPizzaType = (index: number) => {
    setSelectedTypeIndex(index);
  };

  const handleSelectPizzaSize = (index: number) => {
    setSelectedSizeIndex(index);
  };

  const handleAddPizza = () => {
    if (isAddedPizza) {
      dispatch(incrementItem(addedPizzaId));
      return;
    }

    const addedPizza: AddedItem = {
      id: addedPizzaId,
      count: 1,
      pizza: {
        price: selectedPizzaPrice,
        size: sizes[selectedSizeIndex],
        type: types[selectedDoughType],
        name,
        imageUrl,
      },
    };

    dispatch(addItem(addedPizza));
    push(Routes.Home);
  };

  return (
    <>
      <div className="pizza-page__content">
        <div className="pizza-page__left-block left-block">
          <div className="left-block__image-block">
            <img src={imageUrl} alt="pizza-image" />
          </div>
          <div className="left-block__title-block title-block">
            <p className="title-block__title">{name}</p>
            <p className="title-block__weight">455 гр.</p>
          </div>
        </div>
        <div className="pizza-page__right-block right-block">
          <div className="right-block__selector">
            <ul>
              {renderedTypes.map((type, index) => (
                <li
                  key={type}
                  className={selectedTypeIndex === index ? "active" : ""}
                  onClick={() => handleSelectPizzaType(index)}
                >
                  {type}
                </li>
              ))}
            </ul>
            <ul>
              {sizes?.map((size, index) => (
                <li
                  key={size}
                  className={selectedSizeIndex === index ? "active" : ""}
                  onClick={() => handleSelectPizzaSize(index)}
                >{`${size} см.`}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="pizza-page__bottom-block">
        <Button className="button_cart" onClick={handleAddPizza}>
          <span>В корзину</span>
          <div className="button__delimiter" />
          <span>{selectedPizzaPrice} руб.</span>
        </Button>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  try {
    const pizzas = await Api.pizza.fetchAll();

    const paths = pizzas.map((pizza) => ({
      params: { id: pizza.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.warn("Fetch pizzas error", error);
    return {
      paths: null,
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { id } = params;
    const data = await Api.pizza.fetchPizzaById(id as string);

    return {
      props: {
        pizza: data,
      },
    };
  } catch (error) {
    console.warn("Fetch pizza error", error);

    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default PizzaPage;
