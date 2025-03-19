import{ useContext } from 'react'
import { UserContext } from '../09-useContext/context/UserContex'

export const useContextUser = () => {
  return useContext( UserContext )
}
