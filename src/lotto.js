import React, { PureComponent, useState, useRef, useEffect } from 'react'; //useState, useRef, useEffect

function getNumbers() {
  const numbers = Array(45).fill().map((v, i) => i + 1); // 1~ 45가 들어있는 배열 생성
  const shuffle = []; // 1~45를 랜덤하게 섞기
  
  while (numbers.length > 0) {
      shuffle.push(numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]);
  }

  const bonusNumber = shuffle[shuffle.length - 1]; // shuffle의 마지막 수를 보너스 숫자로
  const Numbers = shuffle.splice(0, 6).sort((p, c) => p - c); // shuffle의 0~6번째 수를 오름차순 정렬하여 당첨 숫자로
  
  return [...Numbers, bonusNumber];
}

class Ball extends PureComponent {
  getBackgroundColor(number){
    let background;
    if(number <= 10) {
        background = 'rgb(255, 129, 129)';
    } else if (number <= 20) {
        background = 'rgb(255, 154, 87)';
    } else if (number <= 30) {
        background = 'rgb(255, 253, 162)';
    } else if (number <= 40) {
        background = 'rgb(87, 146, 255)';
    } else {
        background = 'rgb(115, 255, 115)';
    }
    return background;
  }
  render() {
    const {number} = this.props;
    return (
      <div className="ball" style={{ 'backgroundColor':this.getBackgroundColor(number) }}>{number} </div>
    )
  }
}

const Lotto = () => {
  const [Numbers, setNumbers] = useState([]);
  const [Balls, setBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redraw, setRedraw] = useState(true);  //redo(false):추첨하기 버튼 사라짐
  const timeouts = useRef([]);

  useEffect(() => {
      //console.log('useEffect');
      for (let i = 0; i < Numbers.length-1 ; i++) {
          timeouts.current[i] = setTimeout(() => {
              setBalls((prevBalls) => [...prevBalls, Numbers[i]]);
          }, (i + 1) * 1000); //1초 간격으로
      }
      timeouts.current[6] = setTimeout(() => {
          setBonus(Numbers[6]);
          setRedraw(true);
      }, 7000);
      return () => { // componentWillUnMount는 return
          timeouts.current.forEach((v) => {
              clearTimeout(v);
          });
      };
  }, [timeouts.current]); // winBalls.length === 0으로 설정하면 처음 실행부터 적용되므로 중복된 숫자가 2번 나옴
  // 빈 배열이면 componentDidMount와 동일
  //배열에 요소가 있으면 componentDidMount랑 componentDidUpdate 둘 다 수행

  //초기화
  const onClickRedraw = () => { //useCallback:함수 자체를 기억, 실행 자체가 부담이되는 함수에 사용, 마이너 구성 요소에 함수를 전달하는 경우 useCallback사용 필수, useCallback에서 쓰이는 상태를 두 번째 인자에 넣어 주어야 변경을 감지
      setNumbers(getNumbers());
      setBalls([]);
      setBonus(null);
      setRedraw(false);
      timeouts.current = [];
  };

  return (
    <div className="lotto"> 
      <h4>로또 게임</h4>
      <div>
        <span className="lotto_number">당첨 번호</span>
        <span className="lotto_bonus">보너스</span>
        <ul className="lotto_game">
          <li>{<Ball key={Balls[0]} number={Balls[0]} />}</li>
          <li>{<Ball key={Balls[1]} number={Balls[1]} />}</li>
          <li>{<Ball key={Balls[2]} number={Balls[2]} />}</li>
          <li>{<Ball key={Balls[3]} number={Balls[3]} />}</li>
          <li>{<Ball key={Balls[4]} number={Balls[4]} />}</li>
          <li>{<Ball key={Balls[5]} number={Balls[5]} />}</li>
          <li> + </li>
          <li>{bonus && <Ball number={bonus} />}</li>
        </ul>
        {redraw && <button className="lotto_button" onClick={onClickRedraw}>추첨하기</button>}
      </div>
    </div>
  );
}

