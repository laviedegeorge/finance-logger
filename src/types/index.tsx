import { ChangeEvent } from "react";

export type textInputAliases = {
  name: string,
  type: string,
  placeholder: string,
  value: any,
  handleChange: (e: ChangeEvent) => void
}

export type log = {
  id: Symbol,
  payment: string,
  toFrom: string,
  details: string,
  amount: string
}


export type loggerReducer = (state: log[], action: {type: string, payLoad: any}) => log[];

export type logStoreType = {logs: log[], dispatch: () => void}
