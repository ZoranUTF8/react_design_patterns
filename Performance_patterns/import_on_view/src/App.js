import "./App.css";
import { useInView } from "react-intersection-observer";
import Status from "./Status";

function App() {
  const { ref, inView } = useInView();

  return (
    <div className="App">
      <header className="App-header">
        <p>Element inside view: {inView.toString()}</p>

        <Status inView={inView} />
      </header>

      <div ref={ref} className="inview-block">
        <h2>
          Element is inside the viewport: <strong>{inView.toString()}</strong>
        </h2>
      </div>
    </div>
  );
}

export default App;
