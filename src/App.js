import logo from './logo.svg';
import './App.css';
import UsersContainer from './components/UsersContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Great Heights</h1>
        <h3 className="App-title">Attendance Tracker</h3>
      </header>
      <UsersContainer />
    </div>
  );
}

export default App;
