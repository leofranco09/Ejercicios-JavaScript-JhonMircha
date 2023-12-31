/*27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director,
 año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family,
 Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short,
  Sport, Talk-Show, Thriller, War, Western.*/

  class Pelicula {
   constructor({ id, titulo, director, estreno, pais, genero, calificacion}){
      this.id = id;
      this.titulo = titulo;
      this.director = director;
      this.estreno = estreno;
      this.pais = pais;
      this. genero = genero;
      this.calificacion = calificacion;

      this.validarIMDB(id);
      this.validarTitulo(titulo);
      this.validarDirector(director);
      this.validarEstreno(estreno);
      this.validarPais(pais);
      this.validarGeneros(genero);
      this.validarCalificacion(calificacion);
   }

   static get ListaGeneros() {
    return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family",
 "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short",
  "Sport", "Talk-Show", "Thriller", "War", "Western"]
   }
   static generosAceptados() {
    return console.info(`Los generos aceptados son: ${Pelicula.ListaGeneros.join(", ")}`);
   }

   validarCadena(propiedad, valor) {
      if(!valor) return console.warn(`${propiedad}: "${valor}" estan vacios`);
      if(typeof valor !== "string") return console.warn(`${propiedad}: "${valor}" ingresado no es una cadena de texto`);
      return true;
   };
   validarLongitudCadena(propiedad, valor, longitud) {
      if(valor.length > longitud) return console.error(`${propiedad}: "${valor}" exede el numero de caracteres permitidos (${longitud})`);
      return true;
   };
   validarNumero(propiedad, numero) {
    if(!numero) return console.error(`${propiedad}: "${numero}" esta vacio`);
    if(typeof numero !== "number") return console.error(`${propiedad}: "${numero}" no es un numero`);
    return true;
   };

   validarArreglo(propiedad, valor) {
    if(!valor) return console.warn(`${propiedad}: "${valor}" esta Vacio`);
    if(!(valor instanceof Array)) return console.error(`${propiedad}: ${valor} No es un Arreglo`);
    if(valor === 0) return console.warn(`${propiedad}: "${valor}" NO tiene datos disponibles`);
    for(let arr of valor){
      if(typeof arr !== "string") return console.error(`El valor "${arr}", No es una Cadena de Texto`);
    };
    return true;
   }

// funciones a integra dentro del constructor
   validarIMDB(id) {
      if(this.validarCadena("IMDB id", id)){
          if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
            return console.error(`ÌMDB id ${id}, no es valido, debe tener 9 caracteres, 2 letras y 7 numeros`);
          }
      }
   };
   validarTitulo(titulo) {
    if(this.validarCadena("Titulo", titulo))  {
      this.validarLongitudCadena("Titulo", titulo, 100);
    }
   };
   validarDirector(director) {
    if(this.validarCadena("Director", director)) {
      this.validarLongitudCadena("Director", director, 50);
    }
   };
   validarEstreno(estreno) {
    if(this.validarNumero("Año de Estreno", estreno)){
      if(!(/^([0-9]){4}$/.test(estreno))){
        return console.error(`Año de estreno "${estreno}" no es Valido, debe ser un numero de 4 digitos`);
      }
    }
   };
   validarPais(pais) {
    this.validarArreglo("Pais", pais);
   };
   validarGeneros(genero){
    if(this.validarArreglo("Generos", genero)) {
      for(let gen of genero){
        if(!Pelicula.ListaGeneros.includes(gen)){
          console.error(`Generos No Permitidos "${genero.join(", ")}`)
          Pelicula.generosAceptados();
        }
      }
    }
   }
   validarCalificacion(calificacion) {
    if(this.validarNumero("Calificacion", calificacion)) {
      return (calificacion < 0 || calificacion > 10)
      ? console.warn("La calificacion tiene que estar entre 0 y 10")
      : this.calificacion = calificacion.toFixed(1);
    }
   }
   fichaTecnica() {
    console.info(`Ficha Tecnica\nTítulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPais: 
    "${this.pais.join(", ")}"\nGéneros: "${this.genero.join(", ")}"\nCalificacíon: "${this.calificacion}"\nIMDB: "${this.id}"`);
   }

  };

  //Pelicula.generosAceptados();
  const peli = new Pelicula({
   id: "tt1234567",
   titulo: "Titulo de la Pelicula",
   director: "Director de la pelicula",
   estreno: 2002,
   pais: ["Argentina", "Chile"],
   genero: ["Comedy", "Family"],
   calificacion: 7.20
  });
  peli.fichaTecnica();

  const mispelis = [
    {
      id: "tt0758758",
      titulo: "Into the Wild",
      director: "Sean Penn",
      estreno: 2007,
      pais: ["USA"],
      genero: ["Adventure", "Biography", "Drama"],
      calificacion: 8.1
    },
    {
      id: "tt0479522",
      titulo: "Rock Balboa",
      director: "Silvester Stallone",
      estreno: 2006,
      pais: ["USA"],
      genero: ["Action", "Sport", "Drama"],
      calificacion: 7.1
    },
    {
      id: "tt4582167",
      titulo: "The Dark Knight",
      director: "Christopher Nolan",
      estreno: 2008,
      pais: ["USA", "UK"],
      genero: ["Action", "Crime", "Drama"],
      calificacion: 9.0
    }
  ];

  mispelis.forEach(peli => new Pelicula(peli).fichaTecnica());