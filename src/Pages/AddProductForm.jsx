import toast from "react-hot-toast";

const AddProductForm = () => {
    const handleAddProduct = event => {
      event.preventDefault();
      const form = event.target;
      const image = form.image.value;
      const name = form.name.value;
      const brand = form.brand.value;
      const type = form.type.value;
      const price = form.price.value;
      const shortDescription = form.shortDescription.value;
      const rating = form.rating.value;
  
      const newProduct = {
        image,
        name,
        brand,
        type,
        price,
        shortDescription,
        rating
      };
  
      console.log(newProduct);
      // send form data to server 
      fetch('https://technology-and-electronics-server-side-o3w7iypcd.vercel.app/product' , {
        method: 'POST',
        headers:{
            'content-type' : 'application/json',
        },
        body: JSON.stringify(newProduct)
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if(data.insertedId){
            toast.success('Product added successfully!');
            form.reset();
        }
      })
    };
  

  return (
    <div className="flex justify-center items-center my-8">
      <form onSubmit={handleAddProduct} className="w-full max-w-md bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
            Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Image URL"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Product Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="brand" className="block text-gray-700 text-sm font-bold mb-2">
            Brand Name
          </label>
          <select
            id="brand"
            name="brand"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Apple" id="apple">Apple</option>
            <option value="Samsung" id="samsung">Samsung</option>
            <option value="Sony" id="sony">Sony</option>
            <option value="Google" id="google">Google</option>
            <option value="Intel" id="intel">Intel</option>
            <option value="Microsoft" id="microsoft">Microsoft</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">
            Type
          </label>
          <select
            id="type"
            name="type"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="headphone">Headphone</option>
            <option value="processor">Processor</option>
            <option value="headphone">Smartwatch</option>

          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Price"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="shortDescription" className="block text-gray-700 text-sm font-bold mb-2">
            Short description
          </label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Short Description"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Rating"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="btn btn-outline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;