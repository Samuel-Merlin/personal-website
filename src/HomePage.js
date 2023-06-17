
import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { typography } from '@mui/system';
import { Link } from 'react-router-dom';
import logopng from './img/logopng.png';
import me from './img/sam.png';
import resume from './img/SMResume.png';
function HomePage() {
  return (
    <div className="pgContainer">
      <div className="logoHeader">
        <Box
          sx={{
            m:1,
            maxWidth:3000,
            lineHeight:1.4,
            fontSize: 32,
            height: 48,
            color:'darkcyan',
            backgroundColor: 'black',
            opacity: [0.9, 0.8, 0.7],
      }}
        >  
        <p>&nbsp;&nbsp;&nbsp;&nbsp;About Me
          &nbsp;&nbsp;&nbsp;&nbsp;Resume
          &nbsp;&nbsp;&nbsp;&nbsp;Achievements
          &nbsp;&nbsp;&nbsp;&nbsp;Skills
          &nbsp;&nbsp;&nbsp;Contact Me
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
            backgroundColor: 'black',
            opacity: [0.9, 0.8, 0.7],
      }}
        >
        <img src={me} alt="Myself" className="Me"/>  
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;Hi There!
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
            height: 410,
            color:'white',
            backgroundColor: 'black',
            opacity: [0.9, 0.8, 0.7],
      }}
        >
        Contact Me
        <p className="amParagraph">
          Email:<a href="sammerlin019@gmail.com"> sammerlin019@gmail.com</a><br></br><br></br>
          Mobile Phone: (412) 328-5208<br></br><br></br>
          Linked In: <a href="https://www.linkedin.com/in/samuel-m-178720250/">Samuel M</a><br></br><br></br>
        </p>
        </Box>
        <Box
          sx={{
            m:1,
            maxWidth:3000,
            fontSize: 45,
            fontWeight:'bold',
            height: 410,
            color:'black',
            backgroundColor: 'darkmagenta',
            opacity: [0.9, 0.8, 0.7],
      }}
        >
          &nbsp;&nbsp;Achievements
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={5}>
              <p>&nbsp;&nbsp;• B.A. Cybersecurity</p>
            </Grid>
            <Grid item xs={6}>
              <p>&nbsp;&nbsp;&nbsp;• 3+ Completed Projects</p>
            </Grid>
            <Grid item xs={6}>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Sample Project <Link to="How To">Link</Link></p>
            </Grid>
            <Grid item xs={6}>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Eagle Scout (2019)</p>
            </Grid>
          </Grid>
    </Box>
  </div>
  
</div>
  );
}
export default HomePage;