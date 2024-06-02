import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from './components/Logo/Logo';
import { Button } from '../../common';

import styles from './header.module.css';

const Header = () => {
	const navigate = useNavigate();

	return (
		<header className={styles.header}>
			<Logo />
			<Button buttonText='Login' onClick={() => navigate('/login')} />
		</header>
	);
};

export default Header;
