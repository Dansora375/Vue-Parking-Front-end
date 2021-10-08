import validator from 'email-validator';

const types = {
  GUARDA: 'Guarda',
  SUPERVISOR: 'Supervisor',
  GERENTE: 'Gerente',
};
// function decideType
function decideType(tipo_) {
  // eslint-disable-next-line max-len
  let type = Object.values(types)[Object.values(types).map((tipo) => tipo.toLowerCase()).indexOf(tipo_.toLowerCase())];
  if (type === undefined) {
    type = types.GUARDA;
  }
  return type;
}
export default function ({
  Cedula, Nombre, user, email, contrasena, tipo = 'Guarda',
}) {
  this.Cc = Cedula;
  this.nombre = Nombre;
  this.user = user;
  this.email = email;
  this.password = contrasena;
  this.type = decideType(tipo);
  // eslint-disable-next-line func-names
  this.validation = function () {
    validator.validate(this.email);
  };
  this.data = {
    Cc: this.Cc,
    name: this.nombre,
    user: this.user,
    email: this.email,
    password: this.password,
    type: this.type,
  };
}
