const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Navn: ${body.name}\r\n
    Email: ${body.email}\r\n
    Telefonnummer: ${body.phone}\r\n
    Emne: ${body.value}\r\n
    Besked: ${body.message}
  `;

  const data = {
    to: 'hello@growupstudio.dk',
    from: 'rasmus@growupstudio.dk',
    subject: `${body.name} ønsker et tilbud på ${body.value}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };
  
  await mail.send(data);

  res.status(200).json({ status: 'OK' });
};
