// import React from 'react'
// import {Select, Divider} from 'antd'
// import FRCSelect from '../components/Select/index'
// import Button from '../components/Button/index'
// import {FiSearch, FiAlertCircle} from 'react-icons/fi'

// const SelectPage = () => {
//   return (
//     <>
//       <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

//       <h3>antd select</h3>

//       <Select
//         allowClear
//         defaultValue="lucy"
//         style={{marginRight: 16, width: 240}}
//         clearIcon={<FiSearch />}
//         // suffixIcon={<FiSearch />}
//       >
//         <FRCSelect.Option value="jack">Jack</FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy</FRCSelect.Option>
//       </Select>

//       <Select
//         allowClear
//         defaultValue="lucy"
//         style={{marginRight: 16, width: 240}}
//         clearIcon={<FiSearch />}
//         showSearch
//       >
//         <FRCSelect.Option value="jack">Jack</FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy</FRCSelect.Option>
//       </Select>

//       <Select
//         allowClear
//         defaultValue="lucy"
//         style={{marginRight: 16, width: 240}}
//         clearIcon={<FiSearch />}
//         showSearch
//         maxTagCount={'responsive'}
//         mode="multiple"
//         loading
//       >
//         <FRCSelect.Option value="jack">Jack1231231231</FRCSelect.Option>
//         <FRCSelect.Option value="lucy1">Lucyasdasdaxz</FRCSelect.Option>
//         <FRCSelect.Option value="jack2">Jack12312</FRCSelect.Option>
//         <FRCSelect.Option value="lucy3">Lucydsadavc</FRCSelect.Option>
//         <FRCSelect.Option value="jack4">Jackdsad</FRCSelect.Option>
//         <FRCSelect.Option value="lucy5">Lucy213</FRCSelect.Option>
//         <FRCSelect.Option value="jack6">Jack</FRCSelect.Option>
//         <FRCSelect.Option value="lucy7">Lucy</FRCSelect.Option>
//       </Select>

//       <Select
//         mode="multiple"
//         style={{width: 240}}
//         placeholder="select one country"
//         defaultValue={['china']}
//         optionLabelProp="label"
//       >
//         <FRCSelect.Option value="china" label="China">
//           <div className="demo-option-label-item">
//             <span role="img" aria-label="China">
//               🇨🇳
//             </span>
//             China (中国)
//           </div>
//         </FRCSelect.Option>
//         <FRCSelect.Option value="usa" label="USA">
//           <div className="demo-option-label-item">
//             <span role="img" aria-label="USA">
//               🇺🇸
//             </span>
//             USA (美国)
//           </div>
//         </FRCSelect.Option>
//         <FRCSelect.Option value="japan" label="Japan">
//           <div className="demo-option-label-item">
//             <span role="img" aria-label="Japan">
//               🇯🇵
//             </span>
//             Japan (日本)
//           </div>
//         </FRCSelect.Option>
//         <FRCSelect.Option value="korea" label="Korea">
//           <div className="demo-option-label-item">
//             <span role="img" aria-label="Korea">
//               🇰🇷
//             </span>
//             Korea (韩国)
//           </div>
//         </FRCSelect.Option>
//       </Select>

//       <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

//       <h3>default select - single</h3>

