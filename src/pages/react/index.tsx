import Calculadora from "@src/app/components/calculadora";

const ReactLearningPage = () => {
  const firstNumber = 1;
  const y = 2;

  return (
    <div>
      <h1>React Learning</h1>
      <Calculadora firstNumber={19} secondNumber={y}/>
    </div>
  )
}

export default ReactLearningPage;