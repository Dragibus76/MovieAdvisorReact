import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ForumIcon from '@mui/icons-material/Forum';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import "./home.css"
const Home = () => {
    return (
         <React.Fragment>
      <CssBaseline />
      <Container maxWidth="true">
        <h1 className='Home_title'>MovieAdvisor</h1>
        <h2 className='Home_subtitle'>Votre avis tout simplement</h2>
        <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <Container maxWidth="sm">
        <div className='Boxes_Home'>
            <div className='card'>
                <LocalFireDepartmentIcon className='Home_Icon' fontSize='large'/>
            </div>
            <div className='card'>
            <ForumIcon className='Home_Icon' fontSize='large'/>
            </div>
            <div className='card'>
            <ThumbUpIcon className='Home_Icon' fontSize='large'/>
            </div>
        </div>
        </Container>

      </Container>
    </React.Fragment>
    );
};

export default Home;