//       <FRCSelect
//         placeholder="default select"
//         style={{marginRight: 16, width: 240}}
//         extendSuffixIcon={<FiAlertCircle />}
//         prefixIcon={<FiSearch />}
//         dropdownClassName="asdasdsadasdas"
//       >
//         <FRCSelect.Option value="jack">Jack</FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy</FRCSelect.Option>
//         <FRCSelect.Option value="jack1">Jack1</FRCSelect.Option>
//         <FRCSelect.Option value="lucy2">Lucy2</FRCSelect.Option>
//         <FRCSelect.Option value="jack3">Jack3</FRCSelect.Option>
//         <FRCSelect.Option value="lucy4">Lucy4</FRCSelect.Option>
//         <FRCSelect.Option value="jack5">Jack5</FRCSelect.Option>
//         <FRCSelect.Option value="lucy6">Lucy6</FRCSelect.Option>
//         <FRCSelect.Option value="jack7">Jack7</FRCSelect.Option>
//         <FRCSelect.Option value="lucy8">Lucy8</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         placeholder="allow-clear"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//       >
//         <FRCSelect.Option value="jack">Jack</FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         placeholder="default select"
//         style={{marginRight: 16, width: 240}}
//         extendSuffixIcon={<FiAlertCircle />}
//         prefixIcon={<FiSearch />}
//         dropdownClassName="asdasdsadasdas"
//         loading
//       >
//         <FRCSelect.Option value="jack">Jack</FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy</FRCSelect.Option>
//         <FRCSelect.Option value="jack1">Jack1</FRCSelect.Option>
//         <FRCSelect.Option value="lucy2">Lucy2</FRCSelect.Option>
//         <FRCSelect.Option value="jack3">Jack3</FRCSelect.Option>
//         <FRCSelect.Option value="lucy4">Lucy4</FRCSelect.Option>
//         <FRCSelect.Option value="jack5">Jack5</FRCSelect.Option>
//         <FRCSelect.Option value="lucy6">Lucy6</FRCSelect.Option>
//         <FRCSelect.Option value="jack7">Jack7</FRCSelect.Option>
//         <FRCSelect.Option value="lucy8">Lucy8</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         placeholder="disabled select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         disabled
//       >
//         <FRCSelect.Option value="jack">Jack</FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         placeholder="disabled select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         disabled
//         prefixIcon={<FiSearch />}
//         loading
//       >
//         <FRCSelect.Option value="jack">Jack</FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy</FRCSelect.Option>
//       </FRCSelect>

//       <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

//       <h3>search select - single</h3>

//       <FRCSelect
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         showSearch
//         allowClear
//       >
//         <FRCSelect.Option value="jack">Jack</FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy</FRCSelect.Option>
//         <FRCSelect.Option value="jack1">Jack1</FRCSelect.Option>
//         <FRCSelect.Option value="lucy2">Lucy2</FRCSelect.Option>
//         <FRCSelect.Option value="jack3">Jack3</FRCSelect.Option>
//         <FRCSelect.Option value="lucy4">Lucy4</FRCSelect.Option>
//         <FRCSelect.Option value="jack5">Jack5</FRCSelect.Option>
//         <FRCSelect.Option value="lucy6">Lucy6</FRCSelect.Option>
//         <FRCSelect.Option value="jack7">Jack7</FRCSelect.Option>
//         <FRCSelect.Option value="lucy8">Lucy8</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         showSearch
//         allowClear
//         loading
//       >
//         <FRCSelect.Option value="jack">Jack</FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy</FRCSelect.Option>
//         <FRCSelect.Option value="jack1">Jack1</FRCSelect.Option>
//         <FRCSelect.Option value="lucy2">Lucy2</FRCSelect.Option>
//         <FRCSelect.Option value="jack3">Jack3</FRCSelect.Option>
//         <FRCSelect.Option value="lucy4">Lucy4</FRCSelect.Option>
//         <FRCSelect.Option value="jack5">Jack5</FRCSelect.Option>
//         <FRCSelect.Option value="lucy6">Lucy6</FRCSelect.Option>
//         <FRCSelect.Option value="jack7">Jack7</FRCSelect.Option>
//         <FRCSelect.Option value="lucy8">Lucy8</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         showSearch
//         allowClear
//         disabled
//       >
//         <FRCSelect.Option value="jack">Jack</FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         showSearch
//         allowClear
//         disabled
//         loading
//       >
//         <FRCSelect.Option value="jack">Jack</FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy</FRCSelect.Option>
//       </FRCSelect>

//       <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

//       <h3>prefix - search select - single</h3>

//       <FRCSelect
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         showSearch
//         allowClear
//         prefixIcon={<FiAlertCircle />}
//         extendSuffixIcon={<FiAlertCircle />}
//       >
//         <FRCSelect.Option value="jack">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy</FRCSelect.Option>
//         <FRCSelect.Option value="jack1">Jack1</FRCSelect.Option>
//         <FRCSelect.Option value="lucy2">Lucy2</FRCSelect.Option>
//         <FRCSelect.Option value="jack3">Jack3</FRCSelect.Option>
//         <FRCSelect.Option value="lucy4">Lucy4</FRCSelect.Option>
//         <FRCSelect.Option value="jack5">Jack5</FRCSelect.Option>
//         <FRCSelect.Option value="lucy6">Lucy6</FRCSelect.Option>
//         <FRCSelect.Option value="jack7">Jack7</FRCSelect.Option>
//         <FRCSelect.Option value="lucy8">Lucy8</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         showSearch
//         allowClear
//         prefixIcon={<FiSearch />}
//         extendSuffixIcon={<FiAlertCircle />}
//       >
//         <FRCSelect.Option value="jack">Jack</FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         showSearch
//         allowClear
//         prefixIcon={<FiSearch />}
//         extendSuffixIcon={<FiAlertCircle />}
//         loading
//       >
//         <FRCSelect.Option value="jack">Jack</FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         showSearch
//         allowClear
//         disabled
//         prefixIcon={<FiSearch />}
//       >
//         <FRCSelect.Option value="jack">Jack</FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         showSearch
//         allowClear
//         disabled
//         prefixIcon={<FiSearch />}
//         loading
//       >
//         <FRCSelect.Option value="jack">Jack</FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy</FRCSelect.Option>
//       </FRCSelect>

