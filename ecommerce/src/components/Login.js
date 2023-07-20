import React from 'react'
import signinpic  from "./image/3.png"
const Login = () => {
    return (
    <>
        <div>
        
{/* <!-- Login --> */}
<div className="reg-form">
    <section className="vh-400">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11" >
              <div className="card text-black" id="signupcontainer"  >
                <div className="card-body p-md-4">
                  <div className="row justify-content-center" >
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>
      
                      <form className="mx-1 mx-md-4">
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" className="form-control" />
                            <label className="form-label" for="form3Example1c">Your Name</label>
                          </div>
                        </div>
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control" />
                            <label className="form-label" for="form3Example3c">Your Email</label>
                          </div>
                        </div>
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" className="form-control" />
                            <label className="form-label" for="form3Example4c">Password</label>
                          </div>
                        </div>
                        <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                        <p>Don't have an account? <a href="./registration.html" className="linnk-info">Register here</a></p>
      
                       
      
                        
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-lg">Login</button>
                        </div>
      
                      </form>
      
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
      
                      <img src={signinpic}
                        className="img-fluid " alt="Reg image"/>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</div>
        </div>
    </>
  )
}
export default Login;
