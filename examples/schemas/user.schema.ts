import { JSONSchemaType } from "ajv";

interface User {
  name: string;
  email: string;
  password: string;
}

export const userSchema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 1, maxLength: 255 },
    email: { type: "string", format: "email" },
    password: { type: "string", minLength: 8, maxLength: 255 },
  },
  required: ["name", "email", "password"],
  additionalProperties: false,
};