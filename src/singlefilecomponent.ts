import * as $ from "jquery"
// import './css/styles.css';

import SideBar from './sidebar';

export default {
    components : {
        SideBar
    },
    template : `
        <div v-if='resumeData != null'>
            <h1>Resume Component</h1>
            <div class='area'>
                <side-bar typeclass='profile' propa='My' propb='Profile'></side-bar>
                <div class='grouped'>
                    <h2>Jason Nazario</h2>
                    <p>{{ resumeData.introduction }}</p>
                    <div v-for='item in resumeData'>
                        <!-- <div v-for='i in item'>
                        //     {{ i.name }}
                        //     {{ i.title }}
                        // </div> -->
                    </div>
                </div>
            </div>
            <div class='area'>
                <side-bar typeclass='experience' propa='My' propb='Experience'></side-bar>
                <div class='grouped'>
                    <h2>Experience</h2>
                    <div v-for='work in resumeData.experience'>
                        {{ work.title }} {{ work.company }}, {{ work.location }}
                    </div>
                </div>
            </div>
            <div class='area'>
                <side-bar typeclass='education' propa='My' propb='Education'></side-bar>
                <div class='grouped'>
                    <h2>Education</h2>
                    <div v-for='school in resumeData.education' class='section'>
                        <div>{{ school.name }}</div>
                        <div>{{ school.level }}</div>
                        <div>{{ school.level }}</div>
                    </div>
                </div>
            </div>
            <div class='area'>
                <side-bar typeclass='skills' propa='Skills &' propb='Interests'></side-bar>
                <div class='grouped'>
                    <h2>Skills</h2>
                    <div v-for='skill in resumeData.skills' class='section skill'>
                        <div>{{ skill.name }}</div>
                        <div>{{ skill.level }}</div>
                        <div>{{ skill.level }}</div>
                    </div>
                </div>
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
        // return { resumeData: {introduction: null} }
        return { resumeData: null }
    },
    mounted() {
        const self:any = this
        $.getJSON('./static/data.json', json => {
            self.resumeData = json
        })
    }
}
