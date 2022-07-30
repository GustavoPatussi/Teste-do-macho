// var nome;
var pontuacao = 0;
var indice;
var Elementos = [
  {
    cardImg:
      'https://i.dietdoctor.com/es/wp-content/uploads/2017/10/Alcohol-16-9-less.jpg?auto=compress%2Cformat&w=400&h=225&fit=crop',
    cardTitle: 'Bebidas',
    button1: 'cachaças, cervejas, wiskys',
    pt1: 30,
    button2: 'vinho, vodka',
    pt2: 20,
    button3: 'caipifruta, campari',
    pt3: 10,
    button4: 'suco de açaí, carambola, cupuaçu com adocantes',
    pt4: 5,
    pt: 0,
    control: '1',
  },
  {
    cardImg:
      'https://thumbs.dreamstime.com/b/equipamento-de-esportes-no-branco-4114767.jpg',
    cardTitle: 'Esportes',
    button1: 'Futebol, automobilismo, pesca, sinuca, esportes radicais',
    pt1: 30,
    button2: 'boliche, golfe, polo',
    pt2: 15,
    button3: 'airóbica, spinning',
    pt3: 10,
    button4: 'trilha, patinação no gelo, ginástica olímpica, crosfit',
    pt4: 5,
    pt: 0,
    control: '1',
  },
  {
    cardImg:
      'https://s2.glbimg.com/PDoy2ClWG7sByaMNDAb86UlvS5U=/e.glbimg.com/og/ed/f/original/2019/03/04/comidas-gettyimages-1031571442.jpg',
    cardTitle: 'Comidas',
    button1: 'capivara, javali, gordura, comida muito apimentada',
    pt1: 40,
    button2: 'peixe e salada',
    pt2: 15,
    button3: 'aves acompanhadas de vegetais cozidos no vapor',
    pt3: 5,
    button4: 'churrasco, massa, frituras',
    pt4: 25,
    pt: 0,
    control: '1',
  },
  {
    cardImg:
      'https://static8.depositphotos.com/1361307/915/i/450/depositphotos_9155150-stock-photo-personal-hygiene-products.jpg',
    cardTitle: 'Higiene',
    button1: 'banho rápido, sabão em barra',
    pt1: 40,
    button2: 'banho no capricho',
    pt2: 25,
    button3: 'demora meia hora, sabonete líquido',
    pt3: 15,
    button4: 'banho com sais e espumas na banheira',
    pt4: -15,
    pt: 0,
    control: '1',
  },
  {
    cardImg:
      'https://img.freepik.com/vetores-gratis/canecas-de-cerveja-com-espuma-em-estilo-vintage_225004-1146.jpg?size=626&ext=jpg&ga=GA1.2.93717574.1657388635',
    cardTitle: 'cerveja',
    button1: 'gelada, em grandes quantidades',
    pt1: 40,
    button2: 'extra, premiun e importadas',
    pt2: 25,
    button3: 'as vezes para matar a sede',
    pt3: 10,
    button4: 'sem alcool',
    pt4: 5,
    pt: 0,
    control: '1',
  },
  {
    cardImg: 'https://thumbs.dreamstime.com/b/caixa-de-presente-16411884.jpg',
    cardTitle: 'presentes',
    button1: 'ferramentas',
    pt1: 40,
    button2: 'eletrônicos, roupas',
    pt2: 25,
    button3: 'flores',
    pt3: 10,
    button4: 'perfumes, doces, velas aromáticas',
    pt4: 5,
    pt: 0,
    control: '1',
  },
  {
    cardImg:
      'https://http2.mlstatic.com/D_NQ_NP_620522-MLB32627174272_102019-V.jpg',
    cardTitle: 'cremes',
    button1: 'só creme dental',
    pt1: 40,
    button2: 'protetor solar em praia e piscina',
    pt2: 25,
    button3: 'cremes no verão',
    pt3: 10,
    button4: 'não vive sem hidratante',
    pt4: 5,
    pt: 0,
    control: '1',
  },
  {
    cardImg:
      'https://images.tcdn.com.br/img/img_prod/743239/zamioculca_facil_de_cuidar_pote_11_281_1_6eaf06476b1194b38990f68b5fed5910_20210709152852.jpg',
    cardTitle: 'plantas',
    button1: 'nem pra comer',
    pt1: 40,
    button2: 'tem umas no quintal mas não rega',
    pt2: 25,
    button3: 'tem na varanda do apartamento',
    pt3: 10,
    button4: 'rega, poda e conversa com as flores do jardim',
    pt4: 5,
    pt: 0,
    control: '1',
  },
  {
    cardImg:
      'https://img.elo7.com.br/product/main/1154F59/espelhos-veneziano-dourado-moldura-veneziana.jpg',
    cardTitle: 'relação com espelho',
    button1: 'não usa',
    pt1: 40,
    button2: 'fazer barba, pentar cabelo',
    pt2: 20,
    button3: 'adimira sua pele e músculos',
    pt3: 10,
    button4: 'adimira-se com diferentes camisas e penteados',
    pt4: 5,
    pt: 0,
    control: '1',
  },
  {
    cardImg:
      'https://vejasp.abril.com.br/wp-content/uploads/2021/06/PBY_0886.jpg.jpg',
    cardTitle: 'carros',
    button1: 'Maverik v8',
    pt1: 40,
    button2: 'Civic, Corola, Cerato',
    pt2: 25,
    button3: 'Nissan March, Honda Fit',
    pt3: 5,
    button4: 'Celta, Fox',
    pt4: 1,
    pt: 0,
    control: '1',
  },
];
function comecarTeste() {
  var cardInicial = document.getElementById('cardInicial');
  const inputNome = document.getElementById('inputNome');

  if (inputNome.value == '') {
    alert('Os campos são obrigatórios');
    return;
  }
  cardInicial.innerHTML = '';
  loadCard();
}
function loadCard() {
  var CardHtml = document.getElementById('Card');
  var btnVoltar = document.getElementById('principal');
  btnVoltar.innerHTML = '';
  CardHtml.innerHTML = '';
  for (var i = 0; i < Elementos.length + 1; i++) {
    if (i == Elementos.length) {
      exibirResultado();
      break;
    }
    if (Elementos[i].control == '1') {
      indice = i;
      Elementos[i].control = '0';
      createCard(Elementos[i]);
      break;
    }
  }
}

