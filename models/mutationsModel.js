const mongoose = require("../bin/mongodb");
const errorMessage=require("../util/errorMessage")

const mutationSchema = new mongoose.Schema({
    dna: {
        type: [[String]],
        required:[true,errorMessage.GENERAL.campo_obligatorio]
    },
    isMutable: Boolean,
    createAt: {
        type: Date,
        default: Date.now
    }
});

const mutationModel = mongoose.model('mutationsModel', mutationSchema);

mutationSchema.statics.findBydIdAndValidate = async function(id){
    const document = await this.findById(id);
    if(!document){
        return{
            error:true,
            message:"No existe mutation"
        }
    }
    return document;
}
mutationSchema.statics.countDocumentsByValue = async function (value) {
    try {
        const count = await this.countDocuments({ isMutable: value });
        console.log(`Cantidad de documentos con hasMutation=${value}: ${count}`);
        return count;
    } catch (error) {
        console.error(`Error al contar documentos: ${error.message}`);
        return null;
    }
};
module.exports = mongoose.model("mutations", mutationSchema)