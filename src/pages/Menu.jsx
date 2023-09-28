import React, {useState, useEffect} from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection';

import { Container, Row, Col } from "reactstrap"

import products from '../assets/fake-data/product';
import ProductCard from '../components/UI/product-card/ProductCard';
import ReactPaginate from 'react-paginate';

import '../styles/me-nu.css';
import '../styles/pagination.css';


const Menu = () => {
  
  const [searchTerm, setSearchTerm] = useState('');

  const [pageNumber, setpageNumber] = useState(0);

  const searchedProduct = products.filter((item) =>{
          
    if(searchTerm.value === ' ') return item;
    if(item.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    )
    return item;
    })
  const productPerPage = 8
  const visitedPage = pageNumber * productPerPage
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)
  
  const pageCount = Math.ceil(products.length / productPerPage)

  const changePage = ({selected})=>{
    setpageNumber(selected)
  }

  
  return(
    <Helmet title ='Thực đơn'>
    <CommonSection title ='THỰC ĐƠN'/>


    <section>
      <Container>
        <Row>  
          <Col lg="6" md="6" sm="6" className='w-3'>
          <div className="search__widget mt-3">
            
    <div className="input-group">
      <input
        type="text"
        className="search__widge "
        placeholder="Tìm kiếm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
       

      />
      <div className="input-group-append">
        <span className="input-group-text custom-icon">
          <i className="ri-search-line"></i>
                </span>
            </div>
            </div>
  </div>
          </Col>
          <Col lg='6' md='6' sm='6' className='mb-5'>
          <div className="sorting__widget text-end mt-3">
            <select className='w-40'>
              <option>Sắp xếp</option>
              <option value="ascending">A-Z</option>
              <option value="descending">Z-A</option>
              <option value="high-price">Giá cao nhất</option>
              <option value="low-price">Giá thấp nhất</option>
            </select>
          </div>
          </Col>
          

          {displayPage
        
          .map((item)=>( 
            <Col lg='3' md ='4' sm ='6' xs ='6' key={item.id}
             className='mb-4' >
              <ProductCard item={item} />
            
            </Col>
              
            ))
          }
          <div>
            <ReactPaginate
             pageCount={pageCount}
             onPageChange={changePage}
             previousLabel = {"Prev"}
             nextLabel={"Next"}
             containerClassName ="paginationBttns"/>
             
          </div>
        </Row>
      </Container>
    </section>
  </Helmet>
  ) 
};

export default Menu