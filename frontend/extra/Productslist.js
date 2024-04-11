import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Productslist() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const deletedata = (id) => {
        console.warn(id);
        deleteProduct(id);
    };

    const getProducts = async () => {
        try {
            let result = await fetch('http://localhost:5000/products');
            result = await result.json();
            setProducts(result);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            await fetch(`http://localhost:5000/product/${id}`, {
                method: "DELETE"
            });
            alert("Product deleted successfully.");
            // Refresh products list after deletion
            getProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
            alert("Failed to delete product.");
        }
    };

    console.warn(products);

    const searchhandle= async(event)=>{
        let key = event.target.value;
        let result = await fetch(`http://localhost:5000/search/${key}`);
        result=await result.json();
        if(result){
            setProducts(result)
        }
        else{
            getProducts()
        }
    }

    return (
        <div className='products'>
            <h1>This is the home page</h1>
            <input onChange={searchhandle} type='text' className='searchbar' placeholder='Search Products'/>
            <ul className='product_head'>
                <li>S no.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Company</li>
                <li>Category</li>
                <li>Operation</li>
            </ul>
            
            { products.length>0 ? products.map((product, index) => (
                <ul key={product._id}>
                    <li>{index + 1}</li>
                    <li>{product.name}</li>
                    <li>${product.price}</li>
                    <li>{product.company}</li>
                    <li>{product.category}</li>
                    <li><button onClick={() => deletedata(product._id)}>Delete</button>
                    <Link to={"/update/"+product._id}>Update</Link>
                    </li>
                </ul>
            ))
        :<h1>Product not found</h1>
        }
        </div>
    );
}

export default Productslist;
