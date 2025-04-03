import "./App.css";
import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  // 게임 시작 시 랜덤 정답 설정
  useEffect(() => {
    const random = Math.floor(Math.random() * 100) + 1;
    setAnswer(random);
    console.log("정답은:", random); // 디버깅용 콘솔
  }, []);

  const handleClickButton = (delta) => {
    const nextCount = count + delta;
    setCount(nextCount);

    if (nextCount === answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };
  const handleReset = () => {
    setCount(0);
    const newAnswer = Math.floor(Math.random() * 100) + 1;
    setAnswer(newAnswer);
    setIsCorrect(false);
    console.log("새 정답은:", newAnswer);
  };

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>숫자 맞추기 게임(랜덤한숫자(1~100))</h1>
      <button onClick={handleReset}>재시작</button>
      <section>
        <Viewer count={count} />
        {isCorrect && <h2>정답입니다!</h2>}
      </section>
      <section>
        <Controller onClickButton={handleClickButton} />
      </section>
    </div>
  );
}

export default App;
