import "./Quiz.css";
import React from "react";

function template() {
  const { isTestSubmit, timeLeft } = this.state;
  return (
    <div className="quiz">
      <h1>Quiz</h1>
      {
        this.props.questions.map((obj, index) => {
          return <div className="ml-10" key={index}>
            <h3>{index + 1}.{obj.que}</h3>
            <p>{obj.type == 's' ? <input disabled={isTestSubmit} type="radio" value="A" name={obj.id} onChange={this.fnChange} /> : <input disabled={isTestSubmit} type="checkbox" value="A" name={obj.id} onChange={this.fnChange} />}{obj.opt1}</p>
            <p>{obj.type == 's' ? <input disabled={isTestSubmit} type="radio" value="B" name={obj.id} onChange={this.fnChange} /> : <input disabled={isTestSubmit} type="checkbox" value="B" name={obj.id} onChange={this.fnChange} />}{obj.opt2}</p>
            <p>{obj.type == 's' ? <input disabled={isTestSubmit} type="radio" value="C" name={obj.id} onChange={this.fnChange} /> : <input disabled={isTestSubmit} type="checkbox" value="C" name={obj.id} onChange={this.fnChange} />}{obj.opt3}</p>
            <p>{obj.type == 's' ? <input disabled={isTestSubmit} type="radio" value="D" name={obj.id} onChange={this.fnChange} /> : <input disabled={isTestSubmit} type="checkbox" value="D" name={obj.id} onChange={this.fnChange} />}{obj.opt4}</p>

          </div>
        })
      }
      <button disabled={isTestSubmit} onClick={this.fnSubmit.bind(this)}>Submit</button>
      <h1 ref="resRef"></h1>
      <b className="time-left">{timeLeft}</b>
    </div>
  );
};

export default template;
