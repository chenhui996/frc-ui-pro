// Button.stories.ts|tsx

import React from 'react';
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { ComponentMeta } from '@storybook/react';

import {
    Title,
    Subtitle,
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY,
    Heading,
    Subheading
} from '@storybook/addon-docs';

import Checkbox from './index';

// ----------------------------------------------------------------

// 引用示例代码
const ImportComponent = () => {
    const markdown = `
~~~js
import { Checkbox } from 'frc-ui-pro';
~~~
`

    return <>
        <ReactMarkdown children={markdown} components={{
            code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                    <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        style={tomorrow}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                    />
                ) : (
                    <code className={className} {...props}>
                        {children}
                    </code>
                )
            }
        }} /></>
}

// ----------------------------------------------------------------

const CheckboxGroup = Checkbox.Group

export default {
    title: '数据录入/Checkbox 多选框',
    component: Checkbox,
    parameters: {
        docs: {
            // docs 页面 => 总体布局
            page: () => (
                <>
                    <Title />
                    <Description>多选框。</Description>
                    <ImportComponent />
                    <Subtitle>默认 - 组件展示</Subtitle>
                    <Primary />
                    <Stories title="组件总览" includePrimary={true} />
                    <Heading>API</Heading>
                    <Subheading>属性</Subheading>
                    <Subheading>Checkbox</Subheading>
                    <ArgsTable of={Checkbox} exclude={["blur", 'focus']} />
                    <Subheading>Checkbox Group</Subheading>
                    <ArgsTable of={CheckboxGroup} />
                    <Subheading>方法</Subheading>
                    <Subheading>Checkbox</Subheading>
                    <ArgsTable of={Checkbox} include={["blur", 'focus']} />
                </>
            ),
        },
    },
    // 细分属性 - 分类（用于canvas 页查阅）
    argTypes: {
        blur: {
            table: {
                category: '方法',
            },
        },
        focus: {
            table: {
                category: '方法',
            },
        },
    }
} as ComponentMeta<typeof Checkbox>;

// ----------------------------------------------------------------

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