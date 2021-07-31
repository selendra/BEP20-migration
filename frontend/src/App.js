import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import HeaderComponent from './components/Header'
import FooterComponent from './components/Footer'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import FaqPage from './pages/faq'
import HowtoPage from './pages/howto'

export default function App() {
  return (
    <Router>
      <HeaderComponent />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/faqs' component={FaqPage} />
        <Route exact path='/howto' component={HowtoPage} />
      </Switch>
      <FooterComponent />
    </Router>
  )
}