import { Outlet } from "react-router-dom";
import "./MainLayout.scss";

export default function MainLayout() {
  return (
    <>
      <div className="layout">
        <header>
          <h1>Online Store</h1>
        </header>
        <div className="layout-body">
          <aside>
            <h2>Filters</h2>
            <ul>
              <li>Price</li>
              <li>Category</li>
            </ul>
          </aside>
          <main>
            <Outlet />
          </main>
        </div>
        <footer>© 2025 Online Store. All rights reserved.</footer>
      </div>
    </>
  );
}
