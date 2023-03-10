import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
//import Chart from './Chart';
//import Deposits from './Deposits';
//import Orders from './Orders';
import Login from '../pages/Login';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import UserTable from './UserTable';
import Report from './Report';
import Product from './Product';
import MediaCard from './MediaCard';
import MediaCard1 from './MediaCard1';
import MediaCard2 from './MediaCard2';
import MediaCard3 from './MediaCard3';
import MediaCard4 from './MediaCard4';
import MediaCard5 from './MediaCard5';
import Pago from './Pago';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {'Adonai Jireh '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `100%`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(2),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();


function DashboardContent() {

  return (
      <Box sx={{ display: 'flex' }}>
        <AppBar position="absolute" open>
          <Toolbar
            sx={{
              pr: '1.51m',
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Adonai Jireh
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
          </Toolbar>
          <Divider />
          <List component="nav">
            {<>{

              if(useLocation().pathname === '/productos') <Pago /> } {mainListItems}
              </>}
            <Divider sx={{ my: 1 }} />
            {/*secondaryListItems*/}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 2, mb: 1 }}>
            <Grid container>
              {/* Chart */}
              <Grid item sx={{width: `100%`}}>
                <Paper
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 450,
                  }}
                >
                <Routes>
                  <Route path='/uno/general' element={<UserTable />} />
                  <Route path='/uno/almacen' element={<Report />} />        
                  <Route path='/uno/otra' element={<Product />} />                   
                  <Route path='/' element={<Login />} /> 
                  <Route path='/productos' element={
                    <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    height: '100%',
                    }}
                    >
                      <MediaCard />
                      <MediaCard1 />
                      <MediaCard2 />
                      <MediaCard3 />
                      <MediaCard4 />
                      <MediaCard5 />
                    </Box>} />
                  </Routes>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
