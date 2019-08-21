<template>
<d2-container>
  <template slot="header">编辑文章</template>
  <el-row>
    <el-col :span="14" :offset="5" class="pad_top20">
      <el-input placeholder="请输入内容" v-model="data.title" clearable>
        <template slot="prepend">标题</template>
      </el-input>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="14" :offset="5" class="pad_top20">
      <el-select style="width:100%;" v-model="classify" multiple placeholder="请选择分类">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <template slot="prepend">分类</template>
      </el-input>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="22" :offset="1" class="pad_top20">
      <mavonEditor v-model="data.content" ref="md" @imgAdd="$imgAdd" @change="changeMavon" />
    </el-col>
  </el-row>
  <template slot="footer">
    <el-row>
      <el-col :span="14" :offset="5">
        <el-button type="success" @click='updateArticle'>修改</el-button>
      </el-col>
    </el-row>
  </template>
</d2-container>
</template>
<script>
import {
  mavonEditor
} from 'mavon-editor'
import {
  GetArticleInfo,
  updateArticleInfo
} from '@/api/sys/article'
import {
  mapState,
  mapActions
} from 'vuex'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'editArticle',

  components: {
    mavonEditor
  },
  data() {
    return {
      data: {
        title: '',
        content: '',
        classify: ''
      },
      classify: [],
      options: [{
        value: 'HTML',
        label: 'HTML'
      }, {
        value: 'JS',
        label: 'JS'
      }, {
        value: 'CSS',
        label: 'CSS'
      }, {
        value: 'node',
        label: 'node'
      }, {
        value: '服务器',
        label: '服务器'
      }, {
        value: '前端',
        label: '前端'
      }],
      configs: {}
    }
  },
  computed: {
    ...mapState('d2admin/user', [
      'info'
    ])
  },
  mounted: function() {
    console.log(this)
    GetArticleInfo({
        '_id': this.$route.query.id
      })
      .then(res => {
        console.log(res)
        this.data.title = res.data[0].title;
        this.data.content = res.data[0].content;
        this.classify = res.data[0].classify.split(",");
      })
      .catch(res => {
        console.log(res)
      })
  },
  methods: {
    changeMavon() {},
    $imgAdd() {},
    updateArticle() {
      let data = {
        _id: this.$route.query.id,
        title: this.data.title,
        content: this.data.content,
        classify: this.data.classify.toString()
      }
      updateArticleInfo(data)
        .then(res => {

          this.$notify.success({
            title: '修改成功',
            message: '修改成功',
            type: 'success'
          });
          console.log(this.$route)
          this.$router.push({
            name: 'article'
          })

          this.$store.dispatch('d2admin/page/closeOther', {
            pageSelect: 'edit'
          })
        })
        .catch(res => {
          console.log("catch", res)
        })
    }
  }
}
</script>
<style media="screen" scoped>
.pad_top20 {
  padding: 20px 0px;
}
</style>
