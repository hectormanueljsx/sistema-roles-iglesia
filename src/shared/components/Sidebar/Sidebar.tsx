'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import { signOut } from '@/modules/auth/infrastructure/auth.client.repository';
import { useUser } from '@/providers/UserProvider';
import { ROLE_LABELS, SIDEBAR_OPTIONS } from '@/shared/utils/constants';
import { getInitialLetters } from '@/shared/utils/helpers';
import { Breadcrumb } from '../Breadcrumbs';
import { LogOut, Menu, X } from '../Icons';

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();

  const isActive = (redirect?: string) => pathname.startsWith(redirect || '');

  const handleSignOut = async () => {
    await signOut();
    router.push('/login');
    router.refresh();
  };

  return (
    <div className='flex h-screen bg-white overflow-hidden'>
      <aside
        className={`fixed top-0 left-0 lg:static z-50 flex flex-col justify-between gap-10 p-5 h-full w-full lg:w-67.5 bg-white lg:shadow-[2px_0_8px_rgba(0,0,0,0.08)] transform transition-all duration-300 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className='h-full flex flex-col justify-between gap-1.25'>
          <div className='flex flex-col justify-between gap-10'>
            <div className='relative'>
              <div className='flex flex-col justify-start sm:items-center text-lg font-semibold text-(--color-text-primary) leading-tight'>
                <p className='leading-tight'>Iglesia Cristiana Evangélica</p>
                <p className='leading-tight'>Príncipe de Paz</p>
              </div>

              <button
                type='button'
                className='lg:hidden absolute top-0 right-0 p-2 cursor-pointer rounded-md text-(--color-text-primary) hover:text-(--color-primary) hover:bg-(--color-background-selected)'
                onClick={() => setIsMobileOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <nav className='flex flex-col justify-between gap-1.25'>
              <div className='flex flex-col gap-1.25'>
                {SIDEBAR_OPTIONS.map(({ key, label, redirect, icon: Icon }) => (
                  <Link
                    key={key}
                    href={redirect}
                    className={`w-full flex gap-2 items-center p-2 cursor-pointer rounded-md font-medium ${
                      isActive(redirect)
                        ? 'text-white bg-(--color-text-primary)'
                        : 'text-(--color-text-primary) hover:text-(--color-text-primary) hover:bg-(--color-background-selected)'
                    }`}
                  >
                    {Icon && <Icon size={20} />}
                    {label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <button
            type='button'
            className='w-full flex gap-2 items-center p-2 cursor-pointer rounded-md font-medium text-white bg-(--color-text-primary) transition-all hover:text-white hover:bg-(--color-danger)'
            onClick={handleSignOut}
          >
            <LogOut size={20} />
            <p>Cerrar Sesión</p>
          </button>
        </div>

        <footer className='flex gap-2 items-center'>
          <div className='w-10 h-10 bg-(--color-text-primary) rounded-md flex items-center justify-center'>
            <p className='font-semibold text-white'>{getInitialLetters(user?.full_name)}</p>
          </div>

          <div className='flex flex-col gap-0.5'>
            <p className='text-xs text-(--color-text-primary)'>{user?.full_name}</p>
            <p className='text-xs text-(--color-text-secondary)'>{ROLE_LABELS[user?.role || 'editor']}</p>
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
          className={`flex flex-1 flex-col gap-7.5 bg-(--color-background) p-8 overflow-auto ${
            isMobileOpen ? 'pointer-events-none select-none lg:pointer-events-auto' : ''
          }`}
        >
          <Breadcrumb />

          {children}
        </main>
      </div>
    </div>
  );
};
