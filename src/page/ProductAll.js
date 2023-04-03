import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import {Col, Container, Row} from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [qurry, setQurry] = useSearchParams();
  const getProducts = async()=>{
    let searchQuerry = qurry.get('q') || "";
    console.log("쿼리값은? ", searchQuerry)
    let url = `https://my-json-server.typicode.com/hijiyun/hnm-json-server/products?q=${searchQuerry}`;
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data);
  }
  useEffect(()=>{
    getProducts()
  },[qurry])
  return (
    <div>
      <Container className='container'>
          <Row>
            {productList.map((menu)=>(
            <Col lg={3}> 
              <ProductCard item={menu}/> 
            </Col>
            ))}
          </Row>
      </Container>
      <ProductCard />
    </div>
  )
}

export default ProductAll