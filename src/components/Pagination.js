function Pagination({ currentPage, totalPages, onPrev, onNext }) {
  return (
    <div className="pagination-info">
      <span className="page-control">
        <span>Trang:</span>
        <button className="page-btn" onClick={onPrev} disabled={currentPage <= 1}>
          Trước
        </button>
        <span className="page-label">
          {currentPage}/{totalPages}
        </span>
        <button className="page-btn" onClick={onNext} disabled={currentPage >= totalPages}>
          Sau
        </button>
      </span>
    </div>
  );
}

export default Pagination;
