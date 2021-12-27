import "./Menu.css";
import React, { lazy, Suspense } from "react";
import { HashRouter, Route } from 'react-router-dom'

//import Home from '../Home/index'
//import About from '../About/index'
//import Contact from '../Contact/index'
//import Service from '../Service/index'

const Home = lazy(() => import('../Home/index'))
const About = lazy(() => import('../About/index'))
const Contact = lazy(() => import('../Contact/index'))
const Service = lazy(() => import('../Service/index'))
const Hoc = lazy(() => import('../Hoc/index'))
const ExceptionalHandling = lazy(() => import('../ExceptionalHandling/index'))
const ForwardRef = lazy(() => import('../ForwardRef/index'))
const Quiz = lazy(() => import('../Quiz/index'))
const Quiz1 = lazy(() => import('../Quiz1/index'))
const Quiz2 = lazy(() => import('../Quiz2/index'))
const EtoE = lazy(() => import('../EtoE/index'))

function template() {
  return (
    <div className="menu">
      <div className="menu-Items">
        <a href="#/home">Home</a>
        <a href="#/about">About</a>
        <a href="#/contact">Contact</a>
        <a href="#/service">Service</a>
        <a href="#/hoc">Hoc</a>
        <a href="#/exceptionalHandling">ExceptionalHandling</a>
        <a href="#/forward-ref">ForwardRef</a>
        <a href="#/quiz">Quiz</a>
        <a href="#/quiz1">Quiz1</a>
        <a href="#/quiz2">Quiz2</a>
        <a href="#/etoe">EtoE</a>
      </div>
      <Suspense fallback="Loading...">
        <HashRouter>
          <div className="mb-50">
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/service" component={Service} />
            <Route path="/hoc" component={Hoc} />
            <Route path="/exceptionalHandling" component={ExceptionalHandling} />
            <Route path="/forward-ref" component={ForwardRef} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/quiz1" component={Quiz1} />
            <Route path="/quiz2" component={Quiz2} />
            <Route path="/etoe" component={EtoE} />
          </div>
        </HashRouter>
      </Suspense>

    </div>
  );
};

export default template;
