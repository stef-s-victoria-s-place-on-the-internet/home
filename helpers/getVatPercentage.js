import { isEuMember } from 'is-eu-member'

export const getVatPercentage = (iso) => {
  if (iso && isEuMember(iso)) {
    return 1.21
  }
  return 1
}
