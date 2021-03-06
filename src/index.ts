import Vue from 'vue'
import './css/styles.css';
// import Component from 'vue-class-component'

// import vmApp from './app.vue'
// import vendors from './vendors'
import MyComponent from './mycomponent';
import SingleFileComponent from './singlefilecomponent';
import SideBar from './sidebar';

// new Vue(vmApp).$mount('#app')
var vm = new Vue({
    el: '#resume',
    components: {
        SingleFileComponent,
        MyComponent,
        SideBar
    }
})
// console.log(vm.$myProperty) // This should compile successfully
