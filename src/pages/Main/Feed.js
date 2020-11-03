import React, { Component } from 'react';
import Comment from './Comment';
import './Feed.css';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newcommentLength: 0,
      comments: [],
      userId: '',
    };
  }

  getComments = () => {
    //뭐...나중에 댓글목록이나...피드 내용이나..이런걸 백엔드에서 받아오겠죠..?
    const comments = [
      { id: 1, userId: 'Mengkki', content: '반갑습니다' },
      { id: 2, userId: 'Mengkki', content: '사랑해요~~' },
    ];
    const userId = '4wheeldxlocal';
    this.setState({
      newcommentLength: this.state.newcommentLength,
      comments: comments,
      userId: userId,
    });
  };

  componentDidMount() {
    this.getComments();
  }

  // arrow function vs. function
  handleInputKeyup = (event) => {
    this.setState({
      newcommentLength: event.target.value.length,
      comments: this.state.comments,
      userId: this.state.userId,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const prevComments = this.state.comments;
    const targetInput = event.target.firstChild;
    const newComment =
      this.state.comments.length > 0
        ? { id: prevComments[prevComments.length - 1].id + 1, userId: this.state.userId, content: targetInput.value }
        : { id: 1, userId: this.state.userId, content: targetInput.value };
    prevComments.push(newComment);
    targetInput.value = '';
    this.setState({
      newcommentLength: 0,
      comments: prevComments,
      userId: this.state.userId,
    });
  };

  handleCommentDelete = (comment) => {
    const comments = this.state.comments.filter((item) => item.id !== comment.id);
    this.setState({
      newcommentLength: this.state.newcommentLength,
      comments: comments,
      userId: this.state.userId,
    });
  };

  render() {
    let submitBtn = this.state.newcommentLength > 0 ? <button className='newcomment-btn-blue'>게시</button> : <button className='newcomment-btn-lightblue'>게시</button>;

    return (
      <article className='Feed'>
        <div className='feed-header'>
          <div className='feed-header-left'>
            <div className='profile-img-container'>
              <img src='./images/profile/chaelinCL.jpg' alt='progile img' />
            </div>
            <span>chaelinCL</span>
          </div>
          <img src='./images/more.png' alt='more' />
        </div>
        <div className='feed-img-container'>
          <img src='./images/feedimg/CL.jpeg' alt='feedphoto' />
        </div>
        <section className='feed-body'>
          <div className='feed-bar'>
            <div className='bar-left'>
              <img src='./images/heart.png' alt='heart' />
              <img src='./images/comment.png' alt='comment' />
              <img src='./images/direct.png' alt='direct message' />
            </div>
            <div className='bar-center'>
              <button></button>
            </div>
            <div className='bar-right'>
              <img src='./images/bookmark.png' alt='bookmark' />
            </div>
          </div>
          <p className='feed-likes-counter'>좋아요 21개</p>
          <div className='feed-content'>
            <span className='id'>chaelinCL</span>
            <span className='content'>샤라랄라랄랄라~~~~샤라랄랄 랄랄라~~~~</span>
            <span className='content-hide'></span>
            <button className='feed-content-morebtn'>더 보기</button>
          </div>
          <p className='comment-counter'>댓글 {this.state.comments.length}개 모두 보기</p>
          <div className='feed-comments'>
            {this.state.comments.map((comment) => (
              <Comment comment={comment} onDelete={this.handleCommentDelete} />
            ))}
          </div>
          <span className='feed-hour'>2일 전</span>
        </section>
        <form className='newcomment-form' onSubmit={(e) => this.handleSubmit(e)}>
          <input onKeyUp={(e) => this.handleInputKeyup(e)} className='newcomment-input' placeholder='댓글 달기...'></input>
          {submitBtn}
        </form>
      </article>
    );
  }
}

export default Feed;
