'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { signOut } from '@/modules/auth/infrastructure/auth.client.repository';
import { useUser } from '@/providers/UserProvider';
import { SIDEBAR_OPTIONS } from '@/shared/utils/constants';
import { ROLE_LABELS } from '@/shared/utils/constants/dictionaries';
import { getInitialLetters } from '@/shared/utils/helpers';
import { ChevronDown, ChevronUp, LogOut, Menu, X } from '../Icons';

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openMenuItem, setOpenMenuItem] = useState<string | null>(null);

  const router = useRouter();
  const { user } = useUser();

  const handleSignOut = async () => {
    await signOut();
    router.push('/login');
    router.refresh();
  };

  return (
    <div className='flex h-screen bg-(--color-background) overflow-hidden'>
      <aside
        className={`fixed top-0 left-0 lg:static z-50 flex flex-col justify-between p-5 h-full w-full lg:w-67.5 bg-(--color-background) lg:shadow-[2px_0_8px_rgba(0,0,0,0.08)] transform transition-all duration-300 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className='flex flex-col gap-10'>
          <div className='relative flex items-center justify-center'>
            <div className='flex flex-col gap-4 items-center'>
              {/* PENDING: AGREGAR LOGO IGLESIA */}
              <p className='font-semibold text-(--color-primary) text-lg text-center leading-tight'>
                Iglesia Cristiana Evangélica Príncipe de Paz
              </p>
            </div>

            <button
              type='button'
              className='lg:hidden absolute top-0 right-0 p-2 cursor-pointer rounded-md text-(--color-text-primary) hover:text-(--color-primary) hover:bg-(--color-background-selected)'
              onClick={() => setIsMobileOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <nav>
            {SIDEBAR_OPTIONS.map(({ label, redirect, icon: Icon, children }) => {
              if (!children) {
                return (
                  <Link
                    key={label}
                    href={redirect}
                    className='w-full flex gap-4 items-center p-3 cursor-pointer rounded-md font-medium text-(--color-text-primary) hover:text-(--color-primary) hover:bg-(--color-background-selected)'
                  >
                    {Icon && <Icon size={20} />}
                    {label}
                  </Link>
                );
              }

              const isOpen = openMenuItem === label;

              return (
                <div key={label}>
                  <button
                    type='button'
                    className='w-full flex items-center justify-between p-3 cursor-pointer rounded-md font-medium text-(--color-text-primary) hover:text-(--color-primary) hover:bg-(--color-background-selected)'
                    onClick={() => setOpenMenuItem(isOpen ? null : label)}
                  >
                    <div className='flex gap-4 items-center'>
                      {Icon && <Icon size={20} />}
                      <p>{label}</p>
                    </div>

                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 1, height: 0 }}
                        animate={{
                          opacity: 1,
                          height: 'auto',
                          transition: {
                            type: 'keyframes',
                          },
                        }}
                        exit={{ opacity: 1, height: 0 }}
                        className='ml-9 overflow-hidden'
                      >
                        {children.map(({ label, redirect, icon: Icon }) => (
                          <Link
                            key={label}
                            href={redirect}
                            className='w-full flex gap-4 items-center p-3 cursor-pointer rounded-md font-medium text-(--color-text-primary) hover:text-(--color-primary) hover:bg-(--color-background-selected)'
                          >
                            {Icon && <Icon size={20} />}
                            {label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
        </div>

        <footer className='flex flex-col gap-10'>
          <button
            type='button'
            className='w-full flex gap-4 items-center p-3 cursor-pointer rounded-md font-medium text-(--color-primary) bg-(--color-background-selected) transition-all hover:text-(--color-background) hover:bg-(--color-danger)'
            onClick={handleSignOut}
          >
            <LogOut size={20} />
            <p>Cerrar Sesión</p>
          </button>

          <div className='flex gap-2.5 items-center'>
            <div className='w-10 h-10 bg-(--color-primary) rounded-md flex items-center justify-center'>
              <p className='font-semibold text-(--color-background)'>{getInitialLetters(user?.full_name)}</p>
            </div>

            <div className='flex flex-col gap-0.5'>
              <p className='text-xs text-(--color-text-primary)'>{user?.full_name}</p>
              <p className='text-xs text-(--color-text-secondary)'>{ROLE_LABELS[user?.role || 'editor']}</p>
            </div>
          </div>
        </footer>
      </aside>

      <div className='flex-1 flex flex-col relative'>
        {!isMobileOpen && (
          <button
            type='button'
            className='lg:hidden absolute top-5 right-5 p-2 cursor-pointer rounded-md text-(--color-text-primary) hover:text-(--color-primary) hover:bg-(--color-background-selected)'
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        )}

        <main
          className={`flex-1 p-8 overflow-auto ${
            isMobileOpen ? 'pointer-events-none select-none lg:pointer-events-auto' : ''
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};
