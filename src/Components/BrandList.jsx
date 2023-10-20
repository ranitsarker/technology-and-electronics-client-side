import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../DarkModeContext/DarkModeContext";

const BrandList = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  const { isDarkMode } = useDarkMode();

  // Use isDarkMode to conditionally style your about us content
  const brandListUsStyle = {
    background: isDarkMode ? 'black' : 'white',
    color: isDarkMode ? 'white' : 'black',
  };

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
    <>
      <div style={brandListUsStyle}>
          <div className="container mx-auto py-8">
          <h1 className="text-2xl font-semibold mb-8 text-center">Brand Names</h1>

          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {brands.map((brand) => (
                <li key={brand.id} className="text-center">
                  <Link to={`/brands/${brand.name.toLowerCase()}`}>
                    <div className="card">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="mx-auto h-16"
                      />
                      <p className="mt-2 font-bold">{brand.name}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>

  );
};

export default BrandList;
