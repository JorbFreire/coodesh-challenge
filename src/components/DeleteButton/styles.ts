import styled from 'styled-components'
import { IconButton, Button } from '@mui/material'

const size = 40

export const Container = styled.div`
  position: relative;
  display: flex;
  height: ${size}px;
  width: ${size}px;
`

export const CustomIconButton = styled(IconButton)`
  height: ${size}px;
  width: ${size}px;
  svg {
    height: 100%;
    width: 100%;
    color: #b22525dd;
  }
`

export const ConfirmationButton = styled(Button)`
  && {
    position: absolute;
    right: 0;
    background-color: #b22525dd;
    color: #fff !important;
    font-size: 1.6rem;
  }

  &:hover {
    background-color: #b22525 !important;
  }
`
