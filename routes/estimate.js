var express     = require('express'),
    router      = express.Router(),
    nodemailer  = require('nodemailer'),
    transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                      user: process.env.GMAILUSER,
                      pass: process.env.GMAILPASS
                    }
                  });

router.post('/', function(req,res){
  var estimate = req.body;
  var mailOptions = {
    from: estimate.firstname + ' ' + estimate.lastname + ' <'+estimate.email+'>',
    to: 'brian.e.duggan@icloud.com',
    subject: 'Estimate',
    html: '<style> span {font-weight: normal;}</style><body><h1> Dante\'s Construction </h1><h2> Estimate </h2><h4> From: ' + estimate.firstname + ' ' + estimate.lastname +  '<h4> Email: ' + estimate.email + '</h4><h4> Address: <span>'+ estimate.street + ', ' + estimate.street2 + ', ' + estimate.city + ', ' + estimate.state + '</span></h4><h4>For: <span>' + estimate.workType + '</span></h4><h4>Project Status: <span>'+ estimate.projectStatus +'</span></h4><h4>Message: <span>'+ estimate.message+'</span></h4><h4>Best Time to Contact: <span>'+ estimate.contactTime+'</h4><h4>Phone: <span>'+ estimate.phone+'</span></h4></body>'
  };
  console.log(mailOptions);
  transporter.sendMail(mailOptions, function(err, info){
    if (err){
      console.log('error: ' + err);
    } else {
      console.log(info);
      res.json(info)
    }
  })
  // res.send(req.body)
})

module.exports = router;
