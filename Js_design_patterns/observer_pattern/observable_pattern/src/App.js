import { ToastContainer, toast } from "react-toastify";
import Observable from "./observable";

const appLogger = (data) => {
  console.log(`${Date.now()} - ${data}`);
};

const makeAToast = (data) => {
  console.log(data); // "User clicked the button"
  toast(data, {
    position: toast.POSITION.TOP_RIGHT,
    closeButton: false,
    autoClose: 2000,
  });
};

const observable = new Observable(); // Create an instance of the Observable class

observable.subscribe(appLogger);
observable.subscribe(makeAToast);

function App() {

  const handleClick = () => {
    observable.notify("User clicked the button");
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click me!</button>
      <ToastContainer />
    </div>
  );
}

export default App;
