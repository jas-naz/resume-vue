import Vue from 'vue'
import Component from 'vue-class-component'

// The @Component decorator indicates the class is a Vue component
@Component({
    // All component options are allowed in here
    name: 'mycomponent',
    template: '<button @click="onClick">Click!</button>'
})
export default class MyComponent extends Vue {
    // Initial data can be declared as instance properties
    message : string = 'Hello!'

    // Component methods can be declared as instance methods
    onClick() : void {
        window.alert(this.message)
    }
}

// declare module 'vue/types/vue' {
//     // 3. Declare augmentation for Vue
//     interface Vue {
//         $myProperty : string
//     }
// }
