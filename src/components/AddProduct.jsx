import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { BallTriangle } from "react-loader-spinner";
import upload from "../assets/upload_area.png";
import axios from "axios";
import './CSS/AddProduct.css'
const AddProduct = () => {
    const [loader, setLoader] = useState(false);
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
      });

    const navigate = useNavigate();

    const handleproduct = async () => {

    };

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((prevData) => ({ ...prevData, [name]: value }));
      };

      const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);
    
        try {
          const response = await axios.post(`${url}`, formData);
    
          if (response.status === 201) {
            setData({
              name: "",
              description: "",
              price: "",
              category: "",
            });
            setImage(null);
            toast.success(response.data.message);
          } else {
            console.error('Failed to add the product:', response.data.message);
            toast.error(response.data.message);
          }
        } catch (error) {
          if (error.response) {
            console.error('Server responded with a status:', error.response.status);
            console.error('Response data:', error.response.data);
          } else if (error.request) {
            console.error('No response received:', error.request);
          } else {
            console.error('Error setting up the request:', error.message);
          }
        }
      };

    return (
        <div className="product">
            <div className="productDiv">
                <h1>Add Products</h1>
              
              
              
                <div className="add-image">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img
                            src={!image ? upload : URL.createObjectURL(image)}
                            alt=""
                        />
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={(e) => setImage(e.target.files[0])}
                        hidden
                        required
                    />
                </div>
                <div className="add-product-name">
                    <p>Product Name</p>
                    <input
                        type="text"
                        name="name"
                        placeholder="Product name"
                        onChange={onChangeHandler}
                        value={data.name}
                        required
                    />
                </div>
                <div className="add-product-description">
                    <p>Product description</p>
                    <textarea
                        name="description"
                        onChange={onChangeHandler}
                        value={data.description}
                        rows={2}
                        placeholder="Write content here"
                        required
                    />
                </div>
                <div className="add-product-price">
                    <p>Product Price</p>
                    <input
                        type="number"
                        name="price"
                        placeholder='Price'
                        onChange={onChangeHandler}
                        value={data.price}
                        required
                    />
                </div>
                <div className="add-product-category">
                    <p>Product Category</p>
                    <select
                        name="category"
                        id="category"
                        onChange={onChangeHandler}
                        value={data.category}
                        required
                    >
                        <option value="Home Decor">Home Decor</option>
                        <option value="Kitchen">Kitchen</option>
                        <option value="clothing">Clothing</option>
                     
                    
                       
                       
                    </select>
                </div>
                <BallTriangle
                    height={50}
                    width={50}
                    radius={5}
                    color="white"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={loader}
                />
                <button onClick={handleproduct}>{" product "}</button>
              
            </div>
        </div>
    )
}

export default AddProduct
