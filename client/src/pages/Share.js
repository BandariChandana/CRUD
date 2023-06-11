import React from 'react'
import {FacebookShareButton, WhatsappShareButton, TwitterShareButton} from "react-share"
import {FacebookIcon,WhatsappIcon} from "react-share"


function Share() {
  return <>
  
   <FacebookShareButton
        url={'https://www.example.com'}
        quote={'Dummy text!'}
        hashtag="#muo"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton url={'https://www.example.com'}
        quote={'Dummy text!'}
        hashtag="#muo">
<WhatsappIcon  size={32} round/>


     </WhatsappShareButton>
  </>
    

}

export default Share