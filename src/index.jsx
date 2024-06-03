import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import CoursesProvider from './hoc/CoursesProvider';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<CoursesProvider>
				<App />
			</CoursesProvider>
		</BrowserRouter>
	</React.StrictMode>
);
