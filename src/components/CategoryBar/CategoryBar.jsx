import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../mock/asyncMock';
import './CategoryBar.css';

const CategoryBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts().then(products => {
      const uniqueCategories = [...new Set(products.map(product => product.categoria))];
      setCategories(uniqueCategories);
    });
  }, []);

  return (
    <div className="category-bar">
      <ul className="category-list">
        {categories.map(category => (
          <li key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryBar;
