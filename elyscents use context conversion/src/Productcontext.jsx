import React, { createContext, useState, useEffect, useContext } from 'react';
const ProductContext= createContext()

export const ProductProvider = ({children})=>{
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://dummyjson.com/products?limit=100')
        .then(res=>res.json())
        .then (data =>{
            setAllProducts(data.products);
            setLoading(false);
        })

},[])
    return (
        <ProductContext.Provider value={{allProducts, loading}}>
            {children}
        </ProductContext.Provider>
    )
}
export const useProducts = () => useContext(ProductContext);