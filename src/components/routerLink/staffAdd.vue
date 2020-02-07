<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm"
      label-width="100px" class="demo-ruleForm">
      <el-form-item label="员工编号" prop="no" style="width:480px">
        <el-input v-model="ruleForm.no"></el-input>
      </el-form-item>

      <el-form-item label="职位" prop="position" style="width:200px">
        <el-select v-model="ruleForm.position" placeholder="请选择">
          <el-option label="经理" value="manager"></el-option>
          <el-option label="员工" value="employee"></el-option>
        </el-select>
      </el-form-item>

      <el-row>
        <el-col :span="8">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="身份证号码" prop="id" style="width:280px">
            <el-input v-model="ruleForm.id"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="性别" prop="sex" required>
          <el-radio-group v-model="ruleForm.sex" disabled>
              <el-radio :label="0">男</el-radio>
              <el-radio :label="1">女</el-radio>
          </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄" prop="age" required>
          <el-input v-model="ruleForm.age" disabled  style="width:100px">
          </el-input>
      </el-form-item>

      <el-form-item label="联系电话" prop="pno" style="width:300px">
        <el-input v-model="ruleForm.pno"></el-input>
      </el-form-item>

      <el-form-item label="入职时间" required>
        <el-col :span="11">
          <el-form-item prop="date">
            <el-date-picker type="date" placeholder="选择日期"
            v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'StaffAdd',
  data () {
    return {
      ruleForm: {
        no: '',
        position: '',
        name: '',
        id: '',
        sex: '',
        age: '',
        pno: '',
        date: ''
      },
      rules: {
        no: [
          { required: true, message: '请输入员工编号', trigger: 'blur' },
          { min: 8, max: 8, message: '员工编号应为8位数字', trigger: 'blur' }
        ],
        position: [
          { required: true, message: '请选择职位', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入名字', trigger: 'blur' },
          { min: 2, message: '名字最少应有2位字符', trigger: 'blur' }
        ],
        id: [
          { required: true, message: '请输入身份证号码', trigger: 'blur' },
          { min: 16, max: 16, message: '身份证号码应为16位数字', trigger: 'blur' }
        ],
        pno: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '手机号码应为11位数字', trigger: 'blur' }
        ],
        date: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
