import FRCRadio from './radio';
import FRCRadioGroup from './radioGroup';
import { Radio } from 'antd';
var Button = Radio.Button;
var TransRadio = FRCRadio;
TransRadio.Group = FRCRadioGroup;
TransRadio.Button = Button;
export default TransRadio;
