import React from 'react';

import p1 from '../img/p1.jpg';
import p2 from '../img/p2.jpg';
import p3 from '../img/p3.jpg';
import p4 from '../img/p4.jpg';
import p5 from '../img/p5.jpg';
import p6 from '../img/p6.jpg';
import p7 from '../img/p7.jpg';
import p8 from '../img/p8.jpg';
import p9 from '../img/p9.jpg';

import f1 from '../img/f1.jpg';
import f2 from '../img/f2.jpg';
import f3 from '../img/f3.jpg';
import f4 from '../img/f4.jpg';
import f5 from '../img/f5.jpg';
import f6 from '../img/f6.jpg';
import f7 from '../img/f7.jpg';
import f8 from '../img/f8.jpg';
import f9 from '../img/f9.jpg';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Fade from 'react-reveal/Fade';
import PicGrid from './pics';

const tileData = [
       {
         img: p1,
         title: 'La Grand Motte, France',
         add: '08/2020',
       },
       {
        img: p2,
        title: 'La Grand Motte, France',
        add: '08/2020',
      },
      {
        img: p3,
        title: 'Paris, France',
        add: '06/2019',
      },
      {
        img: p4,
        title: 'Paris, France',
        add: '09/2019',
      },
      {
        img: p5,
        title: 'Paris, France',
        add: '05/2020',
      },
      {
        img: p6,
        title: 'Anterwep, Belgium',
        add: '10/2017',
      },
      {
        img: p7,
        title: 'Thira, Greece',
        add: '12/2018',
      },
      {
        img: p8,
        title: 'Lisbon, Portugal',
        add: '09/2019',
      },
      {
        img: p9,
        title: 'Interlaken, Swiss',
        add: '12/2017',
      },]

const foodData = [
        {
          img: f1,
          title: 'ARABICA',
          add: '44-47 Passage des Panoramas, 75002 Paris',
        },
        {
         img: f2,
         title: 'Carré Pain De Mie',
         add: '5 Rue Rambuteau, 75004 Paris',
       },
       {
         img: f3,
         title: 'La Péniche',
         add: 'Prom. Michel d\'Ornano, 14800 Deauville',
       },
       {
         img: f4,
         title: 'ANCO',
         add: '108 Rue de Bercy, 75012 Paris',
       },
       {
         img: f5,
         title: 'Robert et Louise',
         add: '64 Rue Vieille du Temple, 75003 Paris',
       },
       {
         img: f6,
         title: 'Hero',
         add: '289 Rue Saint-Denis, 75002 Paris',
       },
       {
         img: f7,
         title: 'Dersou',
         add: '21 Rue Saint-Nicolas, 75012 Paris',
       },
       {
         img: f8,
         title: 'Kott Café',
         add: '19 Rue Ternaux, 75011 Paris',
       },
       {
         img: f9,
         title: 'Frenchie Bar à Vins',
         add: '6 Rue du Nil, 75002 Paris',
       },]

export default function interest() {
 
  return (
    <div align="center">
        <Paper  elevation={3}  style={{backgroundColor:"#D9755B", margin: '30px', padding:'10px'}}>
        <Typography>
            <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"white"}} fontWeight="fontWeightBold" fontSize={20}>
              Moment Catching:
            </Box>
            <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#F6D794"}} fontWeight="fontWeightBold" fontSize={15}>
              I love to travel and catch beautiful moment on the way, hope my photos bring you positive energy ♪(^∇^*)
            </Box>
        </Typography>
        </Paper>

      <Fade>
      
      <PicGrid myArrayItem = {tileData}></PicGrid>

      </Fade>

      <Paper  elevation={3}  style={{backgroundColor:"#F6D794", margin: '30px', padding:'10px'}}>
        <Typography>
            <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#c74f30"}} fontWeight="fontWeightBold" fontSize={20}>
              Food blogger:
            </Box>
            <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#D9755B"}} fontWeight="fontWeightBold" fontSize={15}>
              I like eat so much that I want to share with everyone ╰(*°▽°*)╯
            </Box>
        </Typography>
        </Paper>
      <Fade>

      <PicGrid myArrayItem = {foodData}></PicGrid>
      
      </Fade>
    </div>
  );
}