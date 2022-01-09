import {FC} from 'react'
import FRCRadio from './radio'
import FRCRadioGroup from './radioGroup';
import {Radio, RadioGroupProps, RadioProps} from 'antd'
import {RadioButtonProps} from 'antd/es/radio/radioButton';

const {Button} = Radio

export type FrcRadioComponent = FC<RadioProps> & {
  Group: FC<RadioGroupProps>;
  Button: FC<RadioButtonProps>
}

const TransRadio = FRCRadio as FrcRadioComponent

TransRadio.Group = FRCRadioGroup
TransRadio.Button = Button

export default TransRadio
