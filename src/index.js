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
                <Link to="/introduce"><li>Introduce</li></Link>
                <Link to="/community"><li>Community</li></Link>
                <Link to="/"><li>Home</li></Link>
                <Link to="/tic-tac-toe"><li>Game</li></Link>
                <Link to="/lotto"><li>Lotto</li></Link>
              </ul>
            </div>
            <div className="contents">
              <Switch>
                <Route exact path="/" exact component={Start} />
                <Route path="/introduce" component={Introduce} />
                <Route path="/community" component={Community} />
                <Route path="/tic-tac-toe" component={Game} />
                <Route path="/lotto" component={Lotto} />
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


//==============================현재================================
// 틱택토를 할 수 있게 해주고,
// 게임에서 승리했을 때를 알려주며,
// 게임이 진행됨에 따라 게임 기록을 저장하고,
// 플레이어가 게임 기록을 확인하고 게임판의 이전 버전을 볼 수 있도록 허용합니다.

/*
--------------------------------추가---------------------------------
1. 이동 기록 목록에서 특정 형식(행, 열)으로 각 이동의 위치를 표시해주세요.
//2. 이동 목록에서 현재 선택된 아이템을 굵게 표시해주세요.
3. 사각형들을 만들 때 하드코딩 대신에 두 개의 반복문을 사용하도록 Board를 다시 작성해주세요.
4. 오름차순이나 내림차순으로 이동을 정렬하도록 토글 버튼을 추가해주세요.
5. 승자가 정해지면 승부의 원인이 된 세 개의 사각형을 강조해주세요.
6. 승자가 없는 경우 무승부라는 메시지를 표시해주세요.
*/
