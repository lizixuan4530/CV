import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallIcon from '@material-ui/icons/Call';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  Paper: {
    padding: theme.spacing(3),
    backgroundColor:"#877977",
    alignItems: 'center',
    justify: 'center',
    textAlign: 'center',
    margin: '3%',
  },
  link:{
    color:"#F1BD4D",
    display:'inline',
    fontFamily: '"Segoe UI"',
    fontWeight: 900,
    fontSize: 20,
    '&:hover ': {
        color:'#EDD2C7',
        }
  },
  icon:{
    color:"#F1BD4D",
    fontSize:'40px',
    '&:hover ': {
        color:'#EDD2C7',
        }
  }
}));

function handleLinkedInPage() {
    window.open("https://www.linkedin.com/in/zixuan-li-0ba0ab170/",'_blank')
    }

function handleGitPage() {
    window.open("https://github.com/lizixuan4530/",'_blank')
    }

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.Paper}>
        <Typography>
            <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#F1BD4D", display: 'inline'}} fontWeight="fontWeightBold" fontSize={20}> 
                If you’d like to get in touch — &nbsp;
             </Box>
             <Link className={classes.link} key="Email" component="a" href="mailto:Zixuan.li@efrei.net">
                 email me
             </Link>
         </Typography>
        
         <IconButton>
            <LinkedInIcon className={classes.icon} onClick={handleLinkedInPage}/>
         </IconButton>

         <IconButton>
            <GitHubIcon className={classes.icon} onClick={handleGitPage}/>
         </IconButton>
        
         <Tooltip title="+33 0665448155" aria-label="number">
            <IconButton>
                <CallIcon className={classes.icon}/>
            </IconButton>
         </Tooltip>
      </Paper>
    </div>
  );
}