import React,{ useRef }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import TabPanel from './aboutme';
import Fade from 'react-reveal/Fade';
import Contact from './contact';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
  },
  Paper: {
    padding: theme.spacing(3),
    backgroundColor:"#C7B8B7",
    alignItems: 'center',
    justify: 'center',
    textAlign: 'center',
    marginRight:'14%',
    marginLeft:'14%',
    paddingTop:'7%',
    paddingBottom:'7%'
  },
  text:{
    color: 'White',
    fontFamily: '"Segoe UI"',
    fontSize:'40px',
  },
  link: {
    color: '#D9755B',
    fontSize:'16px',
    fontWeight: 700,
    fontFamily: 'Arial',
  },
  image: {
    width: '70%',
    height: '70%',
    alignContent:'center',
    alignItems:'center',
  },
  image2: {
    width: '100%',
    height: '100%',
  },
  img2: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  img: {
    marginLeft: '20%',
    marginBottom: '10%',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const scrollToRef = (ref) => window.scrollTo({ 
    left: 0, 
    top: ref.current.offsetTop,
    behavior: 'smooth',
  })   

  const refAbout = useRef(null)
  const refContact = useRef(null)
  const ScrolltoAbout = () => scrollToRef(refAbout)
  const ScrolltoContact = () => scrollToRef(refContact)

  return (
    <div className={classes.root} >
     
      <Grid container spacing={2} style={{backgroundColor: "#f1e7e7"}}>

      <Grid item xs={6} style={{backgroundColor:"#B9A7A5", justify:"center" ,alignItems:"center"}}>
        </Grid>

      <Grid item xs={6} style={{float: 'right', border:0, margin:0,backgroundColor:"#EDD2C7"}}>
          <Breadcrumbs aria-label="breadcrumb" style={{float: 'right',paddingRight:'5%', paddingTop:'30px' }}  className={classes.link}>
             <Link onClick={ScrolltoAbout} className={classes.link}>
                About me
             </Link>
             <Link onClick={ScrolltoContact} className={classes.link}>
                Contact
             </Link>
           </Breadcrumbs>

        </Grid>


        <Grid item xs={6} style={{backgroundColor:"#B9A7A5", justify:"center" ,alignItems:"center"}}>
        <Fade left cascade>
          <Paper className={classes.Paper} elevation={3}>
         
          <Grid item className={classes.image2}>
              <img className={classes.img2} alt="img" src={require('../img/img2.jpg')}/>
          </Grid>
           
          </Paper>
          </Fade>
        </Grid>
        <Grid item xs={6} style={{float: 'right', border:0, margin:0,backgroundColor:"#EDD2C7"}}>
           <Fade right cascade>
           <Grid item className={classes.image}>
              <img className={classes.img} alt="img" src={require('../img/img1.jpg')}/>
          </Grid>
          </Fade>
        </Grid>

        <Grid item xs={12} style={{justify:"center" ,alignItems:"center", textAlign: 'center',height: '60px'}}>
             <KeyboardArrowDownIcon style={{fontSize:'60px',color: '#D9755B', top:0}}  onClick={ScrolltoAbout}/>
        </Grid>
        <Grid item xs={12} ref={refAbout}>
           <TabPanel/>
        </Grid>
        <Grid item xs={12} ref={refContact} style={{backgroundColor: "#B9A7A5"}} >
           <Contact/>
        </Grid>
      </Grid>
      
    </div>
  );
}
