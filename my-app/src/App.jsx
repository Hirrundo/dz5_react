import './App.css';

let clickCount = 0;

function App() {
  function handleClick() {
    clickCount++;
    console.log('Нажатий:', clickCount);
  }

  return (
    <div>
      <button onClick={handleClick}>Нажми меня</button>
      <p>Количество нажатий смотрите в консоли</p>
       <input
        type="text"
        placeholder="Введите имя"
        onChange={(event) => console.log(event.target.value)}
/>
      <p>Смотрите имя в консоли</p>
    <div
        className="highlight"
        onMouseOver={() => console.log('Мышь наведена!')}
      >
        Наведи на меня
      </div>
  </div>
   
  );
}

export default App;