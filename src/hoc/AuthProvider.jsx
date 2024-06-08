import { createContext, useState } from 'react';
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

	const signIn = (newUser, callbackFunc) => {
		setUser(newUser);
		setUserLS(newUser);

		callbackFunc();
	};

	const signOut = (callbackFunc) => {
		setUser(null);
		removeUserLS();

		setToken(null);
		removeTokenLS();

		callbackFunc();
	};

	const value = { user, signIn, signOut };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
