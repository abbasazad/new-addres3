import kanbanizeApp from "../../kanbanize.app.mjs";

export default {
  key: "kanbanize-edit-task",
  name: "Edit Task",
  description: "Edit Task. [See the docs here](https://kanbanize.com/api)",
  version: "0.0.1",
  type: "action",
  props: {
    kanbanizeApp,
    boardId: {
      propDefinition: [
        kanbanizeApp,
        "boardId",
      ],
    },
    taskId: {
      label: "Task Id",
      description: "The ID of the task to edit.",
      type: "string",
      async options() {
        if (!this.boardId) {
          return [];
        }
        return this.kanbanizeApp.getTasksOpts(this.boardId);
      },
    },
    title: {
      propDefinition: [
        kanbanizeApp,
        "title",
      ],
    },
    description: {
      propDefinition: [
        kanbanizeApp,
        "description",
      ],
    },
    type: {
      propDefinition: [
        kanbanizeApp,
        "type",
        (c) => ({
          boardId: c.boardId,
        }),
      ],
    },
    assignee: {
      propDefinition: [
        kanbanizeApp,
        "assignee",
        (c) => ({
          boardId: c.boardId,
        }),
      ],
    },
    priority: {
      propDefinition: [
        kanbanizeApp,
        "priority",
      ],
    },
    size: {
      propDefinition: [
        kanbanizeApp,
        "size",
      ],
    },
    extLink: {
      propDefinition: [
        kanbanizeApp,
        "extLink",
      ],
    },
    deadline: {
      propDefinition: [
        kanbanizeApp,
        "deadline",
      ],
    },
    color: {
      propDefinition: [
        kanbanizeApp,
        "color",
      ],
    },
    tags: {
      propDefinition: [
        kanbanizeApp,
        "tags",
      ],
    },
  },
  async additionalProps() {
    if (!this.boardId) {
      return {};
    }
    return this.kanbanizeApp.getCustomFieldsProps(this.boardId);
  },
  methods: {
    removeUnusedParams(searchParams) {
      return Object.keys(searchParams).reduce((acc, key) => (
        (searchParams[key] === undefined || searchParams[key] === null) ?
          acc :
          {
            ...acc,
            [key]: searchParams[key],
          }
      ), {});
    },
    async getCustomFieldsParams(boardId) {
      const customFieldsTaskParam = {};
      const customFields = await this.kanbanizeApp.getCustomFields(boardId);
      for (const customField of customFields) {
        customFieldsTaskParam[customField.name] = this[`cf-${customField.fieldid}`];
      }
      return customFieldsTaskParam;
    },
  },
  async run({ $ }) {
    const customFieldsTaskParam = await this.getCustomFieldsParams(this.boardId);
    const taskParam = this.removeUnusedParams({
      ...customFieldsTaskParam,
      boardid: this.boardId,
      taskid: this.taskId,
      title: this.title,
      description: this.description,
      priority: this.priority,
      extlink: this.extLink,
      deadline: this.deadline,
      type: this.type,
      assignee: this.assignee,
      size: this.size,
      tags: this.tags ?
        this.tags.join(" ") :
        null,
      color: this.color ?
        this.color.replace("#", "") :
        null,
    });
    const response = await this.kanbanizeApp.editTask(taskParam);
    if (response === 1) {
      $.export("$summary", `Successfully edited task #${this.taskId}`);
    }
    return response;
  },
};
