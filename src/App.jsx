import { useState } from 'react';
import { fo1, fo2, fo3, fo4 } from './assets/images/';
import phrases from './phrases.json';
import './app.css';

const images = [fo1, fo2, fo3, fo4];

function radomIndex(max) {
	return Math.floor(Math.random() * max);
}

function App() {
	const [phrase, setPhrase] = useState(phrases[radomIndex(phrases.length)]);
	const [img, setImg] = useState(images[radomIndex(images.length)]);
	const [animation, setAnimation] = useState('');

	function changePhrase() {
		setPhrase(phrases[radomIndex(phrases.length)]);
		setImg(images[radomIndex(images.length)]);
		setAnimation('');
		setTimeout(() => setAnimation('slideIn'), 50);
	}

	return (
		<div className="wrapper" style={{ backgroundImage: `url(${img})` }}>
			<div className="container">
				<h1 className={`heading ${animation}`}>
					Galletas de la fortuna
					<br />
					FORTUNE COOKIE
				</h1>

				{/* contenido tarjeta */}
				<div className="card">
					<div className="card__body">
						<q className="phrase">{phrase.phrase}</q>
						<cite className="author">{phrase.author}</cite>
					</div>
				</div>

				{/* boton */}
				<button onClick={changePhrase} className="btn">
					siguiente
				</button>
			</div>
		</div>
	);
}

export default App;
