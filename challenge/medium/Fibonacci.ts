type FibonacciLoop1<
  PreArr extends unknown[],
  CurrentArr extends unknown[],
  IndexArr extends unknown[],
  Num extends number = 1
> = IndexArr["length"] extends Num
  ? CurrentArr["length"]
  : FibonacciLoop1<
      CurrentArr,
      [...PreArr, ...CurrentArr],
      [...IndexArr, unknown],
      Num
    >;
type Fibonacci1<Num extends number> = FibonacciLoop1<[1], [], [], Num>;
type Fibonacci1Result = Fibonacci<10>;
