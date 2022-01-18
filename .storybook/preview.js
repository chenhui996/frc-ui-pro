import React from "react";
import { themes } from '@storybook/theming';
import '../src/styles/index.scss';
import 'antd/dist/antd.css';

export const parameters = {
  docs: {
    theme: themes.dark,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: '#101414',
      },
      {
        name: 'dark',
        value: '#000000',
      },
    ],
    grid: {
      cellSize: 10,
      opacity: 0.5,
      cellAmount: 5,
      offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
    },
  },
}

export const decorators = [
  (Story) => (
    <div className="storybook-demo" style={{ margin: -10 }}>
      <Story />
    </div>
  ),
];