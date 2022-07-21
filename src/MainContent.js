 function MainContent(){
     return(
         <main className="hero">

        <div className="Contact--btn">
            <a href="https://www.kabhi30@gmail.com" target="_blank" rel="noreferrer" >
            <img src="/Images/Button.png" className="Mail" alt="Email-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/kabhi30" target="_blank" rel="noreferrer">
            <img src="/Images/LinkedIN.png" className="LinkedIN" alt='Linkedin-icon'/>
            </a>
        </div>

        <div className="Section--info">
            <h2 className="Secondary-heading">About</h2>
            <p className="About-text">I am a Frontend devloper from Pune.I enjoy creating beautiful interface designs
            and web applications.  
            </p>

            <h2 className="Secondary-heading">Intrest</h2>
            <p className="About-text">I am a Frontend devloper from Pune.I enjoy creating beautiful interface designs
            and web applications.
            </p>
        </div>
         </main>

     )
 }
 export default MainContent;