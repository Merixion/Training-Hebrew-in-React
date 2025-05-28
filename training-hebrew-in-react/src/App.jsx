import { useState } from 'react';
import './App.css';
import Pracrice from './Containers/Practice';

function App() {
  const [showBlock, setshowBlock] = useState(false);

	return (
		<div className='start'>
			<h1>Тренажёр для иврита</h1>
			<button onClick={() => setshowBlock(true)}>Начать</button>
      {showBlock && <><Pracrice/></>}
		</div>
	);
}

export default App;
