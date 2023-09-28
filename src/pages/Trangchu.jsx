import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import '../styles/Trangchu.css';
import image1 from '../assets/images/bannerdau1.png';
import image2 from '../assets/images/banner22.png';
import image3 from '../assets/images/Red Yellow Simple Creative Delicious Ramen Promotion Banner.png';
import image4 from '../assets/images/banner5.jpg';
import shipper from '../assets/images/shipper.png';
import product_07 from '../assets/images/product_07.png';

import products from '../assets/fake-data/product.js';
import cate1 from '../assets/images/category-01.png';
import cate2 from '../assets/images/category-02.png';
import cate3 from '../assets/images/category-03.png';

import ProductCard from '../components/UI/product-card/ProductCard';





const Trangchu = () => {

  const [category, setCategory] = useState('ALL')
  const [allProducts, setAllProducts] = useState(products)
  
  
  useEffect(()=> {
    if(category === 'ALL' ) {
      setAllProducts(products)
    }
  
    if(category === 'BURGER'){
      const filteredProducts = products.filter(item=> item.category ===
        'Burger')
      setAllProducts(filteredProducts)
    }
  
    if(category === 'PIZZA'){
      const filteredProducts = products.filter(item=> item.category ===
        'Pizza')
      setAllProducts(filteredProducts)
    }
  
    if(category === 'CHICKEN'){
      const filteredProducts = products.filter(item=> item.category ===
        'Gà rán')
      setAllProducts(filteredProducts)
    }

    if (category === 'KHAC') {
      const filteredProducts = products.filter(item => item.category !== 'Burger' && item.category !== 'Pizza' && item.category !== 'Gà rán');
      setAllProducts(filteredProducts);
    }
  }, [category]);


  
    return (
      <Helmet title="Trang chủ">
        
          <section>
            <Carousel autoPlay={true} showArrows={false} showThumbs={false} interval={1000} infiniteLoop={true} className="custom-carousel">
              <div>
                <img src={image1} alt="" />
              </div>
              <div>
                <img src={image2} alt="" />
              </div>
              <div>
                <img src={image3} alt="" />
              </div>
            </Carousel>
        </section>

  
      <div className='about_container'>
          <div className='about_image'>
            <img src={image4} alt=''/>
          </div>
          <div className='about_content'>
            <h1>VỀ TUTI</h1>
            <p>TUTIFOOD  thừa nhận và tôn trọng thông tin bí mật của những cá nhân đăng nhập vào trang web của TUTIFOOD. 
            Chính sách này bao gồm thông tin cá nhân mà TUTIFOOD và bên nhượng quyền và đại diện các bên nhượng quyền của TUTIFOOD 
            muốn sử dụng, quản lý và bảo vệ thông tin cá nhân của khách khi đăng nhập hoặc đặt hàng qua trang web TUTIFOOD.
            TUTIFOOD có quyền xem xét lại chính sách bảo mật này theo thời gian khi thấy cần thiết, 
            vì vậy hãy thường xuyên kiểm tra thông tin cập nhật. Chính sách bảo mật này sẽ áp dụng từ tháng 1 năm 2023 muốn sử dụng, 
            quản lý và bảo vệ thông tin cá nhân của khách khi đăng nhập hoặc đặt hàng qua trang web TUTIFOOD.
            quản lý và bảo vệ thông tin cá nhân của khách khi đăng nhập hoặc đặt hàng qua trang web TUTIFOOD...</p>
            <Link to="/gioithieu">
           <button className='about_button'>Xem thêm</button>
           </Link>
          </div>
         </div>

  
         <section>
          <Container>
            <Row>
              <Col lg='12' className='text__center'>
                <h2>Nổi Bật</h2>
              </Col>
              <Col lg='12'>
              <div className='food__category d-flex align-content-center 
              justify-content-center gap-5'>
                <button 
                className={`all__btn  ${
                  category === "ALL" ? "foodBtnActive" : ""
                } `}
                onClick={()=>setCategory('ALL')}
                >
                All
                </button>
                <button className={`d-flex align-items-center gap-2 ${
                      category === "BURGER" ? "foodBtnActive" : ""
                    } `}
                onClick={()=>setCategory('BURGER')}
                >
                  <img src={cate1} alt=''/>
                  Burger
                  </button>
  
                <button className={`d-flex align-items-center gap-2 ${
                      category === "PIZZA" ? "foodBtnActive" : ""
                    } `}
                onClick={()=>setCategory('PIZZA')}
                >
                  <img src={cate2} alt=''/>
                  Pizza
                  </button>
  
                <button className={`d-flex align-items-center gap-2 ${
                      category === "CHICKEN" ? "foodBtnActive" : ""
                    } `}
                onClick={()=>setCategory('CHICKEN')}
                >
                  <img src={cate3} alt=''/>
                  Gà rán
                  </button>   

                  <button className={`d-flex align-items-center gap-2 ${
                    category === "KHAC" ? "foodBtnActive" : ""
                       } `}
                        onClick={()=>setCategory('KHAC')}
                      >
                        <img src={cate3} alt=''/>
                     Khác
                    </button>
                </div>
            </Col>
            {
                    allProducts.map((item) => (
                    <Col lg="3" md="4" key={item.id} className="mt-5">
                  <ProductCard item={item} price={`${item.price} VND`} />
             </Col>
               ))
               }
            </Row>
          </Container>
         </section>


        <section>
          <Container>
        <Row>
               <Col lg='6' md='6'>
               <img src={shipper} alt="" className="w-100"/>
               </Col>

               <Col lg='6' md='6'>
                  <div className="why__tuti">
                    <h2 className="why__tuti-title mb-4">
                      Tại sao nên chọn<span> TUTI FOOD ?</span></h2>

                    <ListGroup className="mt-4">
                      <ListGroupItem className="border-0 ps-0">
                      <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-motorbike-line"></i>Vận Chuyển</p>
                      <p className="choose__us-desc">Tiết kiệm thời gian di chuyển khi chúng ta có thể dễ dàng 
                        đặt hàng online</p>
                      </ListGroupItem>

                      <ListGroupItem className="border-0 ps-0">
                      <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-shopping-cart-line"></i>Món Ăn </p>
                      <p className="choose__us-desc">Tiết kiệm thời gian di chuyển khi chúng ta có thể dễ dàng 
                        đặt hàng online</p>
                      </ListGroupItem>

                      <ListGroupItem className="border-0 ps-0">
                      <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-wallet-3-line"></i>Giá Cả</p>
                      <p className="choose__us-desc">Tiết kiệm thời gian di chuyển khi chúng ta có thể dễ dàng 
                        đặt hàng online</p>
                      </ListGroupItem>

                      <ListGroupItem className="border-0 ps-0">
                      <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-gift-line"></i>Khuyến Mãi</p>
                      <p className="choose__us-desc">Tiết kiệm thời gian di chuyển khi chúng ta có thể dễ dàng 
                        đặt hàng online</p>
                      </ListGroupItem>

                    </ListGroup>
                  </div>
               </Col>
        </Row>
          </Container>
        </section>



        <section>
        <Container>  
        <Row>
        <Col lg='12' className='text__km mb-3'>
            <h2>Khuyến Mãi</h2>
            <Link to="/khuyenmai" className="all__km">Xem tất cả<i class="ri-arrow-right-s-fill"></i></Link>
        </Col>
        </Row>

        <Row>
        <Col lg='3' md='6'>
      <div className="promotion__item " style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <img src={product_07} alt="Khuyến Mãi" className="w-100" />
      <h3>ƯU ĐÃI TRI ÂN - HÂN HOAN ĐÓN LỄ LỚN</h3>
      <p>21/09/2023</p>
      <button className="view-promotion-button">Xem thêm</button>
      </div>
        </Col>

 
       <Col lg='3' md='6'>
       <div className="promotion__item" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <img src={product_07} alt="Khuyến Mãi" className="w-100" />
      <h3>ƯU ĐÃI TRI ÂN - HÂN HOAN ĐÓN LỄ LỚN</h3>
      <p>21/09/2023</p>
      <button className="view-promotion-button">Xem thêm</button>
      </div>
      </Col>

      <Col lg='3' md='6'>
      <div className="promotion__item" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <img src={product_07} alt="Khuyến Mãi" className="w-100" />
      <h3>ƯU ĐÃI TRI ÂN - HÂN HOAN ĐÓN LỄ LỚN</h3>
      <p>21/09/2023</p>
      <button className="view-promotion-button">Xem thêm</button>
      </div>
      </Col>

      <Col lg='3' md='6'>
      <div className="promotion__item" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <img src={product_07} alt="Khuyến Mãi" className="w-100" />
      <h3>ƯU ĐÃI TRI ÂN - HÂN HOAN ĐÓN LỄ LỚN</h3>
      <p>21/09/2023</p>
      <button className="view-promotion-button">Xem thêm</button>
      </div>
      </Col>
      </Row>
        </Container>
      </section>




       
      </Helmet>
    );
  }
  
  export default Trangchu;