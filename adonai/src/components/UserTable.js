import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, last_name, email, phone, rol) {
	return { name, last_name, email, phone, rol };
}

const rows = [
	createData('Juan', 'Perez', '1', '04121111111', 'Cliente'),
	createData('Maria', 'Fernanda', '2', '04162222222', 'Gerente de Almacen'),
	createData('Jill', 'Valentine', '3', '04143333333', 'Gerente General'),
	createData('Leon', 'Kennedy', '4', '04264444444', 'Gerente de Ventas'),
];

export default function UserTable() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="right">Nombre</TableCell>
						<TableCell align="right">Apellido</TableCell>
						<TableCell align="right">Correo</TableCell>
						<TableCell align="right">Teléfono</TableCell>
						<TableCell align="right">Rol</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.name}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell align="right">{row.name}</TableCell>
							<TableCell align="right">{row.last_name}</TableCell>
							<TableCell align="right">{row.email}</TableCell>
							<TableCell align="right">{row.phone}</TableCell>
							<TableCell align="right">{row.rol}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}