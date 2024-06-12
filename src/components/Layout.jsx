import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const Layout = () => {
	return (
		<>
			<Header />

			<div className='wrapper'>
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
