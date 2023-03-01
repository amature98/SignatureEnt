import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Loader from '../Components/Loader';

const LandingPageStyle = styled('div')(({ theme }) => ({
	height: '100vh',
	textAlign: 'center',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: theme.palette.success.dark,
	color: theme.palette.primary.main
}));

function Landing() {
	return (
		<LandingPageStyle>
			<Box>
				<Typography
					variant='headerTitle'
					color='secondary.main'
				>
					Signature Entertainment
				</Typography>
				<Typography
					variant='body2'
					sx={{
						textTransform: 'uppercase',
						mb: '2em',
						mt: '12px'
					}}
				>
					create . entertain . experience
				</Typography>
				<Loader />
			</Box>
		</LandingPageStyle>
	);
}

export default Landing;