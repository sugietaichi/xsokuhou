import { getAll } from "./server/getAll";
import { getById } from "./server/getById";

export const server = {
  getById,
  getAll,
};

export const client = {
  getById,
};
