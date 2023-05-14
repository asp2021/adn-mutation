const mutationsModel= require("../models/mutationsModel")
const mutant = require('./../lib/mutants.js');
module.exports={
    
    create: async function(req, res, next) {
        try{
            //Debe recibir como parámetro un array de Strings que representan cada fila de una tabla
            // de (NxN) con la secuencia del ADN
            const dna = req.body;
            const hasMutation = mutant.hasMutation(dna);

            const mutation = new mutationsModel({
                dna: req.body,
                isMutable: hasMutation
            })
            const document = await mutation.save()

            if(hasMutation){    
                res.status(200).send('Mutation detected');
            }
            else
            {
                res.status(403).send('No mutation detected');
            }
        }catch(e){
            next(e)
        }
    },
    reportstats: async function(req, res, next) {
        try{
            // Exponer un servicio extra “/stats” que devuelva un JSON con las estadísticas de las verificaciones 
            // de ADN: {“count_mutations”:40, “count_no_mutation”:100: “ratio”:0.4}

            const count_mutations = await mutationsModel.countDocumentsByValue(true);
            const count_no_mutations = await mutationsModel.countDocumentsByValue(false);
            const ratio = count_mutations / (count_mutations + count_no_mutations);

            const result = {
                count_mutations: count_mutations,
                count_no_mutation: count_no_mutations,
                ratio: ratio.toFixed(2),
            };
            res.status(200).send(result);
        }catch(e){
            next(e)
        }
    },
}