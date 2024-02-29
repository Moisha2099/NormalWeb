import logo from './logo.svg';
import './App.css';
import './index.css';
import logo192 from './logo192.webp';
import drug1 from './drug1.webp';
function App() {
  return (
    <>
    <header>
      <nav>
          <img src={logo192}/>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
      </nav>
    </header>
    <main>
      <div>
        <img src={drug1} />
      </div>
    </main>
    
    <footer>
    <p>© Pharmacy Site</p>
    </footer>
    </>
  );
}

export default App;
