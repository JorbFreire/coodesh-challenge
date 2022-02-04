import { useState, useEffect } from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'

import { CustomIconButton, ConfirmationButton } from './styles'

export interface DeleteButtonProps {
  onDelete(): void
}

export default function DeleteButton({ onDelete }: DeleteButtonProps) {
  const [deleteAlowed, setDeleteAlowed] = useState(false)

  useEffect(() => {
    if (deleteAlowed) setTimeout(() => setDeleteAlowed(false), 4000)
  }, [deleteAlowed])

  return (
    <CustomIconButton
      disableRipple={deleteAlowed}
      onClick={() => !deleteAlowed && setDeleteAlowed(true)}
    >
      <DeleteRoundedIcon />
      {deleteAlowed && (
        <ConfirmationButton onClick={onDelete}>EXCLUIR</ConfirmationButton>
      )}
    </CustomIconButton>
  )
}
