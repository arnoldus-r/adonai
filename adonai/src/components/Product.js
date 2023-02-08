import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(product, price) {
	return { product, price };
}

const rows = [
	createData('Repuesto A', '20$'),
	createData('Repuesto B', '50$'),
	createData('Repuesto C', '60$'),
	createData('Repuesto D', '80$'),
	createData('Repuesto E', '70$'),
	createData('Repuesto F', '90$'),
];

export default function Product() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 1/4 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="right">Producto</TableCell>
						<TableCell align="right">Precio</TableCell>
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
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}