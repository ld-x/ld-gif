/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

import React, {Component} from 'react'
import styled from 'styled-components'

export default class extends Component {
  itemAction () {
    this.props.container.remove()
  }

  render () {
    return (
      <GifBlockWrapper className='ld-gif-block-wrapper'>
        <GifBlock className='ld-gif-block'>
          <Image
            src={this.props.data.src}
            className='ld-gif-block' />
        </GifBlock>

        <BlockAction className='ld-block-action' onClick={::this.itemAction} key='deleteGif'>
          <svg width='22' height='22' viewBox='0 0 24 24' className='ld-button-close'>
            <g fill='currentColor'><path d='M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z' /><path d='M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z' /></g>
          </svg>
        </BlockAction>
      </GifBlockWrapper>
    )
  }
}

const GifBlockWrapper = styled.div`
  position: relative;
`

const GifBlock = styled.div`
  display: flex;
`

const Image = styled.img`
  display: block;
`

const BlockAction = styled.div`
  cursor: pointer;
  color: #ddd;
  width: 1rem;
  &:hover {
    color: #333;
  }
`
