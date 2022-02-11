// Button.stories.ts|tsx

import React from 'react';
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ComponentMeta } from '@storybook/react';

import jsonp from 'fetch-jsonp'
import qs from 'qs';

import { PlusOutlined } from '@ant-design/icons';
import { FiSearch, FiAlertCircle } from 'react-icons/fi'

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

import Select from './index';
import Button from '../Button';
import Input from '../Input';

// ----------------------------------------------------------------

// 引用示例代码
const ImportComponent = () => {
    const markdown = `
~~~js
import { Select } from 'frc-ui-pro';

// 按需引入 icon
import { PlusOutlined } from '@ant-design/icons';
import { FiSearch, FiAlertCircle } from 'react-icons/fi'

// 按需引入 - 接口搜索
import jsonp from 'fetch-jsonp';
import qs from 'qs';
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
    title: '数据录入/Select 选择框',
    component: Select,
    parameters: {
        docs: {
            // docs 页面 => 总体布局
            page: () => (
                <>
                    <Title />
                    <Description>下拉选择器。</Description>
                    <ImportComponent />
                    <Stories title="组件总览" includePrimary={true} />

                    <Heading>API</Heading>
                    <Subheading>属性</Subheading>

                    <Subheading>Select</Subheading>
                    <ArgsTable of={Select} exclude={["blur", 'focus']} />

                    <Subheading>Option props</Subheading>
                    <ArgsTable of={Select.Option} exclude={["blur", 'focus']} />

                    <Subheading>OptGroup props</Subheading>
                    <ArgsTable of={Select.OptGroupApi} exclude={["blur", 'focus']} />

                    <Subheading>方法</Subheading>
                    <ArgsTable of={Select} include={["blur", 'focus']} />
                </>
            ),
        },
    },
} as ComponentMeta<typeof Select>;

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

export const Default = (args: any) => <Select {...args} style={{ width: 180 }}>
    <Select.Option value="Zhejiang">Zhejiang</Select.Option>
    <Select.Option value="Jiangsu">Jiangsu</Select.Option>
</Select>;

Default.storyName = '默认 select';

// ----------------------------------------------------------------

export const BaseComponent = () => {

    const { Option } = Select;

    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }


    return (
        <>
            <Select defaultValue="lucy" style={{ width: 180 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: 180 }} disabled>
                <Option value="lucy">Lucy</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: 180 }} loading>
                <Option value="lucy">Lucy</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: 180 }} allowClear>
                <Option value="lucy">Lucy</Option>
            </Select>
        </>
    )
}

BaseComponent.storyName = '基本使用';

// ----------------------------------------------------------------

export const PrefixIconComponent = () => {
    return (
        <>
            <Select
                placeholder="default select"
                style={{ width: 180 }}
                extendSuffixIcon={<FiAlertCircle />}
                prefixIcon={<FiSearch />}
                dropdownClassName="asdasdsadasdas"
            >
                <Select.Option value="jack">Jack</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="jack1">Jack1</Select.Option>
                <Select.Option value="lucy2">Lucy2</Select.Option>
                <Select.Option value="jack3">Jack3</Select.Option>
                <Select.Option value="lucy4">Lucy4</Select.Option>
                <Select.Option value="jack5">Jack5</Select.Option>
                <Select.Option value="lucy6">Lucy6</Select.Option>
                <Select.Option value="jack7">Jack7</Select.Option>
                <Select.Option value="lucy8">Lucy8</Select.Option>
            </Select>
            <Select
                placeholder="default select"
                style={{ width: 180 }}
                extendSuffixIcon={<FiAlertCircle />}
                prefixIcon={<FiSearch />}
                dropdownClassName="asdasdsadasdas"
                loading
            >
                <Select.Option value="jack">Jack</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="jack1">Jack1</Select.Option>
                <Select.Option value="lucy2">Lucy2</Select.Option>
                <Select.Option value="jack3">Jack3</Select.Option>
                <Select.Option value="lucy4">Lucy4</Select.Option>
                <Select.Option value="jack5">Jack5</Select.Option>
                <Select.Option value="lucy6">Lucy6</Select.Option>
                <Select.Option value="jack7">Jack7</Select.Option>
                <Select.Option value="lucy8">Lucy8</Select.Option>
            </Select>
            <Select
                placeholder="default select"
                style={{ width: 180 }}
                extendSuffixIcon={<FiAlertCircle />}
                prefixIcon={<FiSearch />}
                dropdownClassName="asdasdsadasdas"
                disabled
            >
                <Select.Option value="jack">Jack</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="jack1">Jack1</Select.Option>
                <Select.Option value="lucy2">Lucy2</Select.Option>
                <Select.Option value="jack3">Jack3</Select.Option>
                <Select.Option value="lucy4">Lucy4</Select.Option>
                <Select.Option value="jack5">Jack5</Select.Option>
                <Select.Option value="lucy6">Lucy6</Select.Option>
                <Select.Option value="jack7">Jack7</Select.Option>
                <Select.Option value="lucy8">Lucy8</Select.Option>
            </Select>
            <Select
                placeholder="default select"
                style={{ width: 180 }}
                extendSuffixIcon={<FiAlertCircle />}
                prefixIcon={<FiSearch />}
                dropdownClassName="asdasdsadasdas"
                loading
                disabled
            >
                <Select.Option value="jack">Jack</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="jack1">Jack1</Select.Option>
                <Select.Option value="lucy2">Lucy2</Select.Option>
                <Select.Option value="jack3">Jack3</Select.Option>
                <Select.Option value="lucy4">Lucy4</Select.Option>
                <Select.Option value="jack5">Jack5</Select.Option>
                <Select.Option value="lucy6">Lucy6</Select.Option>
                <Select.Option value="jack7">Jack7</Select.Option>
                <Select.Option value="lucy8">Lucy8</Select.Option>
            </Select>
        </>
    )
}

PrefixIconComponent.storyName = '前缀图标 prefix';

// ----------------------------------------------------------------

export const SearchComponent = () => {
    const { Option } = Select;

    function onChange(value: any) {
        console.log(`selected ${value}`);
    }

    function onSearch(val: any) {
        console.log('search:', val);
    }

    return (
        <>
            <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input: any, option: any) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>

            <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                extendSuffixIcon={<FiAlertCircle />}
                prefixIcon={<FiSearch />}
                filterOption={(input: any, option: any) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
        </>
    )
}

SearchComponent.storyName = '带搜索框 search';

// ----------------------------------------------------------------

export const MultipleComponent = () => {
    const { Option } = Select;

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }

    return (
        <>
            <Select
                mode="multiple"
                style={{ width: '180px' }}
                placeholder="Please select"
                onChange={handleChange}
            >
                {children}
            </Select>
            <Select
                mode="multiple"
                allowClear
                style={{ width: '180px' }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
            >
                {children}
            </Select>
            <Select
                mode="multiple"
                allowClear
                style={{ width: '180px' }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
                loading
            >
                {children}
            </Select>
            <br />
            <Select
                mode="multiple"
                disabled
                style={{ width: '180px' }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
            >
                {children}
            </Select>
            <Select
                mode="multiple"
                disabled
                style={{ width: '180px' }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
                loading
            >
                {children}
            </Select>
        </>
    )
}

MultipleComponent.storyName = '多选 select';

// ----------------------------------------------------------------

export const CustomRenderComponent = () => {
    const { Option } = Select;

    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }


    return (
        <>
            <Select
                mode="multiple"
                style={{ width: '180px' }}
                placeholder="select one country"
                defaultValue={['china']}
                onChange={handleChange}
                optionLabelProp="label"
                allowClear
            >
                <Option value="china" label="China">
                    <div>
                        <span role="img" aria-label="China" style={{ marginRight: 6 }}>
                            🇨🇳
                        </span>
                        China (中国)
                    </div>
                </Option>
                <Option value="usa" label="USA">
                    <div>
                        <span role="img" aria-label="USA" style={{ marginRight: 6 }}>
                            🇺🇸
                        </span>
                        USA (美国)
                    </div>
                </Option>
                <Option value="japan" label="Japan">
                    <div>
                        <span role="img" aria-label="Japan" style={{ marginRight: 6 }}>
                            🇯🇵
                        </span>
                        Japan (日本)
                    </div>
                </Option>
                <Option value="korea" label="Korea">
                    <div>
                        <span role="img" aria-label="Korea" style={{ marginRight: 6 }}>
                            🇰🇷
                        </span>
                        Korea (韩国)
                    </div>
                </Option>
            </Select>
        </>
    )
}

CustomRenderComponent.storyName = '定制回填内容';

// ----------------------------------------------------------------

export const SortComponent = () => {
    const { Option } = Select;

    return (
        <>
            <Select
                showSearch
                style={{ width: 180 }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input: any, option: any) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA: any, optionB: any) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
            >
                <Option value="1">Not Identified</Option>
                <Option value="2">Closed</Option>
                <Option value="3">Communicated</Option>
                <Option value="4">Identified</Option>
                <Option value="5">Resolved</Option>
                <Option value="6">Cancelled</Option>
            </Select>
        </>
    )
}

SortComponent.storyName = '带排序的搜索';

// ----------------------------------------------------------------

export const TagComponent = () => {
    const { Option } = Select;

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }

    return (
        <>
            tags select，随意输入的内容（scroll the menu）。
            <br />
            <Select mode="tags" style={{ width: '180px' }} placeholder="Tags Mode" onChange={handleChange}>
                {children}
            </Select>
        </>
    )
}

TagComponent.storyName = '标签模式 tag';

// ----------------------------------------------------------------

export const GroupComponent = () => {
    const { Option, OptGroup } = Select;

    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }

    return (
        <>
            用 OptGroup 进行选项分组。。
            <br />
            <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
                <OptGroup label="Manager">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                </OptGroup>
                <OptGroup label="Engineer">
                    <Option value="Yiminghe">yiminghe</Option>
                </OptGroup>
            </Select>

            {/* -------------------------------------------------------------------------- */}

            <Select
                placeholder="custom to group"
                style={{ marginRight: 16, width: 240 }}
                allowClear
                showSearch
                removeMenuItemSelectedIcon={true}
                optionLabelProp="label"
                defaultValue={['china', 'usa', 'japan', 'korea']}
            >
                <Select.OptGroup
                    label={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ fontSize: 12 }}>Category 01</div>
                            <div>
                                <Button type="link" style={{ color: '#136C5E' }}>
                                    Link/More
                                </Button>
                            </div>
                        </div>
                    }
                >
                    <Select.Option value="china" label="China">
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                paddingLeft: '10px',
                            }}
                        >
                            <span role="img" aria-label="China">
                                🇨🇳
                            </span>
                            China (中国)
                        </div>
                    </Select.Option>
                    <Select.Option value="usa" label="USA">
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                paddingLeft: '10px',
                            }}
                        >
                            <span role="img" aria-label="USA">
                                🇺🇸
                            </span>
                            USA (美国)
                        </div>
                    </Select.Option>
                </Select.OptGroup>
                <Select.OptGroup
                    label={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ fontSize: 12 }}>Category 02</div>
                            <div>
                                <Button type="link" style={{ color: '#136C5E' }}>
                                    Link/More
                                </Button>
                            </div>
                        </div>
                    }
                >
                    <Select.Option value="japan" label="Japan">
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                paddingLeft: '10px',
                            }}
                        >
                            <span role="img" aria-label="Japan">
                                🇯🇵
                            </span>
                            Japan (日本)
                        </div>
                    </Select.Option>
                    <Select.Option value="korea" label="Korea">
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                paddingLeft: '10px',
                            }}
                        >
                            <span role="img" aria-label="Korea">
                                🇰🇷
                            </span>
                            Korea (韩国)
                        </div>
                    </Select.Option>
                </Select.OptGroup>
            </Select>
        </>
    )
}

GroupComponent.storyName = '分组 group';

// ----------------------------------------------------------------

export const LinkageComponent = () => {
    const { Option } = Select;
    const provinceData: any = ['Zhejiang', 'Jiangsu'];
    const cityData: any = {
        Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
        Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
    };

    // ----------------------------------------------------------------

    const [cities, setCities] = React.useState(cityData[provinceData[0]]);
    const [secondCity, setSecondCity] = React.useState(cityData[provinceData[0]][0]);

    const handleProvinceChange = (value: number) => {
        setCities(cityData[value]);
        setSecondCity(cityData[value][0]);
    };

    const onSecondCityChange = (value: any) => {
        setSecondCity(value);
    };

    // ----------------------------------------------------------------

    return (
        <>
            省市联动是典型的例子。
            <br />
            <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
                {provinceData.map((province: any) => (
                    <Option key={province}>{province}</Option>
                ))}
            </Select>
            <Select style={{ width: 120 }} value={secondCity} onChange={onSecondCityChange}>
                {cities.map((city: any) => (
                    <Option key={city}>{city}</Option>
                ))}
            </Select>
        </>
    )
}

LinkageComponent.storyName = '联动';

// ----------------------------------------------------------------

export const ApiSearchComponent = () => {
    const { Option } = Select;

    let timeout: any;
    let currentValue: any;

    function fetch(value: any, callback: any) {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        currentValue = value;

        function fake() {
            const str = qs.stringify({
                code: 'utf-8',
                q: value,
            });
            jsonp(`https://suggest.taobao.com/sug?${str}`)
                .then(response => response.json())
                .then(d => {
                    if (currentValue === value) {
                        const { result } = d;
                        const data: any = [];
                        result.forEach((r: any) => {
                            data.push({
                                value: r[0],
                                text: r[0],
                            });
                        });
                        callback(data);
                    }
                });
        }

        timeout = setTimeout(fake, 300);
    }

    // ----------------------------------------------------------------

    const [data, setData] = React.useState([]);
    const [value, setValue] = React.useState(undefined);

    const handleSearch = (value: any) => {
        if (value) {
            fetch(value, (data: any) => setData(data));
        } else {
            setData([])
        }
    };

    const handleChange = (value: any) => {
        setValue(value);
    };

    const options = data.map((d: any) => <Option key={d.value}>{d.text}</Option>);

    // ----------------------------------------------------------------

    return (
        <>
            搜索和远程数据结合。
            <br />
            <Select
                showSearch
                value={value}
                placeholder={"input search text"}
                style={{ width: 200 }}
                defaultActiveFirstOption={false}
                showArrow={false}
                filterOption={false}
                onSearch={handleSearch}
                onChange={handleChange}
                notFoundContent={null}

            >
                {options}
            </Select>
        </>
    )
}

