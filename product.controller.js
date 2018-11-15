const Product = require('/home/anuradha/ProductsApp/models/product.model.js');
const Product2 = require('/home/anuradha/ProductsApp/models/product.model2.js');
const Product3=require('/home/anuradha/ProductsApp/models/modelcan.js');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.votername = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            voterid: req.body.voterid,
            votingbooth:req.body.votingbooth,
            area:req.body.area
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};
exports.voterdetails = function (req, res) {
    Product.find(function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};
exports.voterupdate = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
        console.log(product);
        
    });
};
exports.voterdelete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
exports.canditatename = function (req, res) {
    let product2 = new Product2(
        {
            canditatename: req.body.canditatename,
           
        }
    );

    product2.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('canditate added successfully')
    })
};
exports.canditatedetails = function (req, res) {
    Product2.find(function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};
exports.can_id = function (req, res) {
    let product3 = new Product3(
        {
            canid: req.body.canid,
            votes: req.body.votes
        }
    );
    product3.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('canditate added successfully')
    })
}
exports.votescount = function (req, res) {
    Product3.find(function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};


