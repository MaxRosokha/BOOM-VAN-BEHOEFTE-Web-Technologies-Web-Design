import React, { useState } from 'react';
import Header from '../Header/header';
import '../../FavoritePage.css';

import productImage1 from '../../image/Group 70.png';
import productImage2 from '../../image/Group 65.png';
import productImage3 from '../../image/Group 64.png';
import productImage4 from '../../image/Group 37972.png';
import productImage5 from '../../image/Group 37973.png';

const FavoritePage = () => {
  const favoriteItems = [
    { id: 1, name: 'Embroidered Seersucker', price: '$99', image: productImage1 },
    { id: 2, name: 'Basic Slim Fit T-Shirt', price: '$99', image: productImage2 },
    { id: 3, name: 'Blurred Print T-Shirt', price: '$99', image: productImage3 },
    { id: 4, name: 'Full Sleeve Zipper', price: '$199', image: productImage4 },
    { id: 5, name: 'Exclusive T-Shirt', price: '$150', image: productImage5 },
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = favoriteItems.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };


  return (
    <div className="favorite-container">
      <Header />
      <h1 className="favorite-title">Favorite Items</h1>
      <div className="favorite-grid">
        {currentItems.map(item => (
          <div key={item.id} className="favorite-item">
            <img src={item.image} alt={item.name} className="favorite-item-image" />
            <p className="favorite-item-name">{item.name}</p>
            <p className="favorite-item-price">{item.price}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          className="pagination-button"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Попередня
        </button>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage >= Math.ceil(favoriteItems.length / itemsPerPage)}
        >
          Наступна
        </button>
      </div>
    </div>
  );
};

export default FavoritePage;
