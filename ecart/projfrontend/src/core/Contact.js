import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import "../assets/styles/Contact.css"

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!name || !email || !message) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    console.log('Form submitted successfully.');
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };
  return (
    <>
        <Navbar/>
        <main className="mt-5 pt-4">
          <div>
            <h1 className='text-center'>Contact Us</h1>
            <p className='mx-5 px-5'>
          Trouble with your order? Drop us a line below, and we'll typically
          respond to your email within 24 hours Monday-Friday. On weekends and
          holidays we like to venture off the grid, but we'll respond by the
          next business day. If it's urgent, you can call (385) 219-4767 during
          normal business hours M-F 10am-5pm MST.</p>
          </div>
          <div className="ms-5">
  <div className='d-flex justify-content-center mt-5 mb-5'>
  <form id="contact-form " action="" onSubmit={handleSubmit}>
   <div className='row' style={{maxWidth:"800px"}}>
   <div className='col-lg-6'>
    <label className='d-block'>NAME</label>
    <input type="text" placeholder="Your name" className="form-control rounded" id="name" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div className='col-lg-6'>
    <label className='d-block'>EMAIL</label>
    <input type="text" placeholder="Your email" className="form-control rounded" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div>
    <label className='d-block'>MESSAGE</label>
      <textarea  placeholder="Message" className="input form-control rounded" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
    </div>
    <div className="text-danger" id="errorcontact">
    {errorMessage && <p>{errorMessage}</p>}
    </div>
    <div className='text-center'>
    <button className='btn btn-primary mt-2' style={{width:"200px"}}>Submit</button>
    </div>
   </div>
  </form>
  </div>
</div>

        </main>

        <Footer/>
    </>
  )
}

export default Contact