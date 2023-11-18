/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

export default function LinkButton({ children, to }) {
  const classList = "text-sm text-blue-500 hover:text-blue-600";
  const navigate = useNavigate();
  if (to === "-1")
    return (
      <button className={classList} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={classList}>
      {children}
    </Link>
  );
}
