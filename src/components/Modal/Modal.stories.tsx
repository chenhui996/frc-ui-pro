import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { ComponentMeta } from '@storybook/react';

import { ExclamationCircleOutlined } from '@ant-design/icons';

import Draggable from 'react-draggable';

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

import Modal from './index';

import Button from '../Button'


// ----------------------------------------------------------------

// 引用示例代码
const ImportComponent = () => {
    const markdown = `
~~~js
import { Modal } from 'frc-ui-pro';

// 按需引入 icon
import { ExclamationCircleOutlined } from '@ant-design/icons';
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

const Confirm = Modal.confirm

export default {
    title: '反馈/Modal 对话框',
    component: Modal,
    parameters: {
        docs: {
            // docs 页面 => 总体布局
            page: () => (
                <>
                    <Title />
                    <Description>模态对话框。</Description>
                    <ImportComponent />
                    <Subtitle>默认 - 组件展示</Subtitle>
                    {/* <Primary /> */}
                    <Stories title="组件总览" includePrimary={true} />

                    <Heading>API</Heading>
                    <Subheading>属性</Subheading>

                    <Subheading>Modal</Subheading>
                    <ArgsTable of={Modal} />

                    <Subheading>Modal.method()</Subheading>
                    <Description>包括：Modal.info、Modal.success、Modal.error、Modal.warning、Modal.confirm</Description>
                    <Description>以上均为一个函数，参数为 object，具体属性如下：</Description>
                    <ArgsTable of={Confirm} />
                </>
            ),
        },
    },
    // 细分属性 - 分类（用于canvas 页查阅）
} as ComponentMeta<typeof Modal>;

// ----------------------------------------------------------------

export const Default = (args: any) => <Modal {...args} />;

Default.storyName = '默认 modal';

// ----------------------------------------------------------------

export const DefaultComponent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // ------------------------------------------------------------

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>

            <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

DefaultComponent.storyName = '默认交互';

// ----------------------------------------------------------------

export const AsyncCloseComponent = () => {
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal with async logic
            </Button>
            <Modal
                title="Title"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>
        </>
    );
};

AsyncCloseComponent.storyName = '异步关闭';

// ----------------------------------------------------------------

export const CustomFooterComponent = () => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setVisible(false);
            setLoading(false);
        }, 3000);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    // ------------------------------------------------------------

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal with customized footer
            </Button>
            <Modal
                visible={visible}
                title="Title"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                        Submit
                    </Button>,
                    <Button
                        key="link"
                        href="https://google.com"
                        type="primary"
                        loading={loading}
                        onClick={handleOk}
                    >
                        Search on Google
                    </Button>,
                ]}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

CustomFooterComponent.storyName = '自定义页脚 footer';

// ----------------------------------------------------------------

export const ConfirmComponent = () => {
    const { confirm } = Modal;

    function showConfirm() {
        confirm({
            title: 'Do you Want to delete these items?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    function showPromiseConfirm() {
        confirm({
            title: 'Do you want to delete these items?',
            icon: <ExclamationCircleOutlined />,
            content: 'When clicked the OK button, this dialog will be closed after 1 second',
            onOk() {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() { },
        });
    }

    function showDeleteConfirm() {
        confirm({
            title: 'Are you sure delete this task?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    function showPropsConfirm() {
        confirm({
            title: 'Are you sure delete this task?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            okButtonProps: {
                disabled: true,
            },
            cancelText: 'No',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    // ------------------------------------------------------------

    return (
        <>
            使用 confirm() 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭。
            <br />
            <Button onClick={showConfirm}>Confirm</Button>
            <Button onClick={showPromiseConfirm}>With promise</Button>
            <Button onClick={showDeleteConfirm} type="gray">
                Delete
            </Button>
            <Button onClick={showPropsConfirm} type="lead">
                With extra props
            </Button>
        </>
    );
};

ConfirmComponent.storyName = '确认对话框 confirm';

// ----------------------------------------------------------------

export const MethodsComponent = () => {
    function info() {
        Modal.info({
            title: 'This is a notification message',
            content: (
                <div>
                    <p>some messages...some messages...</p>
                    <p>some messages...some messages...</p>
                </div>
            ),
            onOk() { },
        });
    }

    function success() {
        Modal.success({
            content: 'some messages...some messages...',
        });
    }

    function error() {
        Modal.error({
            title: 'This is an error message',
            content: 'some messages...some messages...',
        });
    }

    function warning() {
        Modal.warning({
            title: 'This is a warning message',
            content: 'some messages...some messages...',
        });
    }

    // ------------------------------------------------------------

    return (
        <>
            各种类型的信息提示，只提供一个按钮用于关闭。
            <br />
            <Button onClick={info}>Info</Button>
            <Button onClick={success}>Success</Button>
            <Button onClick={error}>Error</Button>
            <Button onClick={warning}>Warning</Button>
        </>
    );
};

MethodsComponent.storyName = '信息提示 method';

// ----------------------------------------------------------------

export const PositionComponent = () => {
    const [modalOneVisible, setModalOneVisible] = useState(false);
    const [modalTwoVisible, setModalTwoVisible] = useState(false);

    const setOne = () => {
        setModalOneVisible(false);
    }

    const setTwo = () => {
        setModalTwoVisible(false)
    }

    // ------------------------------------------------------------

    return (
        <>
            使用 centered 或类似 style.top 的样式来设置对话框位置。
            <br />
            <Button type="primary" onClick={() => setModalOneVisible(true)}>
                Display a modal dialog at 20px to Top
            </Button>
            <Modal
                title="20px to Top"
                style={{ top: 20 }}
                visible={modalOneVisible}
                onOk={setOne}
                onCancel={setOne}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
            <br />
            <Button type="primary" onClick={() => setModalTwoVisible(true)}>
                Vertically centered modal dialog
            </Button>
            <Modal
                title="Vertically centered modal dialog"
                centered
                visible={modalTwoVisible}
                onOk={setTwo}
                onCancel={setTwo}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </>
    );
};

PositionComponent.storyName = '自定义位置';

// ----------------------------------------------------------------

export const DestroyAllComponent = () => {
    function destroyAll() {
        Modal.destroyAll();
    }

    const { confirm } = Modal;

    function showConfirm() {
        for (let i = 0; i < 3; i += 1) {
            setTimeout(() => {
                confirm({
                    icon: <ExclamationCircleOutlined />,
                    content: <Button onClick={destroyAll}>Click to destroy all</Button>,
                    onOk() {
                        console.log('OK');
                    },
                    onCancel() {
                        console.log('Cancel');
                    },
                });
            }, i * 500);
        }
    }

    // ------------------------------------------------------------

    return (
        <>
            使用 Modal.destroyAll() 可以销毁弹出的确认窗。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题。
            <br />
            <Button onClick={showConfirm}>Confirm</Button>
        </>
    );
};

DestroyAllComponent.storyName = '销毁确认对话框';

// ----------------------------------------------------------------

export const CustomPropsComponent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // ------------------------------------------------------------

    return (
        <>
            传入 okFrcButtonProps 和 cancelFrcButtonProps 可分别自定义确定按钮和取消按钮的 props。
            (confirm 为 okButtonProps 和 cancelButtonProps )
            <br />
            <Button type="primary" onClick={showModal}>
                Open Modal with customized button props
            </Button>

            <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okFrcButtonProps={{ disabled: true }}
                cancelFrcButtonProps={{ disabled: true }}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

CustomPropsComponent.storyName = '自定义页脚按钮属性';

// ----------------------------------------------------------------

export const DragComponent = () => {
    const [visible, setVisible] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });

    const draggleRef = React.createRef<any>();

    const showModal = () => {
        setVisible(true)
    };

    const handleOk = (e: any) => {
        console.log(e);
        setVisible(false)
    };

    const handleCancel = (e: any) => {
        console.log(e);
        setVisible(false)
    };

    const onStart = (event: any, uiData: any) => {
        const { clientWidth, clientHeight } = window.document.documentElement;
        const targetRect = draggleRef.current?.getBoundingClientRect();
        if (!targetRect) {
            return;
        }
        setBounds(
            {
                left: -targetRect.left + uiData.x,
                right: clientWidth - (targetRect.right - uiData.x),
                top: -targetRect.top + uiData.y,
                bottom: clientHeight - (targetRect.bottom - uiData.y),
            }
        )
    };

    // ------------------------------------------------------------

    return (
        <>
            自定义渲染对话框, 可通过 react-draggable 来实现拖拽。
            ($npm i react-draggable)
            <br />
            <Button onClick={showModal}>Open Draggable Modal</Button>
            <Modal
                title={
                    <div
                        style={{
                            width: '100%',
                            cursor: 'move',
                        }}
                        onMouseOver={() => {
                            if (disabled) {
                                setDisabled(false)
                            }
                        }}
                        onMouseOut={() => {
                            setDisabled(true)
                        }}
                        // fix eslintjsx-a11y/mouse-events-have-key-events
                        // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
                        onFocus={() => { }}
                        onBlur={() => { }}
                    // end
                    >
                        Draggable Modal
                    </div>
                }
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                modalRender={modal => (
                    <Draggable
                        disabled={disabled}
                        bounds={bounds}
                        onStart={(event, uiData) => onStart(event, uiData)}
                    >
                        <div ref={draggleRef}>{modal}</div>
                    </Draggable>
                )}
            >
                <p>
                    Just don&apos;t learn physics at school and your life will be full of magic and
                    miracles.
                </p>
                <br />
                <p>Day before yesterday I saw a rabbit, and yesterday a deer, and today, you.</p>
            </Modal>
        </>
    );
};

DragComponent.storyName = '自定义渲染对话框';

// ----------------------------------------------------------------