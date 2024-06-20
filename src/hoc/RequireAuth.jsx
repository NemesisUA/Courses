import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireAuth = ({ children }) => {
	const isLoggedIn = useSelector((state) => state.user.isAuth) || false;

	if (!isLoggedIn) {
		return <Navigate to='/login' replace />;
	}

	return children;
};

RequireAuth.propTypes = {
	children: PropTypes.node,
};

export default RequireAuth;
