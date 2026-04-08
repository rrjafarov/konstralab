// "use client";
// import React, { useState } from "react";
// import Products from "./Products";

// const Brands = ({ brands, products,t }) => {
//   const [selectedBrandId, setSelectedBrandId] = useState(null);
//   const brandsData = Array.isArray(brands?.data?.data) ? brands.data.data : [];
//   const productsData = Array.isArray(products?.data?.data) ? products.data.data : [];

//   // Filter products based on selected brand
//   const filteredProducts = selectedBrandId
//     ? productsData.filter(product => 
//         product.brand && product.brand.some(brand => brand.id === selectedBrandId)
//       )
//     : productsData;

//   // Handle brand button click
//   const handleBrandClick = (brandId) => {
//     setSelectedBrandId(brandId);
//   };

//   // Handle "All" button click
//   const handleAllClick = () => {
//     setSelectedBrandId(null);
//   };

//   return (
//     <>
//       <div className="brandsSection">
//         <div className="container">
//           <div className="brandTitle">
//             <span>{t?.brands || 'Brands'}</span>
//             <h2 className="brandDescription">
//               {/* Products Built for Strength, Designed for Excellence */}
//               {t?.brandsTitle || "Products Built for Strength, Designed for Excellence "}
//             </h2>
//             <div className="productsCatButtons">
//               {/* "All" button with active state */}
//               <div className="allbutton">
//                 <button 
//                   className={selectedBrandId === null ? 'active' : ''}
//                   onClick={handleAllClick}
//                 >
//                   {t?.all || "ALL"}
//                 </button>
//               </div>
              
//               {/* Brand buttons with active state */}
//               {brandsData.map((brand) => (
//                 <div className="otherBtn" key={brand.id}>
//                   <button 
//                     className={selectedBrandId === brand.id ? 'active' : ''}
//                     onClick={() => handleBrandClick(brand.id)}
//                   >
//                     {brand.title}
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <Products products={{ data: { data: filteredProducts } }} />
//       </div>
//     </>
//   );
// };

// export default Brands;









"use client";
import React, { useState } from "react";
import Products from "./Products";

const BrandSpinner = () => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "30rem",
    width: "100%",
    padding: "4rem 0",
  }}>
    <div style={{
      width: "5.6rem",
      height: "5.6rem",
      borderRadius: "50%",
      background: "conic-gradient(from 0deg, #08316f 0%, #3a6fc4 45%, transparent 60%)",
      WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 0.7rem), #fff calc(100% - 0.7rem))",
      mask: "radial-gradient(farthest-side, transparent calc(100% - 0.7rem), #fff calc(100% - 0.7rem))",
      animation: "brandSpin 0.85s linear infinite",
    }} />
    <style>{`
      @keyframes brandSpin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const Brands = ({ brands, products, t }) => {
  const [selectedBrandId, setSelectedBrandId] = useState(null);
  const [loading, setLoading] = useState(false);

  const brandsData = Array.isArray(brands?.data?.data) ? brands.data.data : [];
  const productsData = Array.isArray(products?.data?.data) ? products.data.data : [];

  const filteredProducts = selectedBrandId
    ? productsData.filter(product =>
        product.brand && product.brand.some(brand => brand.id === selectedBrandId)
      )
    : productsData;

  const handleBrandClick = (brandId) => {
    if (brandId === selectedBrandId) return;
    setLoading(true);
    setSelectedBrandId(brandId);
    setTimeout(() => setLoading(false), 600);
  };

  const handleAllClick = () => {
    if (selectedBrandId === null) return;
    setLoading(true);
    setSelectedBrandId(null);
    setTimeout(() => setLoading(false), 600);
  };

  return (
    <>
      <div className="brandsSection">
        <div className="container">
          <div className="brandTitle">
            <span>{t?.brands || "Brands"}</span>
            <h2 className="brandDescription">
              {t?.brandsTitle || "Products Built for Strength, Designed for Excellence"}
            </h2>
            <div className="productsCatButtons">
              <div className="allbutton">
                <button
                  className={selectedBrandId === null ? "active" : ""}
                  onClick={handleAllClick}
                >
                  {t?.all || "ALL"}
                </button>
              </div>
              {brandsData.map((brand) => (
                <div className="otherBtn" key={brand.id}>
                  <button
                    className={selectedBrandId === brand.id ? "active" : ""}
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
        {loading ? (
          <BrandSpinner />
        ) : (
          <Products products={{ data: { data: filteredProducts } }} />
        )}
      </div>
    </>
  );
};

export default Brands;