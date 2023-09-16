import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Home from './pages/home/home.page';
import Nav from './components/navigation/navigation.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index={true} element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App;