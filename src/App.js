import { useState } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import './App.css';
import Headlines from './components/Headlines';

function App() {
  const [menuItem, setMenuItem] = useState('home');
  return (
    <div className="app">
      <Header passValue={(item) => setMenuItem(item)} />
      {menuItem == "home" && <Content />}
      {menuItem == "headlines" && <Headlines />}
    </div>
  );
}

export default App;
