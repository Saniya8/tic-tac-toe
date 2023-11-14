import './App.css'
import Game from './Game'
import Quote from './Quote'
import x_image from './assets/x.png';
import o_image from './assets/o.png';

function App() {

  return (
    <div className='main-container'>
      <Quote />
      <Game />
    </div>
  )
}

export default App