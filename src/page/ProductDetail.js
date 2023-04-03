import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/hijiyun/hnm-json-server/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail();
  },[])
  return (
    <Container>
      <Row className='product-all'>
        <Col className="product-img">
          <img src={product?.img} alt="이미지 사진" />
        </Col>

        <Col className="product-content">
          <h3>{product?.title}</h3>
          <h5>₩{product?.price}</h5>
          <div className='product-choice'>{product?.choice ? "Conscious choice" : ""}</div>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">XS</Dropdown.Item>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              <Dropdown.Item href="#/action-3">XL</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button id="product-btn" variant="dark">추가</Button>
          <Button id="product-btn" variant="dark">쇼핑백 담기</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail