import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import ViewList from './components/ViewList'
import UserForm from './components/UserForm'

class App extends Component {
    state = {
        data: [],
        route: 'lista',
    }

    constructor() {
        super()
        axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => this.setState({data}))
    }

    seleccionaUsuario = id => {
        this.setState({
            route: 'formulario',
            usuarioSeleccionado: id,
        })

    }

    agregarNuevoUsuario = usuario => {
        axios.post('https://jsonplaceholder.typicode.com/users', usuario).then(({data})=> {

            const newData = this.state.data.concat(data)
            this.setState({data:newData,
            route:'lista'})
        })
    }

    actualizarUsuario = (id, values) => {
        //template strings strings dinamicos cambiando de los valores que yo le asigne
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, values).then(() => {
            const newData = this.state.data.map(record => record.id === id ? values : record)
            this.setState({
                data: newData,
                route: 'lista',
            })
        })
    }
    nuevoUsuario = () =>{
        this.setState({
            route: 'formulario'
        })
    }
    render() {
        const {route, data, usuarioSeleccionado } = this.state
        const valoresIniciales = usuarioSeleccionado && data.find(record => record.id === usuarioSeleccionado )

        return (
            <div className="App">
                {route === 'lista' && <ViewList
                    nuevoUsuario={this.nuevoUsuario}
                    handlerClick={this.seleccionaUsuario} data={data}/>}
                {route === 'formulario' && <UserForm valoresIniciales = {valoresIniciales || {}}
                                                     handleUpdate={this.actualizarUsuario}
                                                     handleSubmit={this.agregarNuevoUsuario}/>}

            </div>
        );
    }
}

export default App;
