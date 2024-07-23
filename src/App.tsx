import './App.css';
import {Main} from "./layout/sections/main/Main";
import {GlobalStyles} from "./styles/Global.styled";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Location} from "./layout/sections/location/Location";
import {Services} from "./layout/sections/services/Services";
import {Learning} from "./layout/sections/learning/Learning";
import {Contact} from "./layout/sections/contact/Contact";


function App() {
    return (
        <>
            <GlobalStyles/>
            <Main/>
            <Skills/>
            <Projects/>
            <Location/>
            <Services/>
            <Learning/>
            <Contact/>
        </>
    );
}

export default App;