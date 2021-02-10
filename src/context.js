import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            darkMode: false
        }
    }

    toggleTheme = () => {
        this.setState(prevState => {
            return {
                darkMode: !prevState.darkMode
            }
        })
    }

    render() {
        return(
        <Provider value={{
            darkMode: this.state.darkMode, handleTheme: this.toggleTheme
        }}>
            {this.props.children}
         </Provider>
        )
    }
    


}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}
