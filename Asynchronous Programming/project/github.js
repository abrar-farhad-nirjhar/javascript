class Github{
    constructor(){
        this.client_id = '5e2a4a0aaa49a192d554';
        this.client_secret = '8e307ce2965b688eca4889f6442ed0e24873f564';
    }

    async getUser(user){

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profile = await profileResponse.json()
        return {
            profile:profile
        }

    }
}