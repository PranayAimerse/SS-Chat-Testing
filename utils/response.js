exports. ResponseError=(res,message,err,data)=>{
    return res.json({
        message:message,
        err:err,
        data:data
    })
       
}
exports. ResponseSuccess=(res,message,data)=>{
    return res.json({
        message:message,
        data:data
    })
       
}