ApiSearchComponent.storyName = '接口搜索';

// ----------------------------------------------------------------

export const FetchValueComponent = () => {
    const { Option } = Select;

    function handleChange(value: any) {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    }

    // ----------------------------------------------------------------

    return (
        <>
            默认情况下 onChange 里只能拿到 value，如果需要拿到选中的节点文本 label，可以使用 labelInValue 属性。
            <br />
            选中项的 label 会被包装到 value 中传递给 onChange 等函数，此时 value 是一个对象。
            <br />
            <Select
                labelInValue
                defaultValue={{ value: 'lucy' }}
                style={{ width: 180 }}
                onChange={handleChange}
            >
                <Option value="jack">Jack (100)</Option>
                <Option value="lucy">Lucy (101)</Option>
            </Select>
        </>
    )
}

FetchValueComponent.storyName = '获得选项的文本';

// ----------------------------------------------------------------

export const AutoSegmentComponent = () => {
    const { Option } = Select;

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }

    // ----------------------------------------------------------------

    return (
        <>
            试下复制 露西,杰克 并粘贴到输入框里。只在 tags 和 multiple 模式下可用。
            <br />
            <Select mode="tags" style={{ width: '180px' }} onChange={handleChange} tokenSeparators={[',']}>
                {children}
            </Select>
        </>
    )
}

