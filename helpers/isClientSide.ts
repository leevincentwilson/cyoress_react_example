export const isClientSide = (): boolean =>{
  return !!(typeof window !== "undefined" && window?.location?.origin)
}