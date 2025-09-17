import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/AuthSlice";
import "./MainLayout.scss";

function MainLayout() {
  const { user } = useSelector((state) => state.auth) || {};
  const dispatch = useDispatch();

  return (
    <div className="layout">
      <header>
        <h1>Online Store</h1>
        <nav>
          <Link to="/">Home</Link> |<Link to="products">Products</Link> |{" "}
          <Link to="cart">Cart</Link> |
          <div className="auth-info">
            {user ? (
              <>
                <span>Hello, {user.email}</span>
                <button onClick={() => dispatch(logout())}>Logout</button>
                {user.email === "admin@example.com" && (
                  <Link to="/admin">Admin Panel</Link>
                )}
              </>
            ) : (
              <Link className="login-btn" to="auth">
                Login / Register
              </Link>
            )}
          </div>
        </nav>
      </header>
      <div className="layout-body">
        <main>
          <Outlet />
        </main>
      </div>
      <footer>© 2025 Online Store. All rights reserved.</footer>
    </div>
  );
}

export default MainLayout;
