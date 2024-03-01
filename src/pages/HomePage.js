// HomePage.js
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import slideImgOne from '../assets/slideImgeOne.avif'
import slideImgTwo from '../assets/slideImageTwo.jpg'
import tshirt1 from '../assets/tshirt1.webp'
import jeans from '../assets/jeans.webp'
import sarres from '../assets/sarres.webp'
import kurtas from '../assets/kurtas.webp'
import HomeProduct from '../components/HomeProduct';

const HomePage = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Dummy data for products
  const dummyProducts = [
    { id: 1, name: 'T-Shirt', price: '20$', image: tshirt1, rating: 4 },
    { id: 2, name: 'Jeans', price: '40$', image: jeans, rating: 2 },
    { id: 3, name: 'Sarees', price: '50$', image: sarres, rating: 3 },
    { id: 4, name: 'Kurtas', price: '60$', image: kurtas, rating: 1 },
    // ... more products
  ];

  // Slider images
  const sliderImages = [
    slideImgOne,
    slideImgTwo
    // ... more images
  ];

  const handleAddToCart = (product) => {
    // Implement your add to cart logic here
    console.log(`Added ${product.name} to cart`);
  };

  const handleBuyNow = (product) => {
    // Implement your buy now logic here
    console.log(`Bought ${product.name} now`);
  };

  return (
    <div className='overflow-hidden'>
      {/* Slider */}
      <div className='mt-2'>
      <Slider {...settings} >
        {sliderImages.map((img, index) => (
          <div key={index} className="w-full" >
            <img src={img} alt={`Slide ${index}`} className='w-full' style={{ height: '500px', objectFit: 'cover' }} />
          </div>
        ))}
      </Slider>
      </div>

      {/* Welcome Text */}
      <h1 className="text-4xl font-bold text-center my-8">Welcome to Our Clothing Store</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {dummyProducts.map(product => (
        <HomeProduct
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />
      ))}
    </div>
    </div>
  );
}

export default HomePage;
