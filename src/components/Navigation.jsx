import { NavLink } from 'react-router';

export default function Navigation() {
	return (
		<nav className="navWrapper">
			<NavLink to="/" end className={'nav'}>
				Home
			</NavLink>
			<NavLink to="/about" end className={'nav'}>
				About
			</NavLink>
			<NavLink to="/howtouse" end className={'nav'}>
				How To Use
			</NavLink>
			<NavLink to="/dashboard" end className={'nav'}>
				Demo
			</NavLink>
		</nav>
	);
}
