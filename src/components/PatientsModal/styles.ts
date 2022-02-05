import styled from 'styled-components'
import Dialog from '@mui/material/Dialog'

export const Container = styled(Dialog)`
  & .MuiPaper-root {
    padding: 64px;
    border-radius: 32px;
    overflow: visible;
  }
`

export const Photo = styled.img`
  position: absolute;
  height: 128px;
  top: -64px;
  margin-left: 50%;
  margin-right: 50%;
  border-radius: 50%;
`

export const TopContent = styled.section`
  display: flex;
  justify-content: center;
  &:last-of-type {
    margin-top: 16px;
  }
`

export const Line = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 64px;
`

export const ContentColumn = styled.section``

export const PatientName = styled.h2`
  font-size: 2.4rem;
`
