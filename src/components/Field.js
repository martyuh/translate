import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import Context from '../contexts/LanguageContext'

export class Field extends Component {
    // hooking a contextType to a class component
    //static adds a property to a class itself
    // contexttype links this component to the context object
    static contextType = Context

    render() {

        const text  =this.context.language==='english'?'Name':'Naam'

        return (
            <div className='ui field'>
            <label >{text}</label>
            <input/>
        </div>
        )
    }
}

export default Field
