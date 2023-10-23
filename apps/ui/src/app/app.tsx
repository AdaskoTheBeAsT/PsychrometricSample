import styled from '@emotion/styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/molecules/NavBar';
import Calculation from './components/pages/Calculation';
import Settings from './components/pages/Settings';

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
