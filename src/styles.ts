import styled from 'styled-components'

export const Container = styled.div.attrs({
  className: 'react-og-rte'
})`
  ul li,
  ol li {
    list-style-position: inside;

    .public-DraftStyleDefault-block.public-DraftStyleDefault-ltr {
      display: inline;
    }
  }
`

export const ControlContainer = styled.div.attrs({
  className: 'react-og-rte-control-container'
})``

export const Button = styled.button.attrs({
  className: 'react-og-rte-control-button'
})``
