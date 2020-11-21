import { isEuMember } from 'is-eu-member'

export const getVat = (iso) => {
  if (iso && isEuMember(iso)) {
    return 21
  }
  return 0
}
