import React from 'react';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { makeStyles } from '@material-ui/core/styles';

const picStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '70%',
      height: '70%',
      [theme.breakpoints.down('xs')]:{
        width: '100%',
        height: '100%',
      }
    },
    gridItemSmall: {
      alignItems: 'center',
    },
    pic: {
      '&:hover ': {
        "& $addIcon": {
          visibility: 'visible',
        }
      },
    },
    addIcon: {
      height: 70,
      width: '100%',
      visibility: 'hidden',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

const MyComponent = props => {
    const classes = picStyles();
  const getGridListCols = () => {
    if (isWidthUp('xl', props.width)) {
      return 4;
    }

    if (isWidthUp('lg', props.width)) {
      return 3;
    }

    if (isWidthUp('md', props.width)) {
      return 2;
    }

    return 1;
  }

  return(
    
    <GridList spacing={8} cellHeight={300} className={classes.gridList} cols={getGridListCols()}>
      {
        props.myArrayItem.map(item => (
            <GridListTile key={item.img} className={classes.pic}>
            <img src={item.img} alt={item.title} />
            <GridListTileBar className={classes.addIcon}
              title={item.title}
              subtitle={<span>{item.add}</span>}
            />
          </GridListTile>
        ))
      }
    </GridList>
  );
};


export default withWidth()(MyComponent);