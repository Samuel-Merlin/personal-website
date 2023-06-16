
import './App.css';
import { Link } from 'react-router-dom';
import logopng from './img/logopng.png';
import me from './img/sam.png';
import resume from './img/SMResume.png';
function HomePage() {
  return (
    <div className="pgContainer">
      <div className="logoHeader">
          <img src={logopng} alt="Logo" className="logo"/>
          <img src={me} alt="Myself" className="Me"/>
            </div>
              <div className="nameHeader">
                <div className="nameText">Sam Merlin</div>
                <div className="welcomeText">Welcome to my page!</div>
                  </div>
                    <div className="bodyContainer">
                    <hr class ="line"></hr>
                      <div className="resumeText">Resume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Me</div>
                          
                            <div className="resumeContainer">
                                <img src={resume} alt="Myself" className="resume"/>
                                
                              </div>
                                <div className="aboutContainer">
                                <p className="amParagraph">&nbsp;Hello,<br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;My name is Sam Merlin, and I am a cybersecurity enthusiast. 
                                <br></br><br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;I understand that cybersecurity is a constantly changing landscape. I intend to adapt along with these changes. Thank you for taking the time to view this webpage, if you want to speak with me directly, please check out my contact information below.  
                                <br></br><br></br>
                                <hr class ="line"></hr>
                                <div className="contactTextHeader">Achievements</div>
                                <p><ul>
                                    <li> B.A. Cybersecurity (2023) </li>
                                    <li>3 Completed Projects</li>
                                    <li>Sample Project <Link to="How To">How to purge data from NVMe SSD</Link></li>
                                    <li> 3+ Years IT/Cybersecurity Experience</li>
                                    <li>Eagle Scout (2019)</li>
                                    
                                  </ul>
                                </p>
                                <hr class ="line"></hr>
                                <div className="contactTextHeader">Skills</div>
                                <p><ul>
                                    <li> Incident Response </li>
                                    <li> Malware Analysis</li>
                                    <li> NIST Documentation Review</li>
                                    <li> Kali Linux</li>
                                    <li> Python (Basic)</li>
                                    <li> AWS, Microsoft AD, Google Firebase</li>
                                  </ul>
                                </p>
                                <hr class ="line"></hr>
                                  </p>
                                  <div className="contactContainer">
                                    <div className="contactTextHeader">Contact Me</div>
                                      <p className="amParagraph">
                                        Email:<a href="sammerlin019@gmail.com"> sammerlin019@gmail.com</a><br></br><br></br>
                                        Mobile Phone: (412) 328-5208<br></br><br></br>
                                        Linked In: <a href="https://www.linkedin.com/in/samuel-m-178720250/">Samuel M</a><br></br><br></br>
                                      </p>
                                  </div>
                                  </div>
                                </div>
                              </div>

  );
}
export default HomePage;