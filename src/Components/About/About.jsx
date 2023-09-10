
import '../About/about.css'
import image3 from '../Home/image3.png'
import pdf from '../Gourav_Prasad_Resume.pdf'


export const About = () => {


  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = 'Gourav_Prasad_Resume.pdf';
    link.href = {pdf};
    document.body.appendChild(link)
    link.click();
    link.remove();
  };


  return (
    <div id='about'  class="about section" style={{ padding: "9% 10% 0 10%" }}>
      <h1 style={{ textAlign: "left", marginBottom: "0px" }} >About Me</h1>
      <div style={{borderBottom:"2px solid #00abf0",width:"110px" ,marginBottom:"10px", marginTop:"5px",borderBottomRightRadius:"5px",borderTopRightRadius:"5px" }}  ></div>
      <p style={{ textAlign: "left", marginTop: "0px", paddingBottom: "10px" }} >Who Am I</p>
      <div className='about_Top' >
        <div className='Image_Div'>
          <img className='image' src={image3} alt="ProfilePicx" class="home-img" />
        </div>
        <div >
          <h1 id="user-detail-name">Gourav Prasad</h1>
          <p>MERN Stack Developer</p>
          <p  id="user-detail-intro" > I am Dedicated Full Stack Developer from Gandhidham, Gujarat .Passionate about crafting innovative web solutions. I thrive in building scalable and intuitive applications. My tech stack includes HTML, CSS, JavaScript, ReactJS, Node.js, and various databases. Let's collaborate and create exceptional user experiences together!</p>
          <a href={pdf} target={"_blank"} rel="noreferrer" >
                <button id="resume-button-2" onClick={handleDownload} >Download Resume</button>
              </a>
         
        </div>
      </div>



    </div>
  )
}