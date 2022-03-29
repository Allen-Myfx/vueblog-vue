<template>
  <div >
    <Header></Header>
    <div class="block">
      <el-timeline>
        <el-timeline-item :timestamp="blog.created" placement="top" v-for="(blog, index) in blogs" :key="index">
          <el-card>
            <h4>
              <router-link :to="{name: 'BlogDetail', params: {blogId: blog.id}}">
                {{blog.title}}
              </router-link>              
            </h4>
            <p>{{blog.description}}</p>
          </el-card>
        </el-timeline-item>   
      </el-timeline>
          
      <el-pagination background layout="prev, pager, next" :total=total :page-size="pageSize" @current-change=page />
      
    </div>
  </div>
</template>


<script>
  import Header from '../components/Header'
  
  export default {
    components: { Header },
    name: 'Blogs',
    data() {
      return {
        blogs: {},
        currentPage: 1,
        total: 0,
        pageSize: 5
      }
    },
    methods: {
      page(currentPage) {
        const _this = this
        _this.axios.get("/blogs?currentPage=" + currentPage).then(res => {
          console.log(res);
          _this.blogs = res.data.data.records
          _this.currentPage = res.data.data.current
          _this.total = res.data.data.total
          _this.pageSize = res.data.data.size

        })
      }
    },
    created() {
      this.page(1);
    }
  }
</script>

<style scoped>
  .mpage {
    margin: 0 auto;
    text-align: center;
  }
</style>