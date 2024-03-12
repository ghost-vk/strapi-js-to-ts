import { HasTitle } from "./types";

export type LogCreationArgs = {
  kind: string;
  entity: HasTitle;
};

export function logCreation(args: LogCreationArgs): void {
  strapi.log.info(`${args.kind} created! Details: "${args.entity.title}"`);
}
