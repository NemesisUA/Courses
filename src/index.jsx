import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import CoursesProvider from './hoc/CoursesProvider';
import App from './App';

import './index.css';
import AuthorsAllProvider from './hoc/AuthorsAllProvider';

import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<BrowserRouter>
				<CoursesProvider>
					<AuthorsAllProvider>
						<App />
					</AuthorsAllProvider>
				</CoursesProvider>
			</BrowserRouter>
		</React.StrictMode>
	</Provider>
);
