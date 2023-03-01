import React from 'react';
import { styled } from '@mui/material/styles';
import { IconButton, Stack, Link } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socialLinks = [
	{
		title: 'instagram',
		link:
			'https://instagram.com/_signature.ent?igshid=YmMyMTA2M2Y',
		icon: <InstagramIcon />
	},
	{
		title: 'facebook',
		link: '#',
		icon: <FacebookRoundedIcon />
	},
	{
		title: 'twitter',
		link: '#',
		icon: <TwitterIcon />
	},
	{
		title: 'linkedIn',
		link: '#',
		icon: <LinkedInIcon />
	}
];

const SocialsStyle = styled(Stack)(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		display: 'none'
	}
}));
const SocialBtn = styled(IconButton)(({ theme }) => ({
	color: theme.palette.text.primary,
	transition: 'transform 0.4s ease-in-out 0.1s',
	':hover': {
		color: theme.palette.secondary.main,
		transform: 'scale(1.5)'
	}
}));

function Socials({ props }) {
	return (
		<>
			<SocialsStyle {...props} spacing={2}>
				{socialLinks.map((socialLink) => {
					return (
						<SocialBtn
							size='large'
							key={socialLink.title}
							component={Link}
							href={socialLink.link}
							target='blank'
						>
							{socialLink.icon}
						</SocialBtn>
					);
				})}
			</SocialsStyle>
		</>
	);
}

export default Socials;
