import { logCreation } from "../../../../custom/functions";

export default {
  afterCreate: ({ result }: { result: { title: string } }) => {
    logCreation({ kind: "Post", entity: result });
  },
};
