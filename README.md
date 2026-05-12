# Online Store with React + Redux Toolkit

## Project Description

This application is a minimal online store built with React + Redux Toolkit.
Features include:

- User registration and authorization.
- Storing user and cart data in localStorage.
- Main page with products.
- Adding/removing products from the cart.
- Admin panel for adding new products.
- Responsive layout (with media queries support).

---

## Technologies Used

- **React** (components, hooks)
- **React Router v6** (routing)
- **Redux Toolkit** (global state)
- **SCSS** (styling with nesting support)
- **localStorage** (storing products, cart, users)

---

## Project Structure

```
src/
   app/
      App.jsx # Application Routing
        store/
           store.js
   components/ # Reusable Components
        filter/
           Filter.jsx
        pagination/
           Pagination.jsx
           Pagination.scss
        private-route/
           PrivateRoute.jsx
        product-card/
           ProductCard.jsx
           ProductCard.scss
        sort/
           Sort.jsx
   features/ # Redux Slices
        admin-slice/
           admin-slice.js
        auth-slice/
           auth-slice.js
        cart-slice/
           cart-slice.js
        products-slice/
           products-slice.js
   layouts/ # General page layouts
           MainLayout.jsx
           MainLayout.scss
   pages/ # Main pages
        admin-page/
           AdminPage.jsx
           AdminPage.scss
        auth-page/
           Auth.jsx
           Auth.scss
           AuthForm.scss
        cart-page/
           CartPage.jsx
           CartPage.scss
        home-page/
           Home.jsx
           Home.scss
        login-page/
            LoginPage.jsx
            LoginPage.scss
        product-details-page/
            PeoductDetails.jsx
            PeoductDetails.scss
        products-page/
            ProductsPage.jsx
            ProductsPage.scss
        register-page/
            RegisterPage.jsx
   styles/
            reset.scss (normalize)
main.jsx # Entry Point

```

---

## Authorization

- **Register**: Saves the user (email + password) to `localStorage`.
- **Authorize**: Verifies the entered data against the saved data.
- **Logout**: Removes the user from `localStorage`.
- **Admin Panel** is only accessible to `admin@example.com`, password "admin1", or will be registered with `admin@example.com`.

---

## Redux Slices

### AuthSlice

- `register(email, password)` — Register and save to `localStorage`.
- `login(email, password)` — Log the user in.
- `logout()` — Log out.
- `clearError()` — clear errors.

### ProductsSlice

- `addProduct(product)` — add a product (admin only).
- `removeProduct(id)` — delete a product.
- Products are stored in `localStorage`.

### CartSlice

- `addToCart(product)` — add a product.
- `removeFromCart(id)` — delete a product.
- `decreaseQuantity(id)` — decrease quantity.
- `clearCart()` — clear the cart.
- The cart is synced with `localStorage`.

---

## Routing

- `/` — main page with a product list.
- `/products` — product page
- `/products/:id` — product page, id dynamically determined from query parameters
- `/cart` — cart.
- `/auth/login` — login page.
- `/auth/register` — registration.
- `/admin` — admin panel (**only for [admin@example.com]**).

---

## Styling

- Nested SCSS is used.
- Each component and page has its own `.scss`.
- Header, footer styles, and media queries are defined in `MainLayout.scss`.

---

## Next Steps

- Tests (Jest + React Testing Library).

---

## Running a project

```bash
# Installing dependencies
npm install

# Starting the dev server
npm run dev

# Building a project
npm run build
```