AutoSegmentComponent.storyName = '自动分词';

// ----------------------------------------------------------------

export const ExtendComponent = () => {
    const { Option } = Select;

    let index = 0;

    const [items, setItems] = React.useState(['jack', 'lucy'])
    const [name, setName] = React.useState('')

    const onNameChange = (event: any) => {
        setName(event.target.value)
    };

    const addItem = () => {
        console.log('addItem');
        setItems([...items, name || `New item ${index++}`])
        setName('')
    };

    // ----------------------------------------------------------------

    return (
        <>
            使用 dropdownRender 对下拉菜单进行自由扩展。
            <br />
            <Select
                style={{ width: 240 }}
                placeholder="custom dropdown render"
                dropdownRender={menu => (
                    <div>
                        {menu}
                        <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                            <Input style={{ flex: 'auto' }} value={name} onChange={onNameChange} />
                            <Button
                                type="link"
                                style={{ flex: 'none', marginLeft: '8px', display: 'block', cursor: 'pointer' }}
                                onClick={addItem}
                            >
                                <PlusOutlined /> Add item
                            </Button>
                        </div>
                    </div>
                )}
            >
                {items.map(item => (
                    <Option key={item}>{item}</Option>
                ))}
            </Select>
        </>
    )
}

ExtendComponent.storyName = '扩展菜单';

