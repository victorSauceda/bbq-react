import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import Contact from './Contact'
import Specials from './Specials.js'
function Main(props) {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/menu' component={Menu}/>
        <Route path='/specials' component={Specials}/>
        <Route path='/contact' ><Contact
        env={props.env}
        />
        </Route>
        
      </Switch>
    </main>
  );
}
export default Main;