import { createContext, useState } from 'react';
import { mockedAuthorsList } from '../constants';

export const AuthorsAllContext = createContext(null);

const AuthorsAllProvider = ({ children }) => {
	const [authorsAll, setAuthorsAll] = useState(mockedAuthorsList);

	return (
		<AuthorsAllContext.Provider value={{ authorsAll, setAuthorsAll }}>
			{children}
		</AuthorsAllContext.Provider>
	);
};

export default AuthorsAllProvider;
