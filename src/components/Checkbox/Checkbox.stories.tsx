// Button.stories.ts|tsx

import React, { useState } from 'react';

import { ComponentMeta } from '@storybook/react';

import Checkbox from './index';

export default {
    title: 'tsx/多选框 Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Default = (args: any) => <Checkbox {...args}>Checkbox</Checkbox>;
Default.storyName = '默认 checkbox';

// ----------------------------------------------------------------

export const ActiveAndDisabled = () => {
    return <>
        <Checkbox>default</Checkbox>
        <Checkbox checked>checked</Checkbox>
        <br />
        <Checkbox disabled>default</Checkbox>
        <Checkbox checked disabled>
            checked
        </Checkbox>
    </>;
}
ActiveAndDisabled.storyName = '激活 | 禁用';

// ----------------------------------------------------------------

export const Group = () => {
    const plainOptions = ["Apple", "Pear", "Orange"];
    const options = [
        { label: "Apple", value: "Apple" },
        { label: "Pear", value: "Pear" },
        { label: "Orange", value: "Orange" },
    ];
    const optionsWithDisabled = [
        { label: "Apple", value: "Apple" },
        { label: "Pear", value: "Pear" },
        { label: "Orange", value: "Orange", disabled: false },
    ];

    return (
        <>
            <Checkbox.Group
                options={plainOptions}
                defaultValue={["Apple"]}
            />
            <br />
            <Checkbox.Group options={options} defaultValue={["Pear"]} />
            <br />
            <Checkbox.Group
                options={optionsWithDisabled}
                disabled
                defaultValue={["Apple"]}
            />
        </>
    )
}

Group.storyName = '复选框组 group';

// ----------------------------------------------------------------

export const Indeterminate = () => {
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const defaultCheckedList = ['Apple', 'Orange'];

    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
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

    return (
        <>
            <Checkbox
                indeterminate={indeterminate}
                onChange={onCheckAllChange}
                checked={checkAll}
            >
                Check all
            </Checkbox>
            <br />
            <Checkbox.Group
                options={plainOptions}
                value={checkedList}
                onChange={onChange}
            />
        </>
    )
}

Indeterminate.storyName = '全选 indeterminate';