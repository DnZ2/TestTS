import { NumberField } from '@base-ui-components/react/number-field'
import { Add, Remove } from '@mui/icons-material'
import { IconButton, TextField } from '@mui/material'
import { memo } from 'react'

interface Props {
    onChange: ((value: number | null, event?: Event) => void)
}

const NumberInput = memo((props: Props) => {
    const {onChange} = props
    return (
    <NumberField.Root defaultValue={1} min={1} onValueChange={onChange}>
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

export default NumberInput
