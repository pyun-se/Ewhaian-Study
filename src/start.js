import React from 'react';

class Start extends React.Component {
    render() {
      return (
        <div className="content">
          <div className="menu">
            <ul>
              <li><button onclick={()=>{"/introduce"}}>소개</button></li>
              <li><button onclick={()=>{"/community"}}>커뮤니티</button></li>
              <li><button onclick={()=>{"/tic-tac-toe"}}>틱택토 게임</button></li>
              <li><button onclick={()=>{"/lotto"}}>로또 게임</button></li>
            </ul>
          </div>

          <div className="start"> 
            <div>리액트를 연습하기 위해 간단히 구현해 본 사이트입니다!</div>
          </div>
        </div>
      );
    }
  }

export default Start;