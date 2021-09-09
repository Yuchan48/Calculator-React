import { MainState } from "../../App";
import { isNumber, addNumber } from "./isNumber";
import { isOperator, addOperator } from "./isOperator";

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
    // if the number start with period, add 0 in the front. Double periods are not accepted.
    const lastCharacter = obj.formula[obj.formula.length - 1] || "";
    const temp = Object.assign({}, obj);
    temp.formula =
        !obj.formula || obj.afterCal || !isNumber(lastCharacter) ? obj.formula + "0."
        : !obj.decimalPoint ? obj.formula + btn
        : obj.formula;
    temp.decimalPoint = true;
    temp.leadingZero = false;
    temp.afterCal = false;

    return temp;
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

    return { ...modelObj, display: str, formula: str, afterCal: true,};
  }

  return obj;
};
