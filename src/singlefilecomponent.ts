import * as $ from "jquery";
import SideBar from './sidebar';

// const Home = async() => {
//     const template = await fetch('http://yourserver.com/templates/foo.html')
//     return {
//         template,
//         // other component options...
//     }
// }

export default {
    components : {
        SideBar
    },
    template : `
        <div v-if='resumeData != null'>
            <div class='area'>
                <side-bar typeclass='profile' propa='My' propb='Profile'></side-bar>
                <div class='grouped profile'>
                    <div class='name'>{{ resumeData.profile.first }}
                        <div>{{ resumeData.profile.last }}</div>
                    </div>
                    <div class="title">{{ resumeData.profile.title }}</div>
                    <p>{{ resumeData.profile.introduction }}</p>
                    <p>{{ resumeData.profile.introMore }}</p>
                    <div class='col col-1'>
                        <div>Address: {{ resumeData.profile.address }}</div>
                        <div></div>
                    </div>
                    <div class='col col-1'>
                        <div>Mobile: {{ resumeData.profile.mobile }}</div>
                        <div>Skype: {{ resumeData.profile.skype }}</div>
                    </div>
                    <div class='col col-1'>
                        <div>{{ resumeData.profile.email }}</div>
                        <div>{{ resumeData.profile.url }}</div>
                    </div>
                    <div class="fadeout"></div>
                </div>
            </div>
            <!-- EXPERIENCE -->
            <div class='area'>
                <side-bar typeclass='experience' propa='My' propb='Experience'></side-bar>
                <div class='grouped separator'>
                    <div class="small-label experience">My Experience</div>
                    <div v-for='work in resumeData.experience' class='item'>
                        <div class='col col-1'>
                            <h2>{{ work.title }}</h2>
                            <div>{{ work.dates }}</div>
                        </div>
                        <div class='col col-2'>
                            <h2>{{ work.company }}, {{ work.location }}</h2>
                            <div>{{ work.details }}</div>
                        </div>
                    </div>
                    <div class="fadeout"></div>
                </div>
            </div>
            <!-- EDUCATION -->
            <div class='area'>
                <side-bar typeclass='education' propa='My' propb='Education'></side-bar>
                <div class='grouped separator'>
                    <div class="small-label education">My Education</div>
                    <div v-for='school in resumeData.education' class='item'>
                        <div class='col col-1'>
                            <h2>{{ school.degree }}&nbsp;</h2>
                            <div>{{ school.dates }} </div>
                        </div>
                        <div class='col col-2'>
                            <h2>{{ school.name }}</h2>
                            <div>{{ school.details }}</div>
                        </div>
                    </div>
                    <div class="fadeout"></div>
                </div>
            </div>
            <div class='area'>
                <side-bar typeclass='skills' propa='Skills &' propb='Interests'></side-bar>
                <div class='grouped separator'>
                    <div class="small-label skills">Skills & Interests</div>
                    <h2 class="small-hide">Skills</h2>
                    <div v-for='skill in resumeData.skills' class='item skill'>
                        <div>{{ skill.name }}</div>
                        <div>{{ skill.level }}</div>
                        <div>{{ skill.years }}</div>
                    </div>
                </div>
                <div class="footer">{{ resumeData.footer }}</div>
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
        $.getJSON('./data.json', json => {
            self.resumeData = json
        })
    }
}
