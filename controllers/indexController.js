const data = require("../data/datos");
module.exports = {
    mostrar: (req,res)=>{
        const toThousand = n =>
n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
".");
        res.render("index",{data, toThousand,titulo: "Mercado Liebre Argentina"});
    }
}