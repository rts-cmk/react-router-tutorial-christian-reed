import { Link } from 'react-router-dom';
import '../css/styles.css';
import Navigation from './Navigation';

export default function NotFoundPage() {
	return (
		<>
			<Navigation />
			<div>
				<h1>Not Found Page ⊖</h1>
				<Link to={'/'}>
					<button>Go Back Home</button>
				</Link>
			</div>
		</>
	);
}
