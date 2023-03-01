import { Box, Link, Typography } from '@mui/material';
import React from 'react';

function Footer() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<Typography variant='caption'>
				{'©'}
				{new Date().getFullYear()}
				{' Signature Ent.'}
				{' all rights reserved'}
			</Typography>
			<Link href='#' variant='caption' color='inherit'>Designed by Viktor</Link>
		</Box>
	);
}

export default Footer;
