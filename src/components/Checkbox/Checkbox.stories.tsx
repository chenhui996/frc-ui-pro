// Button.stories.ts|tsx

import React, { useState } from 'react';

import { ComponentMeta } from '@storybook/react';

import Checkbox from './index';

export default {
    title: 'tsx/Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Default = () => <Checkbox>Checkbox</Checkbox>;
Default.storyName = '默认 Checkbox';

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