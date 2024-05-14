import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../mock/asyncMock'; 
import './CategoryBar.css';

const CategoryBar = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getProducts().then(products => {
      const uniqueCategories = [...new Set(products.map(product => product.categoria))];
      setCategories(uniqueCategories);
    });
  }, []);

  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {

  };

  return (
    <div className="category-bar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar categorías..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="category-search"
        />
        <button onClick={handleSearch} className="search-button">Buscar</button>
      </div>
      <ul className="category-list">
        {filteredCategories.map(category => (
          <li key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryBar;
