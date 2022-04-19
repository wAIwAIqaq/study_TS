type FibonacciLoop<
  PreArr extends unknown[],
  CurrentArr extends unknown[],
  IndexArr extends unknown[],
  Num extends number = 1
> = IndexArr["length"] extends Num
  ? CurrentArr["length"]
  : FibonacciLoop<
      CurrentArr,
      [...PreArr, ...CurrentArr],
      [...IndexArr, unknown],
      Num
    >;
type Fibonacci<Num extends number> = FibonacciLoop<[1], [], [], Num>;
type FibonacciResult = Fibonacci<10>;
