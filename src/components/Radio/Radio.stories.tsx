import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { FiSearch } from 'react-icons/fi'
import { MenuFoldOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

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

import Radio from './index';

// ----------------------------------------------------------------

// 引用示例代码
const ImportComponent = () => {
    const markdown = `
~~~js
import { Radio } from 'frc-ui-pro';
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

const RadioGroup = Radio.Group

export default {
    title: '数据录入/Radio 单选框',
    component: Radio,
    parameters: {
        docs: {
            // docs 页面 => 总体布局
            page: () => (
                <>
                    <Title />
                    <Description>单选框。</Description>
                    <ImportComponent />
                    <Stories title="组件总览" includePrimary={true} />

                    <Heading>API</Heading>
                    <Subheading>属性</Subheading>

                    <Subheading>Radio/Radio.Button</Subheading>
                    <ArgsTable of={Radio} exclude={["blur", 'focus']} />

                    <Subheading>RadioGroup</Subheading>
                    <Description>单选框组合，用于包裹一组 Radio。</Description>
                    <ArgsTable of={RadioGroup} exclude={["blur", 'focus']} />

                    <Subheading>方法</Subheading>
                    <ArgsTable of={Radio} include={["blur", 'focus']} />
                </>
            ),
        },
    },
    // 细分属性 - 分类（用于canvas 页查阅）
} as ComponentMeta<typeof Radio>;

// ----------------------------------------------------------------

export const Default = (args: any) => <Radio {...args}>Radio</Radio>;

Default.storyName = '默认 radio';

// ----------------------------------------------------------------

export const DisabledComponent = () => {
    return (
        <>
            <Radio disabled>Radio</Radio>
            <Radio checked disabled>Radio</Radio>
        </>
    )
};

DisabledComponent.storyName = '禁用 disbled';

// ----------------------------------------------------------------

export const GroupComponent = () => {
    const [value, setValue] = React.useState(1);

    const onChange = (e: any) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <>
            <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
            </Radio.Group>
        </>
    )
};

GroupComponent.storyName = '单选组合 group';

// ----------------------------------------------------------------

export const SolidGroupComponent = () => {
    const [solidGroupValue, setSolidGroupValue] = useState(1)

    const onSolidGroupChange = (e: any) => {
        setSolidGroupValue(e.target.value)
    }

    const [solidGroupValueDisabled, setSolidGroupValueDisabled] = useState(1)

    const onSolidGroupChangeDisabled = (e: any) => {
        setSolidGroupValueDisabled(e.target.value)
    }

    // ----------------------------------------------------------------

    return (
        <>
            <Radio.Group value={solidGroupValue} onChange={onSolidGroupChange} buttonStyle="solid">
                <Radio.Button value={1}>
                    Radio Btn1
                </Radio.Button>
                <Radio.Button value={2}>
                    Radio Btn2
                </Radio.Button>
                <Radio.Button value={3}>
                    Radio Btn3
                </Radio.Button>
                <Radio.Button value={4}>
                    Radio Btn4
                </Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <Radio.Group value={solidGroupValueDisabled} onChange={onSolidGroupChangeDisabled} buttonStyle="solid" disabled>
                <Radio.Button value={1}>
                    Radio Btn1
                </Radio.Button>
                <Radio.Button value={2}>
                    Radio Btn2
                </Radio.Button>
                <Radio.Button value={3}>
                    Radio Btn3
                </Radio.Button>
                <Radio.Button value={4}>
                    Radio Btn4
                </Radio.Button>
            </Radio.Group>
        </>
    )
};

SolidGroupComponent.storyName = '填底的按钮样式';

// ----------------------------------------------------------------