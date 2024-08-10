import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Add() {
    const [image, setImage] = useState(null);
    const [productInfo, setProductInfo] = useState({
        name: '',
        category: '',
        description: '',
        pricing: '',
        rating: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductInfo({
            ...productInfo,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const addProduct = async (e) => {
        e.preventDefault();

        if (!image) {
            console.error('Please select an image.');
            return;
        }

        const formData = new FormData();
        formData.append('name', productInfo.name);
        formData.append('description', productInfo.description);
        formData.append('pricing', productInfo.pricing);
        formData.append('image', image);
        
        try {
            const response = await fetch("http://localhost:3001/api/products/createProduct", {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Product added successfully:', data);
            } else {
                console.error('Failed to add product:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding product:', error.message);
        }
    };

    return (
        <>
            <div className="mainDiv" style={{ marginTop: "0" }}>
                <form className="card divCard" style={{ padding: "5%" }} onSubmit={addProduct} >
                    <h1 style={{ marginBottom: "3%", color: "red" }}>
                        Add Product
                    </h1>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">
                            <div className="form-floating mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    id="floatingName"
                                    onChange={handleChange}
                                    placeholder="Enter product Name"
                                />
                                <label htmlFor="floatingName">Product Name</label>
                            </div>
                        </Form.Group>

                        
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridImage">
                        <div className="mb-2">
                            <input
                                type="file"
                                className="form-control"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridDescription">
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className="form-control"
                                name="description"
                                onChange={handleChange}
                                placeholder="Enter Product description"
                            />
                            <label htmlFor="floatingDescription">Product Description</label>
                        </div>
                    </Form.Group>

                    <Row className="mb-2">
                        <Form.Group as={Col} controlId="formGridPricing">
                            <div className="form-floating mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="pricing"
                                    onChange={handleChange}
                                    placeholder="Enter Product Price"
                                />
                                <label htmlFor="floatingPricing">Pricing</label>
                            </div>
                        </Form.Group>
                    </Row>

                    <div style={{ float: "right" }}>
                        <button className="btn btn-outline-danger" type="button">
                            Cancel
                        </button>&nbsp;&nbsp;
                        <button className="btn btn-info" type="submit">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Add;
