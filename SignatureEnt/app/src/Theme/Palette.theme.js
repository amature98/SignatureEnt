const PRIMARY = {
	main: '#FFFFFF', //MAIN COLOR PALETTE
	dark: '#CCCCCC',
	light: '#EAEAEA'
};
const SECONDARY = {
	main: '#FFC900',
	dark: '#D5AD18',
	light: '#FFE889'
};
const ERROR = {
	main: '#FFAF89',
	dark: '#F95000',
	light: '#FFBE9F' //main color palette pink shade
};
const INFO= {
	main: '#000000', //main color palette
	dark: '#4B4F54',
	light: '#C4C4C4'
};
const SUCCESS = {
	main: '#676fgd',
	dark: '#0C2340', //main color palette Blue Zodiac
	light: '#9CBFEC'
};
const palette = {
	primary: { ...PRIMARY },
	secondary: { ...SECONDARY },
	error: { ...ERROR },
	INFO: { ...INFO },
	success: { ...SUCCESS },
	background: {
		default: PRIMARY.main,
		paper: PRIMARY.dark
	},
	text: {
		primary: INFO.main,
		secondary: SECONDARY.main,
		disabled: INFO.light
	},
	action: {
		active: PRIMARY.main,
		hover: SECONDARY.light,
		hoverOpacity: 0.25,
		selected: SECONDARY.main,
		selectedOpacity: 0.15
	}
};
export default palette;
