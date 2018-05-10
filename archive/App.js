import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TweenLite, TweenMax, Power2, TimelineLite} from "gsap";
import ReactMorph from "react-morph";
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react'

var va =require('velocity-animate');
var vva = require('velocity-animate/velocity.ui');

const MySubComponent = () => <div>Dog</div>
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      renderSubComponent: true
    }

  }
  componentDidMount() {
        // TweenMax.to(this.prettyAnimation,4,{opacity:.1});
        // TweenLite.to(this.prettyAnimation, 1.5, {width:1100})
   }
  render() {
    return (
        <VelocityComponent animation={va.callout.bounce} duration={200}>
    <MySubComponent/>
  </VelocityComponent>


        // <div style={{backgroundColor: "hotpink"}} ref={div => this.prettyAnimation = div}>
        // Animate ME!!
        // </div>

      );
  }
};

export default App;
