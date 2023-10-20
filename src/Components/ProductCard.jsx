import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
    const { image, name, brand, type, price, rating } = product;
    return (
        <>
            <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt={name}/></figure>
            <div className="card-body">
                <div className="card-actions justify-end">
                    <p>Name: {name}</p>
                    <p>Brand name: {brand}</p>
                    <p>Product type: {type}</p>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                <Link to={`/product/${product._id}`}>Details</Link>
                <Link to={`/updateproduct/${product._id}`}>Update</Link>
                </div>
            </div>
            </div>

        </>
    );
};
ProductCard.propTypes = {
    product: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      shortDescription: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      // Add more prop validations as needed
    }).isRequired,
  };
export default ProductCard;