//       <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

//       <h3>search select - multiple</h3>

//       <FRCSelect
//         mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         showSearch
//       >
//         <FRCSelect.Option value="jack">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy123</FRCSelect.Option>
//         <FRCSelect.Option value="jack1">Jack13241241234131</FRCSelect.Option>
//         <FRCSelect.Option value="lucy2">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="jack3">Jack3dasdas</FRCSelect.Option>
//         <FRCSelect.Option value="lucy4">Lucy4xzc</FRCSelect.Option>
//         <FRCSelect.Option value="jack5">Jack5</FRCSelect.Option>
//         <FRCSelect.Option value="lucy6">Lucy6zxqeq</FRCSelect.Option>
//         <FRCSelect.Option value="jack7">Jack7</FRCSelect.Option>
//         <FRCSelect.Option value="lucy8">Lucy82312</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         showArrow
//         allowClear
//         prefixIcon={<FiSearch />}
//         showSearch
//       >
//         <FRCSelect.Option value="jack">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy123</FRCSelect.Option>
//         <FRCSelect.Option value="jack1">Jack13241241234131</FRCSelect.Option>
//         <FRCSelect.Option value="lucy2">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="jack3">Jack3dasdas</FRCSelect.Option>
//         <FRCSelect.Option value="lucy4">Lucy4xzc</FRCSelect.Option>
//         <FRCSelect.Option value="jack5">Jack5</FRCSelect.Option>
//         <FRCSelect.Option value="lucy6">Lucy6zxqeq</FRCSelect.Option>
//         <FRCSelect.Option value="jack7">Jack7</FRCSelect.Option>
//         <FRCSelect.Option value="lucy8">Lucy82312</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         showArrow
//         allowClear
//         prefixIcon={<FiSearch />}
//         showSearch
//         loading
//       >
//         <FRCSelect.Option value="jack">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy123</FRCSelect.Option>
//         <FRCSelect.Option value="jack1">Jack13241241234131</FRCSelect.Option>
//         <FRCSelect.Option value="lucy2">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="jack3">Jack3dasdas</FRCSelect.Option>
//         <FRCSelect.Option value="lucy4">Lucy4xzc</FRCSelect.Option>
//         <FRCSelect.Option value="jack5">Jack5</FRCSelect.Option>
//         <FRCSelect.Option value="lucy6">Lucy6zxqeq</FRCSelect.Option>
//         <FRCSelect.Option value="jack7">Jack7</FRCSelect.Option>
//         <FRCSelect.Option value="lucy8">Lucy82312</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         showArrow
//         allowClear
//         prefixIcon={<FiSearch />}
//         showSearch
//         disabled
//       >
//         <FRCSelect.Option value="jack">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy123</FRCSelect.Option>
//         <FRCSelect.Option value="jack1">Jack13241241234131</FRCSelect.Option>
//         <FRCSelect.Option value="lucy2">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="jack3">Jack3dasdas</FRCSelect.Option>
//         <FRCSelect.Option value="lucy4">Lucy4xzc</FRCSelect.Option>
//         <FRCSelect.Option value="jack5">Jack5</FRCSelect.Option>
//         <FRCSelect.Option value="lucy6">Lucy6zxqeq</FRCSelect.Option>
//         <FRCSelect.Option value="jack7">Jack7</FRCSelect.Option>
//         <FRCSelect.Option value="lucy8">Lucy82312</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         showArrow
//         allowClear
//         prefixIcon={<FiSearch />}
//         showSearch
//         disabled
//         loading
//       >
//         <FRCSelect.Option value="jack">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy123</FRCSelect.Option>
//         <FRCSelect.Option value="jack1">Jack13241241234131</FRCSelect.Option>
//         <FRCSelect.Option value="lucy2">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="jack3">Jack3dasdas</FRCSelect.Option>
//         <FRCSelect.Option value="lucy4">Lucy4xzc</FRCSelect.Option>
//         <FRCSelect.Option value="jack5">Jack5</FRCSelect.Option>
//         <FRCSelect.Option value="lucy6">Lucy6zxqeq</FRCSelect.Option>
//         <FRCSelect.Option value="jack7">Jack7</FRCSelect.Option>
//         <FRCSelect.Option value="lucy8">Lucy82312</FRCSelect.Option>
//       </FRCSelect>

