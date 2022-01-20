import React, { useState } from 'react'

const useDataDeal = () => {
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const options = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
    ];
    const optionsWithDisabled = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange', disabled: false },
    ];

    // ----------------------------------------------------------------

    const defaultCheckedList = ['Apple', 'Orange'];

    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);

    const onChange = (list: any) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = (e: any) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    // ----------------------------------------------------------------

    return {
        plainOptions,
        options,
        optionsWithDisabled,
        checkedList,
        setCheckedList,
        indeterminate,
        setIndeterminate,
        checkAll,
        setCheckAll,
        onChange,
        onCheckAllChange
    }
}

export default useDataDeal



