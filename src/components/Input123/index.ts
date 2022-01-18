import {FC} from 'react'
import FRCInput, {FRCInputProps} from './input'
import FRCSearch, {FRCSearchProps} from './search'

export type FrcInputComponent = FC<FRCInputProps> & {
  Search: FC<FRCSearchProps>
}

const TransInput = FRCInput as FrcInputComponent

TransInput.Search = FRCSearch

export default TransInput