//       <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

//       <h3>auto '...' search select - multiple</h3>

//       <FRCSelect
//         mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         showSearch
//         maxTagCount={'responsive'}
//       >
//         <FRCSelect.Option value="jack">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy123</FRCSelect.Option>
//         <FRCSelect.Option value="jack1">Jack13241241234131</FRCSelect.Option>
//         <FRCSelect.Option value="lucy2">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="jack3">Jack3dasdas</FRCSelect.Option>
//         <FRCSelect.Option value="lucy4">Lucy4xzc</FRCSelect.Option>
//         <FRCSelect.Option value="jack5">Jack5</FRCSelect.Option>
//         <FRCSelect.Option value="lucy6">Lucy6zxqeq</FRCSelect.Option>
//         <FRCSelect.Option value="jack7">Jack7</FRCSelect.Option>
//         <FRCSelect.Option value="lucy8">Lucy82312</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         showSearch
//         maxTagCount={'responsive'}
//         prefixIcon={<FiSearch />}
//       >
//         <FRCSelect.Option value="jack">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy123</FRCSelect.Option>
//         <FRCSelect.Option value="jack1">Jack13241241234131</FRCSelect.Option>
//         <FRCSelect.Option value="lucy2">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="jack3">Jack3dasdas</FRCSelect.Option>
//         <FRCSelect.Option value="lucy4">Lucy4xzc</FRCSelect.Option>
//         <FRCSelect.Option value="jack5">Jack5</FRCSelect.Option>
//         <FRCSelect.Option value="lucy6">Lucy6zxqeq</FRCSelect.Option>
//         <FRCSelect.Option value="jack7">Jack7</FRCSelect.Option>
//         <FRCSelect.Option value="lucy8">Lucy82312</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         showSearch
//         maxTagCount={'responsive'}
//         prefixIcon={<FiSearch />}
//         loading
//       >
//         <FRCSelect.Option value="jack">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy123</FRCSelect.Option>
//         <FRCSelect.Option value="jack1">Jack13241241234131</FRCSelect.Option>
//         <FRCSelect.Option value="lucy2">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="jack3">Jack3dasdas</FRCSelect.Option>
//         <FRCSelect.Option value="lucy4">Lucy4xzc</FRCSelect.Option>
//         <FRCSelect.Option value="jack5">Jack5</FRCSelect.Option>
//         <FRCSelect.Option value="lucy6">Lucy6zxqeq</FRCSelect.Option>
//         <FRCSelect.Option value="jack7">Jack7</FRCSelect.Option>
//         <FRCSelect.Option value="lucy8">Lucy82312</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         showSearch
//         maxTagCount={'responsive'}
//         disabled
//       >
//         <FRCSelect.Option value="jack">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy123</FRCSelect.Option>
//         <FRCSelect.Option value="jack1">Jack13241241234131</FRCSelect.Option>
//         <FRCSelect.Option value="lucy2">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="jack3">Jack3dasdas</FRCSelect.Option>
//         <FRCSelect.Option value="lucy4">Lucy4xzc</FRCSelect.Option>
//         <FRCSelect.Option value="jack5">Jack5</FRCSelect.Option>
//         <FRCSelect.Option value="lucy6">Lucy6zxqeq</FRCSelect.Option>
//         <FRCSelect.Option value="jack7">Jack7</FRCSelect.Option>
//         <FRCSelect.Option value="lucy8">Lucy82312</FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         showSearch
//         maxTagCount={'responsive'}
//         disabled
//         loading
//       >
//         <FRCSelect.Option value="jack">
//           Jack12312312312312312312312312
//         </FRCSelect.Option>
//         <FRCSelect.Option value="lucy">Lucy123</FRCSelect.Option>
//       </FRCSelect>

//       <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

//       <h3>custom menu item - search select - multiple</h3>

