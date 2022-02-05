import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'

export const Container = styled.div`
  height: 100%;
  overflow: auto;
  background-color: #333333;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 512px;
`

export const Filters = styled.section`
  display: flex;
  width: 100%;
  padding: 0 32px;
  gap: 32px;
`

export const Search = styled(TextField)`
  width: 38%;
  margin-bottom: 16px !important;
  input,
  label {
    font-size: 2rem;
    color: #c7c7c7;
  }
  input,
  label.Mui-focused {
    color: #fff;
  }
  *:before {
    border-color: #c7c7c7 !important;
  }
  *:after {
    border-color: #fff !important;
  }
`

export const CustomFormControlLabel = styled(FormControlLabel)`
  * {
    font-size: 2rem !important;
    color: #c7c7c7;
  }
`

export const LoadingMore = styled(Button)`
  && {
    margin-top: 16px;
    margin-bottom: 32px;
    font-size: 1.6rem;
    color: #fff;
    gap: 8px;
  }
`
