import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AppRoutes } from './routes/AppRoutes';
import { Footer } from './components/Footer';

function App() {

  return (
    <>
      <Router>
        <main className='font-titillium'>
          <Navbar />
          <AppRoutes />
          <Footer />
        </main>
      </Router>
    </>
  )
}

export default App
