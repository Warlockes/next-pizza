import ContentLoader from "react-content-loader";
import { loaderItemsCount } from "../../constants";

export const ItemsLoader: React.FC = () => {
  return (
    <>
      {loaderItemsCount.map((item) => (
        <ContentLoader
          key={item}
          uniqueKey="pizzas"
          className="pizza-item"
          speed={2}
          width={314}
          height={460}
          viewBox="0 0 280 460"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="140" cy="130" r="130" />
          <rect x="0" y="265" rx="10" ry="10" width="280" height="24" />
          <rect x="0" y="428" rx="10" ry="10" width="120" height="27" />
          <rect x="152" y="362" rx="0" ry="0" width="0" height="1" />
          <rect x="0" y="312" rx="10" ry="10" width="280" height="85" />
          <rect x="130" y="421" rx="25" ry="25" width="150" height="40" />
        </ContentLoader>
      ))}
    </>
  );
};
