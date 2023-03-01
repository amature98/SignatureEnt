import { Box } from '@mui/material';
import NavBar from '../Components/NavBar';
import React from 'react';
//Sections of the Page
import HomeSection from '../Sections/Home.section';
import About from '../Sections/About.section';
import Team from '../Sections/Team.section';
import Testimonials from '../Sections/Testimonials.section';
// import Contact from '../Sections/Contact.section';

function Home() {
	return (
		<Box>
			<NavBar />
			<HomeSection />
			<About />
			<Team />
			<Testimonials />
		</Box>
	);
}

export default Home;
