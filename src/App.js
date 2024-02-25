
import './App.css';
import TodoList from './components/ToDoList.tsx';
import NavBar from './components/Navbartest.tsx';
import MovieClip from './components/YoutubeBlock.tsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='MainPage'>
      <TodoList className="MainPage-Item"/>
      <MovieClip className="MainPage-Item"/>
      </div>
    </div>
  );
}

export default App;
