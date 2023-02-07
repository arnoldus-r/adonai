import { ThemeProvider } from "@mui/material/styles";
import theme from './components/Theme';
import Login from './pages/Login';
import UserTable from './components/UserTable';
import Menu from './components/Menu';

import { CssBaseline } from '@mui/material';

function App() {
	return (
		<ThemeProvider theme={ theme }>
			<CssBaseline>
				<Menu />
				<Login />
				<UserTable />
				
			</CssBaseline>
		</ThemeProvider>
	);
}

export default App;
