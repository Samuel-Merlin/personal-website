import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import logopng from './img/logopng.png';
import me from './img/sam.png';

function HomePage() {
  return (
    
    <div className="pgContainer">
      <div className="logoHeader">
        <Box
          sx={{
            m:1,
            maxWidth:3000,
            lineHeight:1.4,
            fontWeight:'bold',
            fontSize: 32,
            height: 48,
            color:'darkcyan',
            background:' black',
            opacity: [0.9, 0.8, 0.7],
      }}
        >  
        <p>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#ab">About Me</a>
          &nbsp;&nbsp;&nbsp;&nbsp;<Link to="Resume">Resume</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;<a href="#ach">Achievements</a>
          {/* &nbsp;&nbsp;&nbsp;&nbsp;Skills */}
          &nbsp;&nbsp;&nbsp;<a href="#cm">Contact Me</a>
          <img src={logopng} alt="Logo" className="logo"/>
        </p>
    </Box>
    </div>
      <div className="bodyContainer">
      <Box
          sx={{
            m:1,
            lineHeight:1,
            maxWidth:3000,
            textAlign:'center',
            fontSize: 65,
            height: 645,
            color:'hotpink',
            background:' linear-gradient(to bottom, #111112, #4b1f4f)',
            opacity: [0.9, 0.8, 0.7],
      }}
        >
        <img src={me} alt="Myself" className="Me"/>  
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;<item id="ab">Hi There!</item>
        <br></br><br></br><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm Sam
        <br></br><br></br>
        <p className="paragraph">Welcome to my Website! I am a recent graduate with a degree in 
        Cybersecurity, and an aptidute for learning. Please feel free 
        to look around, and contact me if you want to get in touch!</p>
    </Box>
    <Box
          sx={{
            m:1,
            maxWidth:3000,
            fontSize: 45,
            textAlign:'center',
            height: 360,
            color:'white',
            background:'linear-gradient(to top, #111112, #4b1f4f)',
            opacity: [0.9, 0.8, 0.7],
      }}
        >
        <item id="cm">Contact Me</item>
        <p className="amParagraph">
          Email:<a href="sammerlin019@gmail.com"> sammerlin019@gmail.com</a><br></br><br></br>
          Mobile Phone: (412) 328-5208<br></br><br></br>
          Linked In: <a href="https://www.linkedin.com/in/samuel-m-178720250/">Samuel M</a>
        </p>
        </Box>
        <Box
          sx={{
            m:1,
            maxWidth:3000,
            fontSize: 45,
            fontWeight:'bold',
            height: 410,
            color:'white',
            background:' linear-gradient(to bottom, #111112, #4b1f4f)',
            opacity: [0.9, 0.8, 0.7],
      }}
        >
          <p className='achievements' id="ach">Achievements</p>
          <Grid container spacing={2}>
            <Grid item xs={6} >
              <p>• B.A. Cybersecurity</p>
            </Grid>
            <Grid item xs={6}>
              <p>• 3+ Completed Projects</p>
            </Grid>
            <Grid item xs={6}>
              <p>• Sample Project <Link to="How To">Link</Link></p>
            </Grid>
            <Grid item xs={6}>
              <p>• Eagle Scout (2019)</p>
            </Grid>
          </Grid>
    </Box>
    {/* <Box
          sx={{
            m:1,
            maxWidth:3000,
            fontSize: 45,
            textAlign:'center',
            fontWeight:'bold',
            height: 360,
            color:'darkcyan',
            background:'linear-gradient(to top, #111112, #4b1f4f)',
            opacity: [0.9, 0.8, 0.7],
      }}
        >
          Skills 
          <div className='SKILLS'>
            //
          </div>
          </Box>
           */}
  </div>
  
</div>
  );
}
export default HomePage;