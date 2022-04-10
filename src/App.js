import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2> Mazur Vsevolod CR-193 </h2>
      </header>
        <FiveField></FiveField>
        <SevenField></SevenField>
    </div>
  );
}

export default App;

function FullWidthTextField() {
    const [input, setInput] = useState('');
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            <input value={input} onInput={e => setInput(e.target.value)}/>
        </Box>
    );
}

function FiveField() {
    return (
        <form>
            <FullWidthTextField></FullWidthTextField>
            <FullWidthTextField></FullWidthTextField>
            <FullWidthTextField></FullWidthTextField>
            <FullWidthTextField></FullWidthTextField>
            <FullWidthTextField></FullWidthTextField>
            <p>End five fields</p>
        </form>
    );
}

function SevenField() {
    return (
        <form>
            <FiveField></FiveField>
            <FullWidthTextField></FullWidthTextField>
            <FullWidthTextField></FullWidthTextField>
            <p>End seven fields</p>
        </form>
    );
}
