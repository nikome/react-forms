import React, { Component } from "react";


import * as Survey from "survey-react";



import "survey-react/modern.css";
import "./index.css";

Survey.StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
    constructor() {
        super();
        
    }
    render() {
        

        

        const json = {questions: [
{ type: "matrix", name: "Quality", title: "Please indicate if you agree or disagree with the following statements",
   columns: [{ value: 1, text: "Strongly Disagree" }, 
              { value: 2, text: "Disagree" }, 
              { value: 3, text: "Neutral" }, 
              { value: 4, text: "Agree" }, 
              { value: 5, text: "Strongly Agree" }],
    rows: [{ value: "affordable", text: "Product is affordable" }, 
           { value: "does what it claims", text: "Product does what it claims" },
           { value: "better then others", text: "Product is better than other products on the market" }, 
           { value: "easy to use", text: "Product is easy to use" }]}
]};
const survey = new Survey.Model(json);

        

        

        return (
            <Survey.Survey
                model={survey}
                onComplete={(result)=> console.log(result.data)}
            />
        );
    }
}

export default SurveyComponent;
