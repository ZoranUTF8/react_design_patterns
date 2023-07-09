import * as React from "react";
import "./App.css";
import Listings from "./components/Listings";
import Input from "./components/Input";
import { ListingsProvider } from "./Context/ListingsContext";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "3em",
      }}
    >
      <ListingsProvider>
        <Input />
        <Listings />
      </ListingsProvider>
    </div>
  );
}
