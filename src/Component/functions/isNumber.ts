import { MainState } from "../../App";
import { modelObj } from "./logics";
export const isNumber = (btn: string): boolean => {
  return /[0-9]+/.test(btn);
};

export const addNumber = (obj: MainState, btn: string): MainState => {
  // leading zeros are trimmed
  const temp = Object.assign({}, obj);
  const lastCharacter = obj.formula[obj.formula.length - 1] || "";
  const objPopLast = obj.formula.slice(0, obj.formula.length - 1) || "";

  temp.keyPressed = btn;
  temp.formula =
    obj.afterCal || !obj.formula ? btn
      : obj.leadingZero ? objPopLast + btn
      : obj.formula + btn;
  if (temp.formula.length >= 23) return { ...modelObj, display: "Error" };

  temp.display = btn;
  temp.afterCal = false;
  temp.leadingZero = btn === "0" && (!obj.formula || !isNumber(lastCharacter) || obj.afterCal || temp.leadingZero)
      ? true
      : false;

  return temp;
};
