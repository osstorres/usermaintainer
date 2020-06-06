import React, { Component } from "react";

export default class Lista extends Component{

    //function currying

    handlerClick = id => e => {
        const { handlerClick } = this.props
        handlerClick(id)

    }

    render() {
        const {data} = this.props

        return(
            <ul>
                {data.map(record =>  <li key = {record.id} > {record.name}
                <button onClick={this.handlerClick(record.id)}> Editar</button></li> )}
            </ul>
        )
    }
}