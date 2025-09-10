import React, { useMemo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import Pagination from "../../components/pagination/Pagination";
import Filter from "../../components/filter/Filters";
import Sort from "../../components/sort/Sort";
import "./ProductsPage.scss";

function ProductsPage() {
  const products = useSelector((state) => state.products.items) || [];
  const [searchParams, setSearchParams] = useSearchParams();

  const initialPage = Number(searchParams.get("page") || 1);
  const initialPageSize = Number(searchParams.get("size") || 6);

  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      category === "all" ? true : p.category === category
    );
  }, [products, category]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      return a.name.localeCompare(b.name);
    });
  }, [filteredProducts, sortBy]);

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / pageSize));

  const visibleProducts = useMemo(() => {
    const startIdx = (page - 1) * pageSize;
    const endIdx = page * pageSize;
    return sortedProducts.slice(startIdx, endIdx);
  }, [sortedProducts, page, pageSize]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [products.length, pageSize, totalPages]);

  useEffect(() => {
    const params = {};
    if (page !== 1) params.page = page;
    if (pageSize !== 6) params.size = pageSize;
    setSearchParams(params);
  }, [page, pageSize, setSearchParams]);

  return (
    <main className="product-page">
      <h1>Products</h1>

      <div className="product-page__controls">
        <label>
          Items per page:
          <select
            value={pageSize}
            onChange={(e) => {
              const val = Number(e.target.value);
              setPageSize(val);
              setPage(1);
            }}
          >
            <option value={4}>4</option>
            <option value={6}>6</option>
            <option value={9}>9</option>
          </select>
        </label>

        <Filter
          value={category}
          onChange={(val) => {
            setCategory(val);
            setPage(1);
          }}
        />

        <Sort
          value={sortBy}
          onChange={(val) => {
            setSortBy(val);
            setPage(1);
          }}
        />

        <div className="product-page__count">
          {sortedProducts.length} item{sortedProducts.length === 1 ? "" : "s"}
        </div>
      </div>

      <div className="products-grid">
        {visibleProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(p) => setPage(p)}
      />
    </main>
  );
}

export default ProductsPage;
