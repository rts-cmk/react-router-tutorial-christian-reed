import { NavLink } from 'react-router';

export default function Navigation() {
	return (
		<nav className="navWrapper">
			<NavLink
				to="/react-router-tutorial-christian-reed/"
				end
				className={'nav'}>
				Home
			</NavLink>
			<NavLink
				to="/react-router-tutorial-christian-reed/about"
				end
				className={'nav'}>
				About
			</NavLink>
			<NavLink
				to="/react-router-tutorial-christian-reed/howtouse"
				end
				className={'nav'}>
				How To Use
			</NavLink>
			<NavLink
				to="/react-router-tutorial-christian-reed/dashboard"
				end
				className={'nav'}>
				Demo
			</NavLink>
		</nav>
	);
}
