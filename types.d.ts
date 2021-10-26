type Awaited<T> = T extends PromiseLike<infer U> ? U : T;

type ModelNameUnion = "expert" | "mclass";
