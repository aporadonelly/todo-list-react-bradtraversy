import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state = {
        id: 4,
        title: '',
        completed: false
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({
            title: ''
        })
    }


    render() {
        return (
            <div className="container mb-5 mt-5">
                <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
                <input style={{ flex: '10', padding: '5px' }} type="text" className="form-control" name="title" value={this.state.title} onChange={this.onChange} />
                <input style={{flex: '1'}} type="submit" className="btn btn-primary" value="Submit"/>
                </form>
            </div>
           
        )
    }
}
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,

}

export default AddTodo
