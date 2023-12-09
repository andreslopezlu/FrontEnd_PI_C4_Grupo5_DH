import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el contexto
export const ProductContext = createContext();

// Crear el proveedor del contexto
export const ProductContextProvider = ({ children }) => {
const [reloadProducts, setReloadProducts] = useState(false);
const [productos, setProductos] = useState([]);

const obtenerImagenes = (productId) => {
    return axios
    .get(`http://localhost:8080/images/product/${productId}`)
    .then((imgres) => imgres.data)
    .catch((error) => {
        console.error("Error al obtener datos de imágenes de la API: ", error);
        return [];
    });
};

useEffect(() => {
    axios
    .get("http://localhost:8080/products")
    .then((res) => {
        const promesasImagenes = res.data.map((producto) => {
        return obtenerImagenes(producto.id)
            .then((imagenes) => ({
            ...producto,
            img: imagenes,
            }));
        });

        Promise.all(promesasImagenes)
        .then((productosConImagenes) => {
            setProductos(productosConImagenes);
        })
        .catch((error) => {
            console.error("Error al obtener datos de la API: ", error);
        });
    })
    .catch((error) => {
        console.error("Error al obtener datos de la API: ", error);
    });


}, [reloadProducts]);

const recargarProductos = () => {
    setReloadProducts((prev) => !prev);
};



return (
    <ProductContext.Provider
    value={{ productos, recargarProductos}}
    >
    {children}
    </ProductContext.Provider>
);
};