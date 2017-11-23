import React from 'react'
var FontAwesome = require('react-fontawesome');
import styled from "styled-components"
import {Link} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Header from './Header'

import './styles.css'

import Back from './reusable/back'
import Next from './reusable/next'


const Root = styled.div`
  width: 100%;
`

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
      title: "Is it a renovation or a new project?",
      type: "options",
      name: "heating_one",
      options: [
        {
          label: "Renovation",
          iconName: "cogs",
          name: "sdfsdfdsf"
        }, {
          label: "New Bathroom",
          iconName: "bath",
          name: "sdfsdf"
        }
      ]
    },
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
    padding: 5px;
    font-size: 14px;
    margin-top: 10px;
  }
  span{
    font-size: 90px;

  }
`


const FormContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
`


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
  font-size: 20px;
  text-align: left;
  width: 100%;
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
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;
  margin-left: 10px;
  font-weight: 400;
  margin-right: 10px;
  background-color: white;
  color: #2ecc71;
  border-color: #2ecc71;
  border-radius: 0px;
  cursor: pointer;
  &:hover{
    background-color: #2ecc71;
    color: white;
  }
  &:focus{
    outline: none;
  }
`

const Price = styled.h5`
  color: #2ecc71;
  font-weight: 500;
  font-size: 18px;
  padding-left: 10px;
`

const EndContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
`

const EndMetrics = styled.div`
  height: 100%;
  width: 500px;
  display: flex;
  justify-content: space-between;
`

const EndMoney = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

class End extends React.Component{
  render(){
    return(
      <EndContainer id="flow">
        <Link to="/offers">
          <EndMetrics>
            <EndMoney>
              <Price>Estimated Price: 34.344,00 €</Price>
              <Price>Estimated Cost: 34.344,00 €</Price>
              <Price>Estimated Net Profit: 4.344,00 €</Price>
            </EndMoney>
            <EndMoney>
              <Price>Specialist Needed: 3</Price>
              <Price>Suppliers: Rocca, Vissamn</Price>
              <Price>Estimated time: 4 Months</Price>
            </EndMoney>
          </EndMetrics>
          <ButtonOrder>To Offer</ButtonOrder>
        </Link>
      </EndContainer>
    )
  }
}

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const StepTitle = styled.h5`
  margin-left: 10px;
  font-size: 40px;
  margin-bottom: 20px;
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
      <Root>
        <FlowContainer>
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
      </Root>
    );
  }
}
