import React from 'react'
var FontAwesome = require('react-fontawesome');
import styled from "styled-components"
import {Link} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './styles.css'

import Back from './reusable/back'
import Next from './reusable/next'


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
      title: "Is there a bidet needed?",
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
      title: "Quality of the Bidet?",
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
          name: "customer_name",
          placeholder: "Anderson"
        }
      ]
    },
    {
      title: "New Customer",
      type: "form",
      fields: [
        {
          label: "Surname",
          name: "sur_name",
          placeholder: "Musterman"
        }
      ]
    },
    {
      title: "New Customer",
      type: "form",
      fields: [
        {
          label: "Address",
          name: "address_name",
          placeholder: "Andress"
        }
      ]
    },
    {
      title: "View the Order",
      subtitle: "To Order",
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
  justify-content: flex-start;
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
  border-radius: 0px;
  &:hover{
    background: #2ecc71;
    color: white;
  }
  p {
    font-weight: 800;
    padding: 5px;
  }
`


const FormContainer = styled.div``


const Input = styled.input`
  height: 36px;
  width: 500px;
  margin-left: 9px;
  &:focus{
    border-color: #2ecc71;
    color: #2ecc71;
  }
`

const Label = styled.p`
  margin-left: 10px;
  font-size: 20;
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
        <Label>{f.label}</Label>
        <Input placeholder={f.placeholder}></Input>
      </div>
    ))
    return(
      <FormContainer>
        <form>
          {fields}
        </form>
      </FormContainer>
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
        <FontAwesome name={iconName} size='4x'/>
        <p>
          {label}
        </p>
      </OptionWrapper>
    )
  }
}

const ButtonOrder = styled.button`
  background-color: #2ecc71;
  color: white;
  padding: 10px;
`

const Price = styled.h5`

`

class End extends React.Component{
  render(){
    return(
      <div>
        <Link to="orders">
          <Price></Price>
          <ButtonOrder>To Offer</ButtonOrder>
        </Link>
      </div>
    )
  }
}

const ButtonsContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`

const StepTitle = styled.h5`
  margin-left: 10px;
  font-size: 20;
`

export default class FlowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      offer: []
    }
    this.nextStep = this.nextStep.bind(this)
    this.back = this.back.bind(this)
  }

  nextStep(optionName) {
    this.setState({
      step: this.state.step + 1
    })
  }

  back() {
    this.setState({
      step: this.state.step - 1
    })
  }

  render() {
    let step = flow.steps[this.state.step]
    let options = step.type == "options" && step.options.map(o => (
      <Option key={o.name} option={o} onClick={this.nextStep}></Option>
    ))
    return (
      <FlowContainer>
        <h1>Customer Order</h1>
        <StepTitle>{step.title}</StepTitle>
        <TransitionGroup className='todo-list'>
          {step && step.type == "options" &&
          <Fade>
            <div>
              <OptionsContainer>
                {options}
              </OptionsContainer>
              <ButtonsContainer>
                <Back onClick={this.back}></Back>
                <Next onClick={this.nextStep}></Next>
              </ButtonsContainer>
            </div>

          </Fade>}
          {step && step.type == "form" &&
          <Fade>
            <div>
              <CustomerForm step={step} onClick={this.nextStep}/>
              <ButtonsContainer>
                <Back onClick={this.back}></Back>
                <Next onClick={this.nextStep}></Next>
              </ButtonsContainer>
            </div>
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
