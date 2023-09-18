import React from 'react'
import ListOfGifs from './components/ListOfGifs'
import './App.css'

function App() {
  const [keyword, setKeyword] = React.useState('panda')
  return (
    <div className="App">
      <section className="App-content">
        {
          <>
            <ListOfGifs keyword={keyword} />
            <button onClick={() => setKeyword('morty')}>Cambiar keyword
            </button>
          </>
        }
      </section>
    </div>
  );
}

export default App;
