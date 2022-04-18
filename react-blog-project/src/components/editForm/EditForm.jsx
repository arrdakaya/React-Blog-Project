import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'


export default class EditForm extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      body: ""
    }

  }
  componentDidMount() {
    this.setState({
      title: this.props.post.title,
      body: this.props.post.body
    })

  }
  setTitle(title) {
    this.setState({
      title: title
    })
  }
  setBody(body) {
    this.setState({
      body: body
    })
  }
  saveForm(e) {
    e.preventDefault(); //to not refresh page
    this.props.post.title = this.state.title
    this.props.post.body = this.state.body
    this.props.hideEditModal();
  }
  render() {
    return (
      
      <Form onSubmit={(event) => this.saveForm(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            defaultValue={this.state.title}
            onChange={e => this.setTitle(e.target.value)}
            type="text"
            placeholder="Title"
          />

          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-0" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
        </Form.Group>
        <Form.Control
          defaultValue={this.state.body}
          onChange={e => this.setBody(e.target.value)}
          as="textarea"
          placeholder="Description"
          style={{ height: '150px' }}
        />

        <Button variant="success" type="submit" className="float-end mt-2" >
          Apply
        </Button>

      </Form>
    )
  }
}
