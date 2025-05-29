import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import styles from './Practice.module.css';

function Pracrice() {
	const [array, setArray] = useState([
		{ ru: 'Член', he: 'זין' },
		{ ru: 'Человек', he: 'אדם' },
		{ ru: 'Жопа', he: 'תחת' },
		{ ru: 'Дом', he: 'בית' },
	]);

	const [RandomElement, setRandomElement] = useState(
		Math.floor(Math.random() * array.length)
	);
	const maxLen = useRef(array.length);
	const [count, setCount] = useState(0);
	const [text, setText] = useState();
	const [feedback, setFeedback] = useState('standart');
	useEffect(() => {
		if (array.length > 0)
			setRandomElement(Math.floor(Math.random() * array.length));
	}, [array]);
	function isTrue(event) {
		if (event.key === 'Enter') {
			if (text === array[RandomElement].he) {
				setFeedback('correct');
				setTimeout(() => setFeedback('standart'), 500);
				setCount(count + 1);
				setArray(array.filter((_, index) => index !== RandomElement));
			} else {
				setFeedback('notCorrect');
				setTimeout(() => setFeedback('standart'), 500);
				setCount(0);
			}
		}
	}
	return (
		<div>
			{array.length > 0 ? (
				<div className={`${styles.startBackground} ${styles[feedback]}`}>
					<h1 className={styles.rest}>
						{maxLen.current - array.length} из {maxLen.current}
					</h1>
					<h1 className={styles.counts}>Верные: {count}</h1>
					<h1>{array[RandomElement].ru}</h1>
					<input
						value={text}
						onChange={event => setText(event.target.value)}
						onKeyDown={event => isTrue(event)}
						placeholder='Введите перевод'
					></input>
				</div>
			) : null}
		</div>
	);
}

export default Pracrice;
