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
      isExpanded: false
      selectedIndex: -1
    }
  }

  componentWillMount() {
    // called immediately before this component is rendered
  }

  componentDidMount() {
    // called immediately after this component is rendered
  }

  componentWillReceiveProps(nextProps, nextState) {
    // called when a component's props have changed.
  }

  componentShouldUpdate(nextProps, nextState) {
    // called when a component receives new props
    // return a boolean from this function to indicate that it should or should not re-render
    if (nextProps.options === this.props.options) {
      return false
    }
    return true
  }

  componentDidUpdate() {
    // called immediately after the component updates
  }

  componentWillUnmount() {
    // called immediately before the component is removed from the DOM
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
