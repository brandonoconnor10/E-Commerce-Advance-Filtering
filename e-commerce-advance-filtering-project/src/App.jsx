import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // 🔍 Search input filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  // 🎚️ Radio filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // 🧭 Button filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ⚙️ Combine all filters
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Apply text search
    if (query) {
      filteredProducts = filteredItems;
    }

    // Apply selected filter (category, color, company, price)
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === Number(selected)
      );
    }

    // Return product cards
    return filteredProducts.map(
      ({ id, img, title, rating, reviews, prevPrice, newPrice }) => (
        <Card
          key={id}
          img={img}
          title={title}
          rating={rating}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
