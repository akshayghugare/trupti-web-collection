import React, { useState } from 'react';
import Product from '../components/Product';
import tshirt1 from '../assets/tshirt1.webp';
import tshirt2 from '../assets/tshirt/T1/TS2.webp';
import tshirt21 from '../assets/tshirt/T1/TS3.webp';
import tshirt22 from '../assets/tshirt/T1/TS4.webp';
import jeans from '../assets/jeans.webp';
import sarres from '../assets/sarres.webp';
import kurtas from '../assets/kurtas.webp';
import ProductPreviewModal from '../models/ProductPreviewModal';
import { useNavigate } from 'react-router-dom';

// ProductPreviewModal component for displaying product details


const MenShirtPage = () => {
  const navigate = useNavigate()
  const dummyProducts = [
    { id: 1, name: 'T-Shirt', price: 200, size: 'M', category: 't-shirt', image: tshirt1, rating: 4, angles: [tshirt1, tshirt1, tshirt1], },
    { id: 2, name: 'T-Shirt', price: 400, size: 'L', category: 't-shirt', image: tshirt2, rating: 5, angles: [tshirt2, tshirt21, tshirt22], },

    { id: 3, name: 'Jeans', price: 400, size: 'L', category: 'casual', image: jeans, rating: 2, angles: [jeans, sarres, tshirt1], },
    { id: 4, name: 'Sarees', price: 500, size: 'S', category: 'formal', image: sarres, rating: 3, angles: [sarres, sarres, sarres], },
    { id: 5, name: 'Kurtas', price: 600, size: 'XL', category: 'kurtas', image: kurtas, rating: 1, angles: [kurtas, kurtas, kurtas], },
    // ... more products
  ];

  const [filterCategory, setFilterCategory] = useState('');
  const [filterSize, setFilterSize] = useState('');
  const [filterPriceRange, setFilterPriceRange] = useState([null, null]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = dummyProducts.filter(product => {
    const categoryFilter = !filterCategory || product.category === filterCategory;
    const sizeFilter = !filterSize || product.size === filterSize;
    const priceFilter =
      !filterPriceRange[0] || !filterPriceRange[1] || (product.price >= filterPriceRange[0] && product.price <= filterPriceRange[1]);

    return categoryFilter && sizeFilter && priceFilter;
  });

  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
  };

  const handleBuyNow = (product) => {
    console.log(`Bought ${product.name} now`);
     navigate(`/confirm-order/${product.id}`)
  };

  const openProductPreview = (product) => {
    setSelectedProduct(product);
  };

  const closeProductPreview = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="flex justify-center items-start p-8">
      {/* Filter options on the left side */}
      <div className="w-1/4 pr-8">
        <h1 className="text-4xl font-bold mb-6">Filter Options</h1>

        {/* Your filter options here */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
          <select
            className="w-full border p-2"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="t-shirt">T-Shirt</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="kurtas">Kurtas</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Size:</label>
          <select
            className="w-full border p-2"
            value={filterSize}
            onChange={(e) => setFilterSize(e.target.value)}
          >
            <option value="">All Sizes</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Price Range:</label>
          <div className="flex">
            <input
              type="number"
              placeholder="Min"
              className="w-1/2 border p-2 mr-2"
              onChange={(e) => setFilterPriceRange([e.target.value, filterPriceRange[1]])}
            />
            <input
              type="number"
              placeholder="Max"
              className="w-1/2 border p-2"
              onChange={(e) => setFilterPriceRange([filterPriceRange[0], e.target.value])}
            />
          </div>
        </div>
      </div>

      {/* Products on the right side */}
      <div className="w-3/4">
        <h1 className="text-4xl font-bold mb-6">Shirts</h1>

        {/* Product grid or no results message */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map(product => (
              <Product
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
                onPreview={() => openProductPreview(product)}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No products available with the selected filters.</p>
        )}
      </div>

      {/* Product preview modal */}
      {selectedProduct && (
        <ProductPreviewModal
          product={selectedProduct}
          onClose={closeProductPreview}
          handleAddToCart={handleAddToCart}
          handleBuyNow={handleBuyNow}
        />
      )}
    </div>
  );
}

export default MenShirtPage;
