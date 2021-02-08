import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'customers', name: 'CUSTOMERS', icon: 'people', route: '/main/customers' },
  { id: 'employees', name: 'EMPLOYEES', icon: 'business_center', route: '/main/employees'},
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
