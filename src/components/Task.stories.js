import React from "react";
// import { action } from "@storybook/addon-actions";
import mdx from './Task2.mdx'

import Task from "./Task";
export const argTypes = {
  name: {
    name: "name",
    type: { name: "number", required: false },
    defaultValue: "Hello",
    description: "demo description",
    table: {
      category: "General",
    },
    control: {
      type: "text",
    },
  },
  variant: {
    name: "variant",
    options: ["primary", "secondary"],
    control: {
      type: "radio",
      labels: { primary: 1, secondary: 2 },
    },
    table: {
      category: "Colors",
    },
  },
  onArchiveTask: { action: "clicked" },
};
const obj = {
  component: Task,
  title: "Task",
  excludeStories: ["argTypes"],
  argTypes,
  parameters: {
    docs: {
        page: mdx,
        // description: {
        //   component: 'Some component _markdown_',
        // },
    },
},
};
export default obj;

const getTemplate = () => (args, k) => <Task {...args} />;

export const Default = getTemplate();
Default.args = {
  name: "123",
  color: "#aaa",
  task: {
    id: "3",
    title: "Test Task1",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
  variant: { a: 123 },
};
Default.parameters = {
  actions: { argTypesRegex: /onPinTask/ },
  // previewTabs: { "storybook/docs/panel": { index: -1 } },
  docs: {
    source: {
      type: "code",
    },
  },
};
Default.decorators = [
  (Story, args) => {
    console.log({ args });
    return <div style={{ margin: "3em" }}>{Story()}</div>;
  },
];
export const Pinned = getTemplate();
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = getTemplate();
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
