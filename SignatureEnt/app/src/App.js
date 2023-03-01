import React from 'react';
import Router from './Routes';
import ThemeConfig from './Theme/index';
import GlobalStyles from './Theme/Global.theme';
function App() {
	return (
		<ThemeConfig>
      <GlobalStyles />
			<Router />
		</ThemeConfig>
	);
}

export default App;