function createCard(element) {
  var body = document.getElementById('principal');
  var CardHtml = document.getElementById('Card');
  CardHtml.setAttribute('class', 'card');
  CardHtml.setAttribute('style', 'width: 18rem;');

  if (indice > 0) {
    var botaoVoltar = document.createElement('button');
    botaoVoltar.setAttribute('class', 'btn btn-secondary');
    botaoVoltar.setAttribute('onclick', 'voltar()');
    botaoVoltar.innerText = 'Voltar';
    body.appendChild(botaoVoltar);
  }

  var imgCard = document.createElement('img');
  imgCard.setAttribute('src', element.cardImg);
  imgCard.setAttribute('class', 'card-img-top');

  var bodyCard = document.createElement('div');
  bodyCard.setAttribute('class', 'card-body');

  var titleCard = document.createElement('h5');
  titleCard.setAttribute('class', 'card-title');
  titleCard.innerText = element.cardTitle;

  var opcao1 = document.createElement('button');
  opcao1.setAttribute('class', 'btn btn-primary');
  opcao1.setAttribute('onclick', 'salvar1()');
  opcao1.innerText = element.button1;

  var opcao2 = document.createElement('button');
  opcao2.setAttribute('class', 'btn btn-primary');
  opcao2.setAttribute('onclick', 'salvar2()');
  opcao2.innerText = element.button2;

  var opcao3 = document.createElement('button');
  opcao3.setAttribute('class', 'btn btn-primary');
  opcao3.setAttribute('onclick', 'salvar3()');
  opcao3.innerText = element.button3;

  var opcao4 = document.createElement('button');
  opcao4.setAttribute('class', 'btn btn-primary');
  opcao4.setAttribute('onclick', 'salvar4()');
  opcao4.innerText = element.button4;

  bodyCard.appendChild(titleCard);
  bodyCard.appendChild(opcao1);
  bodyCard.appendChild(opcao2);
  bodyCard.appendChild(opcao3);
  bodyCard.appendChild(opcao4);
  if (element.button5 != undefined) {
    var opcao5 = document.createElement('button');
    opcao5.setAttribute('class', 'btn btn-primary');
    opcao5.setAttribute('onclick', 'salvar5()');
    opcao5.innerText = element.button5;
    bodyCard.appendChild(opcao5);
  }

  CardHtml.appendChild(imgCard);
  CardHtml.appendChild(bodyCard);
}

