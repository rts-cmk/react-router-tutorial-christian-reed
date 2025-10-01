import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
	// const dashboardItems = [
	// 	{ id: 1, title: 'My Profile' },
	// 	{ id: 2, title: 'My Projects' },
	// 	{ id: 3, title: 'My Teams' }
	// ];

	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => setUsers(data))
			.catch((error) => console.error('Error fetching users:', error));
	}, []);

	return (
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
	);
}
