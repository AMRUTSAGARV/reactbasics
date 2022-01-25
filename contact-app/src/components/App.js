import React from "react";
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const contacts = [
    {
      id : "1",
      name : "Amrutsagar",
      email : "amrutsagar06@gmail.com"
    },
    {
      id : "2",
      name : "Harigovind",
      email : "harigovind97@gmail.com"
    }
  ];
  return (
   
    <div className="ui container">
<Header />
<AddContact />
<ContactList contacts={contacts} />

    </div>     //JSX  (combination of javscript and html)

  );
}

export default App;
