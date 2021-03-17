// const { number } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

require("colors");
//Tarea crear una nueva opción ('l')
//debe listar
//boolean, debe ser opcional, el valor por defecto es false

console.clear();
// console.log(process.argv);
// console.log(argv);
// console.log("base: yargs", argv.base);
// console.log("base: yargs", argv.b);

//console.log(process.argv);
//el primer y segundo argumento son los path (c/program files..etc)
// const [, , arg3 = "base=5"] = process.argv;
// //el primer argumento es base, el segundo es 5, porque lo separamos con el split
// const [, base = 5] = arg3.split("=");
// console.log(base);

// const base = 3;

crearArchivo(argv.b, argv.l, argv.h)
	.then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creada"))
	.catch((err) => console.log(err));
