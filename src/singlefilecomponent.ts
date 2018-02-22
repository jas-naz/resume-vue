import * as $ from "jquery"

export default {
    template : `
        <div>
            <h1>Single-file JavaScript Component</h1>
            <p>{{ data.levels }}</p>
            <p v-for='level in data.levels'>{{ level.name }}</p>
        </div>
    `,
    data() {
        const self : any = this
        let data = $.getJSON('./static/data.json', function (data : any) {
                // this.userData:any = data
                // self.userData = data
                return data
            })
        return {
            data
        }
    } //,
    // mounted() {
    //     const self:any = this
    //     $.getJSON('./static/data.json', function(data:any) {
    //         // this.userData:any = data
    //         self.userData = data
    //     })
    // }
}
