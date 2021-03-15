const generateTemplate = (token) => {

changePasswordLink = `${process.env.WEBSITE_HOST}change-password/${token}/`;

const template = `
<!-- start preheader -->
<div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
  Reset Your Password Using The Link Below
</div>
<!-- end preheader -->

<!-- start body -->
<table border="0" cellpadding="0" cellspacing="0" width="100%">

 

  <!-- start hero -->
  <tr>
    <td align="center" bgcolor="#e9ecef">
      <!--[if (gte mso 9)|(IE)]>
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
      <tr>
      <td align="center" valign="top" width="600" style="margin: 3rem 0">
      <![endif]-->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; margin: 3rem 0;font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
            <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">Reset Your Password</h1>
          </td>
          <!-- start copy -->
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
              <p style="margin: 0;">Copy the link below into your browser to reset your password to reset your password.</p>
              <p>${changePasswordLink}</p>
            </td>
          </tr>
          <!-- end copy -->
        </tr>
      </table>
      <!--[if (gte mso 9)|(IE)]>
      </td>
      </tr>
      </table>
      <![endif]-->
    </td>
  </tr>
  <!-- end hero -->

  <!-- start copy block -->
  <tr>
    <td align="center" bgcolor="#e9ecef">
      <!--[if (gte mso 9)|(IE)]>
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
      <tr>
      <td align="center" valign="top" width="600">
      <![endif]-->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

       

        
      


      </table>
      <!--[if (gte mso 9)|(IE)]>
      </td>
      </tr>
      </table>
      <![endif]-->
    </td>
  </tr>
  <!-- end copy block -->

  

</table>
<!-- end body -->

`

return template;
}

module.exports = generateTemplate;