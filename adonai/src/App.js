import * as React from 'react';
import { BrowserRouter, Routes, Navigate, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from "@mui/material/styles";
import theme from './components/Theme';
import Login from './pages/Login';
import UserTable from './components/UserTable';
import Report from './components/Report';



import { CssBaseline } from '@mui/material';

function App() {
	const token = localStorage.getItem('@token') || null;

	return (
		<BrowserRouter>
		<ThemeProvider theme={ theme }>
			<CssBaseline>
			<Routes> 
			  <Route exact path='/' element={<Login />} /> 
			  	 <Route path='/user' element={<UserTable />} />
			  	 <Route path='/report' element={<Report />} /> 

			</Routes>
			</CssBaseline>
		</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
