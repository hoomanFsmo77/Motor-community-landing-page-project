import {reactive} from "vue";

export default ()=>{
    let serviceCardInfo=reactive([
        {id:1,icon:'fas fa-shield-alt',content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam aut iusto'},
        {id:2,icon:'fas fa-headset',content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam aut iusto '},
        {id:3,icon:'fas fa-sliders-h',content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam aut iusto '},
        {id:4,icon:'fas fa-comment',content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam aut iusto '},
        {id:5,icon:'fas fa-chart-line ',content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam aut iusto '},
        {id:6,icon:'fas fa-box ',content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam aut iusto '},
    ])
    return {serviceCardInfo}
}