import React, { useContext, useState } from 'react'
import './CSS/AllProducts.css'
import ProductCard from './ProductCard';

const AllProducts = () => {
  const productList = [
    {
      productName: "Pizza",
      img: "https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=180", 
      description: "Delicious pizza with various toppings",
      category: "Pizza",
      price: 12.99
    },
    {
      productName: "Burger",
      img: "https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=180", 
      description: "Juicy burger with fresh ingredients",
      category: "Burger",
      price: 8.99
    },
    {
      productName: "Pasta",
      img: "https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=180", 
      description: "Classic pasta dish with tomato sauce",
      category: "Pasta",
      price: 9.99
    },
    {
      productName: "Salad",
      img: "https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=180", 
      description: "Healthy and refreshing salad  ghjdghfgad kjsdhfjsg gggg",
      category: "Salad",
      price: 7.99
    },
    {
      productName: "Pizza",
      img: "https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=180", 
      description: "Delicious pizza with various toppings",
      category: "Pizza",
      price: 12.99
    },
    {
      productName: "Burger",
      img: "https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=180", 
      description: "Juicy burger with fresh ingredients",
      category: "Burger",
      price: 8.99
    },
    {
      productName: "Pasta",
      img: "https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=180", 
      description: "Classic pasta dish with tomato sauce",
      category: "Pasta",
      price: 9.99
    },
    {
      productName: "Salad",
      img: "https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=180", 
      description: "Healthy and refreshing salad  ghjdghfgad kjsdhfjsg",
      category: "Salad",
      price: 7.99
    },
    {
      productName: "Pizza",
      img: "https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=180", 
      description: "Delicious pizza with various toppings",
      category: "Pizza",
      price: 12.99
    },
    {
      productName: "Burger",
      img: "https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=180", 
      description: "Juicy burger with fresh ingredients",
      category: "Burger",
      price: 8.99
    },
    {
      productName: "Pasta",
      img: "https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=180", 
      description: "Classic pasta dish with tomato sauce",
      category: "Pasta",
      price: 9.99
    },
    {
      productName: "Salad",
      img: "https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=180", 
      description: "Healthy and refreshing salad  ghjdghfgad kjsdhfjsg",
      category: "Salad",
      price: 7.99
    },
    {
      productName: "Sushi",
      img: "https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=180", 
      description: "Assortment of fresh sushi rolls",
      category: "Sushi",
      price: 15.99
    }
  ];
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const uniqueCategories = [...new Set(productList.map(item => item.category))];
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const filteredProducts = productList.filter((item) => {
    if (category === 'all') {
      return item.productName.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return item.category === category && item.productName.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  return (
    <div className='display' id='display'>
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
          className="search-bar"
        />
       <select value={category} onChange={handleCategoryChange} className="category-dropdown">
      <option value="all">All Categories</option>
      {uniqueCategories.map((category, index) => (
        <option key={index} value={category}>{category}</option>
      ))}
    </select>
        <div className="display-list">
            {
                filteredProducts.map((item,index)=>{
                    return ( 
                        <ProductCard
                            key={index}
                            productName={item.productName}
                            img={item.img}
                            description={item.description}
                            category={item.category}
                            price={item.price}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default AllProducts
