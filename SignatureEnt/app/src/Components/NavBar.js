import React, { cloneElement, useState } from 'react';
import PropTypes from 'prop-types';
import {
	AppBar,
	Box,
	Button,
	Container,
	Drawer,
	IconButton,
	List,
	Toolbar,
	Typography,
	useScrollTrigger
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import SortIcon from '@mui/icons-material/Sort';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import { HashLink } from 'react-router-hash-link';

const drawerWidth = 240;
const navLinks = [
	{
		title: 'Home',
		path: '/#Home'
	},
	{
		title: 'About',
		path: '/#About'
	},
	{
		title: 'Team',
		path: '/#Team'
	},
	{
		title: 'Testimonials',
		path: '/#Testimonials'
	},
	{
		title: 'Contacts',
		path: '/#Contacts'
	}
];

const ElevationScroll = (props) => {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined
	});

	return cloneElement(children, {
		elevation: trigger ? 4 : 0
	});
};

const LinkBtn = styled(Button)(({ theme }) => ({
	':hover': {
		backgroundColor: alpha(
			theme.palette.action.hover,
			theme.palette.action.hoverOpacity
		)
	}
}));

function NavBar(props) {
	const { window } = props;
	const [openMobile, setOpenMobile] = useState(false);

	const handleDrawerToggle = () => {
		setOpenMobile((prevState) => !prevState);
	};
	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{ textAlign: 'center' }}
		>
			<List>
				{navLinks.map((item) => (
					<NavItem key={item.title} item={item} />
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined
			? () => window().document.body
			: undefined;
	return (
		<Container >
			<ElevationScroll {...props}>
				<AppBar component='nav'>
					<Toolbar >
						<Typography
							component={Link}
							to='/'
							variant='h6'
							sx={{
								color: 'text.secondary',
								flexGrow: 1
							}}
						>
							Signature Ent
						</Typography>
						<IconButton
							color='inherit'
							aria-label='open-drawer'
							edge='end'
							onClick={handleDrawerToggle}
							sx={{ display: { sm: 'none' } }}
						>
							<SortIcon />
						</IconButton>
						<Box
							sx={{ display: { xs: 'none', sm: 'block' } }}
						>
							{navLinks.map((link) => (
								<LinkBtn
									color='inherit'
									key={link.title}
									component={HashLink}
									smooth to={link.path}
								>
									{link.title}
								</LinkBtn>
							))}
						</Box>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Box component='nav'>
				<Drawer
					anchor='right'
					container={container}
					variant='temporary'
					open={openMobile}
					onClose={handleDrawerToggle}
					modalProps={{ keepmounted: true }}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							backdropFilter: 'blur(2.5px)',
							backgroundColor: (theme) =>
								alpha(
									theme.palette.primary.main,
									0.25
								),
							boxSizing: 'border-box',
							width: drawerWidth,
							display: 'flex'
						}
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Container>
	);
}
NavBar.propTypes = {
	window: PropTypes.func
};
export default NavBar;