/*class Lotto extends Component {
  state = {
      Numbers: [], // 당첨 숫자들
      Balls: [],
      bonus: null, // 보너스 공
      redraw: true, //재실행
  };
  timeouts = [];

  runTimeouts = () => {
    const { Numbers } = this.state;
    for (let i = 0; i < Numbers.length - 1; i++) {
        this.timeouts[i] = setTimeout(() => {
            this.setState((prevState) => {
                return {
                    Balls: [...prevState.Balls, Numbers[i]],
                };
            });
        }, (i + 1) * 1000);
    }
    this.timeouts[6] = setTimeout(() => {
        this.setState({
            bonus: Numbers[6],
            redraw: true,
        });
    }, 7000);
  };

  componentDidMount() {
    this.runTimeouts();
  }

  componentDidUpdate(prevProps, prevState) { // 전 props, 전 state값이 바뀔 때 실행
    if (this.state.Balls.length === 0) { // redraw 클릭 시 winBalls는 빈 배열
        this.runTimeouts();
    }
  }

  onClickRedraw = () => {
    this.setState({
        Numbers: getNumbers(),
        Balls: [],
        bonus: null,
        redraw: false,
    });
    this.timeouts = [];
  };

  render() {
    const { Balls, bonus, redraw } = this.state;
    return (
      <div className="lotto"> 
        <h4>로또 게임</h4>
        <div>
          <span className="lotto_number">당첨 번호</span>
          <span className="lotto_bonus">보너스</span>
          <ul className="lotto_game">
            <li>{<Ball key={Balls[0]} number={Balls[0]} />}</li>
            <li>{<Ball key={Balls[1]} number={Balls[1]} />}</li>
            <li>{<Ball key={Balls[2]} number={Balls[2]} />}</li>
            <li>{<Ball key={Balls[3]} number={Balls[3]} />}</li>
            <li>{<Ball key={Balls[4]} number={Balls[4]} />}</li>
            <li>{<Ball key={Balls[5]} number={Balls[5]} />}</li>
            <li> + </li>
            <li>{bonus && <Ball number={bonus} />}</li>
          </ul>
          {redraw && <button className="lotto_button" onClick={this.onClickRedraw}>추첨하기</button>}
        </div>
      </div>
    );
  }
}*/

/*
  //const lottoNumbers = useMemo(() => getWinNumbers(), []); //useMemo:함수의 리턴 값을 기억해서, getNumbers가 반복 실행되지 않도록 실행 한 결과 값을 선택 저장해 두는 데 사용
  //const [Numbers, setNumbers] = useState(lottoNumbers);
  const [Numbers, setNumbers] = useState(getNumbers(false));
  const [Balls, setBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redraw, setRedraw] = useState(false);  //redo(false):추첨하기 버튼 사라짐
  const timeouts = useRef([]);

  useEffect(() => {
      //console.log('useEffect');
      for (let i = 0; i < Numbers.length-1 ; i++) {
          timeouts.current[i] = setTimeout(() => {
              setBalls((prevBalls) => [...prevBalls, Numbers[i]]);
          }, (i + 1) * 1000); //1초 간격으로
      }
      timeouts.current[6] = setTimeout(() => {
          setBonus(Numbers[6]);
          setRedraw(true);
      }, 7000);
      return () => { // componentWillUnMount는 return
          timeouts.current.forEach((v) => {
              clearTimeout(v);
          });
      };
  }, [timeouts.current]); // winBalls.length === 0으로 설정하면 처음 실행부터 적용되므로 중복된 숫자가 2번 나옴
  // 빈 배열이면 componentDidMount와 동일
  //배열에 요소가 있으면 componentDidMount랑 componentDidUpdate 둘 다 수행

  //초기화
  const onClickRedo = () => { //useCallback:함수 자체를 기억, 실행 자체가 부담이되는 함수에 사용, 마이너 구성 요소에 함수를 전달하는 경우 useCallback사용 필수, useCallback에서 쓰이는 상태를 두 번째 인자에 넣어 주어야 변경을 감지
      setNumbers(getNumbers());
      setBalls([]);
      setBonus(null);
      setRedo(false);
      timeouts.current = [];
  };
*/


export default Lotto;