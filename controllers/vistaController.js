const data = require("../data/datos");
module.exports = {
    mostrar: (req,res)=>{
        let vida = data.length / 4
        let cosa = 0
        let otraCosa = -4
        let active = "active"
        const toThousand = n =>
n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
".");
        res.render("vista",{data, toThousand,titulo: "Mercado Liebre Argentina",vida,cosa,otraCosa,active});
    }
}