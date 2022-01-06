import React from 'react'
import {Select, Divider} from 'antd'
import FRCSelect from '../components/Select/index'
import {FiSearch, FiAlertCircle} from 'react-icons/fi'

const SelectPage = () => {
  return (
    <>
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>antd select</h3>

      <Select
        allowClear
        defaultValue="lucy"
        style={{marginRight: 16, width: 240}}
        clearIcon={<FiSearch />}
        // suffixIcon={<FiSearch />}
      >
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
      </Select>

      <Select
        allowClear
        defaultValue="lucy"
        style={{marginRight: 16, width: 240}}
        clearIcon={<FiSearch />}
        showSearch
      >
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
      </Select>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>default select - single</h3>

      <FRCSelect
        placeholder="default select"
        style={{marginRight: 16, width: 240}}
        extendSuffixIcon={<FiAlertCircle />}
        prefixIcon={<FiSearch />}
        dropdownClassName="asdasdsadasdas"
      >
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
        <Select.Option value="jack1">Jack1</Select.Option>
        <Select.Option value="lucy2">Lucy2</Select.Option>
        <Select.Option value="jack3">Jack3</Select.Option>
        <Select.Option value="lucy4">Lucy4</Select.Option>
        <Select.Option value="jack5">Jack5</Select.Option>
        <Select.Option value="lucy6">Lucy6</Select.Option>
        <Select.Option value="jack7">Jack7</Select.Option>
        <Select.Option value="lucy8">Lucy8</Select.Option>
      </FRCSelect>

      <FRCSelect
        placeholder="allow-clear"
        style={{marginRight: 16, width: 240}}
        allowClear
      >
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
      </FRCSelect>

      <FRCSelect
        placeholder="disabled select"
        style={{marginRight: 16, width: 240}}
        allowClear
        disabled
      >
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
      </FRCSelect>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>search select - single</h3>

      <FRCSelect
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        showSearch
        allowClear
      >
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
        <Select.Option value="jack1">Jack1</Select.Option>
        <Select.Option value="lucy2">Lucy2</Select.Option>
        <Select.Option value="jack3">Jack3</Select.Option>
        <Select.Option value="lucy4">Lucy4</Select.Option>
        <Select.Option value="jack5">Jack5</Select.Option>
        <Select.Option value="lucy6">Lucy6</Select.Option>
        <Select.Option value="jack7">Jack7</Select.Option>
        <Select.Option value="lucy8">Lucy8</Select.Option>
      </FRCSelect>

      <FRCSelect
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        showSearch
        allowClear
        disabled
      >
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
      </FRCSelect>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>prefix - search select - single</h3>

      <FRCSelect
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        showSearch
        allowClear
        prefixIcon={<FiAlertCircle />}
        extendSuffixIcon={<FiAlertCircle />}
      >
        <Select.Option value="jack">
          Jack12312312312312312312312312
        </Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
        <Select.Option value="jack1">Jack1</Select.Option>
        <Select.Option value="lucy2">Lucy2</Select.Option>
        <Select.Option value="jack3">Jack3</Select.Option>
        <Select.Option value="lucy4">Lucy4</Select.Option>
        <Select.Option value="jack5">Jack5</Select.Option>
        <Select.Option value="lucy6">Lucy6</Select.Option>
        <Select.Option value="jack7">Jack7</Select.Option>
        <Select.Option value="lucy8">Lucy8</Select.Option>
      </FRCSelect>

      <FRCSelect
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        showSearch
        allowClear
        prefixIcon={<FiSearch />}
        extendSuffixIcon={<FiAlertCircle />}
      >
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
      </FRCSelect>

      <FRCSelect
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        showSearch
        allowClear
        disabled
        prefixIcon={<FiSearch />}
      >
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
      </FRCSelect>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>search select - multiple</h3>

      <FRCSelect
        mode="multiple"
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        allowClear
        showSearch
      >
        <Select.Option value="jack">
          Jack12312312312312312312312312
        </Select.Option>
        <Select.Option value="lucy">Lucy123</Select.Option>
        <Select.Option value="jack1">Jack13241241234131</Select.Option>
        <Select.Option value="lucy2">
          Jack12312312312312312312312312
        </Select.Option>
        <Select.Option value="jack3">Jack3dasdas</Select.Option>
        <Select.Option value="lucy4">Lucy4xzc</Select.Option>
        <Select.Option value="jack5">Jack5</Select.Option>
        <Select.Option value="lucy6">Lucy6zxqeq</Select.Option>
        <Select.Option value="jack7">Jack7</Select.Option>
        <Select.Option value="lucy8">Lucy82312</Select.Option>
      </FRCSelect>

      <FRCSelect
        mode="multiple"
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        showArrow
        allowClear
        prefixIcon={<FiSearch />}
        showSearch
      >
        <Select.Option value="jack">
          Jack12312312312312312312312312
        </Select.Option>
        <Select.Option value="lucy">Lucy123</Select.Option>
        <Select.Option value="jack1">Jack13241241234131</Select.Option>
        <Select.Option value="lucy2">
          Jack12312312312312312312312312
        </Select.Option>
        <Select.Option value="jack3">Jack3dasdas</Select.Option>
        <Select.Option value="lucy4">Lucy4xzc</Select.Option>
        <Select.Option value="jack5">Jack5</Select.Option>
        <Select.Option value="lucy6">Lucy6zxqeq</Select.Option>
        <Select.Option value="jack7">Jack7</Select.Option>
        <Select.Option value="lucy8">Lucy82312</Select.Option>
      </FRCSelect>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />
    </>
  )
}

export default SelectPage
