import { expert } from ".prisma/client";

export const get404 = (condition: boolean) => ({
  notFound: true,
});

type getExpertNameProps = Pick<expert, "first_name" | "last_name">;

export const getExpertFullName = ({
  first_name,
  last_name,
}: getExpertNameProps): string => `${first_name} ${last_name}`;
