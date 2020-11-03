import React, { Component } from 'react';
import Feed from './Feed';
import './Main.css';
import './Main_right.css';
import './Navbar.css';
import '../common.css';

class Main extends Component {
  render() {
    return (
      <div className='Main'>
        <nav>
          <div className='nav-container'>
            <div className='nav-left'>
              <img src='./images/logo_text.png' alt='INSTAGRAM logo' />
            </div>
            <div className='nav-center'>
              <div className='nav-search'>
                <input type='text' placeholder='검색' />
                <img className='search-icon' src='./images/search.png' alt='돋보기' />
              </div>
            </div>
            <div className='nav-right'>
              <img className='nav-img' src='./images/home.png' alt='home' />
              <img className='nav-img' src='./images/direct.png' alt='dm' />
              <img className='nav-img' src='./images/explore.png' alt='explore' />
              <img className='nav-img' src='./images/heart.png' alt='like' />
              <img className='nav-img profile-pic' src='./images/profile/meng.jpeg' alt='profile-pic' />
            </div>
          </div>
        </nav>
        <section className='navbar-search-container'></section>
        <section className='navbar-profile-container'>
          <div className='navbar-profile-item'>
            <img src='./images/profile.png' alt='profile-img' />
            <span>프로필</span>
          </div>
          <div className='navbar-profile-item'>
            <img src='./images/bookmark.png' alt='profile-img' />
            <span>저장됨</span>
          </div>
          <div className='navbar-profile-item'>
            <img src='./images/settings.png' alt='profile-img' />
            <span>설정</span>
          </div>
          <div className='navbar-profile-item navbar-logout'>
            <span>로그아웃</span>
          </div>
        </section>
        <section className='overall-container'>
          <main className='left-main'>
            <section className='story-container'>
              <div className='story'>
                <div className='profile-img-container no-story'>
                  <img src='./images/feedimg/CL.jpeg' alt='profile-img' />
                </div>
                <div className='story-id'>chaelincl</div>
              </div>
            </section>
            <section className='feed-container'>
              <Feed></Feed>
            </section>
          </main>

          <main className='right-main'>
            <section className='profile-container'>
              <div className='profileimg-container'>
                <img src='./images/profile/meng.jpeg' alt='userprofile' />
                <div className='bio'>
                  <p className='id'>4wheeldxlocal</p>
                  <p className='nickname'>맹끼</p>
                </div>
              </div>
            </section>
            <section className='recommend'>
              <div className='reco-header'>
                <span className='reco-text1'>회원님을 위한 추천</span>
                <span className='reco-text2'>모두 보기</span>
              </div>
              <div className='reco-list'>
                <div className='reco-left'>
                  <img src='./images/profile.png' alt='recommend-profile-img' />
                </div>
                <div className='reco-center'>
                  <p className='id'>hoxax</p>
                  <p>회원님을 위한 추천</p>
                </div>
                <span>팔로우</span>
              </div>
            </section>
            <footer className='info'>
              <ul className='info-list'>
                <li>
                  <a href=''>소개</a>
                </li>
                <li>
                  <a href=''>도움말</a>
                </li>
                <li>
                  <a href=''>홍보 센터</a>
                </li>
                <li>
                  <a href=''>API</a>
                </li>
                <li>
                  <a href=''>채용 정보</a>
                </li>
                <li>
                  <a href=''>개인정보처리방침</a>
                </li>
                <li>
                  <a href=''>약관</a>
                </li>
                <li>
                  <a href=''>위치</a>
                </li>
                <li>
                  <a href=''>인기 계정</a>
                </li>
                <li>
                  <a href=''>해시태그</a>
                </li>
                <li>
                  <a href=''>언어</a>
                </li>
              </ul>
              <p>© 2020 INSTAGRAM FROM FACEBOOK</p>
            </footer>
          </main>
        </section>
      </div>
    );
  }
}

export default Main;
