import styled from 'styled-components'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

export const Container = styled(Table)`
  background-color: #fff;
  border-radius: 32px;
  th {
    padding-top: 16px;
  }
  td:first-of-type,
  th:first-of-type {
    padding-left: 32px !important;
  }
  td:last-of-type {
    padding-right: 32px !important;
  }
`

export const CustomTableRow = styled(TableRow)`
  cursor: pointer;
  transition: 0.2s;
  background-color: 'none';
  border-radius: 16px !important;
  td p {
    color: '#000';
  }
  :hover td {
    background-color: '#f5f5f5';
  }
  :last-of-type td {
    :first-of-type {
      border-radius: 0 0 0 32px;
    }
    :last-of-type {
      border-radius: 0 0 32px 0;
    }
  }
`

export const ShortTableCell = styled(TableCell)`
  cursor: default;
  max-width: 30px;
`
