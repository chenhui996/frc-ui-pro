import { FC } from 'react'
import FRCInput, { FRCInputProps } from './input'
import FRCSearch, { FRCSearchProps } from './search'
import FRCGroup, { FRCGroupProps } from './group'
import FRCTextArea, { FRCTextAreaProps } from './textArea'
import FRCPassword, { FRCPasswordProps }from './password'

export type FrcInputComponent = FC<FRCInputProps> & {
  Search: FC<FRCSearchProps>
  Group: FC<FRCGroupProps>
  TextArea: FC<FRCTextAreaProps>
  Password: FC<FRCPasswordProps>
}

const TransInput = FRCInput as FrcInputComponent

TransInput.Search = FRCSearch
TransInput.Group = FRCGroup
TransInput.TextArea = FRCTextArea
TransInput.Password = FRCPassword

export default TransInput
