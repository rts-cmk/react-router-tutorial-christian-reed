import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import '../css/styles.css';

export default function Dashboard() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => setUsers(data))
			.catch((error) => console.error('Error fetching users:', error));
	}, []);

	return (
		<>
			<Navigation />
			<div>
				<h1>User Dashboard</h1>
				<ul>
					{users.map((user) => (
						<li key={user.id}>
							<Link to={`/dashboard/${user.id}`}>
								<h2>{user.name}</h2>
							</Link>
						</li>
					))}
				</ul>
				<Link to={'/'}>
					<button>Go Back Home</button>
				</Link>
			</div>
		</>
	);
}
