import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Navigate, Link } from 'react-router-dom';

export const mainListItemsO = (
  <React.Fragment>
    <ListItemButton>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

export const mainListItems = (
  <React.Fragment>
  <Link to="/" underline="none">
    <ListItemButton>
      <ListItemText primary="Inicio" />
    </ListItemButton>
    </Link>
  </React.Fragment>
);

export const blanListItems = (
  <React.Fragment>
  <Link to="/uno/general" underline="none">
    <ListItemButton>
      <ListItemText primary="Iniciar Sesión" />
    </ListItemButton>
    </Link>
    <a href="/static/Catalogo.html" />
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
