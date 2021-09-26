import { MainState } from "../../App";
import { isNumber, addNumber } from "./isNumber";
import { isOperator, addOperator } from "./isOperator";
import { calculate } from "./calculate";
import { addDecimalPoint } from "./decimalPoint";

export const modelObj: MainState = {
  keyPressed: "0",
  formula: "",
  display: "0", // display only numbers
  afterCal: false,
  leadingZero: false,
  decimalPoint: false,
};

export const logics = (obj: MainState, btn: string): MainState => {
  if (btn === "AC") {
    return modelObj;
  }

  if (btn === ".") {
    return addDecimalPoint(obj);
  }

  if (isNumber(btn)) {
    return addNumber(obj, btn);
  }

  if (isOperator(btn)) {
    if (!obj.formula && btn !== "-") return modelObj;

    return addOperator(obj, btn);
  }

  if (btn === "=") {
    if (!obj.formula) return modelObj;

    return calculate(obj);
  }

  return obj;
};
