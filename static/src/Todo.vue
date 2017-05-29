<template>
	<div class="container">
		<section class="panel">
			<input type="checkbox" id="mark-all"  v-bind:checked="areAllSelected" v-on:click="selectAll">
		    <input type="text" placeholder="What do you need to do?" autofocus class="text-input" v-model="newTask" v-on:keyup.enter="addTask">
		    <button v-on:click="clearList">Clear List</button>
		</section>
  
		<ul class="list">
			<li v-for="task in taskList" v-bind:class="{done: task.checked}">
				<input type="checkbox" class="checkbox" v-model="task.checked">
				<label for="checkbox"> {{ task.text }}</label>
				<button class="delete" v-on:click="removeTask(task)">X</button><!-- pasamos el argumento task, sera el elemento del array a eliminar -->
		    </li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				newTask: '',
				taskList: []
			}
		},
		computed: {
			areAllSelected() {
				//Check if every checked property returns true and if there is at least one to-do item
			    return this.taskList.every(function(task) {
			    	return task.checked
			    }) && this.taskList.length > 0
			}
		},
		methods: {
			addTask() {
				//trim() is used to remove whitespace from both ends of a string
				var task = this.newTask.trim();
				
				//if task is not an empty string
				if (task) {
			     	//Push an object containing the task to the taskList array
			        this.taskList.push({
			          text: task,
			          checked: false
		        })
		        //Reset newTask to an empty string so the input field is cleared
		        this.newTask = "";
		      }
		    },
		    removeTask(task) {
		    	var index = this.taskList.indexOf(task);
      			this.taskList.splice(index, 1);
		    },
		    clearList() {
		    	this.taskList = []
		    },
		    
			selectAll: function(task) {
					//targetValue is set to the opposite of areAllSelected
					var targetValue = this.areAllSelected ? false : true
					//we use a for loop to set the checked state of all items to the target value
					for (var i = 0; i < this.taskList.length; i++) {
					this.taskList[i].checked = targetValue
				}
			}
		}
	}
</script>



