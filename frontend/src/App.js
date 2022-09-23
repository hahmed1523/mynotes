import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/header';
import NotesListPage from './pages/note_list_page';
import NotePage from './pages/note_page';


function App() {
  return (
    <BrowserRouter>
      <div className="container dark">
        <div className='app'>
          <Header />
            <Routes>
              <Route path='/' element={<NotesListPage />} />
              <Route path='/note/:id' element={<NotePage />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
