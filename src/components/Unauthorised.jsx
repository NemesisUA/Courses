import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common';

const Unauthorised = () => {
	const navigate = useNavigate();

	const goBack = () => navigate(-1);

	return (
		<section style={{ textAlign: 'center', marginTop: '40px' }}>
			<h2>Only Admin can access this route/component</h2>
			<Button buttonText='Go Back' onClick={goBack} />
		</section>
	);
};

export default Unauthorised;
