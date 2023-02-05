import logo from './logo.svg';
import './App.css';

import { ThemeProvider } from "@mui/material/styles";
import theme from './components/Theme';
import Login from './pages/Login';

import { CssBaseline } from '@mui/material';

function App() {
	return (
		<ThemeProvider theme={ theme }>
			<CssBaseline>
				<Login />
			</CssBaseline>
		</ThemeProvider>
	);
}

export default App;
