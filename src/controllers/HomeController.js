
exports.Index = (req, res) =>{
    res.status(200)
    .json({status: "success", data: "Empty data right now"})
}

exports.About = (req, res) =>{
    res.status(200)
    .json({status: "success", data: "About Your Self!"})
}