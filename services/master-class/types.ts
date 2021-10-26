import {
  getMasterClass,
  getAllMasterClasses,
  getMCWithRelatedMC,
} from "./helpers";

export type TMasterClasses = Awaited<ReturnType<typeof getAllMasterClasses>>;
export type TMasterClass = Awaited<ReturnType<typeof getMasterClass>>;
export type TMCWithRelatedMC = Awaited<ReturnType<typeof getMCWithRelatedMC>>;
