// const types = {
//   GUARDA: 'Guarda',
//   SUPERVISOR: 'Supervisor',
//   GERENTE: 'Gerente',
// };
// function decideType
// function decideType(tipo_) {
// eslint-disable-next-line max-len
// let type = Object.values(types)[Object.values(types).map((tipo) => tipo.toLowerCase()).indexOf(tipo_.toLowerCase())];
//   if (type === undefined) {
//     type = types.GUARDA;
//   }
//   return type;
// }
export default function (values) {
  this.Cc = values.Cc;
  this.nombre = values.name;
  this.user = values.user;
  this.email = values.email;
  this.password = values.password;
  // this.type = decideType(tipo);
  // eslint-disable-next-line func-names
  this.data = {
    Cc: this.Cc,
    name: this.nombre,
    user: this.user,
    email: this.email,
    password: this.password,
  };
}
