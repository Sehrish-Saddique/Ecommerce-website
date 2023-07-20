import React from 'react'

export default function Footer() {
  return (
    <>
        <footer class="footer text-center text-lg-start  mt-5">
    {/* <!-- Grid container --> */}
    <div class="container p-4">
      {/* <!--Grid row--> */}
      <div class="row">
        {/* <!--Grid column--> */}
        <div class="col-lg-5 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase link">E-Commerce Store</h5>
          <p>Nurture your health naturally with our range of herbal medicines, blending tradition and science for optimal results.
            Growing greenery with love and care, for a greener and healthier world.</p>
         
        </div>
        {/* <!--Grid column--> */}
        <div class="col-lg-2 col-md-6 mb-4 mb-md-0"></div>
       
  
        {/* <!--Grid column--> */}
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase link">Links</h5>
  
          <ul class="list-unstyled mb-0 "> 
            <li>
              <a href="./index.html" class="text-color">Home</a>
            </li>
            <li>
              <a href="#product" class="text-color">Products</a>
            </li>
            <li>
              <a href="./cart.html" class="text-color">Cart</a>
            </li>
            <li>
              <a href="./contact.html" class="text-color">Contact us</a>
            </li> 
          </ul>
        </div>
        {/* <!--Grid column--> */}
  
        {/* <!--Grid column--> */}
        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase  link">Links</h5>
  
          <ul class="list-unstyled">
            <li>
              <a href="https://pk.linkedin.com/" class="text-color">LinkedIn</a>
            </li>
            <li>
              <a href="https://twitter.com/" class="text-color">Twitter</a>
            </li>
            <li>
              <a href="https://www.pinterest.com/" class="text-color">Pinterest</a>
            </li>
            <li>
              <a href="https://www.instagram.com/" class="text-color">Instagram</a>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}
        
      </div>
      {/* <!--Grid row--> */}
    </div>
    {/* <!-- Grid container --> */}
  
    {/* <!-- Copyright --> */}
    <div class="text-center p-3">
      © 2023 Copyright:
      <a class="text-color" href="index.html">E-commerce Store</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>
    </>
  )
}
