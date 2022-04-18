import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import comments from '../../resources/comments.json';
import users from '../../resources/users.json'
import Comment from '../comments/Comment'

export default class SinglePost extends Component {

  render() {
    this.author = users.find(author => author.id === this.props.post.userId);
    this.commentList = comments.filter(comment => comment.postId === this.props.post.id)

    return (


      <div>

        <Row >
          <Col md={4}>
            <img width='100%' variant="top" alt='img' src={require(`../../resources/images/image${this.props.post.imageId}.jpg`)} />
          </Col>
          <Col md={8} >
            <h4>{this.props.post.title} ({this.author.name})</h4>
            <p>{this.props.post.body}</p>
          </Col>
        </Row>
        <Row className='pt-4'>
          <Col>
            <h4>Comments({this.commentList.length})</h4>
          </Col>
        </Row>

        {this.commentList.map((comment) => (
          <Row key={comment.id}>
            <Comment comment={comment} />
          </Row>
        ))}
        {this.commentList.map((comment) => (
          <Row key={comment.id}>
            <Comment comment={comment} />
          </Row>
        ))}


      </div>

    )

  }
}
