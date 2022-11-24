import {onMounted, ref} from "vue";

export default ()=>{
    const tabNum=ref(1)
    let pictureToShow=ref([])
    const galleryInfo=ref([
        {id:1,img:'./assets/nature_1.jpg'},
        {id:2,img:'./assets/nature_2.jpg'},
        {id:3,img:'./assets/nature_3.jpg'},
        {id:4,img:'./assets/nature_4.jpg'},
        {id:5,img:'./assets/tech_1.jpg'},
        {id:6,img:'./assets/tech_2.jpg'},
        {id:7,img:'./assets/tech_3.jpg'},
        {id:8,img:'./assets/tech_4.jpg'},
        {id:9,img:'./assets/travel_1.jpg'},
        {id:10,img:'./assets/travel_2.jpg'},
        {id:11,img:'./assets/travel_3.jpg'},
        {id:12,img:'./assets/travel_4.jpg'},
    ])
    onMounted(()=>{
        changeNav(1,0,3)
    })

    const changeNav = (num,start,end) => {
        tabNum.value=num
        pictureToShow.value=galleryInfo.value.slice(start,end+1)
    }

    return {tabNum,changeNav,pictureToShow}
}