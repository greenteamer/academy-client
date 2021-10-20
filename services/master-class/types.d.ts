import { findFirstMasterClass, getAllMasterClasses } from "./helpers";

export type TMasterClasseses = Awaited<ReturnType<typeof getAllMasterClasses>>;
export type TMasterClass = Awaited<ReturnType<typeof findFirstMasterClass>>;
