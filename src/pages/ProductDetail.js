import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return (
      <div className="product-detail-page">
        <Link to="/products" className="back-btn">
          ← Quay lại danh sách
        </Link>
        <div className="not-found-page" style={{ minHeight: 'auto', padding: '60px 0' }}>
          <span className="error-code" style={{ fontSize: '5rem' }}>404</span>
          <h2>Sản phẩm không tồn tại</h2>
          <p>Không tìm thấy sản phẩm với ID: <strong>{id}</strong></p>
          <Link to="/products" className="btn-primary" style={{ marginTop: '8px' }}>
            Quay lại danh sách
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <Link to="/products" className="back-btn">
        ← Quay lại danh sách
      </Link>

      <div className="product-detail-card">
        {/* Left: Image */}
        <div className="product-detail-image">
          <div className="no-image">
            <span className="no-image-icon">🖼️</span>
            Không có ảnh sản phẩm
          </div>
        </div>

        {/* Right: Info */}
        <div className="product-detail-info">
          <h1>{product.name}</h1>

          <div className="detail-field">
            <span className="detail-label">ID</span>
            <span className="detail-value">#{product.id}</span>
          </div>

          <div className="detail-field">
            <span className="detail-label">Danh mục</span>
            <span className="detail-value">
              <span className="detail-badge">{product.category}</span>
            </span>
          </div>

          <div className="detail-field">
            <span className="detail-label">Giá</span>
            <span className="detail-value price">
              {product.price.toLocaleString('vi-VN')} ₫
            </span>
          </div>

          <div className="detail-field">
            <span className="detail-label">Mô tả</span>
            <span className="detail-value">{product.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
