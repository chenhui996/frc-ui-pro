import { ComponentMeta } from '@storybook/react';
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

import {
    Title,
    Subtitle,
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY,
} from '@storybook/addon-docs';

import Error from './index';

const ImportComponent = () => {
    const markdown = `
~~~js
import { Error } from 'frc-ui-pro';
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

export default {
    title: '通用/Error 错误弹窗',
    component: Error,
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Description >错误弹窗。</Description>
                    <ImportComponent />
                    <Subtitle>组件展示</Subtitle>
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories title={"组件总览"} includePrimary={false} />
                </>
            ),
        },
    },
} as ComponentMeta<typeof Error>;

export const Default = (args: any) => (
    <div style={{ width: "100%", height: 500, overflow: "hidden" }}>
        <Error {...args} />
        <div style={{ width: "100%", height: 500, background: '#136c5e' }}>
            123
        </div>
    </div>
);

Default.storyName = '默认 Error';