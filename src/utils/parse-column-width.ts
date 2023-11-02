import { UiOptions } from "../types/ui-options";

export const parseColumnWidth = (cw: UiOptions) => {
  return isNaN(Number(cw)) ? 12 : Number(cw);
};
