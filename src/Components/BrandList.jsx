import  { useState, useEffect } from "react";
const BrandList = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/brands.json")
      .then((response) => response.json())
      .then((data) => {
        setBrands(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading brand data: ", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Brand Names</h1>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <li key={brand.id} className="text-center">
              <img
                src={brand.image}
                alt={brand.name}
                className="mx-auto h-16"
              />
              <p className="mt-2">{brand.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default BrandList;
