import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

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

AuthorsAllProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthorsAllProvider;
