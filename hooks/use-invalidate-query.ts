import { useQueryClient } from 'react-query'

/**
 * Creates a custom hook to invalidate a React Query cache for a specific query key, triggering a refetch of new data from the API.
 * @param {string} queryKey - The React Query key to be invalidated.
 * @returns {Function} - Function that can be called to invalidate the specified query key.
 */
export const useInvalidateQuery = (queryKey: string) => {
  const queryClient = useQueryClient()

  const invalidateQuery = () => {
    queryClient.invalidateQueries([queryKey])
  }

  return invalidateQuery
}
