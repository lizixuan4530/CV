import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import WorkIcon from '@material-ui/icons/Work';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Experience from './experience';
import Education from './education';
import Interest from './interest';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  tab: {
    backgroundColor: "#D9755B",
    color:'white'
  },
  tabSelected: {
    background: 'linear-gradient(45deg, #F1BD4D 30%, #D9755B 90%)',
    color:'white'
  }
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs 
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          TabIndicatorProps={{style: {backgroundColor: "white"}}}
        >
          <Tab classes={ { root: classes.tab, selected: classes.tabSelected }} label="Experience" icon={<WorkIcon />} {...a11yProps(0)} />
          <Tab classes={ { root: classes.tab, selected: classes.tabSelected }} label="Education" icon={<MenuBookIcon />} {...a11yProps(1)} />
          <Tab classes={ { root: classes.tab, selected: classes.tabSelected }} label="Interest" icon={<FavoriteIcon />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
         <Experience/>
      </TabPanel>
      <TabPanel value={value} index={1}>
         <Education/>
      </TabPanel>
      <TabPanel value={value} index={2}>
         <Interest/>
      </TabPanel>
    </div>
  );
}