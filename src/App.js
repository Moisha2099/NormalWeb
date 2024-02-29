import logo from './logo.svg';
import './App.css';
import './index.css';
import logo192 from './logo192.webp';
import drug1 from './drug1.webp';
import CreateButton from './CreateButton';
import drug2 from './drug2.webp';
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
        <img src={drug1} className='w-96 h-auto'/>
        <p>Лазолван рино</p>
        <p>120 руб.</p>
        <CreateButton/>
      </div>
      <div>
        <img src={drug2} className='w-96 h-auto'/>
        <p>Працитомол</p>
        <p>300 руб.</p>
        <CreateButton/>
      </div>
    </main>
    
    <footer>
    <p>© Pharmacy Site</p>
    </footer>
    </>
  );
}

export default App;
