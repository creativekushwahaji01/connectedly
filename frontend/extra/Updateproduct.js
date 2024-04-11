import React, { useEffect } from 'react';
import { useParams , Navigate, useNavigate} from 'react-router-dom';

function Updateproduct() {
    const [name, setName] = React.useState('');
    const [img, setImg] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error, setError] = React.useState(false);
    const params = useParams();
    const navigate=useNavigate()

    useEffect(() => {
        getdatainfo();
    }, []); // Empty dependency array to run the effect only once when the component mounts

    const getdatainfo = async () => {
        try {
            let result = await fetch(`http://localhost:5000/product/${params.id}`);
            result = await result.json();
            console.warn(result);
            setName(result.name);
            setPrice(result.price);
            setCompany(result.company);
            setCategory(result.category);
            setImg(result.img);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    const Updateproduct = async () => {
        try {
            console.warn(name, category, price, img, company);
            let result = await fetch(`http://localhost:5000/product/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({ name, category, price, img, company }),
                headers: {
                    'Content-type': 'application/json',
                },
            });
            result = await result.json();
            console.warn(result);
            navigate('/')
        } catch (error) {
            console.error('Error updating product:', error);
            // Handle error here, e.g., setError(true);
        }
    };

    return (
        <div className="product">
            <div className="product_form">
                <input
                    type="text"
                    className="add_pd input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name of Product"
                ></input>
                {error && !name && <span className="error_mess">please enter valid name</span>}
                <input
                    type="text"
                    className="add_pd input"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                ></input>
                {error && !price && <span className="error_mess">please enter valid price</span>}
                <input
                    type="text"
                    className="add_pd input"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                    placeholder="Image Url"
                ></input>
                {error && !img && <span className="error_mess">please enter valid ImageURL</span>}
                <input
                    type="text"
                    className="add_pd input"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Category"
                ></input>
                {error && !category && <span className="error_mess">please enter valid name</span>}
                <input
                    type="text"
                    className="add_pd input"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company"
                ></input>
                {error && !company && <span className="error_mess">please enter valid company</span>}
                <button type="button" onClick={Updateproduct} className="add_pd add_pd_button input">
                    update Product
                </button>
            </div>
        </div>
    );
}

export default Updateproduct;
