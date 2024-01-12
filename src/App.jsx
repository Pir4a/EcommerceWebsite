import { useState } from 'react'
import Header from './components/Header.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Whey from './pages/Whey.jsx'
import Supps from './pages/Supps.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'
import Vetements from './pages/Vetements.jsx'
import Snacks from './pages/Snacks.jsx'
import Cart from './components/cart.jsx'
import { ShopcontextProvider } from './context/shopcontext.jsx'
import Wheyprotein from './pages/pagesproduits/wheyprotein.jsx'
import Casein from './pages/pagesproduits/casein.jsx'
import Wheyproteinisolate from './pages/pagesproduits/isolatewheyprotein.jsx'
import Wheyproteinvegan from './pages/pagesproduits/veganprotein.jsx'
import Nutrimuscle from './pages/pagesproduits/nutri.jsx'
import Apurnabar from './pages/pagesproduits/apurna.jsx'
import Carbkilla from './pages/pagesproduits/carbkilla.jsx'
import Mars from './pages/pagesproduits/mars.jsx'
import Gourmande from './pages/pagesproduits/gourmande.jsx'
import Omegatrois from './pages/pagesproduits/omegatrois.jsx'
import Caffein from './pages/pagesproduits/caffeincaps.jsx'
import Multivit from './pages/pagesproduits/multivit.jsx'
import Creatinecaps from './pages/pagesproduits/creatinecaps.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShopcontextProvider>
        <Header />
        <div className='contain'>
          <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/whey" element={<Whey />}/>
          <Route path="/nutrition" element={<Supps />}/>
          <Route path='/vetements' element={<Vetements />}/>
          <Route path="/snacks" element={<Snacks />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/whey/whey-protein" element={<Wheyprotein />}/>
          <Route path="/whey/whey-protein-vegan" element={<Wheyproteinvegan />}/>
          <Route path="/whey/whey-protein-isolate" element={<Wheyproteinisolate />}/>
          <Route path="/whey/casein" element={<Casein />}/>
          <Route path="/snacks/barre-proteinee-apurna" element={<Apurnabar />}/>
          <Route path="/snacks/barre-proteinee-gourmande" element={<Gourmande />}/>
          <Route path="/snacks/barre-proteinee-carbkilla" element={<Carbkilla />}/>
          <Route path="/snacks/barre-proteinee-mars" element={<Mars />}/>
          <Route path="/snacks/barre-proteinee-nutrimuscle" element={<Nutrimuscle />}/>
          <Route path="/supps/omega" element={<Omegatrois />}/>
          <Route path="/supps/caffeine" element={<Caffein />}/>
          <Route path="/supps/multivitamin" element={<Multivit />}/>
          <Route path="/supps/creatine" element={<Creatinecaps />}/>
          </Routes>
        </div>
        <Newsletter />
        <Footer />
      </ShopcontextProvider>
    </>
  )
}

export default App
