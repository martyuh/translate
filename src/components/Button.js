import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {
    // hooking a contextType to a class component
    //static adds a property to a class itself
    // contexttype links this component to the context object
    // static contextType = LanguageContext
    renderSubmit(language){
        
        return language==='english'?'Submit':'Vooleggen' 
    }
    // child function of colorcontext consumer calls this helper method to render jsx
    renderButton(color){
       return(<button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
        {/* calls rendersubmit to determine language passed in from the consumer */}
       {/* destructure language out of value */}
          {({language})=>this.renderSubmit(language)}
        </LanguageContext.Consumer>
        </button>) 
    }
    render(){
    //    this.context grabs the data from the context object. context is used for a single context within a component
    // assign submit to text if this.context equals 'english' otherwise submit voolegen
        // const text = this.context==='english'?'Submit':'Vooleggen'

        // create a consumer component. consumer is used when you want access to multiple context objects inside a single component
        // always provide one child to the consumer that will always be a child that is automatically called by the consumer. it's called with what value is in the pipe/contextobject
        // only in that function can you access value and decide what you want to be printed out 
     return (
    <ColorContext.Consumer>
    {(color)=>this.renderButton(color)
    }

      </ColorContext.Consumer>
    )
}
}

export default Button
