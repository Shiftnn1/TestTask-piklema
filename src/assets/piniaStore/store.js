import { defineStore } from "pinia";

export const store = defineStore("store", {
    state: () => ({
        tasks: [], // массив в котором находятся все задания
        taskInput: '', // поле для ввода задания
        taskModalChangerStatus: {status: false, index: null}, // Окно для редактирование конкретной задачи активно или неактивно
        taskValueChangerInput: '',
    }),
    getters: {},
    actions:  {
        // функция для добавления задачи в список
        addTask() {
            if (this.taskInput == '') {
                return
            } else {
                this.tasks.push({ taskValue: `${this.taskInput}`, status: false })
                localStorage.setItem("tasks", JSON.stringify(this.tasks))
                this.taskInput = ''
            }
        },
        // функция меняющая статус конкретной задачи на сделанную или наоборот
        taskStatusChanger(taskIndex) {
            let currentTask = this.tasks[taskIndex].status
            if (currentTask == false) {
                currentTask = this.tasks[taskIndex].status = true
            } else {
                currentTask = this.tasks[taskIndex].status = false
            }
        },
        deleteTask(taskIndex) {
            this.tasks.splice(taskIndex, 1)
            localStorage.setItem("tasks", JSON.stringify(this.tasks))
        },
        changeTaskValue(taskIndex) {
            if (this.taskModalChangerStatus.index == null) {
                this.taskModalChangerStatus.index = taskIndex
            } else {
                this.taskModalChangerStatus.index = null
            }
            this.taskModalChangerStatus.status == true ? this.taskModalChangerStatus.status = false : this.taskModalChangerStatus.status = true
            this.taskValueChangerInput = this.tasks[taskIndex].taskValue
        },
        submitUpdate(newValue, taskIndex) {
            this.tasks[taskIndex].taskValue = newValue
            console.log(newValue, taskIndex)
            this.taskModalChangerStatus.status = false
            this.taskModalChangerStatus.index = null
        },
        cancelUpdate() {
            this.taskModalChangerStatus.status = false
            this.taskModalChangerStatus.index = null
        }
    }
})