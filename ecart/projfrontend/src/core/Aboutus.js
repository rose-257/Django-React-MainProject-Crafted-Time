import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../assets/styles/All.css"
function Aboutus() {
  return (
    <>
    <Navbar/>
    <main className="">
  <div className="row mb-5">
    <div className="col-lg-6 ">
      <img
        src="https://cdn.feedingtrends.com/article-images/Luxury_Watch_Market_96dc1c45bb.jpg"
        className="h-100 w-100"
        alt="..."
      />
    </div>
    <div className="col-lg-6 d-flex flex-column justify-content-center">
      <div className="text-center">
        <p className="heading">About us</p>
        <p>
          <i>
            
Crafted Time is more than just a watch shopping website; it's a sanctuary for aficionados of horology. We meticulously curate a diverse collection of timepieces, ranging from classic elegance to avant-garde innovation, ensuring that each watch embodies the perfect balance of craftsmanship and style. Our platform not only offers a marketplace for discerning collectors but also serves as a knowledge hub, providing comprehensive guides and reviews to empower enthusiasts of all levels. With a commitment to accessibility and exceptional customer service, Crafted Time strives to make luxury watches attainable without compromising on quality or authenticity. Join us in celebrating the artistry of timekeeping and discovering the perfect timepiece to elevate every moment.
          </i>
        </p>
      </div>
    </div>
  </div>
  <div className="row mt-5 mb-5">
    <div className="col-lg-6 d-flex flex-column justify-content-center">
      <div className="text-center">
        <p className="heading">Our Vision</p>
        <p>
          {" "}
          <i>
           
Crafted Time's vision transcends mere commerce; it's about fostering a global community where the appreciation for watchmaking becomes a shared passion. We aspire to democratize luxury by making high-quality timepieces accessible to all, while also serving as an educational hub where enthusiasts can deepen their understanding and connection with horology. Through curated content and exceptional customer service, we aim to redefine the experience of purchasing a watch, transforming it into a journey of discovery, self-expression, and connection. Crafted Time is not just about selling watches; it's about celebrating the timeless beauty and craftsmanship that each timepiece embodies, inviting everyone to be a part of this enriching and inclusive journey.
          </i>
        </p>
      </div>
    </div>
    <div className="col-lg-6 ">
      <img
        src="https://www.rzewatches.com/cdn/shop/collections/Watches.jpg?v=1680247218"
        className="h-100 w-100"
        alt="..."
      />
    </div>
  </div>
  <div>
  </div>
</main>

    <Footer/>
    </>
  )
}

export default Aboutus