function exibirResultado() {
  if (pontuacao >= 350) {
    const Conan = {
      cardImg:
        'https://upload.wikimedia.org/wikipedia/pt/d/d4/Conan_por_Joe_Jusko.jpg',
      cardTitle: 'Conan',
      cardText: 'Parabêns, você está no nível Macho Alpha',
    };
    cardFinal(Conan);
  }
  if (pontuacao < 350 && pontuacao >= 230) {
    const Macho = {
      cardImg:
        'https://1.bp.blogspot.com/-x-5iGVCKiGE/XoiLSIl6DBI/AAAAAAABofE/0D0Cd4EW87g3UyUmLMSVQGDvAEBdEFuWACLcBGAsYHQ/s1600/como-ser-um-homem-mais-atraente%2B%25282%2529.jpg',
      cardTitle: 'Macho',
      cardText: 'Você é como um homem deveria ser',
    };
    cardFinal(Macho);
  }
  if (pontuacao < 230 && pontuacao >= 160) {
    const TendenciasGays = {
      cardImg:
        'https://extra.globo.com/incoming/23382499-698-bd3/w448/lucky-3.png',
      cardTitle: 'Tendências gays',
      cardText: 'Você deverias começar a se procupar',
    };
    cardFinal(TendenciasGays);
  }
  if (pontuacao < 160 && pontuacao >= 90) {
    const Gay = {
      cardImg:
        'https://i0.wp.com/teamcomics.com.br/wp-content/uploads/2021/11/IMG-20211113-WA0082.jpg?fit=1280%2C720&ssl=1',
      cardTitle: 'Gay',
      cardText: 'você é',
    };
    cardFinal(Gay);
  }
  if (pontuacao < 90) {
    const Bixona = {
      cardImg:
        'https://blogs.correiobraziliense.com.br/proximocapitulo/wp-content/uploads/sites/27/2018/02/escolinha2.jpg',
      cardTitle: 'Bixona',
      cardText: 'parabêns, você está no nível de uma gazela saltitante',
    };
    cardFinal(Bixona);
  }
}

function salvar1() {
  pontuacao += Elementos[indice].pt1;
  Elementos[indice].pt = Elementos[indice].pt1;
  loadCard();
}
function salvar2() {
  pontuacao += Elementos[indice].pt2;
  Elementos[indice].pt = Elementos[indice].pt2;
  loadCard();
}
function salvar3() {
  pontuacao += Elementos[indice].pt3;
  Elementos[indice].pt = Elementos[indice].pt3;
  loadCard();
}
function salvar4() {
  pontuacao += Elementos[indice].pt4;
  Elementos[indice].pt = Elementos[indice].pt4;
  loadCard();
}

function cardFinal(element) {
  var CardHtml = document.getElementById('Card');
  CardHtml.setAttribute('class', 'card');
  CardHtml.setAttribute('style', 'width: 18rem;');

  var imgCard = document.createElement('img');
  imgCard.setAttribute('src', element.cardImg);
  imgCard.setAttribute('class', 'card-img-top');

  var bodyCard = document.createElement('div');
  bodyCard.setAttribute('class', 'card-body');

  var titleCard = document.createElement('h5');
  titleCard.setAttribute('class', 'card-title');
  titleCard.innerText = element.cardTitle;

  var textCard = document.createElement('p');
  textCard.setAttribute('class', 'card-text');
  textCard.innerText = element.cardText;

  bodyCard.appendChild(titleCard);
  bodyCard.appendChild(textCard);
  CardHtml.appendChild(imgCard);
  CardHtml.appendChild(bodyCard);
}
function voltar() {
  if (indice > 0) {
    pontuacao -= Elementos[indice - 1].pt;
    Elementos[indice - 1].control = '1';
    Elementos[indice].control = '1';
    loadCard();
  }
}
