<template>
<d2-container>
  <template slot="header">文章列表
    <el-button style="float:right;" @click="handleRowAdd" type="primary">新增文章</el-button>
  </template>
  <div class="">
    <d2-crud ref="d2Crud" :columns="columns" :data="data" :rowHandle="rowHandle" @custom-emit-edit="handleRowEdit" @row-remove="handleRowDel" />
  </div>
  <template slot="footer">footer</template>
</d2-container>
</template>

<script>
import {
  GetArticle,
  delectArticleInfo
} from '@/api/sys/article'
export default {
  name: 'Article',
  data() {
    return {
      columns: [{
          title: '日期',
          key: 'createTime',
          width: '180'
        },
        {
          title: '标题',
          key: 'title',
          width: '180'
        },
        {
          title: '内容概述',
          key: 'content',
          width: '240',
          showOverflowTooltip: true
        },
        {
          title: '作者',
          key: 'author'
        },
        {
          title: '分类',
          key: 'classify'
        },
        {
          formOptions: {
            labelWidth: '2.4rem',
            labelPosition: 'center',
            saveLoading: false
          }
        }
      ],
      data: [],
      rowHandle: {
        columnHeader: '操作',
        width: 180,
        custom: [{
            text: '修改',
            type: 'warning',
            size: 'small',
            emit: 'custom-emit-edit'
          }

        ],
        remove: {
          icon: 'el-icon-delete',
          size: 'small',
          show(index, row) {
            return true
          }
        }

      },
      options: {
        stripe: true
      }
    }
  },
  mounted() {
    GetArticle({
        'ID': 1
      })
      .then(res => {
        this.data = res.data
      })
      .catch(res => {
        console.log(res)
      })
  },
  methods: {
    handleRowEdit({
      index,
      row
    }) {
      this.$router.push('article/edit?id=' + row._id)
    },
    handleRowAdd({
      index,
      row
    }) {
      this.$router.push('article/add')
    },
    handleRowDel({
      index,
      row
    }, done) {
      delectArticleInfo({
          '_id': row._id
        })
        .then((res) => {
          this.$notify.success({
            title: '删除成功',
            message: '当前id' + row._id + '被删除',
            type: 'success'
          });
          done();
        })
        .catch((res) => {

        })
    }
  }
}
</script>