//       <FRCSelect
//         mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         showSearch
//         maxTagCount={'responsive'}
//         removeMenuItemSelectedIcon={true}
//         optionLabelProp="label"
//       >
//         <FRCSelect.Option value="jack" label="China">
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//             }}
//           >
//             <span role="img" aria-label="China">
//               🇨🇳
//             </span>
//             China (中国)
//           </div>
//         </FRCSelect.Option>
//         <FRCSelect.Option value="lucy" label="USA">
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//             }}
//           >
//             <span role="img" aria-label="USA">
//               🇺🇸
//             </span>
//             USA (美国)
//           </div>
//         </FRCSelect.Option>
//       </FRCSelect>
//       <FRCSelect
//         mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         showSearch
//         maxTagCount={'responsive'}
//         removeMenuItemSelectedIcon={true}
//         optionLabelProp="label"
//         loading
//       >
//         <FRCSelect.Option value="jack" label="China">
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//             }}
//           >
//             <span role="img" aria-label="China">
//               🇨🇳
//             </span>
//             China (中国)
//           </div>
//         </FRCSelect.Option>
//         <FRCSelect.Option value="lucy" label="USA">
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//             }}
//           >
//             <span role="img" aria-label="USA">
//               🇺🇸
//             </span>
//             USA (美国)
//           </div>
//         </FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         showSearch
//         maxTagCount={'responsive'}
//         removeMenuItemSelectedIcon={true}
//         optionLabelProp="label"
//         disabled
//       >
//         <FRCSelect.Option value="jack" label="China">
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//             }}
//           >
//             <span role="img" aria-label="China">
//               🇨🇳
//             </span>
//             China (中国)
//           </div>
//         </FRCSelect.Option>
//         <FRCSelect.Option value="lucy" label="USA">
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//             }}
//           >
//             <span role="img" aria-label="USA">
//               🇺🇸
//             </span>
//             USA (美国)
//           </div>
//         </FRCSelect.Option>
//       </FRCSelect>

//       <FRCSelect
//         mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         showSearch
//         maxTagCount={'responsive'}
//         removeMenuItemSelectedIcon={true}
//         optionLabelProp="label"
//         loading
//         disabled
//       >
//         <FRCSelect.Option value="jack" label="China">
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//             }}
//           >
//             <span role="img" aria-label="China">
//               🇨🇳
//             </span>
//             China (中国)
//           </div>
//         </FRCSelect.Option>
//         <FRCSelect.Option value="lucy" label="USA">
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//             }}
//           >
//             <span role="img" aria-label="USA">
//               🇺🇸
//             </span>
//             USA (美国)
//           </div>
//         </FRCSelect.Option>
//       </FRCSelect>

//       <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

//       <h3>group - custom - search select - multiple</h3>

//       <FRCSelect
//         mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         showSearch
//         // maxTagCount={'responsive'}
//         removeMenuItemSelectedIcon={true}
//         optionLabelProp="label"
//         defaultValue={['china', 'usa', 'japan', 'korea']}
//       >
//         <FRCSelect.OptGroup
//           label={
//             <div style={{display: 'flex', justifyContent: 'space-between'}}>
//               <div style={{fontSize: 12}}>Category 01</div>
//               <div>
//                 <Button type="link" style={{color: '#136C5E'}}>
//                   Link/More
//                 </Button>
//               </div>
//             </div>
//           }
//         >
//           <FRCSelect.Option value="china" label="China">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="China">
//                 🇨🇳
//               </span>
//               China (中国)
//             </div>
//           </FRCSelect.Option>
//           <FRCSelect.Option value="usa" label="USA">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="USA">
//                 🇺🇸
//               </span>
//               USA (美国)
//             </div>
//           </FRCSelect.Option>
//         </FRCSelect.OptGroup>
//         <FRCSelect.OptGroup
//           label={
//             <div style={{display: 'flex', justifyContent: 'space-between'}}>
//               <div style={{fontSize: 12}}>Category 02</div>
//               <div>
//                 <Button type="link" style={{color: '#136C5E'}}>
//                   Link/More
//                 </Button>
//               </div>
//             </div>
//           }
//         >
//           <FRCSelect.Option value="japan" label="Japan">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="Japan">
//                 🇯🇵
//               </span>
//               Japan (日本)
//             </div>
//           </FRCSelect.Option>
//           <FRCSelect.Option value="korea" label="Korea">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="Korea">
//                 🇰🇷
//               </span>
//               Korea (韩国)
//             </div>
//           </FRCSelect.Option>
//         </FRCSelect.OptGroup>
//       </FRCSelect>

