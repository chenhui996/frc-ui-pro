import React from 'react'
import {Checkbox, Divider} from 'antd'
import FRCCheckbox from '../components/Checkbox/index'

const CheckboxPage = () => {
  // group checkbox -------------------------------------------------
  function onChange(checkedValues: any) {
    console.log('checked = ', checkedValues)
  }

  const plainOptions = ['Apple', 'Pear', 'Orange']
  const defaultCheckedList = ['Apple', 'Orange']

  // check all checkbox --------------------------------------------
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList)
  const [indeterminate, setIndeterminate] = React.useState(true)
  const [checkAll, setCheckAll] = React.useState(false)

  const onChangeList = (list: any) => {
    setCheckedList(list) // checked list
    setIndeterminate(!!list.length && list.length < plainOptions.length) // boolean
    setCheckAll(list.length === plainOptions.length) // boolean
  }

  const onCheckAllChange = (e: any) => {
    setCheckedList(e.target.checked ? plainOptions : [])
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }

  // ----------------------------------------------------------------

  return (
    <>
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>antd checkbox</h3>

      <Checkbox indeterminate={true} style={{backgroundColor: '#fff'}}>
        Checkbox
      </Checkbox>
      <Checkbox style={{backgroundColor: '#fff'}}>Checkbox</Checkbox>
      <Checkbox style={{backgroundColor: '#fff'}}>Checkbox</Checkbox>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>default checkbox</h3>

      <FRCCheckbox>FRCCheckbox</FRCCheckbox>

      <FRCCheckbox checked>FRCCheckbox</FRCCheckbox>

      <FRCCheckbox disabled>FRCCheckbox</FRCCheckbox>

      <FRCCheckbox checked disabled>
        FRCCheckbox
      </FRCCheckbox>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>group options checkbox</h3>

      <FRCCheckbox.Group
        options={plainOptions}
        defaultValue={['Apple']}
        onChange={onChange}
      />

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>check all checkbox</h3>

      <FRCCheckbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
        disabled
      >
        Check all
      </FRCCheckbox>
      <Divider style={{height: 1, marginTop: 16}} />
      <FRCCheckbox.Group
        options={plainOptions}
        value={checkedList}
        onChange={onChangeList}
      />

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />
    </>
  )
}

export default CheckboxPage
