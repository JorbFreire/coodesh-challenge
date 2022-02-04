import { useState, useEffect } from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'

import { Container, CustomIconButton, ConfirmationButton } from './styles'

export interface DeleteButtonProps {
  onDelete(): void
}

export default function DeleteButton({ onDelete }: DeleteButtonProps) {
  const [deleteAlowed, setDeleteAlowed] = useState(false)

  useEffect(() => {
    if (deleteAlowed) setTimeout(() => setDeleteAlowed(false), 4000)
  }, [deleteAlowed])

  return (
    <Container>
      <CustomIconButton
        disableRipple={deleteAlowed}
        onClick={() => !deleteAlowed && setDeleteAlowed(true)}
      >
        <DeleteRoundedIcon />
      </CustomIconButton>
      {deleteAlowed && (
        <ConfirmationButton onClick={onDelete}>EXCLUIR</ConfirmationButton>
      )}
    </Container>
  )
}
