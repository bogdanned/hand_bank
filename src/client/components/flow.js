import React from 'react'
var FontAwesome = require('react-fontawesome');
import styled from "styled-components"
import {Link} from 'react-router-dom'

const flow = {
  name: "flow",
  steps: [
    {
      title: "choose something 1",
      type: "options",
      name: "heating_one",
      options: [
        {
          label: "Option 1",
          iconName: "bath",
          name: "asfsdf"
        }, {
          label: "Option 2",
          iconName: "thermometer-quarter",
          name: "asdsdfsdf"
        }, {
          label: "Option 3",
          iconName: "shower",
          name: "sdfsdfsdf"
        }
      ]
    }, {
      title: "choose something 2",
      type: "options",
      name: "heating 2",
      options: [
        {
          label: "Option 1234234",
          iconName: "rocket",
          name: "sdfsdfdsf"
        }, {
          label: "Option 2",
          iconName: "rocket",
          name: "sdfsdf"
        }, {
          label: "Option 3234324",
          iconName: "rocket",
          name: "sdfsdfsdf"
        }
      ]
    }, {
      title: "choose something 2",
      type: "options",
      name: "heating 3",
      options: [
        {
          label: "Option 1234234",
          iconName: "rocket",
          name: "sdfsdfsdf"
        }, {
          label: "Option 2",
          iconName: "rocket",
          name: "sdfsdfsdfsdf"
        }, {
          label: "Option 3234324",
          iconName: "rocket",
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

`

const OptionsContainer = styled.div `
  display: flex;
  justify-content: center;
`

const OptionWrapper = styled.button `
  margin: 10px;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &:hover{
    background: grey;
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
        <h3>{step.title}</h3>
        {step && step.type == "options" && <OptionsContainer>{options}</OptionsContainer>}
        {step && step.type == "form" && <CustomerForm step={step} onClick={this.nextStep}/>}
        {step && step.type == "end" && <End step={step}/>}
      </FlowContainer>
    );
  }
}
