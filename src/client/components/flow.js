import React from 'react'
var FontAwesome = require('react-fontawesome');
import styled from "styled-components"

const flow = {
  name: "flow",
  steps: [
    {
      title: "choose something 1",
      type: "options",
      options: [
        {
          label: "Option 1",
          iconName: "bath"
        }, {
          label: "Option 2",
          iconName: "thermometer-quarter"
        }, {
          label: "Option 3",
          iconName: "shower"
        }
      ]
    }, {
      title: "choose something 2",
      type: "options",
      options: [
        {
          label: "Option 1234234",
          iconName: "rocket"
        }, {
          label: "Option 2",
          iconName: "rocket"
        }, {
          label: "Option 3234324",
          iconName: "rocket"
        }
      ]
    }, {
      title: "choose something 2",
      type: "options",
      options: [
        {
          label: "Option 1234234",
          iconName: "rocket"
        }, {
          label: "Option 2",
          iconName: "rocket"
        }, {
          label: "Option 3234324",
          iconName: "rocket"
        }
      ]
    }, {
      title: "choose something 4",
      type: "end",
      options: [
        {
          label: "Option 1234234",
          iconName: "rocket"
        }, {
          label: "Option 2",
          iconName: "rocket"
        }, {
          label: "Option 3234324",
          iconName: "rocket"
        }
      ]
    }
  ]
}

const FlowContainer = styled.div`

`

const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
`

const OptionWrapper = styled.button`
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

const Option = ({option: {label, iconName},onClick}) => {
  return (
    <OptionWrapper  key={label} onClick={onClick}>
      <FontAwesome name={iconName} size='4x'/>
      {label}
    </OptionWrapper>
  )
}



export default class FlowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    }
  }

  nextStep() {
    console.log('teet')
    this.setState({
      step: this.state.step + 1
    })
  }

  render() {
    let step = flow.steps[this.state.step]
    let options = step.options.map(o => (
      <Option key={o.name} option={o} onClick={() => (this.nextStep())}></Option>
    ))
    return (
      <FlowContainer>
        <h3>{step.title}</h3>
        <OptionsContainer>{options}</OptionsContainer>
      </FlowContainer>
    );
  }
}
