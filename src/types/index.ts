import { ChangeEvent } from "react";

export type SelectPropsType = {
  handleSelect : (e: ChangeEvent<HTMLSelectElement>) => void;
  value: string
}