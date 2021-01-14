import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button   // () =>을 잊어버리고 onClick={alert('click')}이라고 작성하는 것은 자주 발생하는 실수이며 컴포넌트가 다시 렌더링할 때마다 경고 창을 띄울 것입니다.
      className="square" 
      onClick={() => props.onClick()}> 
      {props.value}
    </button>
  );
}
  
class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)} 
      />
    );
  }

  render(){
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
  
class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i){
    const history = this.state.history.slice(0,this.state.stepNumber+1);
    const current = history[history.length-1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X':'O';
    this.setState({
      history: history.concat([{ //배열 push() 함수와 같이 더 익숙한 방식과 달리 concat() 함수는 기존 배열을 변경하지 않기 때문에 이를 더 권장합니다.
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner){
      status = 'Winner: '+ winner;
    } else{
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i)=>this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
  
// ========================================
  
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

//==============================현재================================
// 틱택토를 할 수 있게 해주고,
// 게임에서 승리했을 때를 알려주며,
// 게임이 진행됨에 따라 게임 기록을 저장하고,
// 플레이어가 게임 기록을 확인하고 게임판의 이전 버전을 볼 수 있도록 허용합니다.

/*
--------------------------------추가---------------------------------
1. 이동 기록 목록에서 특정 형식(행, 열)으로 각 이동의 위치를 표시해주세요.
2. 이동 목록에서 현재 선택된 아이템을 굵게 표시해주세요.
3. 사각형들을 만들 때 하드코딩 대신에 두 개의 반복문을 사용하도록 Board를 다시 작성해주세요.
4. 오름차순이나 내림차순으로 이동을 정렬하도록 토글 버튼을 추가해주세요.
5. 승자가 정해지면 승부의 원인이 된 세 개의 사각형을 강조해주세요.
6. 승자가 없는 경우 무승부라는 메시지를 표시해주세요.
*/
