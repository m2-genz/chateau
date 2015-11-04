var appConfig = null;

exports.config = function(config){
    appConfig = config;
};

exports.index = function(req, res){
    res.render('index', {"isReadOnlyMode": appConfig.isReadOnlyMode});
};

exports.partials = function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name , {"isReadOnlyMode": appConfig.isReadOnlyMode});
};
