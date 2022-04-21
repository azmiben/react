import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function AZERTY() {
  return (
    <div className='div'>
        <form className='card'>
    <div className='first'>
      <label >Email address :</label><br />
      <input type="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div><br />
    <div className='second'>
      <label >Password :</label><br />
      <input type="password"  placeholder="Password"/>
    </div><br />
    <div className='third'>
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label >Check me out</label>
    </div ><br />
    <button className='sub' type="submit" >Submit</button>
    </form>
  <div className='select'>
<div className='google'>
<a href="">join with GOOGLE</a>
</div><br /><br />
<div className='linked'>  
<a href="https://www.google.com/">join with GOOGLE</a>
</div><br />
<div className='fb' >    
<a href="">join with GOOGLE</a>
</div>
</div>
</div>
  )
}

export default AZERTY