// ----------------------------------------------------------------

export const CheckedHideComponent = () => {
    const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

    const [selectedItems, setSelectedItems] = React.useState<string[]>([])

    const handleChange = (selectedItems: string[]) => {
        setSelectedItems(selectedItems)
    };

    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

    // ----------------------------------------------------------------

    return (
        <>
            使用 dropdownRender 对下拉菜单进行自由扩展。
            <br />
            <Select
                mode="multiple"
                placeholder="Inserted are removed"
                value={selectedItems}
                onChange={handleChange}
                style={{ width: '100%' }}
                allowClear
            >
                {filteredOptions.map(item => (
                    <Select.Option key={item} value={item}>
                        {item}
                    </Select.Option>
                ))}
            </Select>
        </>
    )
}

CheckedHideComponent.storyName = '隐藏已选择选项';

// ----------------------------------------------------------------

export const CustomTagComponent = () => {
    const options: any = [{ value: 'Gold' }, { value: 'Lime' }, { value: 'Green' }, { value: 'Cyan' }];

    function tagRender(props: any) {
        const { label, value } = props;
        const onPreventMouseDown = (event: any) => {
            event.preventDefault();
            event.stopPropagation();
        };
        return (
            <div
                onMouseDown={onPreventMouseDown}
                style={{
                    fontSize: 12,
                    marginRight: 3,
                    borderRadius: 2,
                    lineHeight: '14px',
                    padding: '0 4px',
                    backgroundColor: '#333',
                    border: `1px solid ${value.toLowerCase()}`,
                    color: value.toLowerCase(),
                }}
            >
                {label}
            </div>
        );
    }

    // ----------------------------------------------------------------

    return (
        <>
            允许自定义选择标签的样式。
            <br />
            <Select
                mode="multiple"
                showArrow
                allowClear
                tagRender={tagRender}
                defaultValue={['Gold', 'Cyan']}
                style={{ width: '100%' }}
                options={options}
            />
        </>
    )
}

