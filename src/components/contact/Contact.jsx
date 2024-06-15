import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609844306!2d72.741099319576!3d19.082197839432754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63e745394ab%3A0x402232b7a4bb5e6b!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1652535615693!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any query you might have</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Vasantdada Patil Education Complex, Eastern Express Highway Near Everard Nagar, Chunabhatti, Sion, Mumbai, Maharashtra 400022</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> vppcoe@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> 022 2084 7226 </p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here:
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
