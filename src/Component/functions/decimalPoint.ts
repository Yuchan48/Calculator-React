import { MainState } from "../../App";
import { isNumber } from "./isNumber";

export const addDecimalPoint = (obj: MainState): MainState => {
  const lastCharacter = obj.formula[obj.formula.length - 1] || "";
  const temp = Object.assign({}, obj);
  temp.formula =
    !obj.formula || obj.afterCal || !isNumber(lastCharacter)
      ? obj.formula + "0."
      : !obj.decimalPoint
      ? obj.formula + "."
      : obj.formula;
  temp.decimalPoint = true;
  temp.leadingZero = false;
  temp.afterCal = false;

  return temp;
};
