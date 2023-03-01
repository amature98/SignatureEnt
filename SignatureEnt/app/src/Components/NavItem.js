import React from 'react';
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import {
	ListItem,
	ListItemButton,
	ListItemText
} from '@mui/material';
import { HashLink } from 'react-router-hash-link';

const NavItemStyled = styled(ListItemButton)(
	({ theme }) => ({
		textAlign: 'center',
		':hover': {
			backgroundColor: alpha(
				theme.palette.action.hover,
				theme.palette.action.hoverOpacity
			)
		}
	})
);

function NavItem({ item }) {
	const { title, path } = item;
	return (
		<ListItem>
			<NavItemStyled component={HashLink} to={path}>
				<ListItemText primary={title} />
			</NavItemStyled>
		</ListItem>
	);
}
NavItem.propTypes = {
	item: PropTypes.object
};

export default NavItem;
