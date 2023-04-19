import React from 'react';
import Header from './components/Header';
import Users from './components/Users';

class App extends React.Component {
  render() {
    return (<div>
      <Header title="Список пользователей" />
      <main>
        <Users />
        <aside></aside>
      </main>
    </div>)
  }
}
export default App