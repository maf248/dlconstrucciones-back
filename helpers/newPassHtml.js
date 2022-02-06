newPassHtml = (email, link) => {
    return `<!DOCTYPE html>
    <html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="x-apple-disable-message-reformatting">
      <title>Cambio de contraseña de ${email}</title>
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <![endif]-->
      <style>
        table, td, div, h1, p {font-family: Arial, sans-serif;}
      </style>
    </head>
    <body style="margin:0;padding:0;">
      <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
        <tr>
          <td align="center" style="padding:0;">
            <table role="presentation" style="width:650px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
              <tr>
                <td align="center" style="padding:40px 0 30px 0;background:radial-gradient(white, #4bb0d0);">
                  <img src="http://www.dlnconstrucciones.com.ar/assets/logo.png" alt="DLN Construcciones" width="300" style="height:auto;display:block;" />
                </td>
              </tr>
              <tr>
                <td style="padding:36px 30px 42px 30px;">
                  <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                    <tr>
                      <td style="padding:0 0 20px 0;color:#153643;">
                        <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">Restablecimiento de contraseña:</h1>
                        <hr>
                        <br>
                        <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Para restablecer la contraseña de tu cuenta ${email}, haz click <a href="${link}">aquí</a>.<br> En caso que vos no hayas restablecido la contraseña por favor ignora este email.</p>
                        <br>
                        <hr>
                      </td>
                    </tr>
                   
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:30px;background:#4bb0d0!important;">
                  <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                    <tr>
                      <td style="padding:0;width:50%;" align="left">
                        <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;"><a href="http://www.dlnconstrucciones.com.ar/" style="color:#ffffff;text-decoration:none;">
                          @ 2022 DLN Construcciones<br/></a>
                        </p>
                      </td>
                      <td style="padding:0;width:50%;" align="right">
                        <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                          <tr>
                            <td style="padding:0 0 0 20px;width:38px;">
                              <a href="https://www.instagram.com/dln_construcciones/" style="color:#ffffff;"><img src="http://www.dlnconstrucciones.com.ar/assets/icon-instagram.png" alt="Twitter" width="38" style="height:auto;display:block;border:0;" /></a>
                            </td>
                            <td style="padding:0 0 0 20px;width:38px;">
                              <a href="https://www.facebook.com/dlnconstrucciones/" style="color:#ffffff;"><img src="http://www.dlnconstrucciones.com.ar/assets/icon-facebook.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>`;
};

module.exports = newPassHtml;