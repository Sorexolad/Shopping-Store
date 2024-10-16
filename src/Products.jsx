import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await axios.get('https://fakestoreapi.com/products');
        setProducts(result.data);
        setFilteredProducts(result.data); // Set initial filtered products
      } catch (error) {
       
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (category) => {
    const filtered = products.filter(product => product.category === category);
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h1 className='text-red-500 font-medium text-xl'>Shopping Stores</h1>
      <input className='w-96' type="text" placeholder='Search for products, brands and categories' />
      <div className='grid grid-cols-5 gap-5'>
        <button className='h-10 mt-10 ml-8 bg-black w-auto border-4 text-white' onClick={() => filterProducts("men's clothing")}>Men's Clothing</button>
        <button className='h-10 mt-10 ml-8 bg-black w-auto border-4 text-white' onClick={() => filterProducts('jewelery')}>Jewelry</button>
        <button className='h-10 mt-10 ml-8 bg-black w-auto border-4 text-white' onClick={() => filterProducts('electronics')}>Electronics</button>
        <button className='h-10 mt-10 ml-8 bg-black w-auto border-4 text-white' onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
      </div>
      <div className='grid grid-cols-4 gap-5 bg-indigo-700'>
        {filteredProducts.map((pro) => (
          <div key={pro.id} className='bg-yellow-100 rounded h-auto'>
            <img className='h-60 w-60' src={pro.image} alt={pro.title} />
            <div>
              <p className='text-sm'>{pro.title}</p>
              <p>${pro.price}</p>
              <p>{pro.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;