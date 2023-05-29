import React from 'react'
import '../Components/homepage.css'

function Homepage() {
  return (
    <div style={{display:"flex"}}>
      <div style={{width:"220px", background: "#0B3366",height:"100vh"}}>

        <img src="https://i.ibb.co/HT4cLcX/logo.png" style={{marginTop:"30px",marginBottom:"40px"}}/>

        <div style={{marginTop:"-10px"}}>
        <p className='para'>DASHBOARD</p>

<p className='para'>CAMPAIGNS</p>

<p className='para'>COMMANDS</p>

<p className='para'>ZONES</p>

<p className='para'>CHANNELS</p>

<p className='para'>DEVICES</p>

<p className='para'>MEDIA LIBRARY</p>

<p className='para'>HISTORY</p>
        </div>

      </div>

<div style={{background:"#F6F6F6"}}>
<div style={{width:"100%",height:"58px",textAlign:"right",background:"#FAFAFA"}}>
      <img src="https://i.ibb.co/m5L5JgJ/side.png" alt="side" border="0" style={{height:"58px",marginRight:"10px"}}/>
      </div>

      <div >
        <h2 style={{width:"74px",color: "#000000",font: "24px",fontWeight:"400",
fontFamily:"Proxima Nova",textTransform:"capitalize",marginLeft:"20px"}}>Project</h2>
      </div>

      <div style={{display:"flex",marginLeft:"20px",marginBottom:"20px"}}>
      <img src="https://i.ibb.co/64m4Hrk/a1.png" alt="a1" border="0"/>
      <img src="https://i.ibb.co/k2Cprtc/a2.png" alt="a2" border="0"/>
      </div>

      <div>

      <div style={{display:"flex",gap:"20px",background:"#F6F6F6",marginLeft:"20px",marginRight:"20px"}}>

<div>
<div>
<img src="https://i.ibb.co/HXfnYZm/gen.png" alt="gen" border="0" style={{width:"393px",height:"195px"}}/>
</div>
<div>
<img src="https://i.ibb.co/cy2gQVP/de.png" alt="de" border="0" style={{width:"393px",height:"206px",marginTop:"20px"}}/>
</div>
</div>

<div>
<div>
<img src="https://i.ibb.co/G0KbMt3/liv.png" alt="liv" border="0"style={{width:"384px",height:"195px"}}/>
</div>
<div>
<img src="https://i.ibb.co/tXNY8fw/ac.png" alt="ac" border="0"style={{width:"384",height:"206px",marginTop:"20px"}}/>
</div>
</div>

<div>
<div>
<img src="https://i.ibb.co/4tjBLtd/lo.png" alt="lo" border="0" style={{width:"429px",height:"262px"}}/>
</div>
<div>
<img src="https://i.ibb.co/3RSML9X/do.png" alt="do" border="0" style={{width:"429px",height:"140px",marginTop:"20px"}}/>
</div>
</div>
</div>
      </div>

  


      </div>
</div>


  )
}

export default Homepage
