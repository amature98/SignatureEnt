import {
	Box,
	Card,
	CardMedia,
	Container,
	Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from '../Images/pexels-sebastian-hietsch-10967.jpg';
import Image1 from '../Images/romina-veliz-DGKJzOmjyS4-unsplash.jpg';
import Image2 from '../Images/ray-hennessy-gdTxVSAE5sk-unsplash.jpg';
import React from 'react';

const AboutContainer = styled(Container)(({ theme }) => ({
	marginTop: '12vh',
	marginBottom: '12vh',
	width: '100vw',
	height: '100vh',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column-reverse',
		marginTop: '48vh',
		marginBottom: '6vh'
	},
	[theme.breakpoints.down('sm')]: {
		marginTop: '56vh'
	}
}));
const TextContainer = styled(Box)(({ theme }) => ({
	width: '30%',
	alignSelf: 'center',
	[theme.breakpoints.down('md')]: {
		width: '100%',
		margin: 'auto'
	}
}));
const Title = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up('md')]: {
		display: 'none'
	}
}));
const CardsContainer = styled(Box)(({ theme }) => ({
	width: '70%',
	flexBasis: '50%',
	position: 'relative',
	marginBottom: '12vh',
	[theme.breakpoints.down('md')]: {
		width: '100vw',
		marginBottom: '6vh'
	}
}));
const StyledCard = styled(Card)(({ theme }) => ({
	height: '100vh',
	borderRadius: 36,
	maxWidth: '60%',
	cursor: 'pointer',
	[theme.breakpoints.down('sm')]: {
		maxWidth: '80%'
	},
	':first-of-type': {
		top: '-10%',
		left: '-15%',
		position: 'absolute',
		transform: 'translate3d(0px, -12.5%, 0px) rotate(-5deg)'
	},
	':nth-of-type(2)': {
		position: 'relative',
		transform:
			'translate3d(75px, -7.5%, 0px) rotate(-2.5deg)',
		zIndex: 2
	},
	':last-of-type': {
		top: '-10%',
		left: '-15%',
		right: 0,
		position: 'absolute',
		zIndex: 3,
		transform: 'translate3d(75%, 15%, 0px) rotate(5deg)'
	}
}));
const StyledImage = styled(CardMedia)({
	filter: 'saturate(0)',
	transition: '0.5s',
	':hover': {
		filter: 'none'
	}
});
function About() {
	return (
		<AboutContainer
			maxWidth='xl'
			id='About'
			component='section'
		>
			<TextContainer>
				<Title>
					<Typography variant='caption'>
						About us
					</Typography>
				</Title>
				<Typography variant='body1'>
					We are an entertainment venture that provides
					sound and emceeing services to your ceremonies and
					events with the aim to create lasting memories. We
					are your one stop shop for entertainment.
					<br />
					We are Signature Entertainment.
				</Typography>
			</TextContainer>
			<CardsContainer>
				<StyledCard>
					<StyledImage
						component='img'
						alt='about img'
						height='100%'
						image={Image2}
					/>
				</StyledCard>
				<StyledCard>
					<StyledImage
						component='img'
						alt='about img'
						height='100%'
						image={Image1}
					/>
				</StyledCard>
				<StyledCard>
					<StyledImage
						component='img'
						alt='about image'
						height='100%'
						image={Image}
					/>
				</StyledCard>
			</CardsContainer>
		</AboutContainer>
	);
}
export default About;
