import { CalendarPlus, Church, LayoutDashboard, Users } from '@/shared/components/Icons';

export const SIDEBAR_OPTIONS = [
  { key: 'resumen', label: 'Resumen', redirect: '/resumen', icon: LayoutDashboard },
  { key: 'roles', label: 'Roles', redirect: '/asignaciones', icon: CalendarPlus },
  { key: 'miembros', label: 'Miembros', redirect: '/miembros', icon: Church },
  { key: 'usuarios', label: 'Usuarios', redirect: '/usuarios', icon: Users },
];
