type BEM<
  Block extends string,
  ElementArr extends string[],
  ModifierArr extends string[]
> = `${Block}__${ElementArr[number]}--${ModifierArr[number]}`;

type bemResult = BEM<"cms", ["form", "table"], ["normal", "loading"]>;
