import React, { component } from 'react'
import { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuarios',
    subtitle: 'cadastro de usuarios: Incluir, Listar, Alterar e Excluir'
}

export default class Usercrud extends Component {
    render() {
        return (
            <Main {...headerProps}>

                Cadastro de Usuario
            </Main>

        )


    }

}