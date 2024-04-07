import React, { useState } from 'react';

function AddProducts() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);  

  const sendProductData = async (e) => {
    e.preventDefault();

    const userId = JSON.parse(localStorage.getItem('user'))._id;
    try {
      if (!name || !category || !img || !price || !company) {
        setError(true)
        return false;
      }

      const response = await fetch('http://localhost:5000/add-product', {
        method: 'POST',
        body: JSON.stringify({ name, category, img, price, company, userId }),
        headers: {
          'Content-type': 'application/json',
        },
        
      });
      console.log(name, category, img, price, company);
      alert("Product added successfully");
      console.log(userId);
      const result = await response.json();
      console.warn(result);
      // Clear the form and reset error state
      setName("");
      setImg("");
      setPrice("");
      setCategory("");
      setCompany("");
      setError(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='product'>
      <form className='product_form' onSubmit={sendProductData}>
        <input type='text' className='add_pd input' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name of Product'></input>
        {error && !name &&<span className='error_mess'>Please enter a valid name</span>}
        <input type='text' className='add_pd input' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price'></input>
        {error && !price &&<span className='error_mess'>Please enter a valid price</span>}
        <input type='text' className='add_pd input' value={img} onChange={(e) => setImg(e.target.value)} placeholder='Image Url'></input>
        {error && !img &&<span className='error_mess'>Please enter a valid Image URL</span>}
        <input type='text' className='add_pd input' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Category'></input>
        {error && !category &&<span className='error_mess'>Please enter a valid category</span>}
        <input type='text' className='add_pd input' value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Company'></input>
        {error && !company &&<span className='error_mess'>Please enter a valid company</span>}
        <button type='submit' className='add_pd add_pd_button input'>Add Product</button>
      </form>
    </div>
  );
}

export default AddProducts;
