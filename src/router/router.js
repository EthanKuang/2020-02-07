import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../page/hello'
import Notice from '../page/notice'
import DivisionAdd from '../page/divisionAdd'
import DivisionManage from '../page/divisionManage'
import StaffAdd from '../page/staffAdd'
import StaffManage from '../page/staffManage'
import FinancialState from '../page/financialState'
import SalaryManage from '../page/salaryManage'
import ResignApplication from '../page/resignApplication'
import Setting from '../page/setting'
import LogOut from '../page/logOut'

Vue.use(VueRouter)

const routes = [
  {path: '/hello', component: Hello},
  {path: '/notice', component: Notice},
  {path: '/divisionAdd', component: DivisionAdd},
  {path: '/divisionManage', component: DivisionManage},
  {path: '/staffAdd', component: StaffAdd},
  {path: '/staffManage', component: StaffManage},
  {path: '/financialState', component: FinancialState},
  {path: '/salaryManage', component: SalaryManage},
  {path: '/resignApplication', component: ResignApplication},
  {path: '/setting', component: Setting},
  {path: '/logOut', component: LogOut}
]

const router = new VueRouter({
  routes
})

export default router
