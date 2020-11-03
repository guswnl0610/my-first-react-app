import React, { Component } from 'react';

class Comment extends Component {
  handleCommentDelete = () => {
    this.props.onDelete(this.props.comment);
  };

  render() {
    return (
      <div className='comment'>
        <div className='comment-left'>
          <span className='id'>{this.props.comment.userId}</span>
          <span>{this.props.comment.content}</span>
        </div>
        <div className='comment-right'>
          <img className='non-clicked' src='./images/heart.png' alt='comment heart' />
          <span onClick={() => this.handleCommentDelete()}>삭제</span>
        </div>
      </div>
    );
  }
}

export default Comment;
