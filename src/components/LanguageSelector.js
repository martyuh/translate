import React, { Component } from 'react'
import Context from '../contexts/LanguageContext'

export class LanguageSelector extends Component {
        // hooking a contextType to a class component
    //static adds a property to a class itself
    // contexttype links this component to the context object
    static contextType = Context
    render() {
        console.log(this.context)
        return (
            <div>
            Select a Language: 
            {/* onlanguagechange is located on the context property*/}
            <i className="flag us" onClick={()=>this.context.onLanguageChange('english')}/>
            <i className="flag nl" onClick={()=>this.context.onLanguageChange('dutch')}/>
          </div>
        )
    }
}

export default LanguageSelector

