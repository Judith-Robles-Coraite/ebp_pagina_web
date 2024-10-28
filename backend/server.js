import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor de envío de correos!');
});

app.post('/send-email', (req, res) => {
  const { firstName, lastName, profession, phone, email, program, qualification } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'roblesjudith15@gmail.com', // Cambia esto a tu correo
      pass: 'xkrr egyh slbs ktmp', // Cambia esto a tu contraseña de aplicación
    },
  });

  let mailOptions = {
    from: email,
    to: 'roblesjudith15@gmail.com', // Correo donde recibirás los formularios
    subject: `Consulta de ${firstName} ${lastName}`,
    text: `
      Nombre: ${firstName} ${lastName}
      Profesión: ${profession}
      Teléfono: ${phone}
      Correo: ${email}
      Programa de interés: ${program}
      Nivel de titulación: ${qualification}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error al enviar el correo');
    }
    res.status(200).send('Correo enviado correctamente');
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