CustomTagComponent.storyName = '自定义选择标签';

// ----------------------------------------------------------------

export const MaxTagCountComponent = () => {
    interface ItemProps {
        label: string;
        value: string;
    }

    const options: ItemProps[] = [];

    for (let i = 10; i < 36; i++) {
        const value = i.toString(36) + i;
        options.push({
            label: `Long Label: ${value}`,
            value,
        });
    }

    // ----------------------------------------------------------------

    const [value, setValue] = React.useState(['a10', 'c12', 'h17', 'j19', 'k20']);

    const selectProps = {
        mode: 'multiple' as const,
        style: { width: '240px' },
        value,
        options,
        onChange: (newValue: string[]) => {
            setValue(newValue);
        },
        placeholder: 'Select Item...',
        maxTagCount: 'responsive' as const,
        allowClear: true,
    };

    // ----------------------------------------------------------------

    return (
        <>
            多选下通过响应式布局让选项自动收缩。该功能对性能有所消耗，不推荐在大表单场景下使用。
            <br />
            <Select {...selectProps} />
            <Select {...selectProps} disabled />
        </>
    )
}

MaxTagCountComponent.storyName = '响应式 maxTagCount';

// ----------------------------------------------------------------

export const RemoveMenuItemSelectedIconComponent = () => {

    // ----------------------------------------------------------------

    return (
        <>
            选中 Item 时，是否隐藏右侧图标（removeMenuItemSelectedIcon）
            <br />

            <Select
                mode="multiple"
                placeholder="Search to Select"
                style={{ marginRight: 16, width: 240 }}
                allowClear
                showSearch
                maxTagCount={'responsive'}
                prefixIcon={<FiSearch />}
                removeMenuItemSelectedIcon={true}
            >
                <Select.Option value="jack">
                    Jack12312312312312312312312312
                </Select.Option>
                <Select.Option value="lucy">Lucy123</Select.Option>
                <Select.Option value="jack1">Jack13241241234131</Select.Option>
                <Select.Option value="lucy2">
                    Jack12312312312312312312312312
                </Select.Option>
                <Select.Option value="jack3">Jack3dasdas</Select.Option>
                <Select.Option value="lucy4">Lucy4xzc</Select.Option>
                <Select.Option value="jack5">Jack5</Select.Option>
                <Select.Option value="lucy6">Lucy6zxqeq</Select.Option>
                <Select.Option value="jack7">Jack7</Select.Option>
                <Select.Option value="lucy8">Lucy82312</Select.Option>
            </Select>
        </>
    )
}

RemoveMenuItemSelectedIconComponent.storyName = '选中隐藏右侧图标';