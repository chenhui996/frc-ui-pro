import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { QuestionCircleOutlined, ProfileOutlined } from "@ant-design/icons";

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

import Button from './index';

// ----------------------------------------------------------------

// 引用示例代码
const ImportComponent = () => {
    const markdown = `
~~~js
import { Button } from 'frc-ui-pro';

// 按需引入 icon
import { QuestionCircleOutlined, ProfileOutlined } from "@ant-design/icons";
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

export default {
    title: '通用/Button 按钮',
    component: Button,
    parameters: {
        docs: {
            // docs 页面 => 总体布局
            page: () => (
                <>
                    <Title />
                    <Description>通过鼠标或键盘，输入范围内的数值。</Description>
                    <ImportComponent />
                    <Stories title="组件总览" includePrimary={true} />

                    <Heading>API</Heading>
                    <Subheading>属性</Subheading>

                    <Subheading>Button</Subheading>
                    <ArgsTable of={Button} />
                </>
            ),
        },
    },
    // 细分属性 - 分类（用于canvas 页查阅）
} as ComponentMeta<typeof Button>;

// ----------------------------------------------------------------

export const Default = (args: any) => <Button {...args}>Button</Button>;

Default.storyName = '默认 button';

// ----------------------------------------------------------------

export const BaseComponent = () => {
    return (<>
        <Button type="default">Default Button</Button>
        <Button type="primary">Primary Button</Button>
        <Button type="lead">Lead Button</Button>
        <Button type="gray">Gray Button</Button>
        <Button type="link" href="https://google.com">
            Link Button
        </Button>
        <br />
        <Button type="default" disabled>Default Button</Button>
        <Button type="primary" disabled>Primary Button</Button>
        <Button type="lead" disabled>Lead Button</Button>
        <Button type="gray" disabled>Gray Button</Button>
        <Button type="link" href="https://google.com" disabled>
            Link Button
        </Button>
    </>)
};

BaseComponent.storyName = '基本用法 button';

// ----------------------------------------------------------------

export const ActiveComponent = () => {
    return (<>
        <Button type="default" work>
            Default Button
        </Button>
        <Button type="primary" work>
            Primary Button
        </Button>
        <Button type="primary" work workType="high-light">
            Primary Button
        </Button>
        <Button type="lead" work>
            Lead Button
        </Button>
        <Button type="gray" work>
            Gray Button
        </Button>
        <Button type="link" href="https://google.com" work>
            Link Button
        </Button>
        <br />
        <Button type="default" work disabled>
            Default Button
        </Button>
        <Button type="primary" work disabled>
            Primary Button
        </Button>
        <Button type="primary" work workType="high-light" disabled>
            Primary Button
        </Button>
        <Button type="lead" work disabled>
            Lead Button
        </Button>
        <Button type="gray" work disabled>
            Gray Button
        </Button>
        <Button type="link" href="https://google.com" work disabled>
            Link Button
        </Button>
    </>)
};

ActiveComponent.storyName = '激活状态 button';

// ----------------------------------------------------------------

export const IconComponent = () => {
    return (<>
        <Button type="default" icon={<QuestionCircleOutlined />}>
            Default Button
        </Button>
        <Button type="primary" icon={<QuestionCircleOutlined />}>
            Primary Button
        </Button>
        <Button type="lead" icon={<QuestionCircleOutlined />}>
            Lead Button
        </Button>
        <Button type="gray" icon={<QuestionCircleOutlined />}>
            Gray Button
        </Button>
        <Button
            type="link"
            href="https://google.com"
            icon={<QuestionCircleOutlined />}
        >
            Link Button
        </Button>
        <br />
        <Button type="default" icon={<QuestionCircleOutlined />} work>
            Default Button
        </Button>
        <Button type="primary" icon={<QuestionCircleOutlined />} work>
            Primary Button
        </Button>
        <Button
            type="primary"
            icon={<QuestionCircleOutlined />}
            work
            workType="high-light"
        >
            Primary Button
        </Button>
        <Button type="lead" icon={<QuestionCircleOutlined />} work>
            Lead Button
        </Button>
        <Button type="gray" icon={<QuestionCircleOutlined />} work>
            Gray Button
        </Button>
        <Button
            type="link"
            href="https://google.com"
            icon={<QuestionCircleOutlined />}
            work
        >
            Link Button
        </Button>
    </>)
};

IconComponent.storyName = '图标 button';

// ----------------------------------------------------------------

export const LoadingComponent = () => {
    return (<>
        <Button type="default" loading>
            Default Button
        </Button>
        <Button type="primary" loading>
            Primary Button
        </Button>
        <Button type="lead" loading>
            Lead Button
        </Button>
        <Button type="gray" loading>
            Gray Button
        </Button>
        <Button type="link" href="https://google.com" loading>
            Link Button
        </Button>
        <br />
        <Button type="default" work loading>
            Default Button
        </Button>
        <Button type="primary" work loading>
            Primary Button
        </Button>
        <Button type="primary" work workType="high-light" loading>
            Primary Button
        </Button>
        <Button type="lead" work loading>
            Lead Button
        </Button>
        <Button type="gray" work loading>
            Gray Button
        </Button>
        <Button type="link" href="https://google.com" work loading>
            Link Button
        </Button>
        <br />
        <Button type="default" work disabled loading>
            Default Button
        </Button>
        <Button type="primary" work disabled loading>
            Primary Button
        </Button>
        <Button type="primary" work disabled workType="high-light" loading>
            Primary Button
        </Button>
        <Button type="lead" work disabled loading>
            Lead Button
        </Button>
        <Button type="gray" work disabled loading>
            Gray Button
        </Button>
        <Button type="link" href="https://google.com" work disabled loading>
            Link Button
        </Button>
    </>)
};

LoadingComponent.storyName = '加载中 button';