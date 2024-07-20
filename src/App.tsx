import './App.css';
import {Main} from "./layout/sections/main/Main";
import {GlobalStyles} from "./styles/Global.styled";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";


function App() {
    return (
        <>
            <GlobalStyles/>
            <Main/>
            <Skills/>
            <Projects/>
        </>
    );
}

export default App;