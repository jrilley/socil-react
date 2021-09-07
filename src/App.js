import style from './App.module.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className={style.app_wrapper}>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
