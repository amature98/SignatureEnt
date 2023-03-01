import React from 'react';
import { GlobalStyles as GlobalThemeStyles } from '@mui/material';

function GlobalStyles() {
	return (
		<GlobalThemeStyles
			styles={{
				'*': {
					margin: 0,
					boxSizing: 'border-box'
				},
				html: {
					width: '100vw',
					overflowX: 'hidden',
					textRendering: 'optimizeLegibility'
				},
				body: {
					width: '100vw',
					overflowX: 'hidden',
					textRendering: 'optimizeLegibility'
				},
				a: {
					color: '#000000',
					textDecoration: 'none'
				}
			}}
		/>
	);
}

export default GlobalStyles;
