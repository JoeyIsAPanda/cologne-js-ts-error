import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useListQuery = <T>(): UseQueryResult<T> => {
  const foo = useQuery<T>({});
  const { data } = foo;
  const returnObject = { ...foo, data };
  // returnObject and foo are 100% equivalent.
  // Fix the ts-error without type casting.
  return returnObject;
};
