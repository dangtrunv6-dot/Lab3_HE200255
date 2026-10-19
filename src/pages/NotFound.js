import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-page">
      <span className="error-code">404</span>
      <h2>Trang không tìm thấy</h2>
      <p>Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xoá.</p>
      <Link to="/" className="btn-primary">
        Về trang chủ
      </Link>
    </div>
  );
}

export default NotFound;
