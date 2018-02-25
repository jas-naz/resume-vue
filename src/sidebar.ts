import Vue from 'vue'
import Component from 'vue-class-component'

// The @Component decorator indicates the class is a Vue component
@Component({
    // All component options are allowed in here
    name: 'sidebar',
    props: ['propa', 'propb', 'typeclass'],
    // template: '<div>Work<div>&{label}</div></div>'
    template: `<div class='sidebar' :class='typeclass'><div>{{propa}}
            <div>{{propb}}</div>
        </div>
    </div>`
})
export default class SideBar extends Vue {
    // Initial data can be declared as instance properties
    message : string = 'Hello!'

    // Component methods can be declared as instance methods
    // onClick() : void {
    //     window.alert(this.message)
    // }
}

// declare module 'vue/types/vue' {
//     // 3. Declare augmentation for Vue
//     interface Vue {
//         $myProperty : string
//     }
// }
