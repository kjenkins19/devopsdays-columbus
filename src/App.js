import React, {Component} from 'react';
import logo from './logo.svg';
import Slide from './components/Slide/Slide';
import './App.css';
import './styles.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Slide type="welcome">
					<h4>devopsdays Ohio is now</h4>
					<h1 className="main-title">devopsdays Columbus!</h1>
					<h2 className="dates">Wednesday, Sept 19, 2018 - Thursday, Sept 20, 2018</h2>
					<h3 className="where"><a href="#">Columbus, Ohio @ The Bluestone</a></h3>
				</Slide>
				<Slide type="about">
					<h3 className="section-title">What is DevOpsDays Ohio?</h3>
					<p className="copy">DevOpsDays Ohio is a local event under the umbrella of <a href="">DevOpsDays</a>, a worldwide series of technical
						conferences covering topics of software development, IT infrastructure operations, and the intersection between
						them.</p>
					<p className="copy">Our goal is to provide two days of amazing presentations and learning experience for anyone and everyone!</p>
				</Slide>
				<Slide type="sign-up">
					<h3 className="section-title">Sound like fun, how do I join in?</h3>
					<p className="copy">You will be able to sign up soon! We will keep you updated.</p>
				</Slide>
				<Slide type="submissions">
					<h3 className="section-title">Can I submit a presentation?</h3>
					<p className="copy">Absolutely! Checkout <a href="#">this page</a> for more information on the types of presentations and how to
						submit.</p>
				</Slide>
				<Slide type="more-info">
					<h3 className="section-title">Where can I find more information?</h3>
					<p className="copy">All details, schedules, presenters and abstracts are available on the <a href="https://www.devopsdays.org/">primary information website</a>
					</p>
				</Slide>
				{/*<header className="App-header">*/}
					{/*<img src={logo} className="App-logo" alt="logo"/>*/}
					{/*<h1 className="App-title">Welcome to React</h1>*/}
				{/*</header>*/}
				{/*<p className="App-intro">*/}
					{/*To get started, edit <code>src/App.js</code> and save to reload.*/}
				{/*</p>*/}
			</div>
		);
	}
}

export default App;
