<template>
  <div>
    <Header></Header>
    <div class="m-content">    
        
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="Title" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input type="textarea" v-model="ruleForm.description"></el-input>
        </el-form-item>

        <el-form-item label="Content" prop="content">
          <v-md-editor v-model="ruleForm.content"></v-md-editor>       
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
        
      

    </div>
    <mavon-editor v-model="ruleForm.content"></mavon-editor>
  </div>
</template>


<script>
    import Header from "../components/Header"
   

    export default {
      name: 'BlogEdit',
      components: { Header },  
      data() {
        return {       
          ruleForm: {
            id: '',
            title: '',
            description: '',
            content: ''
          },
          rules: {
            title: [
              { required: true, message: 'please input title', trigger: 'blur' },
              { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
            ],
            description: [
              { required: true, message: 'please input description', trigger: 'change' }
            ],
            content: [
              { required: true, message: 'please input contend', trigger: 'change' }
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
            
              const _this = this
              this.axios.post('/blog/edit', this.ruleForm, {
                headers: {
                  "Authorization": localStorage.getItem("token")
                }
              }).then(res => {
                console.log(res);

                _this.$alert('Edit success', 'Notification', {
                  confirmButtonText: 'OK',
                  callback: action => {
                    _this.$router.push("/blogs")
                  },
                });

              })             
              
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      },
      created() {
        const blogId = this.$route.params.blogId;
        console.log(blogId)
        const _this = this
        if (blogId) {
          this.axios.get('/blog/'+blogId).then(res => {
            const blog = res.data.data
            _this.ruleForm.id = blog.id
            _this.ruleForm.title = blog.title
            _this.ruleForm.description = blog.description
            _this.ruleForm.content = blog.content

          })
        }
      }
    }
</script>

<style scoped>

</style>