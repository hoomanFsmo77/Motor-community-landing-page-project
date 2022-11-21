
export default {
    data(){
        return{
            show:false,
            open:false,
            mode:1
        }
    },
    mounted() {
        if(window.innerWidth>960){
            this.open=true
        }
        this.mode=localStorage.getItem('_motor_x') ? Number(localStorage.getItem('_motor_x')) : 1
        this.setTheme()
    },
    methods:{
        openMenu(){
            this.open=!this.open
        },
        closeMenu(){
            this.open=false
        },
        changeMode(){
            this.mode++  ///2  ///3 ///1
            if(this.mode > 3){
                this.mode=1
            }
            this.setTheme()
            localStorage.setItem('_motor_x',this.mode)
        },
        setTheme(){
            if(this.mode===1){
                if(matchMedia('(prefers-color-scheme: dark) ').matches){
                    document.body.classList.add('dark')
                }else{
                    document.body.classList.remove('dark')
                }
            }else if(this.mode===2){
                document.body.classList.remove('dark')
            }else{
                document.body.classList.add('dark')
            }
        },
        setSrc(){
            if(this.mode===1){
                if(matchMedia('(prefers-color-scheme: dark) ').matches){
                    return  './assets/logo_dark.png'
                }else{
                    return  './assets/logo.png'
                }
            }else if(this.mode===2){
                return  './assets/logo.png'
            }else{
                return  './assets/logo_dark.png'
            }
        }
    }
}