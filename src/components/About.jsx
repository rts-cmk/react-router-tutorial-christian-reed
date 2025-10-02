import { Link } from 'react-router';
import Navigation from './Navigation';
import '../css/styles.css';

export default function About() {
	return (
		<>
			<Navigation />
			<div className="about">
				<h1>React Router Tutorial</h1>
				<h2>What is React Router?</h2>
				<p>
					React Router is a library that provides routing capabilities for React
					apps
				</p>
				<p>
					Which means handling navigation between different pages (also called
					views) i.e. Routing. To go into details, React Router, intercepts the
					request from the browser to the server and injects the page requested.
					This helps make the website seem faster because there is less server
					requests sent and received.
				</p>
				<p>React Router is the standard library for routing in React apps.</p>
				<p>With React Router you can:</p>
				<ul>
					<li>Create multiple pages in you single-page app</li>
					<li>Handle URL parameters and query stings</li>
					<li>Manage browser history and navigation</li>
					<li>Create nested routes and layouts</li>
					<li>Implement protected routes for authentication</li>
				</ul>
				<p>
					Source:{' '}
					<a href="https://www.w3schools.com/react/react_router.asp">
						W3Schools
					</a>
				</p>
			</div>

			<div>
				<Link to={'/dashboard/'}>
					<button>Click here for a demo</button>
				</Link>
			</div>
		</>
	);
}
