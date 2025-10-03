import { BrowserRouter } from 'react-router';
import Navigation from './Navigation';
import '../css/styles.css';

export default function HowToUse() {
	return (
		<>
			<Navigation />
			<div>
				<h1>How to use React Router</h1>

				<h2>Installation</h2>

				<p>To begin with you want to install Vite and React</p>
				<div className="codeBlockWrapper">
					<pre>
						<code className="codeBlock">{`npm create vite@latest`}</code>
					</pre>
				</div>
				<p>Next install React Router</p>
				<div className="codeBlockWrapper">
					<pre>
						<code className="codeBlock">{`npm install react-router`}</code>
					</pre>
				</div>
				<p>
					Then you have to wrap you App in the BrowserRouter tag and import
					BrowserRouter, Routes and Route.
				</p>
				<div className="codeBlockWrapper">
					<pre>
						<code className="codeBlock longContent">
							{`
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from./app';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <BrowserRouter />
	<App /> 
    <BrowserRouter />
    );
                            `}
						</code>
					</pre>
				</div>
				<p>
					Then you have to create some Routes to the different pages/components.
				</p>
				<div className="codeBlockWrapper">
					<pre>
						<code className="codeBlock">
							{`
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from./app';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <BrowserRouter />
	<Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
	</Routes>
    <BrowserRouter />
    );
                            `}
						</code>
					</pre>
				</div>
				<p>
					When creating navigation in your app, you use Link & NavLink
					components. The NavLink component is for navigation links the needs an
					active state for ex. styling.
				</p>
				<p>
					Whenever a NavLink is active, it will automatically have an .active
					class name for easy styling with CSS
				</p>
				<div className="codeBlockWrapper">
					<pre>
						<code className="codeBlock">
							{`
import { NavLink } from 'react-router';

export default function Navigation() {
return (
<nav className="navWrapper">
	<NavLink 
    to="/react-router-tutorial-christian-reed/"
    end className={'nav'}>
	Home
	</NavLink>
	<NavLink 
    to="/react-router-tutorial-christian-reed/about"
    end className={'nav'}>
	About
	</NavLink>
	<NavLink 
    to="/react-router-tutorial-christian-reed/howtouse"
    end className={'nav'}>
	How To Use
	</NavLink>
</nav>
	);
}

                            `}
						</code>
					</pre>
				</div>
				<p>
					The Link component is used when the link doesn't need active styling.
					Notice we do not use <code>href</code> but <code>to</code> when
					inserting our URL. And it does not reload the page like and{' '}
					<code>a</code> tag would.
				</p>
				<div className="codeBlockWrapper">
					<pre>
						<code className="codeBlock">{`
<Link to={'/react-router-tutorial-christian-reed/'}>
	<button>Go Back Home</button>
</Link>
                `}</code>
					</pre>
				</div>

				<p>
					We also want a page when there is an error or a 404. We handle these
					by making a Route with the asterisk (*).
				</p>
				<p>
					Which we link to in our main.jsx and we create a error handling
					component. In the example beneath we used NotFoundPage component.
				</p>
				<p>
					A route with an asterisk path * is a no-match route. It only matches
					when no other routes do
				</p>
				<div className="codeBlockWrapper">
					<pre>
						<code className="codeBlock">{`
<Route path="*" element={<NotFoundPage />} />
                `}</code>
					</pre>
				</div>
				<div className="codeBlockWrapper">
					<pre>
						<code className="codeBlock">{`
import { Link } from 'react-router';

export default function NotFoundPage() {
return (
<>
<div>
	<h1>Not Found Page ⊖</h1>
	<Link to={'/react-router-tutorial-christian-reed/'}>
	    <button>Home</button>
	</Link>
</div>
</>
	);
}
                `}</code>
					</pre>
				</div>
			</div>
		</>
	);
}
