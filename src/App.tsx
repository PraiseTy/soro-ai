import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Login, SignUp } from './components';
function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>;
}

export default App;