//       <FRCSelect
//         mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         showSearch
//         maxTagCount={'responsive'}
//         removeMenuItemSelectedIcon={true}
//         optionLabelProp="label"
//         defaultValue={['china', 'usa', 'japan', 'korea']}
//       >
//         <FRCSelect.OptGroup
//           label={
//             <div style={{display: 'flex', justifyContent: 'space-between'}}>
//               <div style={{fontSize: 12}}>Category 01</div>
//               <div>
//                 <Button type="link" style={{color: '#136C5E'}}>
//                   Link/More
//                 </Button>
//               </div>
//             </div>
//           }
//         >
//           <FRCSelect.Option value="china" label="China">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="China">
//                 🇨🇳
//               </span>
//               China (中国)
//             </div>
//           </FRCSelect.Option>
//           <FRCSelect.Option value="usa" label="USA">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="USA">
//                 🇺🇸
//               </span>
//               USA (美国)
//             </div>
//           </FRCSelect.Option>
//         </FRCSelect.OptGroup>
//         <FRCSelect.OptGroup
//           label={
//             <div style={{display: 'flex', justifyContent: 'space-between'}}>
//               <div style={{fontSize: 12}}>Category 02</div>
//               <div>
//                 <Button type="link" style={{color: '#136C5E'}}>
//                   Link/More
//                 </Button>
//               </div>
//             </div>
//           }
//         >
//           <FRCSelect.Option value="japan" label="Japan">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="Japan">
//                 🇯🇵
//               </span>
//               Japan (日本)
//             </div>
//           </FRCSelect.Option>
//           <FRCSelect.Option value="korea" label="Korea">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="Korea">
//                 🇰🇷
//               </span>
//               Korea (韩国)
//             </div>
//           </FRCSelect.Option>
//         </FRCSelect.OptGroup>
//       </FRCSelect>

//       <FRCSelect
//         mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         showSearch
//         maxTagCount={'responsive'}
//         removeMenuItemSelectedIcon={true}
//         optionLabelProp="label"
//         disabled
//       >
//         <FRCSelect.OptGroup
//           label={
//             <div style={{display: 'flex', justifyContent: 'space-between'}}>
//               <div style={{fontSize: 12}}>Category 01</div>
//               <div>
//                 <Button type="link" style={{color: '#136C5E'}}>
//                   Link/More
//                 </Button>
//               </div>
//             </div>
//           }
//         >
//           <FRCSelect.Option value="china" label="China">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="China">
//                 🇨🇳
//               </span>
//               China (中国)
//             </div>
//           </FRCSelect.Option>
//           <FRCSelect.Option value="usa" label="USA">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="USA">
//                 🇺🇸
//               </span>
//               USA (美国)
//             </div>
//           </FRCSelect.Option>
//         </FRCSelect.OptGroup>
//         <FRCSelect.OptGroup
//           label={
//             <div style={{display: 'flex', justifyContent: 'space-between'}}>
//               <div style={{fontSize: 12}}>Category 02</div>
//               <div>
//                 <Button type="link" style={{color: '#136C5E'}}>
//                   Link/More
//                 </Button>
//               </div>
//             </div>
//           }
//         >
//           <FRCSelect.Option value="japan" label="Japan">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="Japan">
//                 🇯🇵
//               </span>
//               Japan (日本)
//             </div>
//           </FRCSelect.Option>
//           <FRCSelect.Option value="korea" label="Korea">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="Korea">
//                 🇰🇷
//               </span>
//               Korea (韩国)
//             </div>
//           </FRCSelect.Option>
//         </FRCSelect.OptGroup>
//       </FRCSelect>

