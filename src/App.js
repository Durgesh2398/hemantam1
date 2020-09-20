
import React from 'react';
import './App.css';
import DatePickers from './DatePickers';
import Example from './Example';
import RegisterUser from './RegisterUser';
import Upload from './Upload';
function App() {
  return (
    <div className="App">
        <RegisterUser/>
       <DatePickers/>
       <Example/>
       <Upload/>
    </div>
  );
}

export default App;
