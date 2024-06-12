import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const {
		getItem: getUserLS,
		setItem: setUserLS,
		removeItem: removeUserLS,
	} = useLocalStorage('user', {});

	const {
		getItem: getTokenLS,
		setItem: setTokenLS,
		removeItem: removeTokenLS,
	} = useLocalStorage('token', null);

	const [user, setUser] = useState(getUserLS || null);
	const [token, setToken] = useState(getTokenLS || null);

	const signIn = (newUser, token, callbackFunc) => {
		setUser(newUser);
		setUserLS(newUser);

		setToken(token);
		setTokenLS(token);

		callbackFunc();
	};

	const signOut = (callbackFunc) => {
		setUser(null);
		removeUserLS();

		setToken(null);
		removeTokenLS();

		callbackFunc();
	};

	const value = { user, signIn, signOut, token };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};
