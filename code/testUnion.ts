type testUnion<A, B = A> = A extends A ? { a: A; b: B } : never;

type testUnionResult = testUnion<"a" | "b" | "c">;
