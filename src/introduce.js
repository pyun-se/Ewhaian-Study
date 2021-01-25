import React from 'react';

class Introduce extends React.Component {
  render() {
    return (
      <div className="introduce"> 
        <h4>소개</h4>
        <img src={require('./image/introduceImage.webp')}></img> 
        <div>이 사이트에서는 커뮤니티, Tic-Tac-Toe게임, Lotto를 이용할 수 있습니다.</div>
      </div>
    ); //jsx에서 이미지 업로드시 이미지 파일은 모두 index.js와 같이 src파일 내에 있어야 함.
  }
}

export default Introduce;
