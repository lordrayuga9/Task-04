var request = new XMLHttpRequest();
request.open("GET",'https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data = JSON.parse(this.response);
    var res = data.filter(a=>a.region=="Asia");
    var res1 = res.map(a=>a.name);
    console.log(res1);
   

    var pop = data.filter(a=>a.population < 200000);
    var pop1 = pop.map(a=>a.name);
    console.log(pop1);

    data.forEach(element => {
        console.log(`${element.name}    ${element.capital}     ${element.flag}`)
    });

    var totpop = data.reduce((a,b)=>{
        return a+=b.population;
    },0)
    console.log(totpop);

    var curr = data.filter(a=>{
        for(let i in a.currencies)
        {   
            if(a.currencies[i].code==="USD")
            {
            return a.currencies[i].code==="USD";
            }
        }
    }).map(a=>a.name)
    console.log(curr);
        
}
