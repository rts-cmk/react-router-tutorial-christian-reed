import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Dashboard from './components/Dashboard.jsx';
import About from './components/About.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage.jsx';
import DashboardItems from './components/DashboardItems.jsx';
import './css/styles.css';
import HowToUse from './components/HowToUse.jsx';

const router = createBrowserRouter([
	{ path: '/', element: <App /> },
	{ path: '/dashboard', element: <Dashboard /> },
	{ path: '/about', element: <About /> },
	{ path: '*', element: <NotFoundPage /> },
	{ path: '/dashboard/:id', element: <DashboardItems /> },
	{ path: '/howtouse', element: <HowToUse /> }
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
