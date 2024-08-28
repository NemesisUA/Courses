import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Logo from './components/Logo/Logo';
import { Button } from '../../common';
import { formatUserName } from '../../helpers';
import { requestLogout } from '../../store/user/thunk';

import styles from './header.module.css';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const token = useSelector((state) => state.user.token);
	const userName = useSelector((state) => state.user.name);

	let { pathname } = useLocation();
	let hideUserAndLogout = pathname === '/login' || pathname === '/registration';

	function handleLogout() {
		dispatch(requestLogout());

		navigate('/login');
	}

	return (
		<header className={styles.header}>
			<Logo />
			{!token && !hideUserAndLogout && (
				<Button buttonText='Login' onClick={() => navigate('/login')} />
			)}
			{token && !hideUserAndLogout && (
				<div>
					<b style={{ marginRight: '40px' }}>{formatUserName(userName)}</b>
					<Button buttonText='Logout' onClick={handleLogout} />
				</div>
			)}
		</header>
	);
};

export default Header;
