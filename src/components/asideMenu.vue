<template>
  <div>
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            background-color="#324057"
            text-color="#cfcbd9"
            unique-opened="true"
            >
            <hello-item></hello-item>
            <notice-item></notice-item>
            <division-item></division-item>
            <staff-item></staff-item>
            <financial-item></financial-item>
            <salary-item></salary-item>
            <resign-item></resign-item>
            <setting-item></setting-item>
            <log-out-item></log-out-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HelloItemComponent from './asideMenuList/helloItem'
import DivisionItemComponent from './asideMenuList/divisionItem'
import FinancialItemComponent from './asideMenuList/financialItem'
import NoticeItemComponent from './asideMenuList/noticeItem'
import ResignItemComponent from './asideMenuList/resignItem'
import SalaryItemComponent from './asideMenuList/salaryItem'
import StaffItemComponent from './asideMenuList/staffItem'
import SettingItemComponent from './asideMenuList/settingItem'
import LogOutItemComponent from './asideMenuList/logOutItem'
export default {
  name: 'AsideMenu',
  components: {
    HelloItem: HelloItemComponent,
    DivisionItem: DivisionItemComponent,
    FinancialItem: FinancialItemComponent,
    NoticeItem: NoticeItemComponent,
    ResignItem: ResignItemComponent,
    SalaryItem: SalaryItemComponent,
    StaffItem: StaffItemComponent,
    SettingItem: SettingItemComponent,
    LogOutItem: LogOutItemComponent
  }
}
</script>
