import { MenuRootItem } from 'ontimize-web-ngx';
import { CustomerCardComponent } from "./customer-card/customer-card.component";
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { BranchCardComponent } from './branch-card/branch-card.component';
import { AccountCardComponent } from './account-card/account-card.component';
import { ServiceExCardComponent } from "./service-ex-card/service-ex-card.component";


export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  {
    id: 'modules', name: 'MODULES', icon: 'remove_red_eye', opened: true,
    items: [
      { id: 'customers', name: 'CUSTOMERS', icon: 'people', route: '/main/customers', component: CustomerCardComponent},
      { id: 'employees', name: 'EMPLOYEES', icon: 'business_center', route: '/main/employees', component: EmployeeCardComponent },
      { id: 'branches', name: 'BRANCHES', icon: 'account_balance', route: '/main/branches', component: BranchCardComponent },
      { id: 'accounts', name: 'ACCOUNTS', icon: 'credit_card', route: '/main/accounts', component: AccountCardComponent },
      { id: 'serviceEx', name: 'SERVICEEX', icon: 'dns', route: '/main/serviceEx', component: ServiceExCardComponent},
    ]
  },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [
  CustomerCardComponent,
  EmployeeCardComponent,
  BranchCardComponent,
  AccountCardComponent,
  ServiceExCardComponent
];
