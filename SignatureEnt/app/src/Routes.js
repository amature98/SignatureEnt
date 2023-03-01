import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Home from './Pages/index'
import Errorpage from './Pages/Error.page';

export default function Router() {
	return useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/404', element: <Errorpage /> },
		{ path: '*', element: <Navigate to='/404' /> }
	]);
}
