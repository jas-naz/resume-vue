import * as $ from "jquery"
import './css/styles.css';

export default {
    template : `
        <div>
            <h1>Resume Component</h1>
            <p>{{ resumeData.introduction }}</p>
            <div v-for='item in resumeData'>
                <div v-for='i in item'>
                    {{ i.name }}
                    {{ i.title }}
                </div>
            </div>
            <h2>Skills</h2>
            <div v-for='skill in resumeData.skills' class='section skill'>
                <div>{{ skill.name }}</div>
                <div>{{ skill.level }}</div>
                <div>{{ skill.level }}</div>
            </div>
            <h2>Education</h2>
            <div v-for='skill in resumeData.skills' class='skill'>
                <div>{{ skill.name }}</div>
                <div>{{ skill.level }}</div>
                <div>{{ skill.level }}</div>
            </div>
        </div>
    `,
    data() {
        // const self : any = this
        // let resumeData = $.getJSON('./static/data.json', function (data : any) {
        //         // this.userData:any = data
        //         // self.userData = data
        //         return data.responseText
        //     }.bind(this))
        return { resumeData: null }
    } ,
    mounted() {
        const self:any = this
        $.getJSON('./static/data.json', json => {
            self.resumeData = json
        })
    }
}