//       <FRCSelect
//         mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         showSearch
//         maxTagCount={'responsive'}
//         removeMenuItemSelectedIcon={true}
//         optionLabelProp="label"
//         disabled
//         loading
//       >
//         <FRCSelect.OptGroup
//           label={
//             <div style={{display: 'flex', justifyContent: 'space-between'}}>
//               <div style={{fontSize: 12}}>Category 01</div>
//               <div>
//                 <Button type="link" style={{color: '#136C5E'}}>
//                   Link/More
//                 </Button>
//               </div>
//             </div>
//           }
//         >
//           <FRCSelect.Option value="china" label="China">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="China">
//                 🇨🇳
//               </span>
//               China (中国)
//             </div>
//           </FRCSelect.Option>
//           <FRCSelect.Option value="usa" label="USA">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="USA">
//                 🇺🇸
//               </span>
//               USA (美国)
//             </div>
//           </FRCSelect.Option>
//         </FRCSelect.OptGroup>
//         <FRCSelect.OptGroup
//           label={
//             <div style={{display: 'flex', justifyContent: 'space-between'}}>
//               <div style={{fontSize: 12}}>Category 02</div>
//               <div>
//                 <Button type="link" style={{color: '#136C5E'}}>
//                   Link/More
//                 </Button>
//               </div>
//             </div>
//           }
//         >
//           <FRCSelect.Option value="japan" label="Japan">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="Japan">
//                 🇯🇵
//               </span>
//               Japan (日本)
//             </div>
//           </FRCSelect.Option>
//           <FRCSelect.Option value="korea" label="Korea">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="Korea">
//                 🇰🇷
//               </span>
//               Korea (韩国)
//             </div>
//           </FRCSelect.Option>
//         </FRCSelect.OptGroup>
//       </FRCSelect>

//       <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

//       <h3>group - custom - search select - single</h3>

//       <FRCSelect
//         // mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         showSearch
//         // maxTagCount={'responsive'}
//         removeMenuItemSelectedIcon={true}
//         optionLabelProp="label"
//         defaultValue={['china', 'usa', 'japan', 'korea']}
//       >
//         <FRCSelect.OptGroup
//           label={
//             <div style={{display: 'flex', justifyContent: 'space-between'}}>
//               <div style={{fontSize: 12}}>Category 01</div>
//               <div>
//                 <Button type="link" style={{color: '#136C5E'}}>
//                   Link/More
//                 </Button>
//               </div>
//             </div>
//           }
//         >
//           <FRCSelect.Option value="china" label="China">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="China">
//                 🇨🇳
//               </span>
//               China (中国)
//             </div>
//           </FRCSelect.Option>
//           <FRCSelect.Option value="usa" label="USA">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="USA">
//                 🇺🇸
//               </span>
//               USA (美国)
//             </div>
//           </FRCSelect.Option>
//         </FRCSelect.OptGroup>
//         <FRCSelect.OptGroup
//           label={
//             <div style={{display: 'flex', justifyContent: 'space-between'}}>
//               <div style={{fontSize: 12}}>Category 02</div>
//               <div>
//                 <Button type="link" style={{color: '#136C5E'}}>
//                   Link/More
//                 </Button>
//               </div>
//             </div>
//           }
//         >
//           <FRCSelect.Option value="japan" label="Japan">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="Japan">
//                 🇯🇵
//               </span>
//               Japan (日本)
//             </div>
//           </FRCSelect.Option>
//           <FRCSelect.Option value="korea" label="Korea">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="Korea">
//                 🇰🇷
//               </span>
//               Korea (韩国)
//             </div>
//           </FRCSelect.Option>
//         </FRCSelect.OptGroup>
//       </FRCSelect>

//       <FRCSelect
//         // mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         showSearch
//         maxTagCount={'responsive'}
//         removeMenuItemSelectedIcon={true}
//         optionLabelProp="label"
//         // defaultValue={['china', 'usa', 'japan', 'korea']}
//       >
//         <FRCSelect.OptGroup
//           label={
//             <div style={{display: 'flex', justifyContent: 'space-between'}}>
//               <div style={{fontSize: 12}}>Category 01</div>
//               <div>
//                 <Button type="link" style={{color: '#136C5E'}}>
//                   Link/More
//                 </Button>
//               </div>
//             </div>
//           }
//         >
//           <FRCSelect.Option value="china" label="China">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="China">
//                 🇨🇳
//               </span>
//               China (中国)
//             </div>
//           </FRCSelect.Option>
//           <FRCSelect.Option value="usa" label="USA">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="USA">
//                 🇺🇸
//               </span>
//               USA (美国)
//             </div>
//           </FRCSelect.Option>
//         </FRCSelect.OptGroup>
//         <FRCSelect.OptGroup
//           label={
//             <div style={{display: 'flex', justifyContent: 'space-between'}}>
//               <div style={{fontSize: 12}}>Category 02</div>
//               <div>
//                 <Button type="link" style={{color: '#136C5E'}}>
//                   Link/More
//                 </Button>
//               </div>
//             </div>
//           }
//         >
//           <FRCSelect.Option value="japan" label="Japan">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="Japan">
//                 🇯🇵
//               </span>
//               Japan (日本)
//             </div>
//           </FRCSelect.Option>
//           <FRCSelect.Option value="korea" label="Korea">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="Korea">
//                 🇰🇷
//               </span>
//               Korea (韩国)
//             </div>
//           </FRCSelect.Option>
//         </FRCSelect.OptGroup>
//       </FRCSelect>

