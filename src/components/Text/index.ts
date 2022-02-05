import styled from 'styled-components'

export interface TextProps {
  $title?: boolean
}

const Text = styled.p<TextProps>`
  white-space: pre-line;
  width: 100%;
  color: #000;
  font-size: ${({ $title }) => ($title ? 1.6 : 1.4)}rem;
  font-weight: ${({ $title }) => ($title ? 600 : 400)};
  margin: 0;
`

export default Text
