var app = new Vue(
    {
        el: "#root",
        data:
        {
            emailList: []
        },
        mounted: function () {
            for ( let i = 0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (response) => {
                    this.emailList.push(response.data.response);
                });
            }
        }
        
    }
)