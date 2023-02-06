import { createTheme } from '@mui/material/styles';

let theme = createTheme({
	palette: {
		primary: {
			main: "#7CB342",
		},
		secondary: {
			main: "#3949ab",
		},
	},
});

theme = {
	...theme,
	components: {
		MuiTableCell: {
			styleOverrides: {
				head: {
					background: "#7CB342",
				},
			},
		},
	},
};

export default theme;