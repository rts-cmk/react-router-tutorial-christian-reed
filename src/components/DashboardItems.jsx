import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import '../css/styles.css';

export default function DashboardItems() {
	const { id } = useParams();
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
			.then((response) => response.json())
			.then((data) => setTodos(data))
			.catch((error) => console.error('Error fetching todos:', error));
	}, [id]);

	return (
		<>
			<Navigation />
			<div>
				<h1>User Todos</h1>
				<Link to={'/dashboard'}>
					<button>Go Back</button>
				</Link>
				<ul>
					{todos.map((todo) => (
						<li key={todo?.id}>
							<h3>{todo?.title}</h3>
							<p>Status: {todo?.completed ? 'Completed' : 'Pending'}</p>
						</li>
					))}
				</ul>
				<Link to={'/dashboard'}>
					<button>Go Back</button>
				</Link>
			</div>
		</>
	);
}
