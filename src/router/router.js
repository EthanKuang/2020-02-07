import Vue from 'vue'
import VueRouter from 'vue-router'
import Notice from '../components/routerLink/notice'
import DivisionAdd from '../components/routerLink/divisionAdd'
import DivisionManage from '../components/routerLink/divisionManage'
import StaffAdd from '../components/routerLink/staffAdd'
import StaffManage from '../components/routerLink/staffManage'
import FinancialState from '../components/routerLink/financialState'
import SalaryManage from '../components/routerLink/salaryManage'
import ResignApplication from '../components/routerLink/resignApplication'

Vue.use(VueRouter)

const routes = [
  {path: '/notice', component: Notice},
  {path: '/divisionAdd', component: DivisionAdd},
  {path: '/divisionManage', component: DivisionManage},
  {path: '/staffAdd', component: StaffAdd},
  {path: '/staffManage', component: StaffManage},
  {path: '/financialState', component: FinancialState},
  {path: '/salaryManage', component: SalaryManage},
  {path: '/resignApplication', component: ResignApplication}
]

const router = new VueRouter({
  routes
})

export default router
