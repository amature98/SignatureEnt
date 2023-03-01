import React, { useState, useEffect } from 'react';
import {
	Box,
	Button,
	Container,
	Typography
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { keyframes } from '@mui/styled-engine';
import Socials from '../Components/Socials';

const textAnimation = keyframes`
		0%, 10%, 100% {
			width: 0;
		}
		70%, 90% {
			width: 100%;
		}`;

const AnimatedTextStyle = styled(Typography)(
	({ theme }) => ({
		position: 'relative',
		color: '#ffffff',
		WebkitTextStroke: `0.15vw ${theme.palette.secondary.main}`,
		'::before': {
			content: 'attr(data-text)',
			position: 'absolute',
			top: 0,
			left: 0,
			width: 0,
			height: '100%',
			color: theme.palette.secondary.main,
			WebkitTextStroke: `0vw ${alpha(
				theme.palette.secondary.light,
				0.16
			)}`,
			borderRight: `4px solid ${theme.palette.secondary.main}`,
			overflow: 'hidden',
			animation: `${textAnimation} 6s linear infinite`
		}
	})
);

const headerText = [
	'enjoyment',
	'experiences',
	'moments',
	'memories'
];

function HomeSection() {
	const [text, setText] = useState(headerText[0]);
	useEffect(() => {
		headerText.forEach((element, i) => {
			setTimeout(() => {
				setText(element);
			}, i * 6000);
		});
		return;
	}, []);

	return (
		<Container
			id='Home'
			maxWidth='xl'
			component='section'
			sx={{
				margin: 'auto',
				width: '100vw',
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between'
			}}
		>
			<Box >
				<Typography variant='caption'>
					Signature Entertainment
				</Typography>
				<Typography variant='h1'>
					we
					<br />
					create
				</Typography>
				<AnimatedTextStyle data-text={text} variant='h1'>
					{text}
				</AnimatedTextStyle>
				<Typography variant='h1'>For You</Typography>
				<Button
					href='#'
					variant='contained'
					sx={{ mt: 1 }}
					color='secondary'
					size='large'
				>
					Book now
				</Button>
			</Box>
			<Socials />
		</Container>
	);
}

export default HomeSection;
