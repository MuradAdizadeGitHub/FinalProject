import React from 'react'
import videoBg from '../../../assets/homepage_video.mp4'
function SectionVideo() {
  return (
   <>
   <section>
    <div>
        <video className='video' src={videoBg} autoPlay loop muted></video>
    </div>
   </section>
   </>
  )
}

export default SectionVideo
