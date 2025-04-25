import { NumberField } from '@base-ui-components/react/number-field'
import { Add, Remove } from '@mui/icons-material'
import { IconButton, TextField } from '@mui/material'
import { memo } from 'react'

export const NumberInput = memo((props: NumberField.Root.Props) => {
    return (
    <NumberField.Root {...props}>
        <NumberField.Decrement render={<IconButton />}>
          <Remove />
        </NumberField.Decrement>
        <NumberField.Input render={<TextField size='small' sx={{textAlign: "center", width: "4rem"}}/>}/>
        <NumberField.Increment render={<IconButton/>}>
          <Add />
        </NumberField.Increment>
    </NumberField.Root>
  )
})

