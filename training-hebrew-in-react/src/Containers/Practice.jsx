import { useState } from 'react';
import styles from './Practice.module.css';

function Pracrice() {
	const array = [
		{ ru: 'Член', he: 'זין' },
		{ ru: 'Человек', he: 'אדם' },
		{ ru: 'Жопа', he: 'תחת' },
	];

	const [RandomElement, setRandomElement] = useState(
		Math.floor(Math.random() * array.length)
	);
	const [text, setText] = useState();
	const [feedback, setFeedback] = useState('standart');
	function isTrue(event) {
		if (event.key === 'Enter') {
			if (text === array[RandomElement].he) {
				setFeedback('correct');
				setTimeout(() => setFeedback('standart'), 2000);
				setRandomElement(Math.floor(Math.random() * array.length));
				array.splice(RandomElement, 1);
			} else {
				setFeedback('notCorrect');
				setTimeout(() => setFeedback('standart'), 2000);
			}
		}
	}
	return (
		<div className={`${styles.startBackground} ${styles[feedback]}`}>
			<h1>{array[RandomElement].ru}</h1>
			<input
				value={text}
				onChange={event => setText(event.target.value)}
				onKeyDown={event => isTrue(event)}
				placeholder='Введите перевод'
			></input>
		</div>
	);
}

export default Pracrice;
