import React, { Component } from "react";

const styles = {
    inline:{
        display: 'inline',
    }

}
export default class Cabecera extends Component{
    render() {
        const {nuevoUsuario} = this.props
        return(
            <header>
                <h2 style={styles.inline}>Usarios</h2>
                <button style={styles.inline} onClick={nuevoUsuario}>Nuevo usuario</button>
            </header>
        )
    }
}