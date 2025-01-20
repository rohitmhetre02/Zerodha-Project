const { model } = require("mongoose");

const {PositionSchema} = require("../schemas/PositionSchema");

const PositionModel=new model("POsition",PositionSchema);

module.exports= {PositionModel};