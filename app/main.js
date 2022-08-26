import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './Root';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();

const root = createRoot(document.getElementById('main'));

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<Root />
		</Provider>
	</BrowserRouter>
);
