import { ChangeEvent } from "react";

export type textInputAliases = {
  name: string,
  type: string,
  placeholder: string,
  value: any,
  handleChange: (e: ChangeEvent) => void
}