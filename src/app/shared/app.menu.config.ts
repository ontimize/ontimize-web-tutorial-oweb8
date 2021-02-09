import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'customers', name: 'CUSTOMERS', icon: 'people', route: '/main/customers' },
  { id: 'employees', name: 'EMPLOYEES', icon: 'business_center', route: '/main/employees' },
  { id: 'branches', name: 'BRANCHES', icon: 'account_balance', route: '/main/branches' },
  { id: 'accounts', name: 'ACCOUNTS', icon: 'credit_card', route: '/main/accounts' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
