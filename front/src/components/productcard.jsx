import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
function ProductCard({ product }) {
  const deleteProduct = (id) => {
    console.log(id);
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <div className="badge badge-secondary">{product.price}</div>
        </h2>
        <div className="card-actions justify-end">
          <Link
            to={`/product/${product.id}`}
            className="btn btn-sm btn-info btn-outline"
            aria-label={`Update product ${product.name}`}
          >
            Update
          </Link>
          <button
            className="btn btn-sm btn-info btn-outline"
            onClick={() => deleteProduct(product.id)}
            aria-label={`Delete product ${product.name}`}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
