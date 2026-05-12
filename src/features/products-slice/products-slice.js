import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "BookReact",
      description:
        "React is a declarative, efficient, and flexible JavaScript library for building user interfaces.",
      price: 10,
      category: "books",
      image: "/images/book-react.png",
    },
    {
      id: 2,
      name: "Headphones",
      description:
        "Wireless Bluetooth headphones Headset I750 are a universal choice for children and adults. Stylish design with LED backlight, high-quality sound, support for FM radio, MicroSD and AUX cable make this model ideal for everyday use at home, while traveling or studying.",
      price: 50,
      category: "electronics",
      image: "/images/headphones.png",
    },
    {
      id: 3,
      name: "T-shirt",
      description:
        "The Fruit of the Loom Heavy 0612120 Men's Long Cotton T-Shirt is an option for those who value comfort and practicality. Made of cotton, it has a soft texture and lightness, which makes it a great choice for everyday wear. The classic round neckline gives a stylish look, and the loose cut provides freedom of movement. The model can be easily combined with various wardrobe items, such as jeans, shorts or sweatpants. This T-shirt will become a universal base of your wardrobe, suitable for both leisure and everyday activities.",
      price: 120,
      category: "clothes",
      image: "/images/t-shirt.png",
    },
    {
      id: 4,
      name: "Keyboard",
      description:
        "A universal keyboard with which you can enter any data and exchange messages on all the devices you use: Windows, Mac, Chrome OS, Android, iPad, iPhone, etc.",
      price: 360,
      category: "electronics",
      image: "/images/keyboard.png",
    },
    {
      id: 5,
      name: "Sneakers",
      description:
        "The Skechers brand never ceases to amaze with the diversity of its range. Choose the best from Monoad!",
      price: 100,
      category: "clothes",
      image: "/images/sneakers.png",
    },
    {
      id: 6,
      name: "Keyboard",
      description:
        "A universal keyboard with which you can enter any data and exchange messages on all the devices you use: Windows, Mac, Chrome OS, Android, iPad, iPhone, etc.",
      price: 70,
      category: "electronics",
      image: "/images/keyboard.png",
    },
    {
      id: 7,
      name: "Keyboard",
      description:
        "A universal keyboard with which you can enter any data and exchange messages on all the devices you use: Windows, Mac, Chrome OS, Android, iPad, iPhone, etc.",
      price: 90,
      category: "electronics",
      image: "/images/keyboard.png",
    },
    {
      id: 8,
      name: "Keyboard",
      description:
        "A universal keyboard with which you can enter any data and exchange messages on all the devices you use: Windows, Mac, Chrome OS, Android, iPad, iPhone, etc.",
      price: 330,
      category: "electronics",
      image: "/images/keyboard.png",
    },
    {
      id: 9,
      name: "Keyboard",
      description:
        "A universal keyboard with which you can enter any data and exchange messages on all the devices you use: Windows, Mac, Chrome OS, Android, iPad, iPhone, etc.",
      price: 600,
      category: "electronics",
      image: "/images/keyboard.png",
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
