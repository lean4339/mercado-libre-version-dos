const data = require("../data/datos");
module.exports = {
    
    detalle: (req,res)=>{
        let id = req.params.id
        let producto = data.find(producto=>{
            return producto.id == Number(id)
        });
        const toThousand = n =>
n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
".");
        res.render("detail",{producto,toThousand,titulo:producto.name});
    }
}