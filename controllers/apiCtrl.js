var mongoose   = require('mongoose'),
    Vacancy    = require('../models/vacancy'),
    nodemailer = require('nodemailer'),
    bodyParser = require('body-parser');

module.exports = function (app, express) {

var apiRouter = express.Router();
var transporter = nodemailer.createTransport('smtps://macstyg%40gmail.com:@smtp.gmail.com');
var mailOptions = {
  from: '"Jobs Portal" <macstyg@gmail.com>',
  to: 'stygian@ukr.net, ilzorya@gmail.com',
  subject: 'Jobs postal new vacancy post',
  text: 'Somebody posted a job on portal!!!',
  html: '<a href="https://jobsportal.herokuapp.com">You can see it here</a>'
};

apiRouter
  .route('/jobs')

    .post((req, res) => {
      var vacancy = new Vacancy();

      vacancy.companyname = req.body.companyname;
      vacancy.companyemail = req.body.companyemail;
      vacancy.posted;
      vacancy.skills = req.body.skills;
      vacancy.compensation = req.body.compensation;
      vacancy.title = req.body.title;
      vacancy.description = req.body.description;

      vacancy.save((err) => {
        if (err) res.send(err);
        res.json({ message: 'Your vacancy added, and you can see it after passing the moderation' });
      });
    })

    .get((req, res) => {
      Vacancy.find({}, (err, vacancys) => {
        if (err) res.send(err);
        res.json(vacancys);
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) console.error(error);
          console.log('Message sent: ' + info.response);
        })
      })
    });

apiRouter
  .route('/jobs/:job_id')
    .get((req, res) => {
      Vacancy.findById(req.params.job_id, (err, job) => {
        if (err) {
          return res.status(404).json({
            title: 'An error occurred',
            error: err
          });
        }
        res.json(job);
      })
    })

    .patch((req, res) => {
      Vacancy.findById(req.params.job_id, (err, job) => {
        if (err) {
          return res.status(404).json({
            title: 'An error occurred',
            error: err
          });
        }
        if (!job) {
          return res.status(404).json({
            title: 'No documen found',
            error: {message: 'Job could not be found'}
          });
        }
        job.status = req.body.status;
        job.save((err, result) => {
          if (err) {
            return res.status(404).json({
              title: 'An error occurred',
              error: err
            });
          }
          res.status(200).json(result);
        });
      });
    });

return apiRouter;

}
