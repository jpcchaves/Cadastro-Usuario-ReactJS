import React, { Component } from "react";
import Main from '../template/Main'
import axios from 'axios'

const headerProps = {
     icon: 'users',
     title: 'Usuários',
     subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost3001/users'
const initialState = {
     user: {name: '', email: ''},
     list: []
}

export default class UserCrud extends Component {

     state = { ...initialState }

     // Limpar o form
     clear(){
          this.setState({user: initialState.user })
     }

     // Salvar e/ou alterar um usuário
     save(){
          const user = this.state.user
          const method = user.id ? 'put' : 'post'
          const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
          axios[method](url, user)
               .then(resp => {
                    const list = this.getUpdatedList(resp.data)
               })
     }

     getUpdatedList(user){
          const list = list.state.list.filter(u => u.id !== user.id)
          list.unshift(user)
          return list
     }

     render(){
          return(
               <Main {...headerProps}>
                    Cadastro de Usuário
               </Main>
          )
     }
}
