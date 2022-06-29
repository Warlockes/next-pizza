import { useRouter } from "next/router";
import { Button } from "../components/Button";
import { Routes } from "../constants";

//TODO
// переписать кнопку

export default function Custom404() {
  const { replace } = useRouter();

  const handleClickGoHome = () => {
    replace(Routes.Home);
  };

  return (
    <div className="not-found-page__container">
      <span>😕</span>
      <h1>Ничего не найдено</h1>
      <p className="not-found-page__description">
        К сожалению данная страница отсутствует в нашем интернет-магазине
      </p>
      <Button onClick={handleClickGoHome} className="not-found-page__button">
        Домой
      </Button>
    </div>
  );
}
