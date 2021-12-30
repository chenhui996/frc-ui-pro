import {FC} from 'react'
import FRCInput, {FRCInputProps} from './input'
import FRCSearch from './Search'
import {SearchProps} from 'antd/es/input'

// const {Search} = Input

export type FrcInputComponent = FC<FRCInputProps> & {
  Search: FC<SearchProps>
}

const TransInput = FRCInput as FrcInputComponent

TransInput.Search = FRCSearch

export default TransInput
