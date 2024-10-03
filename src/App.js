 import { useContext } from 'react';
import Header from './Component/Header';
import Main from './Component/Main';
 import ThemeContext from './Context/theme.context';
 import './styles/components/App.scss';
 import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
 const { dark } = useContext(ThemeContext);
  return (
    <div className={`App-${dark ? 'dark' : 'light'}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;

