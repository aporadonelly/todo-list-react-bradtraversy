import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={{color: 'white'}} to="/about">About</Link> | <Link style={{color: 'white'}} to="/">Home</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  }