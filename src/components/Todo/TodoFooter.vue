<template>
  <div id="container">
    <div id="completed-div" v-if="haveQuestCompleted">
      <el-button type="primary" @click="clearDone">清除已完成任务</el-button>
    </div>
    <div id="status">已完成 {{ completedNum }} 个 / 共 {{ totalNum }} 个</div>
  </div>
</template>

<script>
import store from "@/store";
import { ElNotification } from "element-plus";
import sessionStorage from "@/assets/sessionStorage";

export default {
  name: "navFooter",
  data() {
    return {
      haveQuestCompleted: true,
    };
  },
  computed: {
    completedNum: function () {
      return this.$store.state.completedNum;
    },
    totalNum: function () {
      return this.$store.state.todoList.length;
    },
  },
  methods: {
    clearDone: function () {
      let completedNum = 0;
      let completedIndex = [];
      let todoList = store.state.todoList;
      for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].completed) {
          completedIndex.push(i);
          completedNum++;
        }
      }
      for (let i = completedIndex.length - 1; i >= 0; i--) {
        todoList.splice(completedIndex[i], 1);
      }
      store.state.completedNum -= completedNum;
      ElNotification({
        title: "已清除已完成任务",
        message: "本次共清除" + completedNum + "个",
        type: "success",
      });
      sessionStorage.setCompletedNum(0);
      sessionStorage.setTodoList(todoList);
    },
  },
};
</script>

<style scoped>
#completed-div {
  margin: 1rem 0;
}
</style>

