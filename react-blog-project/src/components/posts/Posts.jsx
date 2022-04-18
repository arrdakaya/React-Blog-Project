import "./posts.css"
import React, { Component } from "react"
import Post from "../post/Post"
import SinglePost from "../singlePost/SinglePost"
import EditForm from "../editForm/EditForm"
import posts from '../../resources/posts.json';
import { Row, Col } from 'react-bootstrap'
import { Modal, Button, ButtonGroup } from 'react-bootstrap';

export default class Posts extends Component {
  constructor() {
    super();
    this.state = {
      showDetailModal: false,
      showEditModal: false,
      selectedPost: {},
      postPerPage: 0,
      pageCounter: 0

    }
  }

  detailModal = (post) => {
    this.showDetailModal();
    this.setState({ selectedPost: post });
  }
  editModal = (post) => {
    this.showEditModal();
    this.setState({ selectedPost: post });
  }
  showDetailModal() {
    this.setState({ showDetailModal: true });
  }
  hideDetailModal() {
    this.setState({ showDetailModal: false });
  }
  showEditModal() {
    this.setState({ showEditModal: true });
  }
  hideEditModal() {
    this.setState({ showEditModal: false });
  }

  render() {
    return (

      <>

        <div className="posts">
          <Row>
            {posts.map((post, index) => (
              this.state.postPerPage <= index && index < this.state.postPerPage + 8 ?
                <Col md="4" sm="6" lg="3" key={`${post.id}`}>
                  <Post post={post}
                    detailModal={this.detailModal}
                    editModal={this.editModal}
                  />

                </Col> : null

            ))}
          </Row>
          <ButtonGroup aria-label="Basic example" className="page-button">
            <Button id="prevbut" variant="outline-secondary"
              onClick={() => this.setState({
                postPerPage: this.state.postPerPage - 8,
                pageCounter: this.state.pageCounter - 1
              })}
              disabled={this.state.postPerPage < 1}>Previous</Button>
            <Button variant="outline-secondary"
              onClick={() => this.setState({
                postPerPage: this.state.postPerPage + 8,
                pageCounter: this.state.pageCounter + 1
              })}
              disabled={this.state.pageCounter + 1 > Math.ceil(posts.length) / 8}>Next</Button>
          </ButtonGroup>

          <Modal scrollable size="xl" show={this.state.showDetailModal} onHide={() => { this.hideDetailModal() }}>
            <Modal.Header closeButton>
              <Modal.Title>Post Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <SinglePost post={this.state.selectedPost} />
            </Modal.Body>
          </Modal>

          <Modal centered size="xl" show={this.state.showEditModal} onHide={() => { this.hideEditModal() }}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EditForm post={this.state.selectedPost} hideEditModal={() => { this.hideEditModal() }} />
            </Modal.Body>
          </Modal>

        </div>


      </>
    )
  }
}
