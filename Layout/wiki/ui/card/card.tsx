import React, { ReactNode } from 'react';
import styles from './card.module.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import Icon from '@bit/littlebox.atd.icons';
import img1 from "./thrones.jpg";
import img2 from "./fire.jpg";
import img3 from "./Crows.jpg";
import img4 from "./Dragons.jpg";
import img5 from "./kings.jpg";
import img6 from "./doors.jpg";
export type CardProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div>
    {children}
    
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
   
     
    </ul>
    <form className="d-flex">
     
    </form>
  </div>
</div>
</nav>




{/* card */}
<div className='container-fluid'>
<h2 className='text-center mt-3 mx-auto'>Virtual Library</h2>

<div className="row row-cols-1 row-cols-md-3 g-4 col-md-10 m-auto w-75 h-50">

<div className="col">
  <div className="card">
    <img src={img1}  className="card-img-top" height="240px"  alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-center">A Game Of Thrones</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <div className="row">
        <div className='col-md-6'>
        $ 99 
        </div>
       <div className='col-md-6 text-end'>
        
      <Icon glyph="cart" />
     
      </div>
    </div>
  </div>
</div>
</div>

<div className="col">
  <div className="card">
    <img src={img2} className="card-img-top" height="240px" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-center">Fire and Blood</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <div className="row">
        <div className='col-md-6'>
        $ 99 
        </div>
       <div className='col-md-6 text-end'>
      <Icon glyph="cart" />
      </div>
    </div>
  </div>
</div>
</div>


<div className="col">
  <div className="card">
    <img src={img3}  className="card-img-top" height="240px" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-center">A Feast For Crows</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
      <div className="row">
        <div className='col-md-6'>
        $ 99 
        </div>
       <div className='col-md-6 text-end'>
      <Icon glyph="cart" />
      </div>
    </div>
  </div>
</div>
</div>
</div>


<div className="row row-cols-1 row-cols-md-3 g-4 col-md-10 m-auto w-75">


<div className="col">
  <div className="card">
    <img src={img4}  className="card-img-top" height="240px" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-center">A Dance With Dragons</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      <div className="row">
        <div className='col-md-6'>
        $ 99 
        </div>
       <div className='col-md-6 text-end'>
      <Icon glyph="cart" />
      </div>
    </div>
  </div>
</div>
</div>

<div className="col">
  <div className="card">
    <img src={img5}  className="card-img-top" height="240px" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-center">A Clash Of Kings</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
      <div className="row">
        <div className='col-md-6'>
        $ 99 
        </div>
       <div className='col-md-6 text-end'>
      <Icon glyph="cart" />
      </div>
    </div>
  </div>
</div>
</div>


<div className="col">
  <div className="card">
    <img src={img6}  className="card-img-top" height="240px" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-center">Lock Every Door</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      <div className="row">
        <div className='col-md-6'>
        $ 99 
        </div>
       <div className='col-md-6 text-end'>
      <Icon glyph="cart" />
      </div>
      </div>
    </div>
  </div>
</div>




</div>

</div>



</div>
  );
}
