const ProductCard = ({product}) => {
    const { image, name, brand, category, type, price, shortDescription, rating } = product;
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
                <button className="btn btn-primary">Details</button>
                <button className="btn btn-primary">Update</button>
                </div>
            </div>
            </div>

        </>
    );
};

export default ProductCard;