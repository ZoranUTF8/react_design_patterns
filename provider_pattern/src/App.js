import "./App.css";
import React, { useState } from "react";
import AppDataContext from "./AppContext";

// ? Provider pattern or React Context
/*
Instead of prop drilling we can use the context to give
access to all the components to data.

We wrap the app with a Provider which is a HOC which is provided to us by the Context object.
The provider receives a value prop which contains the data that we want to provide to all components


Now each component can access the data using the useContext hook.

The components that arent using the dataa  value wont have to deal with the data at all an we avoid prop
drilling

The provider pattern is usefull for sharing global data

*/

function App() {
  

  const { name } = React.useContext(AppDataContext);

  return (
    <div className="App">
      <h1>This is the data we get from the app context {name}</h1>
    </div>
  );
}

export default App;
