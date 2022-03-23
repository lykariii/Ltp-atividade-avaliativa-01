class Noticia {
  constructor(titulo, datadepublicacao, resumo, texto){
    this.titulo = titulo;
    this.data = datadepublicacao;
    this.resumo = resumo;
    this.texto = texto;
  }

  mostrarNoticia(){
    return this.titulo + "\n" + this.data + "\n" + this.resumo + "\n" + this.texto;
  }
}

let noticia = new Noticia("comida", "23/03/2022", "if vai da comida", "ifms vai destribuir comida para todos os alunos nessa quarta-feira.");

console.log(noticia.mostrarNoticia())