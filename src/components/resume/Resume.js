import React from 'react'

const styles ={

    width:'100% ',
    float:'left',
    height:'auto',
    border:'1px solid #5694cf'
  
}
const Resume = () => {
  return (
    <div style={{styles}}>
<object data="https://docs.google.com/viewer?srcid=1EdTFokmthvTL5Om7z29-MZyvGQp2z4o4&pid=explorer&efh=false&a=v&chrome=false&embedded=true" width="100%" height="800vh">
<p>Your web browser doesn't have a PDF Plugin. Instead you can <a href="https://docs.google.com/viewer?srcid=1EdTFokmthvTL5Om7z29-MZyvGQp2z4o4&pid=explorer&efh=false&a=v&chrome=false&embedded=true"> Click
here to download the PDF</a></p>
</object>
</div>
  )
}

export default Resume
// https://drive.google.com/file/d/1EdTFokmthvTL5Om7z29-MZyvGQp2z4o4/view?usp=sharing
//<iframe src="https://docs.google.com/viewer?srcid=1EdTFokmthvTL5Om7z29-MZyvGQp2z4o4&pid=explorer&efh=false&a=v&chrome=false&embedded=true" width="60%" height="100%"></iframe>
