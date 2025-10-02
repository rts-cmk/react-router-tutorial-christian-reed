import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Dashboard from './components/Dashboard.jsx';
import About from './components/About.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage.jsx';
import DashboardItems from './components/DashboardItems.jsx';
import './css/styles.css';
import HowToUse from './components/HowToUse.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFoundPage />} />
				<Route path="/dashboard/:id" element={<DashboardItems />} />
				<Route path="/howtouse" element={<HowToUse />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
