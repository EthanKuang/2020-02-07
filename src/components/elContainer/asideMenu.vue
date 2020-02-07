<template>
  <div>
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            background-color="#E9EEF3"
            text-color="#000"
            unique-opened="true">
            <division-item></division-item>
            <staff-item></staff-item>
            <notice-item></notice-item>
            <financial-item></financial-item>
            <salary-item></salary-item>
            <resign-item></resign-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DivisionItemComponent from './elAsideMenu/divisionItem'
import FinancialItemComponent from './elAsideMenu/financialItem'
import NoticeItemComponent from './elAsideMenu/noticeItem'
import ResignItemComponent from './elAsideMenu/resignItem'
import SalaryItemComponent from './elAsideMenu/salaryItem'
import StaffItemComponent from './elAsideMenu/staffItem'
export default {
  name: 'AsideMenu',
  components: {
    DivisionItem: DivisionItemComponent,
    FinancialItem: FinancialItemComponent,
    NoticeItem: NoticeItemComponent,
    ResignItem: ResignItemComponent,
    SalaryItem: SalaryItemComponent,
    StaffItem: StaffItemComponent
  }
}
</script>
