import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Picker from './Picker'

export default class extends Component {
  addGif (gif) {
    let gifUrl = gif.fixed_width.url
    const { editorState, onChange, insertDataBlock } = this.props
    const data = {src: gifUrl, type: 'gif'}

    onChange(insertDataBlock(editorState, data))
    this.props.closeModal()
  }

  render () {
    return (
      <Wrapper>
        <Picker onSelected={::this.addGif} closeModal={this.props.closeModal} />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: relative;
  background-color: inherit;
  width: 350px;
`
