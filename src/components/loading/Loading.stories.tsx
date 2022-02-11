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

import Loading from './index';

const ImportComponent = () => {
    const markdown = `
~~~js
import { Loading } from 'frc-ui-pro';
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
    title: '通用/Loading 加载中',
    component: Loading,
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Description>加载中。</Description>
                    <ImportComponent />
                    <Subtitle>组件展示</Subtitle>
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories title={"组件总览"} includePrimary={false} />
                </>
            ),
        },
    },
} as ComponentMeta<typeof Loading>;

export const Default = (args: any) => (
    <div style={{ width: "100%", height: 300, overflow: "hidden" }}>
        <Loading {...args} />
        <div style={{ width: "100%", height: 300, background: '#136c5e' }}>
            123
        </div>
    </div>
);

Default.storyName = '默认 loading';