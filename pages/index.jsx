import axios from "axios";

import { Home } from "../components";

function Index() {
  return <Home />;
}

export async function getStaticProps() {
  const response = await axios.get("http://localhost:3001/pizzas");
  return {
    props: {
      initialReduxState: {
        pizzas: {
          items: response.data,
        },
      },
    },
  };
}

export default Index;
