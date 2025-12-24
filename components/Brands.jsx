import React, { useState } from "react";
import Products from "./Products";

const Brands = ({ brands, products,t }) => {
  const [selectedBrandId, setSelectedBrandId] = useState(null);
  const brandsData = Array.isArray(brands?.data?.data) ? brands.data.data : [];
  const productsData = Array.isArray(products?.data?.data) ? products.data.data : [];

  // Filter products based on selected brand
  const filteredProducts = selectedBrandId
    ? productsData.filter(product => 
        product.brand && product.brand.some(brand => brand.id === selectedBrandId)
      )
    : productsData;

  // Handle brand button click
  const handleBrandClick = (brandId) => {
    setSelectedBrandId(brandId);
  };

  // Handle "All" button click
  const handleAllClick = () => {
    setSelectedBrandId(null);
  };

  return (
    <>
      <div className="brandsSection">
        <div className="container">
          <div className="brandTitle">
            <span>{t?.brands || 'Brands'}</span>
            <h2 className="brandDescription">
              {/* Products Built for Strength, Designed for Excellence */}
              {t?.brandsTitle || "Products Built for Strength, Designed for Excellence "}
            </h2>
            <div className="productsCatButtons">
              {/* "All" button with active state */}
              <div className="allbutton">
                <button 
                  className={selectedBrandId === null ? 'active' : ''}
                  onClick={handleAllClick}
                >
                  {t?.all || "ALL"}
                </button>
              </div>
              
              {/* Brand buttons with active state */}
              {brandsData.map((brand) => (
                <div className="otherBtn" key={brand.id}>
                  <button 
                    className={selectedBrandId === brand.id ? 'active' : ''}
                    onClick={() => handleBrandClick(brand.id)}
                  >
                    {brand.title}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Products products={{ data: { data: filteredProducts } }} />
      </div>
    </>
  );
};

export default Brands;








