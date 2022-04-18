import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import { Card, Badge } from 'react-bootstrap';
import './post.css'


export default class Post extends Component {

  render() {
    return (

      <div>
        <Card  className="card">
          <Card.Img variant="top" src={require(`../../resources/images/image${this.props.post.imageId}.jpg`)} />
          <Card.Body>
            <Card.Title>{this.props.post.title}</Card.Title>
            <Button variant="outline-dark" size="sm" onClick={() => this.props.detailModal(this.props.post)}>View</Button>
            <Button variant="outline-dark" size="sm" onClick={() => this.props.editModal(this.props.post)}>Edit</Button>
            <Badge bg="secondary" className='post-no' >post {this.props.post.id}</Badge>
          </Card.Body>
        </Card>
      </div>

    )
  }
}
