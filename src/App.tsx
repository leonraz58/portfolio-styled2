import './App.css';
import {Main} from "./layout/sections/main/Main";
import {GlobalStyles} from "./styles/Global.styled";
import {Skills} from "./layout/sections/skills/Skills";


function App() {
    return (
        <>
            <GlobalStyles/>
            <Main/>
            <Skills/>
        </>
    );
}

export default App;