function getRandomvalue(min, max) {
    return Math.floor(Math.random() * (max - min)) + 5
}


const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null
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
        },
        healPlayer(){
            this.currentRound++
            const healValue = getRandomvalue(8, 20)
            if (this.playerHealth + healValue > 100){
                this.playerHealth = 100
            } else {
                this.playerHealth += healValue
            }
            this.attackPlayer()
        }
    },
    watch: {
        playerHealth(value){
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'monster'
            }
        },
        monsterHealth(value){
            if (value <= 0 && this.playerHealth <= 0){
                this.winner = 'draw'
            } else if (value <= 0){
                this.winner = 'player'
            }
        }
    }
})


app.mount('#game')