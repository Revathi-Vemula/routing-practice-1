import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="app-body-container">
    <Header />
    <div>
      <Switch>
        <Route exact to="/" component={Home} />
        <Route exact to="/about" component={About} />
        <Route exact to="/contact" component={Contact} />
        <Route exact component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
