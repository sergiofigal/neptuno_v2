import React, { Component } from 'react'
import axios from 'axios';

export default class ListarPosts extends Component {

    state={
        post: []
    }


    async componentDidMount() {
        const res = await axios.get('http://localhost:8080/post/');
        console.log(res.data)
        this.setState({
            post: res.data
        })
    }


    render() {
        return (
            <div>
              
                {
                        this.state.post.map(post =><img src={post.url} />
                        )
                }
               
                
            </div>
        )
    }
}
