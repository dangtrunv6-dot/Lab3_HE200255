const CATEGORIES = ['All Categories', 'Điện thoại', 'Laptop', 'Máy tính bảng'];

function CategoryFilter({ value, onChange }) {
  return (
    <div className="category-filter">
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat === 'All Categories' ? '' : cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
