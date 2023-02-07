import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';

import theme from './components/Theme';
import Login from './pages/Login';
import UserTable from './components/UserTable';
import Report from './components/Report';

function App() {

	return (
		<Router>
			<ThemeProvider theme={ theme }>
				<CssBaseline>
					<Routes> 
						<Route exact path='/' element={<Login />} /> 
						<Route path='/user' element={<UserTable />} />
						<Route path='/report' element={<Report />} /> 
					</Routes>
				</CssBaseline>
			</ThemeProvider>
		</Router>
	);
}

export default App;