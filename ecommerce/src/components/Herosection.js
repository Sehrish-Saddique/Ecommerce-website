import React from 'react'
import image from './image/1.png'
const Herosection = ({ myData })=> {
 const {name} = myData;
  return (
    <>
    
    <center class="align-card">
  <h5 id="product">{name}</h5>
  <div id="Cards" class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col">
      <div class="card">
        <center>
          <img src= {image} class="card-img-top  img-fluid" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Herbal Medicine</h5>
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <div class="Price">1,999 Rs</div>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        </center>
      </div>
    </div>

    <div class="col">
      <div class="card">
        <center>
          <img src="../image/2.png" class="card-img-top  img-fluid" alt="..."/>
          <div class="card-body">
          <h5 class="card-title">Herbal Medicine</h5>
          <div class="stars">⭐⭐⭐⭐⭐</div>
           <div class="Price">1,999 Rs</div>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Buy Now</a>
          </div>

        </center>
      </div>
    </div>

    <div class="col">
      <div class="card">
        <center>
          <img src="../image/3.png" class="card-img-top  img-fluid" alt="..."/>
          <div class="card-body">
          <h5 class="card-title">Herbal Medicine</h5>
          <div class="stars">⭐⭐⭐⭐⭐</div>
           <div class="Price">1,999 Rs</div>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Buy Now</a>
          </div>

        </center>
      </div>
    </div>

    <div class="col">
      <div class="card">
        <center>
          <img src="./image/4.png" class="card-img-top  img-fluid" alt="..."/>
          <div class="card-body">
          <h5 class="card-title">Herbal Medicine</h5>
          <div class="stars">⭐⭐⭐⭐⭐</div>
           <div class="Price">1,999 Rs</div>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Buy Now</a>
          </div>

        </center>
      </div>
    </div>

    </div>
<br/>
    <center>
      <div id="Cards" class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card">
            <center>
              <img src="./image/1.png" class="card-img-top  img-fluid" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Herbal Medicine</h5>
              <div class="stars">⭐⭐⭐⭐⭐</div>
               <div class="Price">1,999 Rs</div>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Buy Now</a>
              </div>

            </center>
          </div>
        </div>
    
        <div class="col">
          <div class="card">
            <center>
              <img src="./image/2.png" class="card-img-top  img-fluid" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Herbal Medicine</h5>
              <div class="stars">⭐⭐⭐⭐⭐</div>
               <div class="Price">1,999 Rs</div>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Buy Now</a>
              </div>

            </center>
          </div>
        </div>
    
        <div class="col">
          <div class="card">
            <center>
              <img src="./image/3.png" class="card-img-top  img-fluid" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Herbal Medicine</h5>
              <div class="stars">⭐⭐⭐⭐⭐</div>
               <div class="Price">1,999 Rs</div>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Buy Now</a>
              </div>

            </center>
          </div>
        </div>
    
        <div class="col">
          <div class="card">
            <center>
              <img src="./image/4.png" class="card-img-top  img-fluid" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Herbal Medicine</h5>
              <div class="stars">⭐⭐⭐⭐⭐</div>
               <div class="Price">1,999 Rs</div>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Buy Now</a>
              </div>

            </center>
          </div>
        </div>
    
        </div>
    </center>

  </center>
    
    
    </>
  )
};
export default Herosection;
