import './style/App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  return (
    <div>
      <h1 className='title'>Contact Us</h1>
      <div className='content'>
        <ContactForm/>
        <ContactList/>
      </div>
    </div>
  );
}

export default App;
