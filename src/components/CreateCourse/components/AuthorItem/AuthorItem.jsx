import React from 'react';

import styles from './authorItem.module.css';

const AuthorItem = ({ id, name }) => {
	return (
		<div className={styles.container}>
			<p>{name}</p>
			<div className={styles.buttonsContainer}>
				<button className={styles.add}>&#10009;</button>
				<button className={styles.delete}>&#x1F5D1;</button>
			</div>
		</div>
	);
};

export default AuthorItem;
