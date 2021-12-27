import React from "react";
import template from "./Quiz.jsx";

class Quiz extends React.Component {
  constructor() {
    super();
    this.fnChange = this.fnChange.bind(this);
    this.userAns = {};
    this.key = {};
    this.state = {
      isTestSubmit: false,
      timeLeft: 20
    }

  }
  componentDidMount() {
    this.props.questions.forEach((obj) => {
      this.key[obj.id] = obj.ans;
    })

    this.interval = setInterval(() => {
      this.setState({
        timeLeft: this.state.timeLeft - 1
      })
      if (this.state.timeLeft == 0) {
        this.fnSubmit();
      }
    }, 1000);

  }
  fnChange(eve) {

    const { name, value, type, checked } = eve.target;

    if (type == 'checkbox') {
      let checkedAns = this.userAns[name] ? this.userAns[name].split("") : [];
      if (checked) {
        checkedAns.push(value)
      } else {
        let _index = checkedAns.indexOf(value);
        checkedAns.splice(_index, 1);
      }
      this.userAns = {
        ...this.userAns,
        [name]: checkedAns.sort().join("")
      }
    } else {
      this.userAns = {
        ...this.userAns,
        [name]: value
      }
    }
  }
  fnSubmit() {
    clearInterval(this.interval)
    let marks = 0;
    for (let v in this.userAns) {
      if (this.userAns[v] == this.key[v]) {
        marks++;
      }
    }
    this.refs.resRef.innerText = "You Scored " + marks + "Mark(s)."
    this.setState({
      isTestSubmit: true
    })
  }
  render() {
    return template.call(this);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Quiz;