//       <FRCSelect
//         // mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         showSearch
//         maxTagCount={'responsive'}
//         removeMenuItemSelectedIcon={true}
//         optionLabelProp="label"
//         disabled
//       >
//         <FRCSelect.OptGroup
//           label={
//             <div style={{display: 'flex', justifyContent: 'space-between'}}>
//               <div style={{fontSize: 12}}>Category 01</div>
//               <div>
//                 <Button type="link" style={{color: '#136C5E'}}>
//                   Link/More
//                 </Button>
//               </div>
//             </div>
//           }
//         >
//           <FRCSelect.Option value="china" label="China">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="China">
//                 🇨🇳
//               </span>
//               China (中国)
//             </div>
//           </FRCSelect.Option>
//           <FRCSelect.Option value="usa" label="USA">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="USA">
//                 🇺🇸
//               </span>
//               USA (美国)
//             </div>
//           </FRCSelect.Option>
//         </FRCSelect.OptGroup>
//         <FRCSelect.OptGroup
//           label={
//             <div style={{display: 'flex', justifyContent: 'space-between'}}>
//               <div style={{fontSize: 12}}>Category 02</div>
//               <div>
//                 <Button type="link" style={{color: '#136C5E'}}>
//                   Link/More
//                 </Button>
//               </div>
//             </div>
//           }
//         >
//           <FRCSelect.Option value="japan" label="Japan">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="Japan">
//                 🇯🇵
//               </span>
//               Japan (日本)
//             </div>
//           </FRCSelect.Option>
//           <FRCSelect.Option value="korea" label="Korea">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="Korea">
//                 🇰🇷
//               </span>
//               Korea (韩国)
//             </div>
//           </FRCSelect.Option>
//         </FRCSelect.OptGroup>
//       </FRCSelect>

//       <FRCSelect
//         // mode="multiple"
//         placeholder="Search to Select"
//         style={{marginRight: 16, width: 240}}
//         allowClear
//         showSearch
//         maxTagCount={'responsive'}
//         removeMenuItemSelectedIcon={true}
//         optionLabelProp="label"
//         disabled
//         loading
//       >
//         <FRCSelect.OptGroup
//           label={
//             <div style={{display: 'flex', justifyContent: 'space-between'}}>
//               <div style={{fontSize: 12}}>Category 01</div>
//               <div>
//                 <Button type="link" style={{color: '#136C5E'}}>
//                   Link/More
//                 </Button>
//               </div>
//             </div>
//           }
//         >
//           <FRCSelect.Option value="china" label="China">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="China">
//                 🇨🇳
//               </span>
//               China (中国)
//             </div>
//           </FRCSelect.Option>
//           <FRCSelect.Option value="usa" label="USA">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="USA">
//                 🇺🇸
//               </span>
//               USA (美国)
//             </div>
//           </FRCSelect.Option>
//         </FRCSelect.OptGroup>
//         <FRCSelect.OptGroup
//           label={
//             <div style={{display: 'flex', justifyContent: 'space-between'}}>
//               <div style={{fontSize: 12}}>Category 02</div>
//               <div>
//                 <Button type="link" style={{color: '#136C5E'}}>
//                   Link/More
//                 </Button>
//               </div>
//             </div>
//           }
//         >
//           <FRCSelect.Option value="japan" label="Japan">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="Japan">
//                 🇯🇵
//               </span>
//               Japan (日本)
//             </div>
//           </FRCSelect.Option>
//           <FRCSelect.Option value="korea" label="Korea">
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 paddingLeft: '10px',
//               }}
//             >
//               <span role="img" aria-label="Korea">
//                 🇰🇷
//               </span>
//               Korea (韩国)
//             </div>
//           </FRCSelect.Option>
//         </FRCSelect.OptGroup>
//       </FRCSelect>

//       <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />
//     </>
//   )
// }

// export default SelectPage

const normal = () => {
  return <>1213</>
}

export default normal
