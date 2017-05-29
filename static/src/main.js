import Vue from 'vue'
import App from './App.vue'
import Message from './Message.vue'
import Todo from './Todo.vue'

Vue.component('app-message', Message)
Vue.component('app-todo', Todo)

new Vue({
  el: '#app',
  render: h => h(App)
})
