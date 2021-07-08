function getRandomvalue(min, max) {
    return Math.floor(Math.random() * (max - min)) + 5
}


const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100
        }
    },
    computed: {
        monsterBarStyles(){
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles(){
            return {width: this.playerHealth + '%'}
        }
    },
    methods: {
        attackMonster(){
            const attackValue = getRandomvalue(5, 12)
            this.monsterHealth -= attackValue
            // methods are also merged with global variables accessible from everywhere 
            // into the code
            this.attackPlayer()
        },
        attackPlayer(){
            const attackValue = getRandomvalue(8, 15)
            this.playerHealth -= attackValue
        }
    },
    watch: {

    }
})


app.mount('#game')