import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(product, price, cantidad) {
	return { product, price, cantidad };
}

const rows = [
	createData('Repuesto A', '20$', '8'),
	createData('Repuesto B', '50$', '5'),
	createData('Repuesto C', '60$', '13'),
	createData('Repuesto D', '80$', '3'),
	createData('Repuesto E', '70$', '21'),
	createData('Repuesto F', '90$', '2'),
];

export default function Report() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 1/4 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="right">Producto</TableCell>
						<TableCell align="right">Precio</TableCell>
						<TableCell align="right">Cantidad</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.product}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell align="right">{row.product}</TableCell>
							<TableCell align="right">{row.price}</TableCell>
							<TableCell align="right">{row.cantidad}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}