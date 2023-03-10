import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";

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

export default function Login() {
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		
		if (data.get('email') === '4')
			navigate("/uno/general")
		else if (data.get('email') === '3')
			navigate("/uno/almacen")
		else if (data.get('email') === '2')
			navigate("/uno/otra")
		else if (data.get('email') === '1')
			navigate("/productos")
	};

	return (
			<Container component="main" maxWidth="xs">
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Typography component="h1" variant="h5">
						Iniciar Sesión
					</Typography>
					<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							fullWidth
							id="email"
							label="Correo"
							name="email"
							autoComplete="off"
							autoFocus
						/>
						<TextField
							margin="normal"
							fullWidth
							name="password"
							label="Contraseña"
							type="password"
							id="password"
							autoComplete="off"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Entrar
						</Button>
					</Box>
				</Box>
			</Container>
	);
}