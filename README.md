# Интернет-магазин на React + Redux Toolkit

## Описание проекта

Приложение — это минимальный интернет-магазин, построенный на **React + Redux Toolkit**.
Функционал включает:

- Регистрация и авторизация пользователей.
- Хранение данных пользователей и корзины в **localStorage**.
- Главная страница с товарами.
- Добавление/удаление товаров из корзины.
- Админ-панель для добавления новых товаров.
- Адаптивная верстка (с поддержкой медиазапросов).

---

## Используемые технологии

- **React** (компоненты, хуки)
- **React Router v6** (роутинг)
- **Redux Toolkit** (глобальное состояние)
- **SCSS** (стилизация с поддержкой вложенности)
- **localStorage** (сохранение товаров, корзины, пользователей)

---

## Структура проекта

```
src/
  app/
         App.jsx
     store/
         store.js
  components/
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
  features/
     admin-slice/
         admin-slice.js
     auth-slice/
         auth-slice.js
     cart-slice/
         cart-slice.js
     products-slice/
         products-slice.js
  layouts/
         MainLayout.jsx
         MainLayout.scss
  pages/
     admin-page
     auth
     cart
```

---

## 🔐 Авторизация

- **Регистрация**: сохраняет пользователя (email + пароль) в `localStorage`.
- **Авторизация**: сверяет введенные данные с сохраненными.
- **Выход**: удаляет пользователя из `localStorage`.
- **Admin-панель** доступна только для `admin@example.com`.

---

## 🛠️ Redux слайсы

### AuthSlice

- `register(email, password)` — регистрация и сохранение в `localStorage`.
- `login(email, password)` — вход пользователя.
- `logout()` — выход.
- `clearError()` — очистка ошибок.

### ProductsSlice

- `addProduct(product)` — добавление товара (только админ).
- `removeProduct(id)` — удаление товара.
- Товары сохраняются в `localStorage`.

### CartSlice

- `addToCart(product)` — добавить товар.
- `removeFromCart(id)` — удалить товар.
- `decreaseQuantity(id)` — уменьшить количество.
- `clearCart()` — очистить корзину.
- Корзина синхронизируется с `localStorage`.

---

## 🌐 Роутинг

- `/` — главная страница со списком товаров.
- `/cart` — корзина.
- `/auth/login` — страница логина.
- `/auth/register` — регистрация.
- `/admin` — админ-панель (**только для [admin@example.com](mailto:admin@example.com)**).

---

## 🎨 Стилизация

- Используется **SCSS** с вложенностью.
- У каждого компонента и страницы — свой `.scss`.
- В `MainLayout.scss` прописаны стили шапки, футера и медиазапросы.

---

## 📌 Следующие шаги (по желанию)

- ✅ Валидация форм регистрации и входа.
- ✅ Загрузка изображений через `<input type="file" />`.
- 🔲 Подключение бекенда (Express.js / Firebase / Supabase).
- 🔲 Оптимизация и разбиение по чанкам (lazy loading).
- 🔲 Тесты (Jest + React Testing Library).

---

## 🚀 Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка проекта
npm run build
```
