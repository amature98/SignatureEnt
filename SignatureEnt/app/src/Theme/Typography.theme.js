const pxToRem = (value) => {
	return `${value / 16}rem`;
};
const responsiveFontSizes = ({ sm, md, lg }) => {
	return {
		'@media (min-width:600px)': {
			fontSize: pxToRem(sm)
		},
		'@media (min-width:900px)': {
			fontSize: pxToRem(md)
		},
		'@media (min-width:1200px)': {
			fontSize: pxToRem(lg)
		}
	};
};
const PRIMARY_FONT = 'Montserrat, sans-serif';
const SECONDARY_FONT = 'Dancing Script, cursive';
const fontWeightRegular = 400;
const fontWeightMedium = 600;
const typography = {
	fontFamily: PRIMARY_FONT,
	fontWeight: fontWeightRegular,
	h1: {
		fontWeight: fontWeightMedium,
		lineHeight: 1.05,
		textTransform: 'uppercase',
		fontSize: pxToRem(75),
		letterSpacing: 1,
		...responsiveFontSizes({ sm: 75, md: 80, lg: 100 })
	},
	h2: {
		fontFamily: SECONDARY_FONT,
		fontWeight: fontWeightMedium,
		lineHeight: 1.5,
		letterSpacing: 0.75,
		fontSize: pxToRem(40),
		...responsiveFontSizes({ sm: 40, md: 44, lg: 48 })
	},
	h3: {
		fontWeight: 400,
		lineHeight: 1,
		fontSize: pxToRem(24),
		...responsiveFontSizes({ sm: 26, md: 30, lg: 32 })
	},
	h4: {
		fontWeight: 500,
		lineHeight: 1.5,
		fontSize: pxToRem(20),
		...responsiveFontSizes({ sm: 20, md: 24, lg: 24 })
	},
	h5: {
		fontWeight: 500,
		lineHeight: 1.5,
		fontSize: pxToRem(18),
		...responsiveFontSizes({ sm: 19, md: 20, lg: 20 })
	},
	h6: {
		fontFamily: SECONDARY_FONT,
		fontWeight: 600,
		lineHeight: 28 / 18,
		fontSize: pxToRem(24),
		...responsiveFontSizes({ sm: 20, md: 20, lg: 20 })
	},
	body1: {
		lineHeight: 1.5,
		fontSize: pxToRem(22),
		...responsiveFontSizes({sm:14, md:16, lg:18})
	},
	body2: {
		lineHeight: 1.5,
		fontWeight: fontWeightRegular,
		letterSpacing: 1.5,
		fontSize: pxToRem(14)
	},
	caption: {
		lineHeight: 1.5,
		fontSize: pxToRem(12),
		textTransform: 'uppercase'
	},
	button: {
		fontWeight: 300,
		lineHeight: 24 / 14,
		fontSize: pxToRem(16),
		textTransform: 'uppercase',
		...responsiveFontSizes({ sm: 14, md: 16, lg: 18 })
	}
};
export default typography;
