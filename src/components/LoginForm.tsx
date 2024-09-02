import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { store } from '../store/store';

export const LoginForm = observer(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => store.login(email, password)}>Login</button>
      <button onClick={() => store.register(email, password)}>Register</button>
    </div>
  );
});
