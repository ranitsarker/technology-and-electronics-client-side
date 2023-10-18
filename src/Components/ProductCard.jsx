import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
    const { _id, image, name, brand, category, type, price, shortDescription, rating } = product;
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

export default ProductCard;