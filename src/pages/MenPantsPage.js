import React, { useState } from 'react';
import Product from '../components/Product';
import jeans from '../assets/tshirt1.webp';
import formalPants from '../assets/tshirt1.webp';
import casualPants from '../assets/tshirt1.webp';
import shorts from '../assets/tshirt1.webp';
import nightPants from '../assets/tshirt1.webp';
import ProductPreviewModal from '../models/ProductPreviewModal';

// ProductPreviewModal component for displaying product details

const MenPantsPage = () => {
    const dummyProducts = [
      { id: 1, name: 'Jeans', price: 40, size: '32', category: 'jeans', image: jeans, rating: 4, angles: [jeans, jeans, jeans] },
      { id: 2, name: 'Formal Pants', price: 60, size: '30', category: 'formal', image: formalPants, rating: 5, angles: [formalPants, formalPants, formalPants] },
      { id: 3, name: 'Casual Pants', price: 35, size: '34', category: 'casual', image: casualPants, rating: 3, angles: [casualPants, casualPants, casualPants] },
      { id: 4, name: 'Shorts', price: 20, size: '28', category: 'shorts', image: shorts, rating: 4, angles: [shorts, shorts, shorts] },
      { id: 5, name: 'Night Pants', price: 25, size: '32', category: 'nightPant', image: nightPants, rating: 2, angles: [nightPants, nightPants, nightPants] },
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
        (!filterPriceRange[0] || product.price >= parseInt(filterPriceRange[0], 10)) &&
        (!filterPriceRange[1] || product.price <= parseInt(filterPriceRange[1], 10));
  
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
              <option value="jeans">Jeans</option>
              <option value="formal">Formal</option>
              <option value="casual">Casual</option>
              <option value="shorts">Shorts</option>
              <option value="nightPant">Night Pants</option>
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
              <option value="28">28</option>
              <option value="30">30</option>
              <option value="32">32</option>
              <option value="34">34</option>
            </select>
          </div>
  
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Price Range:</label>
            <div className="flex">
              <input
                type="number"
                placeholder="Min"
                className="w-1/2 border p-2 mr-2"
                value={filterPriceRange[0] ?? ''}
                onChange={(e) => setFilterPriceRange([e.target.value || null, filterPriceRange[1]])}
              />
              <input
                type="number"
                placeholder="Max"
                className="w-1/2 border p-2"
                value={filterPriceRange[1] ?? ''}
                onChange={(e) => setFilterPriceRange([filterPriceRange[0], e.target.value || null])}
              />
            </div>
          </div>
        </div>
  
        <div className="w-3/4">
          <h1 className="text-4xl font-bold mb-6">Pants</h1>
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
  
  export default MenPantsPage;
