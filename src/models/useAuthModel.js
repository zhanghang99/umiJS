/*
 * @Author: porter_zhang
 * @Date: 2021-03-31 09:56:50
 * @LastEditTime: 2021-03-31 10:29:11
 */
import { useState, useCallback } from 'react';

export default function useAuthModel() {
  const [user, setUser] = useState(null);

  const signin = useCallback((account) => {
    setUser(account);
  }, []);

  const signout = useCallback((account) => {
    setUser(account);
  }, []);

  return {
    user,
    signin,
    signout,
  };
}
