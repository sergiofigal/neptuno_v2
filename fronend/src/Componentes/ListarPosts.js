import React, { Component } from 'react'
import axios from 'axios';

export default class ListarPosts extends Component {
    
    async componentDidMount(){
        const res = await axios.get('http://localhost:8080/post/');
    console.log(res)
    }


    render() {
        return (
            <div>
                LISTAR POSTS
            </div>
        )
    }
}
