import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import Logo from './components/Logo/Logo';
import { Button } from '../../common';
import { formatUserName } from '../../helpers';

import styles from './header.module.css';

const Header = () => {
	const navigate = useNavigate();
	const { user, signOut, token } = useAuth();

	let { pathname } = useLocation();
	let hideUserAndLogout = pathname === '/login' || pathname === '/registration';

	function handleLogout() {
		signOut(() => navigate('/login'));
	}

	return (
		<header className={styles.header}>
			<Logo />
			{!token && !hideUserAndLogout && (
				<Button buttonText='Login' onClick={() => navigate('/login')} />
			)}
			{token && !hideUserAndLogout && (
				<div>
					<b style={{ marginRight: '40px' }}>{formatUserName(user.name)}</b>
					<Button buttonText='Logout' onClick={handleLogout} />
				</div>
			)}
		</header>
	);
};

export default Header;
