import { Routes, Route, Link } from 'react-router-dom';
import Committees from './pages/Committees';
import './App.css';

function Home() {
  return (
    <section className="content">
      <h1>Welcome to DelegateOS</h1>
      <p>Select a page from the navigation.</p>
    </section>
  );
}

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/committees" className="nav-link">Committees</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/committees" element={<Committees />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
