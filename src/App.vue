<template>
  <TaskModalValueChange v-if="taskModalChangerStatus.status == true"
    :taskValue="tasks[taskModalChangerStatus.index].taskValue" @changed-Value="submitUpdate" />
  <main>
    <textarea type="text" placeholder="Введите задачу для списка" v-model="taskInput"></textarea>
    <button class="add" @click="addTask">Добавить</button>
    <div class="tasks">
      <div class="task-container" v-for="(task, index) in tasks" :key="index">
        <div class="task" :class="task.status == false ? 'task-status-undone' : 'task-status-done'">
          <button class="task-status-button-undone" @click="taskStatusChanger(index)"
            :class="task.status ? 'task-status-button-done' : ''"></button>
          <div class="task-value">
            {{ task.taskValue }}
          </div>
        </div>
        <button @click="deleteTask(index)" class="task-button-option"></button>
        <button @click="changeTaskValue(index)" class="task-button-option"></button>
      </div>
    </div>
  </main>
</template>
<!-- :taskValue="tasks[taskModalChangerStatus.index].taskValue"  -->
<script setup>
// eslint-disable-next-line no-unused-vars
import TaskModalValueChange from './components/TaskModalValueChange.vue';

//lifehooks
import { onMounted } from 'vue'

//stores
import { store } from '@/assets/piniaStore/store'
import { storeToRefs } from 'pinia'

onMounted(() => {
  tasks.value = JSON.parse(localStorage.getItem('tasks')) || []
});

const piniaStore = store()

const { addTask,
  deleteTask,
  taskStatusChanger,
  changeTaskValue,
  submitUpdate
} = piniaStore

let { tasks, taskInput, taskModalChangerStatus } = storeToRefs(piniaStore)
</script>

<style scoped>
template {
  margin: 100px 0 0 0;
  /* padding-top: 100px; */
}

main {
  /* margin: 100px 0 0 0; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
</style>
