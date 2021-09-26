import { MainState } from "../../App";
import { isNumber } from "./isNumber";
import { modelObj } from "./logics";

export const calculate = (obj: MainState): MainState => {
  const lastCharacter = obj.formula[obj.formula.length - 1] || "";
  if (!isNumber(lastCharacter))
    return {
      ...modelObj,
      display: "Error",
    };

  // round to 6 decimal places and trim following zeros
  const decimalPointRegex = /^[+-]?((\d+(\.\d{7,})?)|(\.\d{7,}))$/gm;
  let val = eval(obj.formula);
  let result = decimalPointRegex.test(val)
    ? parseFloat(val.toFixed(6)).toString()
    : val;
  const str = result.toString();
  if (str.length > 13) return { ...modelObj, display: "Error" };
  return { ...modelObj, display: str, formula: str, afterCal: true };
};
