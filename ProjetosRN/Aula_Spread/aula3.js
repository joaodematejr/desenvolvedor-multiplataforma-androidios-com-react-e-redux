const state = {
    nome: 'João',
    email: 'joaodematejr@gmail.com',
    senha: 'abc123'
}

const stateEvlouido = {
    ...state,
    email: 'joao@teste.com'
}

console.log(stateEvlouido);
