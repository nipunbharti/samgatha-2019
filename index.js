const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// SendGrid options
const options = {
    service: 'SendGrid',
    auth: {
      api_user: SENDGRID_USERNAME,
      api_key: SENDGRID_PASSWORD
    }
};

// Configure SendGrid client
const client = nodemailer.createTransport(sgTransport(options));

app.use(bodyParser.json());

app.post('/sendEmail', (req, res) => {
    // Send mail using SendGrid service
    console.log(`Post request: ${req.body.email}`);
    const email_message = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" /><!--[if !mso]><!--> <meta http-equiv="X-UA-Compatible" content="IE=Edge" /><!--<![endif]--> <!--[if (gte mso 9)|(IE)]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--> <!--[if (gte mso 9)|(IE)]> <style type="text/css"> body {width: 600px;margin: 0 auto;} table {border-collapse: collapse;} table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;} img {-ms-interpolation-mode: bicubic;} </style> <![endif]--> <style type="text/css"> body, p, div { font-family: arial; font-size: 14px; } body { color: #000000; } body a { color: #1188E6; text-decoration: none; } p { margin: 0; padding: 0; } table.wrapper { width:100% !important; table-layout: fixed; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; -ms-text-size-adjust: 100%; } img.max-width { max-width: 100% !important; } .column.of-2 { width: 50%; } .column.of-3 { width: 33.333%; } .column.of-4 { width: 25%; } @media screen and (max-width:480px) { .preheader .rightColumnContent, .footer .rightColumnContent { text-align: left !important; } .preheader .rightColumnContent div, .preheader .rightColumnContent span, .footer .rightColumnContent div, .footer .rightColumnContent span { text-align: left !important; } .preheader .rightColumnContent, .preheader .leftColumnContent { font-size: 80% !important; padding: 5px 0; } table.wrapper-mobile { width: 100% !important; table-layout: fixed; } img.max-width { height: auto !important; max-width: 480px !important; } a.bulletproof-button { display: block !important; width: auto !important; font-size: 80%; padding-left: 0 !important; padding-right: 0 !important; } .columns { width: 100% !important; } .column { display: block !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important; margin-left: 0 !important; margin-right: 0 !important; } } </style> <!--user entered Head Start--> <!--End Head user entered--> </head> <body> <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size: 14px; font-family: arial; color: #000000; background-color: #FBFBFF;"> <div class="webkit"> <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FBFBFF"> <tr> <td valign="top" bgcolor="#FBFBFF" width="100%"> <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0"> <tr> <td width="100%"> <table width="100%" cellpadding="0" cellspacing="0" border="0"> <tr> <td> <!--[if mso]> <center> <table><tr><td width="600"> <![endif]--> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width:600px;" align="center"> <tr> <td role="modules-container" style="padding: 0px 5px 0px 0px; color: #000000; text-align: left;" bgcolor="#ffffff" width="100%" align="left"> <table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;"> <tr> <td role="module-content"> <p>Samgatha Webops</p> </td> </tr> </table> <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;"> <tr> <td style="font-size:6px;line-height:10px;padding:0px 0px 0px 0px;" valign="top" align="center"> <img class="max-width" border="0" style="display:block;color:#000000;text-decoration:none;font-family:Helvetica, arial, sans-serif;font-size:16px;max-width:25% !important;width:25%;height:auto !important;" src="https://marketing-image-production.s3.amazonaws.com/uploads/5ed5898386c69af830f6988dc305ebfcbd6fc2faa0995a33d47d5c86b99683a9ec9f24d0fe0387039706ef7c5b3b3b06fe44bce15660cfb97040e8f31bae1c94.png" alt="" width="148.75"> </td> </tr> </table> <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;"> <tr> <td style="padding:18px 0px 1px 0px;line-height:22px;text-align:inherit;" height="100%" valign="top" bgcolor=""> <div><strong><span style="font-size:18px;">Hello ' + req.body.name + ',</span></strong></div> </td> </tr> </table> <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;"> <tr> <td style="padding:18px 0px 18px 0px;line-height:22px;text-align:inherit;" height="100%" valign="top" bgcolor=""> <div><span style="font-size:16px;">Samgatha 2018 is almost here! We hope you are all geared up for the 3-day festive extravaganza.</span></div><div>&nbsp;</div><div><span style="font-size:16px;">The mail is to inform you about a few key aspects about your participation at&nbsp;Samgatha.</span></div><div>&nbsp;</div><div><span style="font-size:16px;">1. <strong>Samgatha ID:&nbsp;</strong>This is the ID you receive upon registering on the website.</span><br />&nbsp;</div><div><span style="font-size:16px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;This is your Samgatha ID: <strong>' + req.body.id + '</strong></span></div><div>&nbsp;</div><div><span style="font-size:16px;">2. <strong>Samgatha Passport:&nbsp;</strong>A document containing all the information about events,&nbsp;lectures, exhibitions, helpline numbers etc. The passport is essential to&nbsp;participate in all events of Samgatha. Follow&nbsp; these steps to obtain your&nbsp;passport:</span></div><div>&nbsp;</div><ul><li><span style="font-size:16px;">Visit the registration desk at Academic block. There will be student volunteers around the place to help you with the registration.</span><br />&nbsp;</li><li><span style="font-size:16px;">Produce your Samgatha ID or show this mail at the registration desk, pay <strong>INR 200</strong> as a fee and obtain your passport.</span></li></ul><div>&nbsp;</div><div><span style="font-size:16px;"><strong>Please note:&nbsp;</strong>All the participants in a team must have individual Samgatha IDs&nbsp;and should have separate passports to participate in the event.</span></div><div>&nbsp;</div><div><span style="font-size:16px;">Hope to see you soon at Samgatha, IIITDM Kancheepuram!</span></div><div>&nbsp;</div><div><span style="font-size:16px;">Regards,</span></div><div>&nbsp;</div><div><span style="font-size:16px;">The Samgatha Team</span></div><div>&nbsp;</div><div><span style="font-size:16px;">Stay tuned to our pages for regular updates.</span></div><div>&nbsp;</div> </td> </tr> </table> <table class="module" role="module" data-type="social" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;"> <tbody> <tr> <td valign="top" style="padding:0px 0px 0px 0px;font-size:6px;line-height:10px;"> <table align="center"> <tbody> <tr> <td style="padding: 0px 5px;"> <a role="social-icon-link" href="https://www.facebook.com/samgathaatiiitdm/" target="_blank" alt="Facebook" data-nolink="false" title="Facebook " style="-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;display:inline-block;background-color:#3B579D;"> <img role="social-icon" alt="Facebook" title="Facebook " height="30" width="30" style="height: 30px, width: 30px" src="https://marketing-image-production.s3.amazonaws.com/social/white/facebook.png" /> </a> </td> <td style="padding: 0px 5px;"> <a role="social-icon-link" href="https://twitter.com/samgatha" target="_blank" alt="Twitter" data-nolink="false" title="Twitter " style="-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;display:inline-block;background-color:#7AC4F7;"> <img role="social-icon" alt="Twitter" title="Twitter " height="30" width="30" style="height: 30px, width: 30px" src="https://marketing-image-production.s3.amazonaws.com/social/white/twitter.png" /> </a> </td> <td style="padding: 0px 5px;"> <a role="social-icon-link" href="https://www.instagram.com/samgatha/" target="_blank" alt="Instagram" data-nolink="false" title="Instagram " style="-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;display:inline-block;background-color:#7F4B30;"> <img role="social-icon" alt="Instagram" title="Instagram " height="30" width="30" style="height: 30px, width: 30px" src="https://marketing-image-production.s3.amazonaws.com/social/white/instagram.png" /> </a> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <div data-role="module-unsubscribe" class="module unsubscribe-css__unsubscribe___2CDlR" role="module" data-type="unsubscribe" style="color:#444444;font-size:12px;line-height:20px;padding:16px 16px 16px 16px;text-align:center"><div class="Unsubscribe--addressLine"><p class="Unsubscribe--senderName" style="font-family:Arial,Helvetica, sans-serif;font-size:12px;line-height:20px">Samgatha Webops</p><p style="font-family:Arial,Helvetica, sans-serif;font-size:12px;line-height:20px"><span class="Unsubscribe--senderAddress">IIITDM</span>, <span class="Unsubscribe--senderCity">Kancheepuram</span>, <span class="Unsubscribe--senderState">Tamil Nadu</span> <span class="Unsubscribe--senderZip">600127</span> </p></div></div> </td> </tr> </table> <!--[if mso]> </td></tr></table> </center> <![endif]--> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </div> </center> </body></html>';
    const email = {
        from: 'Samgatha Webops <webops@samgatha.org>',
        to: req.body.email,
        subject: 'Samgatha 2018 ID and Passport',
        text: 'Hello, your Samgatha ID is successfully generated',
        html: email_message
    }

    client.sendMail(email, (err, info) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log('Message sent: ' + info.response);
        }
    });
});

if (process.env.NODE_ENV == 'production') {
    // Serve the static react app files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Serve index.html file
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}...`);
});
