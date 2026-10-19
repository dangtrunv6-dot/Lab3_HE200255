import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';
import ProductItem from '../components/ProductItem';

const ITEMS_PER_PAGE = 3;

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword') || '';
  const category = searchParams.get('category') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);

  // Filter products
  const filtered = products.filter((p) => {
    const matchKeyword = keyword
      ? p.name.toLowerCase().includes(keyword.toLowerCase())
      : true;
    const matchCategory = category ? p.category === category : true;
    return matchKeyword && matchCategory;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const currentPage = Math.min(Math.max(page, 1), totalPages);

  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const updateParams = (updates) => {
    const params = {};
    if (keyword) params.keyword = keyword;
    if (category) params.category = category;
    if (currentPage > 1) params.page = String(currentPage);
    const merged = { ...params, ...updates };
    // Remove empty/default values
    if (merged.page === '1') delete merged.page;
    if (!merged.keyword) delete merged.keyword;
    if (!merged.category) delete merged.category;
    setSearchParams(merged);
  };

  const handleKeywordChange = (val) => {
    updateParams({ keyword: val, page: '1' });
  };

  const handleCategoryChange = (val) => {
    updateParams({ category: val, page: '1' });
  };

  const handlePrev = () => {
    updateParams({ page: String(currentPage - 1) });
  };

  const handleNext = () => {
    updateParams({ page: String(currentPage + 1) });
  };

  return (
    <div className="product-list-page">
      <div className="filters-row">
        <SearchBar value={keyword} onChange={handleKeywordChange} />
        <CategoryFilter value={category} onChange={handleCategoryChange} />
      </div>

      <div className="pagination-info">
        <span className="total">Tổng {filtered.length}</span>
        <span>|</span>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Giá</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {paginated.length > 0 ? (
            paginated.map((p) => <ProductItem key={p.id} product={p} />)
          ) : (
            <tr>
              <td colSpan="5" className="no-products">
                Không tìm thấy sản phẩm nào.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
