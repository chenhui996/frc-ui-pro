import React from 'react'
import {Select, Divider} from 'antd'
import FRCSelect from '../components/Select/index'
import Button from '../components/Button/index'
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

      <Select
        allowClear
        defaultValue="lucy"
        style={{marginRight: 16, width: 240}}
        clearIcon={<FiSearch />}
        showSearch
        maxTagCount={'responsive'}
        mode="multiple"
        loading
      >
        <Select.Option value="jack">Jack1231231231</Select.Option>
        <Select.Option value="lucy1">Lucyasdasdaxz</Select.Option>
        <Select.Option value="jack2">Jack12312</Select.Option>
        <Select.Option value="lucy3">Lucydsadavc</Select.Option>
        <Select.Option value="jack4">Jackdsad</Select.Option>
        <Select.Option value="lucy5">Lucy213</Select.Option>
        <Select.Option value="jack6">Jack</Select.Option>
        <Select.Option value="lucy7">Lucy</Select.Option>
      </Select>

      <Select
        mode="multiple"
        style={{width: 240}}
        placeholder="select one country"
        defaultValue={['china']}
        optionLabelProp="label"
      >
        <Select.Option value="china" label="China">
          <div className="demo-option-label-item">
            <span role="img" aria-label="China">
              🇨🇳
            </span>
            China (中国)
          </div>
        </Select.Option>
        <Select.Option value="usa" label="USA">
          <div className="demo-option-label-item">
            <span role="img" aria-label="USA">
              🇺🇸
            </span>
            USA (美国)
          </div>
        </Select.Option>
        <Select.Option value="japan" label="Japan">
          <div className="demo-option-label-item">
            <span role="img" aria-label="Japan">
              🇯🇵
            </span>
            Japan (日本)
          </div>
        </Select.Option>
        <Select.Option value="korea" label="Korea">
          <div className="demo-option-label-item">
            <span role="img" aria-label="Korea">
              🇰🇷
            </span>
            Korea (韩国)
          </div>
        </Select.Option>
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
        placeholder="default select"
        style={{marginRight: 16, width: 240}}
        extendSuffixIcon={<FiAlertCircle />}
        prefixIcon={<FiSearch />}
        dropdownClassName="asdasdsadasdas"
        loading
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
        placeholder="disabled select"
        style={{marginRight: 16, width: 240}}
        allowClear
        disabled
      >
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
      </FRCSelect>

      <FRCSelect
        placeholder="disabled select"
        style={{marginRight: 16, width: 240}}
        allowClear
        disabled
        prefixIcon={<FiSearch />}
        loading
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
        loading
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

      <FRCSelect
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        showSearch
        allowClear
        disabled
        loading
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
        prefixIcon={<FiSearch />}
        extendSuffixIcon={<FiAlertCircle />}
        loading
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

      <FRCSelect
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        showSearch
        allowClear
        disabled
        prefixIcon={<FiSearch />}
        loading
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

      <FRCSelect
        mode="multiple"
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        showArrow
        allowClear
        prefixIcon={<FiSearch />}
        showSearch
        loading
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
        disabled
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
        disabled
        loading
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

      <h3>auto '...' search select - multiple</h3>

      <FRCSelect
        mode="multiple"
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        allowClear
        showSearch
        maxTagCount={'responsive'}
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
        allowClear
        showSearch
        maxTagCount={'responsive'}
        prefixIcon={<FiSearch />}
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
        allowClear
        showSearch
        maxTagCount={'responsive'}
        prefixIcon={<FiSearch />}
        loading
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
        allowClear
        showSearch
        maxTagCount={'responsive'}
        disabled
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
        allowClear
        showSearch
        maxTagCount={'responsive'}
        disabled
        loading
      >
        <Select.Option value="jack">
          Jack12312312312312312312312312
        </Select.Option>
        <Select.Option value="lucy">Lucy123</Select.Option>
      </FRCSelect>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>auto '...' search select - multiple</h3>

      <FRCSelect
        mode="multiple"
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        allowClear
        showSearch
        maxTagCount={'responsive'}
      >
        <Select.OptGroup label="Manager">
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
        </Select.OptGroup>
        <Select.OptGroup label="Engineer">
          <Select.Option value="Yiminghe">yiminghe</Select.Option>
        </Select.OptGroup>
      </FRCSelect>

      <FRCSelect
        mode="multiple"
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        allowClear
        showSearch
        maxTagCount={'responsive'}
        loading
      >
        <Select.OptGroup label="Manager">
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
        </Select.OptGroup>
        <Select.OptGroup label="Engineer">
          <Select.Option value="Yiminghe">yiminghe</Select.Option>
        </Select.OptGroup>
      </FRCSelect>

      <FRCSelect
        mode="multiple"
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        allowClear
        showSearch
        maxTagCount={'responsive'}
        disabled
      >
        <Select.OptGroup label="Manager">
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
        </Select.OptGroup>
        <Select.OptGroup label="Engineer">
          <Select.Option value="Yiminghe">yiminghe</Select.Option>
        </Select.OptGroup>
      </FRCSelect>

      <FRCSelect
        mode="multiple"
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        allowClear
        showSearch
        maxTagCount={'responsive'}
        disabled
        loading
      >
        <Select.OptGroup label="Manager">
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
        </Select.OptGroup>
        <Select.OptGroup label="Engineer">
          <Select.Option value="Yiminghe">yiminghe</Select.Option>
        </Select.OptGroup>
      </FRCSelect>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>custom menu item - search select - multiple</h3>

      <FRCSelect
        mode="multiple"
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        allowClear
        showSearch
        maxTagCount={'responsive'}
        removeMenuItemSelectedIcon={true}
        optionLabelProp="label"
      >
        <Select.Option value="jack" label="China">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span role="img" aria-label="China">
              🇨🇳
            </span>
            China (中国)
          </div>
        </Select.Option>
        <Select.Option value="lucy" label="USA">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span role="img" aria-label="USA">
              🇺🇸
            </span>
            USA (美国)
          </div>
        </Select.Option>
      </FRCSelect>
      <FRCSelect
        mode="multiple"
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        allowClear
        showSearch
        maxTagCount={'responsive'}
        removeMenuItemSelectedIcon={true}
        optionLabelProp="label"
        loading
      >
        <Select.Option value="jack" label="China">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span role="img" aria-label="China">
              🇨🇳
            </span>
            China (中国)
          </div>
        </Select.Option>
        <Select.Option value="lucy" label="USA">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span role="img" aria-label="USA">
              🇺🇸
            </span>
            USA (美国)
          </div>
        </Select.Option>
      </FRCSelect>

      <FRCSelect
        mode="multiple"
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        allowClear
        showSearch
        maxTagCount={'responsive'}
        removeMenuItemSelectedIcon={true}
        optionLabelProp="label"
        disabled
      >
        <Select.Option value="jack" label="China">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span role="img" aria-label="China">
              🇨🇳
            </span>
            China (中国)
          </div>
        </Select.Option>
        <Select.Option value="lucy" label="USA">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span role="img" aria-label="USA">
              🇺🇸
            </span>
            USA (美国)
          </div>
        </Select.Option>
      </FRCSelect>

      <FRCSelect
        mode="multiple"
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        allowClear
        showSearch
        maxTagCount={'responsive'}
        removeMenuItemSelectedIcon={true}
        optionLabelProp="label"
        loading
        disabled
      >
        <Select.Option value="jack" label="China">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span role="img" aria-label="China">
              🇨🇳
            </span>
            China (中国)
          </div>
        </Select.Option>
        <Select.Option value="lucy" label="USA">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span role="img" aria-label="USA">
              🇺🇸
            </span>
            USA (美国)
          </div>
        </Select.Option>
      </FRCSelect>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>group - custom - search select - multiple</h3>

      <FRCSelect
        mode="multiple"
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        allowClear
        showSearch
        // maxTagCount={'responsive'}
        removeMenuItemSelectedIcon={true}
        optionLabelProp="label"
        defaultValue={['china','usa','japan','korea']}
      >
        <Select.OptGroup
          label={
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{fontSize: 12}}>Category 01</div>
              <div>
                <Button type="link" style={{color: '#136C5E'}}>
                  Link/More
                </Button>
              </div>
            </div>
          }
        >
          <Select.Option value="china" label="China">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
              }}
            >
              <span role="img" aria-label="China">
                🇨🇳
              </span>
              China (中国)
            </div>
          </Select.Option>
          <Select.Option value="usa" label="USA">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
              }}
            >
              <span role="img" aria-label="USA">
                🇺🇸
              </span>
              USA (美国)
            </div>
          </Select.Option>
        </Select.OptGroup>
        <Select.OptGroup
          label={
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{fontSize: 12}}>Category 02</div>
              <div>
                <Button type="link" style={{color: '#136C5E'}}>
                  Link/More
                </Button>
              </div>
            </div>
          }
        >
          <Select.Option value="japan" label="Japan">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
              }}
            >
              <span role="img" aria-label="Japan">
                🇯🇵
              </span>
              Japan (日本)
            </div>
          </Select.Option>
          <Select.Option value="korea" label="Korea">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
              }}
            >
              <span role="img" aria-label="Korea">
                🇰🇷
              </span>
              Korea (韩国)
            </div>
          </Select.Option>
        </Select.OptGroup>
      </FRCSelect>

      <FRCSelect
        mode="multiple"
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        allowClear
        showSearch
        maxTagCount={'responsive'}
        removeMenuItemSelectedIcon={true}
        optionLabelProp="label"
        defaultValue={['china','usa','japan','korea']}
      >
        <Select.OptGroup
          label={
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{fontSize: 12}}>Category 01</div>
              <div>
                <Button type="link" style={{color: '#136C5E'}}>
                  Link/More
                </Button>
              </div>
            </div>
          }
        >
          <Select.Option value="china" label="China">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
              }}
            >
              <span role="img" aria-label="China">
                🇨🇳
              </span>
              China (中国)
            </div>
          </Select.Option>
          <Select.Option value="usa" label="USA">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
              }}
            >
              <span role="img" aria-label="USA">
                🇺🇸
              </span>
              USA (美国)
            </div>
          </Select.Option>
        </Select.OptGroup>
        <Select.OptGroup
          label={
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{fontSize: 12}}>Category 02</div>
              <div>
                <Button type="link" style={{color: '#136C5E'}}>
                  Link/More
                </Button>
              </div>
            </div>
          }
        >
          <Select.Option value="japan" label="Japan">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
              }}
            >
              <span role="img" aria-label="Japan">
                🇯🇵
              </span>
              Japan (日本)
            </div>
          </Select.Option>
          <Select.Option value="korea" label="Korea">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
              }}
            >
              <span role="img" aria-label="Korea">
                🇰🇷
              </span>
              Korea (韩国)
            </div>
          </Select.Option>
        </Select.OptGroup>
      </FRCSelect>

      <FRCSelect
        mode="multiple"
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        allowClear
        showSearch
        maxTagCount={'responsive'}
        removeMenuItemSelectedIcon={true}
        optionLabelProp="label"
        disabled
      >
        <Select.OptGroup
          label={
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{fontSize: 12}}>Category 01</div>
              <div>
                <Button type="link" style={{color: '#136C5E'}}>
                  Link/More
                </Button>
              </div>
            </div>
          }
        >
          <Select.Option value="china" label="China">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
              }}
            >
              <span role="img" aria-label="China">
                🇨🇳
              </span>
              China (中国)
            </div>
          </Select.Option>
          <Select.Option value="usa" label="USA">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
              }}
            >
              <span role="img" aria-label="USA">
                🇺🇸
              </span>
              USA (美国)
            </div>
          </Select.Option>
        </Select.OptGroup>
        <Select.OptGroup
          label={
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{fontSize: 12}}>Category 02</div>
              <div>
                <Button type="link" style={{color: '#136C5E'}}>
                  Link/More
                </Button>
              </div>
            </div>
          }
        >
          <Select.Option value="japan" label="Japan">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
              }}
            >
              <span role="img" aria-label="Japan">
                🇯🇵
              </span>
              Japan (日本)
            </div>
          </Select.Option>
          <Select.Option value="korea" label="Korea">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
              }}
            >
              <span role="img" aria-label="Korea">
                🇰🇷
              </span>
              Korea (韩国)
            </div>
          </Select.Option>
        </Select.OptGroup>
      </FRCSelect>

      <FRCSelect
        mode="multiple"
        placeholder="Search to Select"
        style={{marginRight: 16, width: 240}}
        allowClear
        showSearch
        maxTagCount={'responsive'}
        removeMenuItemSelectedIcon={true}
        optionLabelProp="label"
        disabled
        loading
      >
        <Select.OptGroup
          label={
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{fontSize: 12}}>Category 01</div>
              <div>
                <Button type="link" style={{color: '#136C5E'}}>
                  Link/More
                </Button>
              </div>
            </div>
          }
        >
          <Select.Option value="china" label="China">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
              }}
            >
              <span role="img" aria-label="China">
                🇨🇳
              </span>
              China (中国)
            </div>
          </Select.Option>
          <Select.Option value="usa" label="USA">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
              }}
            >
              <span role="img" aria-label="USA">
                🇺🇸
              </span>
              USA (美国)
            </div>
          </Select.Option>
        </Select.OptGroup>
        <Select.OptGroup
          label={
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{fontSize: 12}}>Category 02</div>
              <div>
                <Button type="link" style={{color: '#136C5E'}}>
                  Link/More
                </Button>
              </div>
            </div>
          }
        >
          <Select.Option value="japan" label="Japan">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
              }}
            >
              <span role="img" aria-label="Japan">
                🇯🇵
              </span>
              Japan (日本)
            </div>
          </Select.Option>
          <Select.Option value="korea" label="Korea">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
              }}
            >
              <span role="img" aria-label="Korea">
                🇰🇷
              </span>
              Korea (韩国)
            </div>
          </Select.Option>
        </Select.OptGroup>
      </FRCSelect>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />
    </>
  )
}

export default SelectPage
