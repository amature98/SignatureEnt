import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Stack,
	Typography
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import React, { useState } from 'react';
import BlackPanther from '../Images/black-panther.png';
import IronMan from '../Images/ironman.png';
import Captain from '../Images/cap.png';
import Groot from '../Images/Groot.png';

const BlueCircle = styled('div')(({ theme }) => ({
	width: '30vw',
	height: '30vw',
	background: theme.palette.success.dark,
	borderRadius: '50%',
	position: 'absolute',
	bottom: 0,
	left: '-6vw',
	zindex: '-1',
	[theme.breakpoints.down('lg')]: {
		width: '60vw',
		height: '60vw'
	},
	[theme.breakpoints.down('md')]: {
		top: '48vh'
	}
}));
const PinkCircle = styled('div')(({ theme }) => ({
	width: '30vw',
	height: '30vw',
	background: theme.palette.error.light,
	borderRadius: '50%',
	position: 'absolute',
	top: 0,
	right: '-6vw',
	zIndex: '-1',
	[theme.breakpoints.down('lg')]: {
		width: '60vw',
		height: '60vw'
	}
}));
const GlassContainer = styled(Box)(({ theme }) => ({
	position: 'relative',
	alignItems: 'start',
	justifyContent: 'space-evenly',
	borderRadius: 12,
	zIndex: '1',
	background: alpha(theme.palette.primary.main, 0.2),
	backdropFilter: 'blur(36px)',
	backgroundClip: 'padding-box',
	boxShadow: `12px 12px 12px ${alpha(
		theme.palette.success.dark,
		0.15
	)}`
}));
const TeamCard = styled(Card)(({ theme }) => ({
	background: alpha(theme.palette.primary.main, 0.25),
	cursor: 'pointer',
	maxWidth: 'fit-content',
	transition: '0.5s'
}));
const TeamCardIcon = styled(CardMedia)({
	transition: '0.5s',
	':hover': {
		transform: 'translate3d(0%, 50%, 0%)',
		zIndex: '2'
	}
});

const members = [
	{
		id: '1',
		key: '1',
		memberName: 'John Doe',
		title: 'Job Title 1',
		portrait: '../Images/ironman.png',
		image: '../Images/ironman.png',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
	},
	{
		id: '2',
		key: '2',
		memberName: 'John Doe II',
		title: 'Job Title 2',
		portrait: { IronMan },
		image: { IronMan },
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
	},
	{
		id: '3',
		key: '3',
		memberName: 'John Doe III',
		title: 'Job Title 3',
		portrait: { IronMan },
		image: { IronMan },
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
	},
	{
		id: '4',
		key: '4',
		memberName: 'John Doe IV',
		title: 'Job Title 4',
		portrait: { IronMan },
		image: { IronMan },
		description:
			'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
	}
];
function Team() {
	const [toggle, setToggle] = useState('1');
	return (
		<Container
			id='Team'
			component='section'
			maxWidth='xl'
			sx={{
				position: 'relative',
				mb: '12px',
				mt: '12px',
				height: '100vh',
				width: '100vw'
			}}
		>
			<Box>
				<Typography
					variant='h1'
					sx={{ textTransform: 'capitalize' }}
				>
					The Team
				</Typography>
			</Box>
			<GlassContainer>
				{members.map(
					({
						memberName,
						description,
						image,
						title,
						key
					}) => {
						return (
							<>
								<Grid
									container
									sx={{
										display:
											toggle !== key ? 'none' : 'flex'
									}}
								>
									<Grid item xs={12} md={6} lg={6}>
										{toggle === key ? (
											<img
												src={image}
												alt='Profile-img'
												style={{
													maxWidth: '600px',
													zIndex: '2'
												}}
											/>
										) : null}
									</Grid>
									<Grid
										item
										xs={12}
										md={6}
										lg={6}
										sx={{ padding: 2 }}
									>
										{toggle === key ? (
											<>
												<Typography variant='h2'>
													{memberName}
												</Typography>
												<Typography variant='body2'>
													{title}
												</Typography>
												<Typography variant='body1'>
													{description}
												</Typography>
											</>
										) : null}
									</Grid>
								</Grid>
							</>
						);
					}
				)}
				<Grid container>
					<Grid
						item
						xs={12}
						md={6}
						lg={6}
						sx={{ zIndex: '-1' }}
					></Grid>
					<Grid item xs={12} md={6} lg={6}>
						<Stack
							direction={{ xs: 'column', sm: 'row' }}
							spacing={2}
							sx={{ marginTop: '24px', padding: '16px' }}
						>
							{members.map(
								({ key, portrait, memberName }) => {
									return (
										<TeamCard
											onClick={() => setToggle(key)}
										>
											<TeamCardIcon
												component='img'
												alt='team member img'
												height='100%'
												image={IronMan}
											/>
											<CardContent>
												<Typography
													gutterBottom
													variant='h5'
													component='div'
												>
													{memberName}
												</Typography>
											</CardContent>
										</TeamCard>
									);
								}
							)}
						</Stack>
					</Grid>
				</Grid>
			</GlassContainer>
			<BlueCircle />
			<PinkCircle />
		</Container>
	);
}
export default Team;
