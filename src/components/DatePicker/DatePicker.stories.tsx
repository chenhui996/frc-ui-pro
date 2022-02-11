import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { DatePicker as TestDate } from 'antd'

import { ComponentMeta } from '@storybook/react';

import moment from 'moment'
import 'moment/locale/zh-cn'
import locale from 'antd/es/date-picker/locale/zh_CN'
import { FiSlack } from 'react-icons/fi'

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

import DatePicker from './index';

const RangePicker = DatePicker.RangePicker

// ----------------------------------------------------------------

// 引用示例代码
const ImportComponent = () => {
    const markdown = `
~~~js
import { DatePicker } from 'frc-ui-pro';
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

// DataPicker 与 RangePicker 通用属性
const BASE_PROPERTIES_COLUMNS = [
    'allowClear',
    'autoFocus',
    'className',
    'dateRender',
    'disabledDate',
    'dropdownClassName',
    'getPopupContainer',
    'inputReadOnly',
    'locale',
    'mode',
    'nextIcon',
    'open',
    'panelRender',
    'picker',
    'placeholder',
    'popupStyle',
    'prevIcon',
    'style',
    'suffixIcon',
    'superNextIcon',
    'superPrevIcon',
    'onOpenChange',
    'onPanelChange',
    'prefixIcon',
]

// DatePicker 组件属性
const DATE_PICKER_PROPERTIES_COLUMNS = [
    'defaultPickerValue',
    'defaultValue',
    'disabled',
    'disabledTime',
    'format',
    'renderExtraFooter',
    'showNow',
    'showTime',
    'showToday',
    'value',
    'onChange',
    'onOk',
    'onPanelChange'
]

// RangePicker 组件属性
const RANGE_PICKER_PROPERTIES_COLUMNS = [
    'allowEmpty',
    'dateRender',
    'defaultPickerValue',
    'defaultValue',
    'disabled',
    'disabledTime',
    'format',
    'ranges',
    'renderExtraFooter',
    'separator',
    'showTime',
    'value',
    'onCalendarChange',
    'onChange'
]

// 通用方法
const COMMON_METHODS_COLUMNS = [
    'blur',
    'focus',
]

// ----------------------------------------------------------------

export default {
    title: '数据录入/DatePicker 日期选择器',
    component: DatePicker,
    parameters: {
        docs: {
            // docs 页面 => 总体布局
            page: () => (
                <>
                    <Title />
                    <Description>输入或选择日期的控件。</Description>
                    <ImportComponent />
                    <Subtitle>默认 - 组件展示</Subtitle>
                    <Primary />
                    <Stories title="组件总览" includePrimary={true} />

                    <Heading>API</Heading>
                    <Subheading>属性</Subheading>

                    <Subheading>共同的 API</Subheading>
                    <Description>以下 API 为 DatePicker、 RangePicker 共享的 API。</Description>
                    <ArgsTable
                        of={DatePicker}
                        include={BASE_PROPERTIES_COLUMNS}
                    />

                    <Subheading>方法</Subheading>
                    <Subheading>共同的方法</Subheading>
                    <ArgsTable of={DatePicker} include={COMMON_METHODS_COLUMNS} />

                    <Subheading>DatePicker</Subheading>
                    <ArgsTable of={DatePicker} include={DATE_PICKER_PROPERTIES_COLUMNS} />

                    <Subheading>RangePicker</Subheading>
                    <ArgsTable of={RangePicker} include={RANGE_PICKER_PROPERTIES_COLUMNS} />
                </>
            ),
        },
    },
    // 细分属性 - 分类（用于canvas 页查阅）
} as ComponentMeta<typeof DatePicker>;

// ----------------------------------------------------------------

export const Default = (args: any) => <DatePicker {...args} />;
Default.storyName = '默认 dataPicker';

// ----------------------------------------------------------------

const dateFormat = 'YYYY/MM/DD'

export const BaseComponent = () => {

    const onChange = (date?: moment.Moment | null, dateString?: string) => {
        console.log(date, dateString);
    }

    return (
        <>
            <DatePicker onChange={onChange} />
            <DatePicker
                onChange={onChange}
                suffixIcon={<FiSlack />}
            />
            <DatePicker
                onChange={onChange}
                defaultValue={moment('2015/01/01', dateFormat)}
                locale={locale}
            />
            <DatePicker
                onChange={onChange}
                disabled
                suffixIcon={<FiSlack />}
            />
            <DatePicker
                onChange={onChange}
                defaultValue={moment('2015/01/01', dateFormat)}
                disabled
                suffixIcon={<FiSlack />}
            />
        </>
    )
}

BaseComponent.storyName = '基本用法 datePicker';

// ----------------------------------------------------------------

export const RangePickerComponent = () => {

    const { RangePicker } = DatePicker;

    return (
        <>
            <RangePicker />
            <RangePicker showTime />
            <RangePicker picker="week" />
            <RangePicker picker="month" />
            <RangePicker picker="year" />
        </>
    )
}

RangePickerComponent.storyName = '范围选择器 rangePicker';

// ----------------------------------------------------------------

export const ShowTimeComponent = () => {

    const { RangePicker } = DatePicker;

    function onChange(value: any, dateString: any) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }

    function onOk(value?: any) {
        console.log('onOk: ');
    }

    return (
        <>
            增加选择时间功能，当 showTime 为一个对象时，其属性会传递给内建的 TimePicker。
            <br />
            <DatePicker showTime onChange={onChange} onOk={onOk} />
            <RangePicker
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
                onChange={onChange}
                onOk={onOk}
            />
        </>
    )
}

ShowTimeComponent.storyName = '日期时间选择 showTime';

// ----------------------------------------------------------------

export const FormatComponent = () => {

    const { RangePicker } = DatePicker;

    const dateFormat = 'YYYY/MM/DD';
    const weekFormat = 'MM/DD';
    const monthFormat = 'YYYY/MM';

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    const customFormat = (value?: any) => `custom format: ${value.format(dateFormat)}`;

    const customWeekStartEndFormat = (value?: any) =>
        `${moment(value).startOf('week').format(weekFormat)} ~ ${moment(value)
            .endOf('week')
            .format(weekFormat)}`;

    return (
        <>
            使用 format 属性，可以自定义日期显示格式。
            <br />
            <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
            <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
            <DatePicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} picker="month" />
            <DatePicker defaultValue={moment()} format={customWeekStartEndFormat} picker="week" />
            <RangePicker
                defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                format={dateFormat}
            />
            <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={customFormat} />
        </>
    )
}

FormatComponent.storyName = '日期格式 format';

// ----------------------------------------------------------------

export const WeekFormatComponent = () => {

    return (
        <>
            <DatePicker
                picker="week"
            />
            <DatePicker
                picker="week"
                suffixIcon={<FiSlack />}
            />
            <DatePicker.RangePicker
                picker="week"
            />
            <DatePicker.RangePicker
                picker="week"
                suffixIcon={<FiSlack />}
            />
            <br />
            <DatePicker
                picker="week"
                disabled
            />
            <DatePicker
                picker="week"
                suffixIcon={<FiSlack />}
                disabled
            />
            <DatePicker.RangePicker
                picker="week"
                disabled
            />
            <DatePicker.RangePicker
                picker="week"
                suffixIcon={<FiSlack />}
                disabled
            />
        </>
    )
}

WeekFormatComponent.storyName = '周选择器';

// ----------------------------------------------------------------

export const MonthFormatComponent = () => {

    return (
        <>
            <DatePicker
                picker="month"
            />
            <DatePicker
                picker="month"
                suffixIcon={<FiSlack />}
            />
            <DatePicker.RangePicker
                picker="month"
            />
            <DatePicker.RangePicker
                picker="month"
                suffixIcon={<FiSlack />}
            />
            <br />
            <DatePicker
                picker="month"
                disabled
            />
            <DatePicker
                picker="month"
                suffixIcon={<FiSlack />}
                disabled
            />
            <DatePicker.RangePicker
                picker="month"
                disabled
            />
            <DatePicker.RangePicker
                picker="month"
                suffixIcon={<FiSlack />}
                disabled
            />
        </>
    )
}

MonthFormatComponent.storyName = '月份选择器';

// ----------------------------------------------------------------

export const QuarterFormatComponent = () => {

    return (
        <>
            <DatePicker
                picker="quarter"
            />
            <DatePicker
                picker="quarter"
                suffixIcon={<FiSlack />}
            />
            <DatePicker.RangePicker
                picker="quarter"
            />
            <DatePicker.RangePicker
                picker="quarter"
                suffixIcon={<FiSlack />}
            />
            <br />
            <DatePicker
                picker="quarter"
                disabled
            />
            <DatePicker
                picker="quarter"
                suffixIcon={<FiSlack />}
                disabled
            />
            <DatePicker.RangePicker
                picker="quarter"
                disabled
            />
            <DatePicker.RangePicker
                picker="quarter"
                suffixIcon={<FiSlack />}
                disabled
            />
        </>
    )
}

QuarterFormatComponent.storyName = '季度选择器';

// ----------------------------------------------------------------

export const YearFormatComponent = () => {

    return (
        <>
            <DatePicker
                picker="year"
            />
            <DatePicker
                picker="year"
                suffixIcon={<FiSlack />}
            />
            <DatePicker.RangePicker
                picker="year"
            />
            <DatePicker.RangePicker
                picker="year"
                suffixIcon={<FiSlack />}
            />
            <br />
            <DatePicker
                picker="year"
                disabled
            />
            <DatePicker
                picker="year"
                suffixIcon={<FiSlack />}
                disabled
            />
            <DatePicker.RangePicker
                picker="year"
                disabled
            />
            <DatePicker.RangePicker
                picker="year"
                suffixIcon={<FiSlack />}
                disabled
            />
        </>
    )
}

YearFormatComponent.storyName = '年份选择器';

// ----------------------------------------------------------------

export const PresetRangesComponent = () => {

    const { RangePicker } = DatePicker;

    function onChange(dates?: any, dateStrings?: any) {
        if (dates && dateStrings) {
            console.log('From: ', dates[0], ', to: ', dates[1]);
            console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
        }
    }

    return (
        <>
            可以预设常用的日期范围以提高用户体验。
            <br />
            <RangePicker
                ranges={{
                    Today: [moment(), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                }}
                onChange={onChange}
            />
            <RangePicker
                ranges={{
                    Today: [moment(), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                }}
                showTime
                format="YYYY/MM/DD HH:mm:ss"
                onChange={onChange}
            />
        </>
    )
}

PresetRangesComponent.storyName = '预设范围 ranges';

// ----------------------------------------------------------------

export const disabledTimeComponent = () => {

    const { RangePicker } = DatePicker;

    function range(start: number, end: number) {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }

    function disabledDate(current: moment.Moment) {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }

    function disabledDateTime() {
        return {
            disabledHours: () => range(0, 24).splice(4, 20),
            disabledMinutes: () => range(30, 60),
            disabledSeconds: () => [55, 56],
        };
    }

    function disabledRangeTime(_: any, type: string) {
        if (type === 'start') {
            return {
                disabledHours: () => range(0, 60).splice(4, 20),
                disabledMinutes: () => range(30, 60),
                disabledSeconds: () => [55, 56],
            };
        }
        return {
            disabledHours: () => range(0, 60).splice(20, 4),
            disabledMinutes: () => range(0, 31),
            disabledSeconds: () => [55, 56],
        };
    }

    return (
        <>
            可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间。
            其中 disabledTime 需要和 showTime 一起使用。
            <br />
            <DatePicker
                format="YYYY-MM-DD HH:mm:ss"
                disabledDate={disabledDate}
                disabledTime={disabledDateTime}
                showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
            />
            <DatePicker picker="month" disabledDate={disabledDate} />
            <RangePicker disabledDate={disabledDate} />
            <RangePicker
                disabledDate={disabledDate}
                disabledTime={disabledRangeTime}
                showTime={{
                    hideDisabledOptions: true,
                    defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
                }}
                format="YYYY-MM-DD HH:mm:ss"
            />
        </>
    )
}

disabledTimeComponent.storyName = '不可选择日期和时间';

// ----------------------------------------------------------------

export const SenvenDayDisabledComponent = () => {

    const [dates, setDates] = useState<any>([]);
    const [hackValue, setHackValue] = useState<any>([]);
    const [value, setValue] = useState<any>();
    const disabledDate = (current: any) => {
        if (!dates || dates.length === 0) {
            return false;
        }
        const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
        const tooEarly = dates[1] as any && dates[1].diff(current, 'days') > 7;
        return tooEarly || tooLate;
    };

    const onOpenChange = (open: boolean) => {
        if (open) {
            setHackValue([]);
            setDates([]);
        } else {
            setHackValue(undefined);
        }
    };

    return (
        <>
            这里举例如何用 onCalendarChange 和 disabledDate 来限制动态的日期区间选择。
            <br />
            <RangePicker
                value={hackValue || value}
                disabledDate={disabledDate}
                onCalendarChange={val => setDates(val)}
                onChange={val => setValue(val)}
                onOpenChange={onOpenChange}
            />
        </>
    )
}

SenvenDayDisabledComponent.storyName = '选择不超过七天的范围';

// ----------------------------------------------------------------

export const ExtraFooterComponent = () => {

    return (
        <>
            在浮层中加入额外的页脚，以满足某些定制信息的需求。
            <br />
            <DatePicker renderExtraFooter={() => 'extra footer'} />
            <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
            <RangePicker renderExtraFooter={() => 'extra footer'} />
            <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
            <DatePicker renderExtraFooter={() => 'extra footer'} picker="month" />
        </>
    )
}

ExtraFooterComponent.storyName = '额外的页脚 extra';

// ----------------------------------------------------------------

export const CustomCellComponent = () => {

    const restCustomDateRender = (current: any) => {
        // if (current.date() === 5) {
        const REST_COLUMNS = ['01/05', '01/06']
        const EXPLAIN_COLUMNS = [
            {
                date: '01/12',
                explain: '3.32',
            },
            {
                date: '01/13',
                explain: '3.33',
            },
            {
                date: '01/14',
                explain: '3.34',
            },
        ]

        const dateArr = EXPLAIN_COLUMNS.map((item) => item.date)

        if (REST_COLUMNS.indexOf(current.format('MM/DD')) !== -1) {
            return (
                <div className="ant-picker-cell-inner">
                    <span style={{ fontWeight: 500 }}>休</span>
                </div>
            )
        } else if (dateArr.indexOf(current.format('MM/DD')) !== -1) {
            const index = dateArr.indexOf(current.format('MM/DD'))
            return (
                <div className="ant-picker-cell-inner">
                    <span
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span style={{ transform: 'translateY(-4px)' }}>
                            {current.date()}
                        </span>
                        <span
                            style={{
                                transform: 'scale(0.5) translateY(-35px)',
                                color: '#F9C152',
                                fontWeight: 500,
                            }}
                        >
                            {EXPLAIN_COLUMNS[index].explain}
                        </span>
                    </span>
                </div>
            )
        } else {
            return <div className="ant-picker-cell-inner">{current.date()}</div>
        }
    }

    return (
        <>
            使用 dateRender 可以自定义日期单元格的内容和样式。
            <br />
            <DatePicker

                renderExtraFooter={() => 'extra footer'}
                dateRender={restCustomDateRender}
            />

            <DatePicker.RangePicker

                renderExtraFooter={() => 'extra footer'}
                dateRender={restCustomDateRender}
            />
        </>
    )
}

CustomCellComponent.storyName = '定制日期单元格 dateRender';