import { Link } from 'react-router';
import '../css/styles.css';
import Navigation from './Navigation';

export default function NotFoundPage() {
	return (
		<>
			<Navigation />
			<div>
				<h1>Not Found Page ⊖</h1>
				<Link to={'/react-router-tutorial-christian-reed/'}>
					<button>Go Back Home</button>
				</Link>
			</div>
		</>
	);
}
