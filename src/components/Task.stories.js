import React from "react";
// import { action } from "@storybook/addon-actions";

import Task from "./Task";

const obj = {
  component: Task,
  title: "_Task",
};
export default obj;

const getTemplate = () => (args) => <Task task={{ id: "123" }} {...args} />;

export const Default = getTemplate();
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

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