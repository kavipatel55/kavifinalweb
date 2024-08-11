import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Add() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [pricing, setPricing] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('pricing', pricing.toString());

    fetch('http://localhost:3131/api/products/createProduct', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setName('');
        setDescription('');
        setImage(null);
        setPricing('');
        
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Failed to create product');
      });
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="mainDiv" style={{ marginTop: '0' }}>
      <Card className="divCard" style={{ padding: '5%' }}>
        <h1 style={{ marginBottom: '3%', color: 'red' }}>Create Product</h1>
        <Form onSubmit={handleSubmit} method="POST">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formProductName">
              <div className="form-floating mb-2">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter product Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Label htmlFor="formProductName">Product Name</Form.Label>
              </div>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formProductDescription">
              <div className="form-floating mb-2">
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder="Enter product description"
                  style={{ height: '100px' }}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Form.Label htmlFor="formProductDescription">
                  Product Description
                </Form.Label>
              </div>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formProductImage">
            <div className="mb-2">
              <Form.Control
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formProductPricing">
              <div className="form-floating mb-2">
                <Form.Control
                  type="text"
                  name="pricing"
                  placeholder="Enter product price"
                  value={pricing}
                  onChange={(e) => setPricing(e.target.value)}
                />
                <Form.Label htmlFor="formProductPricing">Pricing</Form.Label>
              </div>
            </Form.Group>
          </Row>

          <div style={{ float: 'right' }}>
            <Button variant="outline-danger" type="button" className="me-2">
              Cancel
            </Button>
            <Button variant="info" type="submit">
              Create Product
            </Button>
          </div>
        </Form>
        {message && <p className="mt-3">{message}</p>}
      </Card>
    </div>
  );
}

export default Add;
