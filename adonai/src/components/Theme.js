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
		TableCell: {
			styleOverrides: {
				root: {
					color: "#7CB342",
				},
			},
		},
	},
};

export default theme;