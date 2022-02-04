import styled from 'styled-components'

export interface TextProps {
  $title?: boolean
}

const Text = styled.p<TextProps>`
  width: 100%;
  color: #000;
  font-size: ${({ $title }) => ($title ? 16 : 14)}px;
  font-weight: ${({ $title }) => ($title ? 600 : 400)};
  margin: 0;
`

export default Text
