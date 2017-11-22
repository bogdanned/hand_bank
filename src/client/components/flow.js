import React from 'react'
var FontAwesome = require('react-fontawesome');
import styled from "styled-components"
import {Link} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './styles.css';

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

const flow = {
  name: "flow",
  steps: [
    {
      title: "Is there a bath tube needed?",
      type: "options",
      name: "heating_one",
      options: [
        {
          label: "Yes",
          iconName: "shower",
          name: "sdfsdfdsf"
        }, {
          label: "No",
          iconName: "ban",
          name: "sdfsdf"
        }
      ]
    },
    {
      title: "Quality of the Bathroom?",
      type: "options",
      name: "heating 3",
      options: [
        {
          label: "Basic",
          iconName: "cogs",
          name: "sdfsdfsdf"
        }, {
          label: "Premium",
          iconName: "check-circle-o",
          name: "sdfsdfsdfsdf"
        }, {
          label: "Luxury",
          iconName: "heart",
          name: "sfsdfsdfsdfsdf"
        }
      ]
    },
    {
      title: "Is a shower needed?",
      type: "options",
      name: "heating 2",
      options: [
        {
          label: "Yes",
          iconName: "shower",
          name: "sdfsdfdsf"
        }, {
          label: "No",
          iconName: "ban",
          name: "sdfsdf"
        }
      ]
    }, {
      title: "Quality of the Shower?",
      type: "options",
      name: "heating 3",
      options: [
        {
          label: "Basic",
          iconName: "cogs",
          name: "sdfsdfsdf"
        }, {
          label: "Premium",
          iconName: "check-circle-o",
          name: "sdfsdfsdfsdf"
        }, {
          label: "Luxury",
          iconName: "heart",
          name: "sfsdfsdfsdfsdf"
        }
      ]
    },
    {
      title: "New Customer",
      type: "form",
      fields: [
        {
          label: "Name",
          name: "customer_name"
        },
        {
          label: "Surname",
          name: "customer_surname"
        }
      ]
    },
    {
      title: "Send the bill ",
      type: "end",
      name: "heating 4",
    }
  ]
}

const FlowContainer = styled.div `
  margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
`

const OptionsContainer = styled.div `
  display: flex;
  justify-content: center;
`

const OptionWrapper = styled.button `
  margin: 10px;
  width: 200px;
  height: 200px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #2ecc71;
  border-color: #2ecc71;
  &:hover{
    background: #2ecc71;
    color: white;
  }
`


class CustomerForm extends React.Component{
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this)
  }
  onClick(e) {
    e.preventDefault()
    this.props.onClick("contact")
  }
  render(){
    let fields = this.props.step.fields.map(f => (
      <div>
        <p>{f.label}</p>
        <input></input>
      </div>
    ))
    return(
      <div>
        <form>
          {fields}
        </form>
        <button onClick={this.onClick}>Next</button>
      </div>
    )
  }
}

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    e.preventDefault()
    this.props.onClick(this.props.option.name)
  }

  render() {
    let {label, iconName} = this.props.option
    return (
      <OptionWrapper key={label} onClick={this.onClick}>
        <FontAwesome name={iconName} size='4x'/> {label}
      </OptionWrapper>
    )
  }
}

class End extends React.Component{
  render(){
    return(
      <div>
        <Link to="orders">To the orders</Link>
      </div>
    )
  }
}

export default class FlowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      offer: []
    }
    this.nextStep = this.nextStep.bind(this)
  }

  nextStep(optionName) {
    this.setState({
      step: this.state.step + 1,
      offer: [
        ...this.state.offer,
        optionName
      ]
    })
    console.log(this.state)
  }

  render() {
    let step = flow.steps[this.state.step]
    let options = step.type == "options" && step.options.map(o => (
      <Option key={o.name} option={o} onClick={this.nextStep}></Option>
    ))
    return (
      <FlowContainer>
        <h1>Customer Order</h1>
        <h5>{step.title}</h5>
        <TransitionGroup className='todo-list'>
          {step && step.type == "options" &&
          <Fade>
            <OptionsContainer>{options}</OptionsContainer>
          </Fade>}
          {step && step.type == "form" &&
          <Fade>
            <CustomerForm step={step} onClick={this.nextStep}/>
          </Fade>}
          {step && step.type == "end" &&
          <Fade>
            <End step={step}/>
          </Fade>}
        </TransitionGroup>
      </FlowContainer>
    );
  }
}
