'use client';

import { createContext, useContext } from 'react';

import type { AuthUser } from '@/modules/auth/domain/auth.entity';

interface UserContextType {
  user: AuthUser | null;
}

const UserContext = createContext<UserContextType>({
  user: null,
});

export const UserProvider = ({
  children,
  initialUser,
}: {
  children: React.ReactNode;
  initialUser: AuthUser | null;
}) => {
  return <UserContext.Provider value={{ user: initialUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
