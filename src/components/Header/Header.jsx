import React from 'react';

import Logo from './components/Logo/Logo';
import { Button } from '../../common';

import styles from './header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Button buttonText='Logout' />
		</header>
	);
};

export default Header;
