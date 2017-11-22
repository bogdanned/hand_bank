import React from 'react'

const flow = {
  name: "flow",
  steps: [
    {
      title: "choose something 1",
      options: [
        {
          label: "Option 1"
        }, {
          label: "Option 2"
        }, {
          label: "Option 3"
        }
      ]
    }, {
      title: "choose something 2",
      options: [
        {
          label: "Option 1234234"
        }, {
          label: "Option 2"
        }, {
          label: "Option 3234324"
        }
      ]
    }, {
      title: "choose something 3"
    }
  ]
}

const Option = div.

const Option = ({option: {label},onClick}) => {
  return (
    <button key={label} onClick={onClick}>{label}</button>
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
      <div>
        <h3>{step.title}</h3>
        <div>{options}</div>
      </div>
    );
  }
}
