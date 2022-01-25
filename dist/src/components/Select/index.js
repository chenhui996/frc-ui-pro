// import FRCSelect from './select'
// export default FRCSelect
import FRCSelect from './select';
import Select from 'antd/es/select';
var OptGroup = Select.OptGroup, Option = Select.Option;
var TransSelect = FRCSelect;
TransSelect.Option = Option;
TransSelect.OptGroup = OptGroup;
export default TransSelect;
