import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { PreviewModal } from './components/PreviewModal'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <PreviewModal />
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
