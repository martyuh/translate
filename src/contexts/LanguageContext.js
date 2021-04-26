import React from 'react'


// must have a capital C in context
//language context object assigned to Context
const Context =  React.createContext('english')

export class LanguageStore extends React.Component{
    state={language:'english'}

    // callback function to change the state
    onLanguageChange = (language) =>{
        this.setState({language})
    }

    render(){
        return(
            // languageContext provider with values passed into it so that the children of this component which is children is explained below, have access to that data
            //those children will be the UserCreate,Field,Button,and LanguageSelector, when you wrap them with the LanguageStore component
            // new object with with all values of state add in to object and pass callback function as well
            // only the components listed as the children will have access to the context of the provider
            // capital C in context is when you create a component 
            <Context.Provider value = {{...this.state,onLanguageChange:this.onLanguageChange}}>
            {/* all the components rendered inside language store will have access to the context object  */}
                {this.props.children}
            </Context.Provider>
        )
    }
}
export default Context

// example of props.children, anything that is within the component element will be passed as props.children
{/* <LanguageStore>
    <div>
        <LanguageSelector/>
    </div>
</LanguageStore> */}