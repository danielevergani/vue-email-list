var app = new Vue(
    {
        el: "#root",
        data:
        {
            emailList: []
        },
        mounted: function () {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (response) => {
                console.log(response.data.response);
                this.emailList.push(response.data.response);
                console.log(this.emailList);
            });
        }
        
    }
)