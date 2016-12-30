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
  var mailOptions = {
    from: req.body.firstname + ' ' + req.body.lastname + ' <'+req.body.email+'>',
    to: 'brian.e.duggan@icloud.com',
    subject: 'Estimate',
    text: req.body.firstname
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
