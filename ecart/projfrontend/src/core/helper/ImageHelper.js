import React from 'react'

const ImageHelper =({product})=> {
  const imageurl = product ? product.image :`https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  return (
    <div className='rounded border border-success p-2'>
        <img src={imageurl} style={{height:"200px",width:"200px"}} className='mb-3 rounded' alt=''/>
    </div>
  )
}

export default ImageHelper