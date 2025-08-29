import { Outlet } from "react-router-dom";
import "./MainLayout.scss";

export default function MainLayout() {
  return (
    <>
      <div className="layout">
        <header>Header</header>
        <div className="layout-body">
          <aside>Filters</aside>
          <main>
            <Outlet />
          </main>
        </div>
        <footer>Footer</footer>
      </div>
    </>
  );
}
