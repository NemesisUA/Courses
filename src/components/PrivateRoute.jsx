import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const location = useLocation();

	const userRole = useSelector((state) => state.user.role);
	const token = useSelector((state) => state.user.token);

	return userRole === 'admin' ? (
		children
	) : token ? (
		<Navigate to='/courses' state={{ from: location }} replace />
	) : (
		<Navigate to='/login' />
	);
};

export default PrivateRoute;
