import { useSelector } from 'react-redux';


import Auth from './components/Auth';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import Header from './components/Header';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <div>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </div>
  );
}

export default App;
