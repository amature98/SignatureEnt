import { Container, Typography } from '@mui/material';
import React from 'react';

function Testimonials() {
	return (
		<Container
			component='section'
			maxWidth='xl'
			id='Testimonials'
			sx={{ mt: '12px', mb: '12px' }}
		>
			<Typography variant='h1'>Testimonials</Typography>
		</Container>
	);
}

export default Testimonials;
