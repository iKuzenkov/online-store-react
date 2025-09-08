import React, { useMemo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import Pagination from "../../components/pagination/Pagination";
import "./ProductsPage.scss";

function ProductsPage() {
  const products = useSelector((state) => state.products.items) || [];

  const [searchParams, setSearchParams] = useSearchParams();

  const initialPage = Number(searchParams.get("page") || 1);
  const initialPageSize = Number(searchParams.get("size") || 6);

  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));

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

  const visibleProducts = useMemo(() => {
    const startIdx = (page - 1) * pageSize;
    const endIdx = page * pageSize;
    return products.slice(startIdx, endIdx);
  }, [products, page, pageSize]);

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

        <div className="product-page__count">
          {products.length} item{products.length === 1 ? "" : "s"}
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
