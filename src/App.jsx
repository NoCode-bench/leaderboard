import { useState } from 'react';
import Home from './views/Home'


function App() {
  const [leaderboard] = useState([])
  const [sections] = useState([])

  return (
    <Home leaderboard={leaderboard} sections={sections} />
  );
}

export default App;
