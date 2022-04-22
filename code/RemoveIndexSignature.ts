type RemoveIndexSignature<Obj extends Record<string, any>> = {
  [Key in keyof Obj as Key extends `${infer Str}` ? Str : never]: Obj[Key];
};

type RemoveIndexSignatureResult = RemoveIndexSignature<{
  [key: string]: any;
  sleep(): void;
}>;
