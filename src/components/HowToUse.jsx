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
			</div>
		</>
	);
}
