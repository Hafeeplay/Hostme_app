import React from 'react'

function Website() {
  return (
    <div>
    <header style={{position: 'relative'}} >

<div className="w3-top header"  id="home">
<div className="w3-bar  w3-card w3-left-align w3-large heeder-large-screen" style={{backgroundColor: '#000015' }} >
  <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-black w3-large " href=' "no-script-url": 0' onClick="myFunction()" title="Toggle Navigation Menu"><i className="fa fa-bars"></i></a>
  <a href="#home" className="w3-bar-item w3-button w3-padding-large  w3-hover-black">Data-Code</a>
  <div >
    <a href="#about" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black" >About</a>
    <a href="#games" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black"> Packages</a>
    <a href="#shop" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black">Products</a>
    <a href="#events" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black">Blogs</a>
    <a href="#contact" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black">Logout</a>
    {/* <button onclick="setTimeout(, 3000);">Try it</button> */}
    {/* <button type="button" onClick="time()">click to show the time</button> */}
  </div>

</div>

{/* <!-- Navbar on small screens --> */}
<div id="navDemo" className="w3-bar-block  w3-hide w3-hide-large w3-hide-medium w3-large">
  <a href="#about" className="w3-bar-item w3-button w3-padding-large"onClick="myFunction()">About</a>
  <a href="#games" className="w3-bar-item w3-button w3-padding-large"onClick="myFunction()">Packages</a>
  <a href="#shop" className="w3-bar-item w3-button w3-padding-large" onClick="myFunction()">Products</a>
  <a href="#events" className="w3-bar-item w3-button w3-padding-large" onClick="myFunction()">Blogs</a>
  <a href="#contact" className="w3-bar-item w3-button w3-padding-large" onClick="myFunction()">Logout</a>
</div>
</div>
</header>
<section >
   <div className="hero" id="about">
     <div className="hero-description">
       <div className="hero-text">
        <h1 className="hero-title">Lets us help you to make your web surfing secure🔐🔐 </h1>
        <p>
         This a website where you spy others.this website has mainly two packages the first one is data logger this helps you to know what the user does in his pc and the other is data logger catcher this helps you to detect any kind ok data logger installed in your pc and helps to delete it
        </p>
        <span className="w3-text-white social" style={{ marginTop:'050px'}}>
          <p >Follow us and know more about us on social media😍</p>
           <div className="w3-margin-top">
        <a href="/#">  <i className="fa fa-facebook-official w3-hover-opacity icons" ></i></a>  
        <a href="/#"><i className="fa fa-instagram w3-hover-opacity icons" ></i></a>  
       <a href="/#"><i className="fa fa-snapchat w3-hover-opacity icons"></i></a>  
       <a href="/#"><i className="fa fa-pinterest-p w3-hover-opacity icons" ></i></a>  
       <a href="/#"><i className="fa fa-twitter w3-hover-opacity icons"></i></a>  
       <a href="/#"><i className="fa fa-linkedin w3-hover-opacity icons"></i></a>  
       </div> 
        </span>
       </div>
     </div>
   </div>
</section>
<h2 className='headd'>LOGGING INFO</h2>

<center><table>
  <tr className='tr1'>
    <th>User Name</th>
    <th>Login time</th>
    <th>Logout time</th>
  </tr>
  <tr className='tr2'>
    <td>Shaik</td>
    <td id='p1'></td>
    <td id='p2'></td>
  </tr>
  <tr className='tr2'>
    <td>Abdul</td>
    <td >Last Sync: 13/12/2022 @ 11:51:50</td>
    <td>13/12/2022 @ 11:52:10</td>
  </tr>
  <tr className='tr2'>
    <td>Hafeez(user 3)</td>
    <td>Last Sync: 13/12/2022 @ 11:53:47</td>
    <td>13/12/2022 @ 11:53:59</td>
  </tr>
  <tr className='tr2'>
    <td>kill</td>
    <td>---</td>
    <td>---</td>
  </tr>
  {/* <tr className='tr2'>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr className='tr2'>
    <td><p id="datebtn">time is =</p></td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr> */}
</table>
</center>
<main style={{ paddingBottom:'40px'}}>
  <h2 className="title" id="games">Please download the packages below</h2>
  <div className="games">
    <div className="game-list">
     <a href ="assets/downloads/tsetup-x64.4.3.1.exe" download> <img src="assets/images/keylog.png" alt="Keylogger" style={{ width:'150px', height: '100px'}}/></a>
    <h3>Hypervisor-assisted dynamic malware analyser</h3>
    <p></p>
    </div>
    <div className="game-list">
        <img src="assets/images/keydetector.png" alt="keylogger dector" style={{ width:'150px', height: '100px'}}/>
      <h3>Our Documentation</h3>
      <p></p>
    </div>
   
  
  </div>
  <div className="store" id="shop">
   <h2 className="title">You can check us out for more products</h2>
  
  <div className="game-store">

    <div className="game-store-list">
      <div className="game-image">
        <img src="assets/images/foldersecure.webp" alt='flodersecure'/>
      </div>
      <div className="store-text-description">
       <h4>Password manager</h4>
       <span> used to manage your passwords </span>
       <span>pwdmanage</span>
      </div>

    </div>
    <div className="game-store-list">
      <div className="game-image">
        <img src="assets/images/passwordmanage.webp" alt='passwordmanage'/>
      </div>
      <div className="store-text-description">
        <h4>Folder security system</h4>
        <span> this protects your folder files </span>
        <span>FSS</span>
      </div>

    </div>
    <div className="game-store-list">
      <div className="game-image">
        <img src="assets/images/HSS.jpg" alt='HSS'/>
      </div>
      <div className="store-text-description">
        <h4>Home survelliance system</h4>
        <span> this detects and captures the human face </span>
        <span>HSS</span>
      </div>

    </div>
    <div className="game-store-list">
      <div className="game-image">
        <img src="assets/images/AS.jpg" alt="wu yi"/>
      </div>
      <div className="store-text-description">
        <h4>Antivirus system</h4>
        <span> this is a antivirus which detects viruses </span>
        <span>AS</span>
      </div>

    </div>
    <div className="game-store-list">
      <div className="game-image">
        <img src="assets/images/PG.svg" alt='PG'/>
      </div>
      <div className="store-text-description">
        <h4>Password generator</h4>
        <span> this generates secure and strong passwords for user </span>
        <span>Pg</span>
      </div>

    </div>
    <div className="game-store-list">
      <div className="game-image">
        <img src="assets/images/LT.jpg" alt='LT'/>
      </div>
      <div className="store-text-description">
        <h4>Location tracker</h4>
        <span> it tracks location using your phone nuber</span>
        <span>Lt</span>
      </div>

    </div>

  </div>
</div>
<div className="event" id="events" >
  <h2 className="title">OUR Blogs</h2>

  <div className="event-hero" style={{ position: 'relative'}} >
    

    <div className="event-text">
      <h2  className="badge" style={{ backgroundColor: 'orange', color:'#000015' ,padding:'10px'}}> Tips Stay secure | Sunday September 17 </h2>
       <h1 className="event-title">A world light-years beyond your imagination.</h1>

       
        <p>Now a days many people are getting cheated as they are hacked and ther device and their personal information is compromised so here are some tips to save your identity</p>
        <h4>Save yourself</h4>
        <div>
          <li>dont install unknow files</li>
        <li>dont surf through any suspecious websites</li>
        <li>check your device regularly to know which softwares are &emsp13; performing operations on main thread</li>
        <li>check the permission of your devices</li>
          
        </div>
        <button className="w3-btn w3-red w3-margin-top w3-round">click here <br/>for more blogs😎</button>
          
    </div>
    <div className="images/event-image">
      <img src="assets/images/blogimg.jpg" alt="erik-mclean"/>
    </div>
    
  </div>

</div>
<div>

<h2 className="title">Reach out to us</h2>
<div className="contact" id="contact" style={{paddingBottom: '10px !important'}}>
<div className="contact-list contact-address"  >
  <h5><span><i className="fa fa-map-marker w3-xlarge w3-text-light-grey"></i></span>Address</h5>
  <p> Survey No. 156/157, IFHE-IBS Campus, </p>
  <p> Donthanapally Shankarapalli Road, </p>
  <p> Hyderabad Telangana 501203 </p>
</div>
<div className="contact-list">
  <h5><span><i className="fa fa-envelope w3-xlarge w3-text-light-grey"></i></span>Receive weekly update email</h5>
  <div className="email-contact">
    <input placeholder="Email"  type="email" style={{margin:' 8px 0px !important'}}/>
    
    <button className="w3-btn w3-red w3-round " style={{width: '100px', padding:'3px 10px !important'}}>Subscribe</button>
  </div>

</div>
<div className="contact-list" >
  <h5><span><i className="fa fa-phone w3-xlarge w3-text-light-grey"></i></span>Phone</h5>
  <p>+91-6281675266</p>
  <p>+91-xxxxxxxxxx</p>
</div>

</div>
</div>
  
</main>
<div className="w3-padding w3-center" style={{background: '#030241',padding: '10px 0px !important', color:'#282A35'}}>
  <div style={{display: 'flex' ,justifyContent: 'center',alignItems: 'center', flexWrap: 'wrap'}}>
    <p style={{margin:' 10px !important '}}>made By Bulbamai (Hafeez).</p>
    {/* <!-- <button className="w3-margin-top w3-btn w3-text-white  w3-round-xxlarge" style=" background-color:#282A35;padding: 8px 25px;  margin:0px  !important">Start now</button> --> */}
  </div>

</div>
  </div>

 
  )
  }
  var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
//console.log(req.body, currentdate,datetime)
document.getElementById("p1").innerHTML = datetime;
setTimeout((document.getElementById("p2").innerHTML = datetime),5000);

// const Timeout = setTimeout(func,9000);
// function func() {
//   document.getElementById("p2").innerHTML="out";
// }
// clearTimeout(Timeout);

export default Website;