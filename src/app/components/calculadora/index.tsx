import { FC, useEffect, useState } from "react";

type CalculadoraProps = {
  firstNumber: number,
  secondNumber: number
}

const Calculadora: FC<CalculadoraProps> = ({ firstNumber, secondNumber }) => {
  const [stateResult, setResult] = useState(0);
  let result = firstNumber + secondNumber;

  const soma_1 = () => {
    result = result + 1
    setResult(state => state + 1)
    console.log(stateResult);
  }

  useEffect(() => {
    setResult(state => state + 1)
  }, [result])

  return (
    <div>
      <h2>Calculadora</h2>
      stateResult: {stateResult}
      <button onClick={soma_1}>soma 1</button>
    </div>
  )
}

export default Calculadora;
