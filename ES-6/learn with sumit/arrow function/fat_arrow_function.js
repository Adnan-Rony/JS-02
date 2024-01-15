
var javasript = {

    name: "adnan",
    city: ["tangail", "dhaka", "mirpur"],

    printcity:
        function () {
           
            this.city.forEach( (a)=> console.log(`${this.name} lives ${a}`))
        }
}

javasript.printcity();