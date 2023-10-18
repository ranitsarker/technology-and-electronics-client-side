import { useLoaderData } from "react-router-dom";
import ProductCard from "../Components/ProductCard";


const ProductList = () => {
    const products = useLoaderData();
    return (
        <>
            <h1>Products:{products.length}</h1>
            <div className="grid grid-cols-1 gap-4">
                {
                    products.map(product => <ProductCard
                    key={product._id}
                    product={product}
                    ></ProductCard>)
                }
            </div>
        </>
    );
};

export default ProductList;