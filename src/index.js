import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Start from './start';
import Introduce from './introduce';
import Game from './tic-tac-toe';
import Community from './community';
import Lotto from './lotto';

class Index extends React.Component{
  render(){
    return(
        <div className="contents-wrapper">
          <Router>
            <div className="menu">
              <ul>
                <Link to="/Ewhaian-Study/introduce"><li>Introduce</li></Link>
                <Link to="/Ewhaian-Study/community"><li>Community</li></Link>
                <Link to="/Ewhaian-Study/tic-tac-toe"><li>Game</li></Link>
                <Link to="/Ewhaian-Study/lotto"><li>Lotto</li></Link>
              </ul>
            </div>
            <div className="contents">
              <Switch>
                <Route exact path="/" exact component={Start} />
                <Route exact path="/Ewhaian-Study/" component={Start} />
                <Route path="/Ewhaian-Study/introduce" component={Introduce} />
                <Route path="/Ewhaian-Study/community" component={Community} />
                <Route path="/Ewhaian-Study/tic-tac-toe" component={Game} />
                <Route path="/Ewhaian-Study/lotto" component={Lotto} />
              </Switch>
            </div>
          </Router> 
        </div>
    );  //항상 <Router> 컴포넌트 아래에 <Link>와 <Route> 컴포넌트가 함께 존재해야 한다.
  }
}

export default Index;

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

/*
===============================현재================================
    소개
사진 첨부
페이지 간략한 소개

    커뮤니티
구현 예정

    틱택토 게임
게임에서 승리했을 때를 알려주며,
게임이 진행됨에 따라 게임 기록을 저장하고,
플레이어가 게임 기록을 확인하고 게임판의 이전 버전을 볼 수 있도록 허용
승자가 없는 경우 무승부라는 메시지를 표시

    로또 게임
로또 번호 추첨 가능
로또 번호 추첨 중간에는 추첨 버튼 사라짐
로또 번호 각 번호대별 색 부여
*/