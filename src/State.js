import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Likhitha"
        }
    }
    
    render() {
        setTimeout(() => {
            this.setState({name:"Likhitha Bonthu"})
        },3000)
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
