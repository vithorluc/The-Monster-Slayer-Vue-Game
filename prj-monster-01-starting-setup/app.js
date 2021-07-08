function getRandomvalue(min, max) {
    return Math.floor(Math.random() * (max - min)) + 5
}


const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0
        }
    },
    computed: {
        monsterBarStyles(){
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles(){
            return {width: this.playerHealth + '%'}
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0
        }
    },
    methods: {
        attackMonster(){
            this.currentRound++
            const attackValue = getRandomvalue(5, 12)
            this.monsterHealth -= attackValue
            // methods are also merged with global variables accessible from everywhere 
            // into the code
            this.attackPlayer()
        },
        attackPlayer(){
            const attackValue = getRandomvalue(8, 15)
            this.playerHealth -= attackValue
        },
        specialAttackMonster(){
            this.currentRound++
            const attackValue = getRandomvalue(10, 25)
            this.monsterHealth -= attackValue
            this.attackPlayer()
        }  
    },
    watch: {

    }
})


app.mount('#game')