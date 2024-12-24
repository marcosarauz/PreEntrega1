import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import itemlistcontainer from './componentes/itemliscontainer/itemlistcontainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <itemlistcontainer greeting={'hola'}/>
    </div>
  );
}

export default App;
