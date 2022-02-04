import styled from 'styled-components'
import { IconButton, Button } from '@mui/material'

export const CustomIconButton = styled(IconButton)`
  height: 40px;
  width: 40px;
  svg {
    position: relative;
    color: #b22525dd;
  }
`

export const ConfirmationButton = styled(Button)`
  position: absolute;
  right: 0;
  background-color: #b22525dd;
  color: #fff;

  &:hover {
    background-color: #b22525;
  }
`
