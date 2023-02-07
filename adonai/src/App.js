import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';

import theme from './components/Theme';
import Login from './pages/Login';
import UserTable from './components/UserTable';
import Report from './components/Report';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';



function App() {

	return (
		<Router>
			<ThemeProvider theme={ theme }>
				<CssBaseline>
					<Dashboard />
				</CssBaseline>
			</ThemeProvider>
		</Router>
	);
}

export default App;