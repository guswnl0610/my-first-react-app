import React, { Component } from 'react';
import './Login.css';
import '../common.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validEmail: true,
      validPw: true,
      emailLength: 0,
      pwLength: 0,
    };
  }

  isValidEmail = (value) => {
    if (!value) return true;
    let emailFormat = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return emailFormat.test(value);
  };

  isValidPassword = (value) => {
    if (!value) return true;
    let pwFormat = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{5,16}$/;
    return pwFormat.test(value);
  };

  handleChange = (event) => {
    if (event.target.type === 'text') {
      if (this.isValidEmail(event.target.value)) {
        this.setState({
          validEmail: true,
          validPw: this.state.validPw,
          emailLength: event.target.value.length,
          pwLength: this.state.pwLength,
        });
      } else {
        this.setState({
          validEmail: false,
          validPw: this.state.validPw,
          emailLength: event.target.value.length,
          pwLength: this.state.pwLength,
        });
      }
    } else {
      if (this.isValidPassword(event.target.value)) {
        this.setState({
          validEmail: this.state.validEmail,
          validPw: true,
          emailLength: this.state.emailLength,
          pwLength: event.target.value.length,
        });
      } else {
        this.setState({
          validEmail: this.state.validEmail,
          validPw: false,
          emailLength: this.state.emailLength,
          pwLength: event.target.value.length,
        });
      }
    }
  };

  render() {
    const loginWarning = this.state.validEmail ? null : <span className='user-id-warning'>이메일 주소의 형식이 올바르지 않습니다.</span>;
    const pwWarning = this.state.validPw ? null : <span className='user-pw-warning'>비밀번호는 영문,숫자를 포함하며 5~16자여야 합니다.</span>;
    const loginBtn =
      !loginWarning && !pwWarning && this.state.emailLength && this.state.pwLength ? (
        <button className='login-btn btn-blue'>로그인</button>
      ) : (
        <button className='login-btn btn-light-blue'>로그인</button>
      );

    return (
      <div className='Login'>
        <section className='login-section'>
          <div className='logo-container'>
            <img src='./images/logo_text.png' alt='logo text' />
          </div>
          <div className='idpw-container'>
            <input className='user-id' onChange={(e) => this.handleChange(e)} type='text' placeholder='전화번호, 사용자 이름 또는 이메일' />
            {loginWarning}
            <input className='user-pw' onChange={(e) => this.handleChange(e)} type='password' placeholder='비밀번호' />
            {pwWarning}
            <span className='user-pw-warning warning-invisible'>비밀번호는 영문,숫자를 포함하며 5~16자여야 합니다.</span>
            {loginBtn}
            <p>
              <span>또는</span>
            </p>
            <button className='fb-login-btn'>
              <img src='./images/facebook.png' alt='facebook login' />
              <span>Facebook으로 로그인</span>
            </button>
          </div>
          <div className='or-container'></div>
          <div className='forgotpw-container'>
            <p>비밀번호를 잊으셨나요?</p>
          </div>
        </section>
        <section className='register-section'>
          <p>계정이 없으신가요?</p>
          <a>가입하기</a>
        </section>
      </div>
    );
  }
}

export default Login;
