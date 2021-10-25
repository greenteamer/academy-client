import { getAllExperts, getExpert } from "./helpers";

export type TExpert = Awaited<ReturnType<typeof getExpert>>;
export type TAllExperts = Awaited<ReturnType<typeof getAllExperts>>;
