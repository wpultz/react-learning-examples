import React, { Component, PropTypes } from 'react'

export default class DropDown extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })).isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      isExpanded: true,
      selectedIndex: -1
    }
  }

  toggleExpansion() {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

  selectOption(selectedIndex) {
    console.log('selected option', selectedIndex, this.props.options[selectedIndex])
    this.setState({
      isExpanded: false,
      selectedIndex
    })
  }

  render() {
    const menuText = this.state.selectedIndex >= 0 ? this.props.options[selectedIndex].label

    return (
      <div>
        <div onClick={ this.toggleExpansion }>{ menuText }</div>
        {
          this.props.options.map((option, i) =>
            <div onClick={ () => this.selectOption(i) } >{ option.label }</div>
          )
        }
      </div>
    )
  }
}
