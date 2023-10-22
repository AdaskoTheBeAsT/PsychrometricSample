import styled from '@emotion/styled';
import Settings from './Settings';
import NavBar from './components/molecules/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculation from './Calculation';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Settings />} />
          <Route path="calculation" element={<Calculation />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
