import './App.css';
import {Main} from "./layout/sections/main/Main";
import {GlobalStyles} from "./styles/Global.styled";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Location} from "./layout/sections/location/Location";
import {Services} from "./layout/sections/services/Services";
import {Learning} from "./layout/sections/learning/Learning";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";
import {ThemeProvider} from "styled-components";
import {myTheme} from "./styles/Theme";
import {Header} from "./layout/header/Header";


function App() {
    return (
        <ThemeProvider theme={myTheme.light}>
        <>
            <Header/>
            <GlobalStyles/>
            <Main/>
            <Skills/>
            <Projects/>
            <Location/>
            <Services/>
            <Learning/>
            <Contacts/>
            <Footer/>
        </>
        </ThemeProvider>
    );
}

export default App;