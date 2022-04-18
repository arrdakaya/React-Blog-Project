import React from 'react'
import './comment.css'
import { Row, Col } from 'react-bootstrap'
import users from '../../resources/users.json'


export default function Comment({ comment }) {
    let userComment = users.find(userComment => userComment.id === comment.userId);
    return (

        <Row className='container'>
            <Col md="3" className='comment-card'>
                <span>
                    <img className='profile' src={require(`../../resources/images/profile/profile${userComment.id}.jpg`)} alt="profile" />
                </span>
                <span className='name'>
                    {userComment.name}
                </span>
            </Col>
            <Col md="9" className='comment-name'>
                {comment.name}
            <p className='comment-body'>
                {comment.body}
            </p>
            </Col>
        </Row>
    )
}
