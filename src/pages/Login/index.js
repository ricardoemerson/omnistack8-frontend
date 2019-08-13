import React, { useState } from 'react';

import logo from '../../assets/logo.svg';
import { Container } from './styles';

import api from '../../services/api';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs', { username });

    const { _id } = response.data;

    history.push(`/main/${ _id }`);
  }

  return (
    <Container>
      <form onSubmit={ handleSubmit }>
        <img src={ logo } alt="Tindev" />
        <input
          type="text"
          placeholder="Digite o seu usuário do Github"
          value={ username }
          onChange={ e => setUsername(e.target.value) }
        />
        <button type="submit">Enviar</button>

      </form>
    </Container>
  );
};

export default Login;
