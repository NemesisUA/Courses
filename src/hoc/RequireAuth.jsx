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

export default RequireAuth;
