import {useState} from 'react'
import UserCreate from './components/UserCreate'
import {LanguageStore} from './contexts/LanguageContext'
import ColorContext from './contexts/ColorContext'
import LanguageSelector from './components/LanguageSelector'

function App() {

  return (
    <div className="ui container">
    {/* implement LanguageStore to provide access to the context and state. this is done as the components are passed as children.props to language store. that way they have access to the data */}
    <LanguageStore>
      <LanguageSelector/>
      {/* wrap the children component with the provider from the context you created */}
      {/* value is specific to provider that passes in any type of value and will be used to update the context object, it can be any thing, such as an array or state*/}
      {/* provider property is apart of context and is a react component */}
      {/* you want some data avaialble to the button component that gets rendered in usercreate*/}
      {/* providers provide data to every component in usercreate  */}
      <ColorContext.Provider value='red'>
      <UserCreate/>
      </ColorContext.Provider>
      </LanguageStore>
    </div>
  );
}

export default App;
