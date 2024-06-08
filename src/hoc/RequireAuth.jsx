import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const RequireAuth = ({ children }) => {
	const location = useLocation();
	const { token } = useAuth();

	if (!token) {
		return <Navigate to='/login' />;
	}
	return children;
};

export default RequireAuth;
