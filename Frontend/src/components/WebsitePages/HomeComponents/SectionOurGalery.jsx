import React from 'react'
import './HomeComponents.scss'
import { Link } from 'react-router-dom'

function SectionOurGalery() {
  return (
 <>
 <section className='ourgalery'>
   <div className='container'>
   <div className='ourgalerygeneral'>
   <div className='ourgaleryhead'>
        <p className='ourgalerytext'>
        Our Gallery
        </p>
    </div>
   <div className='line-general'> <div className='line'></div><img className='icon-rose' src="/public/rose.png" alt="" />  <div className='line'></div></div>
    <div className='ourgalery-general'>
    <img className='ourgalery-img' src="https://preview.colorlib.com/theme/wedding2/images/gallery-1-600x400.jpg.webp" alt="" />     
    <img className='ourgalery-img' src="https://preview.colorlib.com/theme/wedding2/images/gallery-2-600x400.jpg.webp" alt="" />
    <img className='ourgalery-img' src="https://preview.colorlib.com/theme/wedding2/images/gallery-3-600x400.jpg" alt="" />
    <img className='ourgalery-img' src="https://preview.colorlib.com/theme/wedding2/images/gallery-4-600x400.jpg" alt="" />
    <img className='ourgalery-img' src="https://preview.colorlib.com/theme/wedding2/images/gallery-5-600x400.jpg" alt="" />
    <img className='ourgalery-img' src="https://www.southernliving.com/thmb/_DTHAquZBLEHKLIgPi_C3fFIhNo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-929904308-aeeb687413714dacace50062cece530a.jpg" alt="" />
    </div>
    <div>
        <button className='ourgalery-button'><Link className='viewgaley'>VIEW ALL GALERY</Link></button>
    </div>
   </div>
   </div>
 </section>
 </>
  )
}

export default SectionOurGalery
