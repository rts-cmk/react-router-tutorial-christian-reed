import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Dashboard from './components/Dashboard.jsx';
import About from './components/About.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import NotFoundPage from './components/NotFoundPage.jsx';
import DashboardItems from './components/DashboardItems.jsx';
import './css/styles.css';
import HowToUse from './components/HowToUse.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path="/react-router-tutorial-christian-reed/"
					element={<App />}
				/>
				<Route
					path="/react-router-tutorial-christian-reed/dashboard"
					element={<Dashboard />}
				/>
				<Route
					path="/react-router-tutorial-christian-reed/about"
					element={<About />}
				/>
				<Route path="*" element={<NotFoundPage />} />
				<Route
					path="/react-router-tutorial-christian-reed/dashboard/:id"
					element={<DashboardItems />}
				/>
				<Route
					path="/react-router-tutorial-christian-reed/howtouse"
					element={<HowToUse />}
				/>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
