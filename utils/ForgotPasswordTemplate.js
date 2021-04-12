const generateTemplate = (token) => {

  changePasswordLink = `${process.env.WEBSITE_HOST}change-password/${token}/`;

  const template = `


<body>

<center style="margin:2rem auto;padding:2rem auto;">
<h1 style="color:#CB4745">TechToday</h1>
<h2>Forgot Password. This Expires in 30 Minutes</h2>
<p>Click the Link below to Reset Your Password</p>
<a href="${changePasswordLink}" ><button style="text-decoration: none;color: white;padding: 1rem;background-color: #CB4745;border-radius: 4px; border:none;outline:none;cursor:pointer;">Reset Password</button></a>
</center>
</body>



`;

  return template;
};

module.exports = generateTemplate;
 