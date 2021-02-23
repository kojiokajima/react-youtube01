import React, {useEffect, useState} from 'react'
import {List} from './List'
import {Form} from './Form'
import {getLanguages} from './const/languages'

function App() {
  const [tab, setTab] = useState("list")
  const [langs, setLangs] = useState([])

  const addLang = (lang) => {
    setLangs([...langs, lang])
    setTab('list');
  }

  useEffect(() => {
    // console.log('App.js:useEffect')
    fetchLanguages();
  }, [])

  const fetchLanguages = async () => {
    const languages = await getLanguages()
    setLangs(languages)
  }

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')}>List</li>
          <li onClick={() => setTab('form')}>Form</li>
        </ul>
      </header>
      <hr/>
      {
        tab === "list" ? <List langs={langs} /> : <Form onAddLang={addLang}/>
      }
    </div>
  );
}

export default App;
