import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from './main';
import { LoginForm } from './components/LoginForm';
import './App.css';

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  if (!store.isLoading) {
    return <div>Loading...</div>;
  }

  if (!store.isAuth) {
    return <LoginForm />;
  }

  return (
    <>
      <h1>{store.isAuth ? `The user is authorized ${store.user?.email}` : 'Please log in'}</h1>
      <button onClick={() => store.logout()}>Logout</button>
    </>
  );
}

export default observer(App);
