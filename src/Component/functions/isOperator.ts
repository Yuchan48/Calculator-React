import { MainState } from "../../App";
import { isNumber } from "./isNumber";

export const isOperator = (btn: string): boolean => {
  return /[+*/-]+/.test(btn);
};

export const addOperator = (obj: MainState, btn: string): MainState => {
  // if consecutive operators except for minus operator, the last one will be taken. -- will be +.
  const temp = Object.assign({}, obj);
  const lastCharacter = obj.formula[obj.formula.length - 1] || "";

  const objPopLast = obj.formula.slice(0, obj.formula.length - 1) || "";
  const secondLast = obj.formula[obj.formula.length - 2] || "";

  temp.formula =
    temp.leadingZero || (!isNumber(lastCharacter) && btn !== "-") || (/[*/]+/.test(lastCharacter) && btn !== "-") ? objPopLast + btn
      : lastCharacter === "-" && btn === "-" && !isOperator(secondLast) ? objPopLast + "+"
      : lastCharacter === "-" && btn === "-" ? objPopLast
      : obj.formula + btn;

  temp.afterCal = false;
  temp.leadingZero = false;
  temp.decimalPoint = false;
  return temp;
};
