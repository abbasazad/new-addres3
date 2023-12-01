import common from "../common.mjs";

export default {
  ...common,
  key: "openai-new-fine-tuning-job-created",
  name: "New Fine Tuning Job Created",
  description: "Emit new event when a new fine-tuning job is created in OpenAI. [See the documentation](https://platform.openai.com/docs/api-reference/fine-tuning/list)",
  version: "0.0.3",
  type: "source",
  dedupe: "unique",
  methods: {
    ...common.methods,
    async getData() {
      return this.openai.listFineTuningJobs();
    },
    getMeta(item) {
      return {
        id: item.id,
        summary: `New Fine Tuning Job: ${item.id}`,
        ts: item.created_at * 1000,
      };
    },
  },
};
