import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const RequireAuth = ({ children }) => {
	const { token } = useAuth();
	const isLoggedIn = token?.length || false;

	if (!isLoggedIn) {
		return <Navigate to='/login' replace />;
	}

	return children;
};

RequireAuth.propTypes = {
	children: PropTypes.node,
};

export default RequireAuth;
