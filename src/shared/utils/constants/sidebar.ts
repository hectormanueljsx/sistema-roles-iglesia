import {
  BookOpen,
  BrushCleaning,
  CalendarPlus,
  Church,
  Coffee,
  LayoutDashboard,
  Rose,
  Users,
} from '@/shared/components/Icons';

export const SIDEBAR_MENU = [
  { label: 'Resumen', redirect: '/resumen', icon: LayoutDashboard },
  {
    label: 'Roles',
    icon: CalendarPlus,
    children: [
      { label: 'Aseo', redirect: '/roles/aseo', icon: BrushCleaning },
      { label: 'Flores', redirect: '/roles/flores', icon: Rose },
      { label: 'Café', redirect: '/roles/cafe', icon: Coffee },
      { label: 'Clases', redirect: '/roles/clases', icon: BookOpen },
    ],
  },
  { label: 'Miembros', redirect: '/miembros', icon: Church },
  { label: 'Usuarios', redirect: '/usuarios', icon: Users },
];
