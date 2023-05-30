import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import './App.css';

const App = () => {
  return (
    <div className='container-fluid section'>
      <div className="d-lg-flex d-sm-vstack gap-2 mx-auto">
        <div className="img container-fluid">
          <img src="./src/images/perfume-img.jpg" className='w-100 h-auto' alt="this is an images" />
        </div>
        <div className="wordings container-fluid mt-4">
          <h4>PERFUME</h4>
          <h1 className='mt-3'>Gabrielle <br />Essence Eau <br />De Parfum</h1> 
          <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores error nobis voluptas repellat maxime, at laboriosam mollitia dolores officiis? Sed fugiat commodi mollitia architecto, nobis quos temporibus molestias nesciunt sequi.L</p>
          <div className=" container-fluid d-lg-flex d-sm-vstack gap-2 mx-auto price">
            <h1>$149.99</h1>
            <p className='text-decoration-line-through ms-3'>$200.00</p>
          </div>
          <Button variant='btn btn-outline-success w-100'><span className='me-3'><img src="./src/images/cart-4.png" alt="this is an images" /></span>Add to cart</Button>
        </div>
      </div>
    </div>
  )
}

export default App
