import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import { ComponentMeta } from '@storybook/react';
import moment from 'moment';

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

import TimePicker from './index';
import Button from '../Button'

// ----------------------------------------------------------------

// 引用示例代码
const ImportComponent = () => {
    const markdown = `
~~~js
import { TimePicker } from 'frc-ui-pro';

// 按需引入
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import moment from 'moment';
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

const BASE_PROPERTIES_COLUMNS = [
    'prefixIcon',
    'showTime',
    'allowClear',
    'autoFocus',
    'className',
    'clearIcon',
    'clearText',
    'defaultValue',
    'disabled',
    'disabledHours',
    'disabledMinutes',
    'disabledSeconds',
    'format',
    'getPopupContainer',
    'hideDisabledOptions',
    'hourStep',
    'inputReadOnly',
    'minuteStep',
    'open',
    'placeholder',
    'popupClassName',
    'popupStyle',
    'renderExtraFooter',
    'secondStep',
    'showNow',
    'suffixIcon',
    'use12Hours',
    'value',
    'onChange',
    'onOpenChange',
]

const BASE_RANGE_COLUMNS = [
    'prefixIcon',
    'showTime',
    'order',
]

// ----------------------------------------------------------------

export default {
    title: '数据录入/TimePicker 时间选择框',
    component: TimePicker,
    parameters: {
        docs: {
            // docs 页面 => 总体布局
            page: () => (
                <>
                    <Title />
                    <Description>当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。</Description>
                    <ImportComponent />
                    <Stories title="组件总览" includePrimary={true} />

                    <Heading>API</Heading>
                    <Subheading>属性</Subheading>

                    <Subheading>TimePicker</Subheading>
                    <ArgsTable of={TimePicker} include={BASE_PROPERTIES_COLUMNS} />

                    <Subheading>RangePicker</Subheading>
                    <Description>属性与 DatePicker 的 RangePicker 相同。还包含以下属性：</Description>
                    <ArgsTable of={TimePicker.RangePicker} include={BASE_RANGE_COLUMNS} />

                    <Subheading>方法</Subheading>
                    <ArgsTable of={TimePicker} include={["blur", 'focus']} />
                </>
            ),
        },
    },
    // 细分属性 - 分类（用于canvas 页查阅）
} as ComponentMeta<typeof TimePicker>;

// ----------------------------------------------------------------

export const Default = (args: any) => <TimePicker {...args} />;

Default.storyName = '默认 timePicker';

// ----------------------------------------------------------------

export const FormatComponent = () => {
    const format = 'HH:mm';
    return <>
        <TimePicker defaultValue={moment('12:08', format)} format={format} />
    </>
}

FormatComponent.storyName = '选择时分';

// ----------------------------------------------------------------

export const ExtraFooterComponent = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpenChange = (open: boolean) => {
        setOpen(open);
    };

    const handleClose = () => setOpen(false);

    return <>
        <TimePicker
            open={open}
            onOpenChange={handleOpenChange}
            renderExtraFooter={() => (
                <Button type="primary" onClick={handleClose} style={{ marginTop: 4 }}>
                    OK
                </Button>
            )}
        />
    </>
}

ExtraFooterComponent.storyName = '附加内容';

// ----------------------------------------------------------------

export const TwelveFormatComponent = () => {
    function onChange(time: any, timeString: string) {
        console.log(time, timeString);
    }

    return <>
        12 小时制的时间选择器，默认的 format 为 h:mm:ss a。
        <br />
        <TimePicker use12Hours onChange={onChange} />
        <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} style={{ width: 140 }} />
        <TimePicker use12Hours format="h:mm a" onChange={onChange} />
    </>
}

TwelveFormatComponent.storyName = '12 小时制';

// ----------------------------------------------------------------

export const RangeComponent = () => {
    return <>
        通过 TimePicker.RangePicker 使用时间范围选择器。
        <br />
        <TimePicker.RangePicker />
    </>
}

RangeComponent.storyName = '范围选择器';