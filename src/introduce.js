import React from 'react';

class Introduce extends React.Component {
  render() {
    return (
      <div className="introduce"> 
        <img src={require('./image/introduceImage.webp')}></img> 
        <div>리액트를 연습하기 위해 간단히 구현해 본 사이트입니다!</div>
      </div>
    ); //jsx에서 이미지 업로드시 이미지 파일은 모두 index.js와 같이 src파일 내에 있어야 함.
  }
}

  
// ========================================
export default Introduce;
