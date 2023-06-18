import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Login from './Login';
import Cards from './Cards';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Cards></Cards>,
	},
	{
		path: '/login',
		element: <Login></Login>,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
