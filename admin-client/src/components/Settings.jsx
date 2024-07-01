import Sidebar from "./Sidebar";

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Service from "./Service";
import Product from "../components/Product";

function Settings() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container">
      <Sidebar/>
      <div className="right_body">
      




  

    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="BANNERS" {...a11yProps(0)} />
          <Tab label="OFFERS" {...a11yProps(1)} />
          <Tab label="SERVICE" {...a11yProps(2)} />

          <Tab label="PRODUCTS" {...a11yProps(3)} />
          <Tab label="PICKUP" {...a11yProps(4)} />
          <Tab label="ITEM SIX" {...a11yProps(5)} />
          <Tab label="ITEM SEVEN" {...a11yProps(6)} />



        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Service/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Product/>
      </CustomTabPanel>
    </Box>






      </div>
    </div>
  );
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default Settings;
