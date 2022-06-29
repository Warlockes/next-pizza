import { Header } from "./Header";

export default function MainLayout({ children }) {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        {children}
      </div>
    </div>
  );
}
