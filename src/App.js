import "./App.css";

import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";

import Navbar from "./components/Navbar";
import About from "./components/section/About";
import Skills from "./components/section/Skills";
import Experience from "./components/section/Experience";
import Projects from "./components/section/Projects";
import Education from "./components/section/Education";
import StartCanvas from "./components/canvas/Stars";
import Contact from "./components/section/Contact";
import Footer from "./components/section/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  height: 87vh;
  overflow-x: hidden;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <StartCanvas />
          <div>
            <About />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects />
            <Wrapper>
              <Education />
              <Contact />
            </Wrapper>
            <Footer />
          </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
