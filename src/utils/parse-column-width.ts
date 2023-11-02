import { UiOptions } from "../types/ui-options";

export const parseColumnWidth = (
  cw: UiOptions,
  co: UiOptions,
  fwc: UiOptions
) => {
  const cWidth = typeof cw !== "number" ? 0 : cw;
  const parsedOffset = typeof co !== "number" ? 0 : co;

  const cOffset = !fwc ? (12 - parsedOffset ? parsedOffset : 12) : 12;
  return {
    cWidth,
    cOffset,
  };
};
