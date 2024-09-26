<template>
    <div class='background'>
        <textarea name="" id="" v-model="taskValueChangerInput"> </textarea>
        <div class="buttons">
            <button @click="cancelUpdate()" class="modal-button">Отменить</button>
            <button @click="$emit('changedValue', taskValueChangerInput, taskModalChangerStatus.index)"
                class="modal-button"> ОК</button>
        </div>
    </div>
</template>
<!-- v-model="taskValueChangerInput" -->
<script setup>

import { store } from '@/assets/piniaStore/store'
import { storeToRefs } from 'pinia'
const piniaStore = store()

const {
    cancelUpdate,
} = piniaStore
let { taskModalChangerStatus, taskValueChangerInput } = storeToRefs(piniaStore)
defineProps(['taskIndex', 'taskValue'])
defineEmits(['changedValue'])

</script>