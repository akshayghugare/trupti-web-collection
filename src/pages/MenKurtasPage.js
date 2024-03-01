import React, { useState } from 'react';
import Product from '../components/Product';
import shortKurta from '../assets/tshirt1.webp';
import fullKurta from '../assets/tshirt1.webp';
import ProductPreviewModal from '../models/ProductPreviewModal';

const MenKurtasPage = () => {
  const dummyProducts = [
    { id: 1, name: 'Short Kurta', price: 30, size: 'L', category: 'shortKurta', image: shortKurta, rating: 3, angles: [shortKurta, shortKurta, shortKurta] },
    { id: 2, name: 'Full Kurta', price: 50, size: 'S', category: 'fullKurta', image: fullKurta, rating: 5, angles: [fullKurta, fullKurta, fullKurta] },
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
  };

  const openProductPreview = (product) => {
    setSelectedProduct(product);
  };

  const closeProductPreview = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="flex justify-center items-start p-8">
      <div className="w-1/4 pr-8">
        <h1 className="text-4xl font-bold mb-6">Filter Options</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
          <select
            className="w-full border p-2"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="shortKurta">Short Kurta</option>
            <option value="fullKurta">Full Kurta</option>
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

      <div className="w-3/4">
        <h1 className="text-4xl font-bold mb-6">Kurtas</h1>
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

      {selectedProduct && (
        <ProductPreviewModal
          product={selectedProduct}
          onClose={closeProductPreview}
        />
      )}
    </div>
  );
}

export default MenKurtasPage;
