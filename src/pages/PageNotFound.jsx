import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common';

const PageNotFound = () => {
	const navigate = useNavigate();

	return (
		<div style={{ textAlign: 'center', marginTop: '60px' }}>
			<h1>Page Not Found</h1>
			<Button buttonText='go home' onClick={() => navigate('/')} />
		</div>
	);
};

export default PageNotFound;
