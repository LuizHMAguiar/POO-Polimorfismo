import './App.css';
import { Gato } from './models/Gato';
import { Papagaio } from './models/Papagaio';
import { Animal } from './models/Animal';

function App() {
  const animais: Animal[] = [
    new Gato('Mimi'),
    new Papagaio('Loro'),
    new Gato('Felix'),
    new Papagaio('Polly'),
    new Gato('Garfield'),
    new Papagaio('Zazu')
  ];

  return (
    <div>
      <p>{animais[1].emitirSom()}</p>
    </div>
  );
}

export default App