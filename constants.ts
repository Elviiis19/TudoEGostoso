import { Category, Recipe } from './types';

export const CATEGORIES: Category[] = [
  { id: 'economia', label: 'Economia Real', description: 'Até R$20', iconName: 'wallet' },
  { id: 'emergencia', label: 'Substitutos', description: 'Salva-Jantar', iconName: 'life-buoy' },
  { id: 'rapida', label: '15 Minutos', description: 'Express', iconName: 'timer' },
  { id: 'zero-waste', label: 'Zero Desperdício', description: 'Integral', iconName: 'recycle' },
  { id: 'airfryer', label: 'Air Fryer', description: 'Sem Óleo', iconName: 'zap' },
];

export const RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Omelete de Caneca Cremosa',
    description: 'Um café da manhã proteico e rápido, pronto em menos de 5 minutos usando apenas o micro-ondas.',
    time: 5,
    prepTime: 2,
    cookTime: 3,
    cost: 4.50,
    servings: 1,
    imageUrl: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=675&q=80',
    categoryIds: ['rapida', 'economia'],
    rating: 4.8,
    ratingCount: 124,
    author: 'Chef Ana',
    publishedDate: '2023-10-15',
    economyTip: 'Usar o micro-ondas gasta 70% menos energia que ligar o fogão para uma única porção.',
    performance: {
      costPerServing: 4.50,
      economyComparison: '80% mais barato que padaria',
      activeTime: 2,
      waitTime: 3
    },
    ingredients: [
      { item: 'ovos grandes', amount: 2, unit: 'unid.' },
      { item: 'leite', amount: 2, unit: 'col. sopa', substitution: 'água ou leite vegetal' },
      { item: 'queijo ralado', amount: 1, unit: 'col. sopa' },
      { item: 'tomate picado', amount: 0.5, unit: 'unid.' },
      { item: 'Sal e pimenta', amount: 'a gosto', unit: '' },
      { item: 'Cebolinha', amount: 'a gosto', unit: '' }
    ],
    instructions: [
      { text: 'Em uma caneca grande untada com azeite, bata os ovos com um garfo.' },
      { text: 'Adicione o leite, o queijo, o tomate, sal e pimenta. Misture bem.', tip: 'Não encha a caneca até a borda, o ovo vai crescer!' },
      { text: 'Leve ao micro-ondas em potência alta por 1 minuto.' },
      { text: 'Retire, mexa levemente e volte ao micro-ondas por mais 30 a 60 segundos até firmar.' },
      { text: 'Finalize com cebolinha e sirva imediatamente.' }
    ],
    nutrition: { 
      calories: '210 kcal',
      protein: '14g',
      carbs: '4g',
      fat: '15g',
      fiber: '1g'
    },
    equipment: {
      mandatory: ['Caneca de cerâmica (300ml)', 'Garfo'],
      alternativeAppliance: {
        name: 'Frigideira',
        instructions: ['Use uma frigideira pequena untada.', 'Despeje a mistura e cozinhe em fogo baixo com tampa por 4 min.']
      }
    },
    troubleshooting: [
      { problem: 'O ovo explodiu na caneca', solution: 'Você não bateu bem a gema ou usou potência máxima sem pausas. Fure a gema antes de bater.' },
      { problem: 'Ficou borrachudo', solution: 'Cozinhou demais. O ovo continua cozinhando com o calor residual ao sair do micro-ondas.' }
    ],
    foodSafety: {
      prep: ['Verifique se o ovo está fresco mergulhando em água (se boiar, descarte).'],
      conservation: 'Não recomendamos guardar. Consuma imediatamente.'
    },
    faq: [
      { question: 'Posso fazer sem leite?', answer: 'Sim! Você pode substituir o leite por água (fica mais leve) ou leite vegetal sem sabor.' },
      { question: 'Qual o tamanho ideal da caneca?', answer: 'Use uma caneca de pelo menos 300ml. O ovo cresce bastante enquanto cozinha e pode transbordar em xícaras de café.' },
      { question: 'Posso colocar presunto?', answer: 'Com certeza. Presunto picado, peito de peru ou até sobras de frango funcionam muito bem.' },
      { question: 'Por que meu omelete ficou aguado no fundo?', answer: 'Isso acontece se o tomate soltar muita água ou se o micro-ondas não cozinhou por igual. Tente tirar a semente do tomate.' },
      { question: 'Quanto tempo exato deixo no micro-ondas?', answer: 'Depende da potência. Comece com 1 minuto. Se ainda estiver líquido, coloque mais 30 segundos. Não passe de 2 minutos total.' },
      { question: 'Serve para dieta low carb?', answer: 'Sim, é uma receita perfeita para low carb e cetogênica, rica em proteínas e gorduras boas.' },
      { question: 'O que fazer se eu não tiver micro-ondas?', answer: 'Use a técnica da frigideira descrita na seção de Equipamentos logo acima.' },
      { question: 'Posso dobrar a receita na mesma caneca?', answer: 'Não recomendamos. Para 4 ovos, use uma tigela de vidro funda, pois na caneca vai vazar com certeza.' },
      { question: 'Posso bater os ovos na noite anterior?', answer: 'Pode, mas guarde em pote fechado na geladeira e misture novamente antes de colocar no micro-ondas.' },
      { question: 'O gosto fica igual ao de frigideira?', answer: 'A textura é um pouco mais "suflê" e menos dourada, mas o sabor é muito parecido e suja muito menos louça.' }
    ]
  },
  {
    id: '2',
    title: 'Chips de Casca de Batata',
    description: 'Não jogue fora! As cascas da batata viram um snack crocante, saudável e zero desperdício.',
    time: 20,
    prepTime: 5,
    cookTime: 15,
    cost: 0.50,
    servings: 2,
    imageUrl: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=675&q=80',
    categoryIds: ['zero-waste', 'economia', 'airfryer'],
    rating: 4.5,
    ratingCount: 89,
    author: 'Equipe Sustentável',
    publishedDate: '2023-09-20',
    economyTip: 'Transforma algo que iria para o lixo em um petisco de R$ 0,00.',
    performance: {
      costPerServing: 0.25,
      economyComparison: 'Grátis (Reaproveitamento)',
      activeTime: 5,
      waitTime: 15
    },
    ingredients: [
      { item: 'cascas de batata lavadas', amount: 4, unit: 'unid. (batatas)' },
      { item: 'azeite', amount: 1, unit: 'col. sopa', substitution: 'óleo composto' },
      { item: 'Sal e pimenta', amount: 'a gosto', unit: '' },
      { item: 'Páprica defumada', amount: 'opcional', unit: '' }
    ],
    instructions: [
      { text: 'Certifique-se de que as cascas estejam bem limpas e secas (use papel toalha).', tip: 'Se estiverem molhadas, não ficam crocantes.' },
      { text: 'Em uma tigela, misture as cascas com o azeite e os temperos.' },
      { text: 'Espalhe na cesta da Air Fryer sem sobrepor muito.' },
      { text: 'Asse a 200°C por 10 a 15 minutos, agitando a cesta na metade do tempo.' },
      { text: 'Deixe esfriar por 2 minutos para ficarem bem crocantes.' }
    ],
    substitutions: {
      main: { original: 'Casca de Batata', replace: 'Casca de Batata Doce ou Cenoura (fatiada fina)' },
      fat: { original: 'Azeite', replace: 'Óleo de soja ou Spray de cozinha' }
    },
    equipment: {
      mandatory: ['Air Fryer', 'Tigela', 'Papel Toalha'],
      alternativeAppliance: {
        name: 'Forno Convencional',
        instructions: ['Espalhe em uma assadeira grande.', 'Asse a 200°C por 20-25 minutos.', 'Vire na metade do tempo.']
      }
    },
    nutrition: { 
      calories: '120 kcal',
      protein: '2g',
      carbs: '18g',
      fat: '5g',
      fiber: '3g'
    },
    troubleshooting: [
      { problem: 'Ficou mole', solution: 'As cascas estavam molhadas ou você colocou muitas de uma vez na cesta.' },
      { problem: 'Queimou rápido', solution: 'Corte as cascas com espessura uniforme e diminua a temperatura para 180°C.' }
    ],
    foodSafety: {
      prep: ['Use uma escovinha para lavar as batatas antes de descascar.', 'Remova qualquer parte verde da casca (solanina).'],
      conservation: 'Guarde em pote hermético por até 2 dias.'
    },
    faq: [
      { question: 'As cascas precisam ser orgânicas?', answer: 'Idealmente sim, pois os agrotóxicos se concentram na casca. Se não for orgânica, lave muito bem com escovinha e sabão neutro.' },
      { question: 'Posso fazer com casca de batata doce?', answer: 'Pode sim! O tempo de cozimento é praticamente o mesmo e fica delicioso.' },
      { question: 'Como conservar a crocância?', answer: 'Espere esfriar completamente antes de guardar em um pote hermético (vidro ou plástico) bem fechado.' },
      { question: 'Fica bom no forno convencional?', answer: 'Fica, mas demora um pouco mais (cerca de 25 minutos) e você precisa virar na metade do tempo.' },
      { question: 'Posso temperar depois de pronto?', answer: 'O sal adere melhor enquanto ainda estão quentes e com um pouco de óleo, então tempere antes ou logo ao sair da AirFryer.' }
    ]
  },
  {
    id: '3',
    title: 'Frango Dourado na Air Fryer',
    description: 'Suculento por dentro e dourado por fora, sem usar uma gota de óleo em excesso.',
    time: 25,
    prepTime: 5,
    cookTime: 20,
    cost: 18.00,
    servings: 3,
    imageUrl: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=675&q=80',
    categoryIds: ['airfryer', 'economia'],
    rating: 4.9,
    ratingCount: 340,
    author: 'Chef Leo',
    publishedDate: '2023-11-01',
    economyTip: 'Compra o peito inteiro e corte em cubos em casa para economizar até 30% no preço do quilo.',
    performance: {
      costPerServing: 6.00,
      economyComparison: '50% mais barato que restaurante por quilo',
      activeTime: 5,
      waitTime: 20
    },
    ingredients: [
      { item: 'peito de frango em cubos', amount: 500, unit: 'g' },
      { item: 'limão espremido', amount: 1, unit: 'unid.' },
      { item: 'páprica doce', amount: 1, unit: 'col. chá' },
      { item: 'alho amassado', amount: 2, unit: 'dentes' },
      { item: 'Azeite', amount: 1, unit: 'fio' }
    ],
    instructions: [
      { text: 'Tempere o frango com limão, alho, páprica, sal e azeite. Deixe marinar por 10 min se possível.' },
      { text: 'Preaqueça a Air Fryer a 180°C por 3 minutos.' },
      { text: 'Coloque o frango na cesta e asse por 20 minutos.' },
      { text: 'Vire os pedaços na metade do tempo para dourar por igual.', tip: 'Não amontoe o frango para não cozinhar no vapor.' },
      { text: 'Sirva com arroz branco ou salada.' }
    ],
    substitutions: {
      main: { original: 'Peito de frango', replace: 'Sobrecoxa desossada (mais suculenta, +5 min de cozimento)' },
      dietary: { label: 'Sem Sódio', instruction: 'Substitua o sal por ervas finas e mais limão.' }
    },
    equipment: {
      mandatory: ['Air Fryer', 'Pegador de silicone'],
      alternativeAppliance: {
        name: 'Frigideira',
        instructions: ['Aqueça bem a frigideira com azeite.', 'Sele o frango em fogo alto até dourar.', 'Abaixe o fogo e tampe para cozinhar por dentro.']
      }
    },
    troubleshooting: [
      { problem: 'Frango ficou seco', solution: 'Cortou os cubos muito pequenos ou deixou tempo demais. Cubos de 3cm são ideais.' },
      { problem: 'Frango ficou branco', solution: 'Faltou espaço na cesta. O ar precisa circular. Faça em duas levas se necessário.' }
    ],
    nutrition: { 
       calories: '180 kcal',
       protein: '28g',
       carbs: '1g',
       fat: '6g',
       fiber: '0g'
    },
    foodSafety: {
      prep: ['Nunca lave o frango na pia para evitar contaminação cruzada.'],
      conservation: 'Geladeira: 3 dias. Freezer: 30 dias (descongele na geladeira).'
    },
    faq: [
      { question: 'Preciso usar óleo na AirFryer?', answer: 'Apenas um fio de azeite na marinada é suficiente para o tempero grudar e dourar.' },
      { question: 'Posso colocar papel alumínio?', answer: 'Pode, mas não cubra o frango inteiro. O ar precisa circular para dourar.' },
      { question: 'Como saber se está cozido?', answer: 'Corte o maior pedaço ao meio. Se estiver branco opaco, está pronto. Se estiver rosado, deixe mais tempo.' },
      { question: 'Posso fazer congelado?', answer: 'Não recomendado. Ele vai soltar muita água e cozinhar no vapor em vez de fritar. Descongele antes.' },
      { question: 'A páprica é obrigatória?', answer: 'Não, mas ela ajuda muito na cor dourada. Sem ela o frango pode ficar com aparência pálida.' }
    ]
  },
  {
    id: '4',
    title: 'Macarrão Alho e Óleo Express',
    description: 'A clássica receita italiana em versão ultra rápida para dias corridos.',
    time: 12,
    prepTime: 2,
    cookTime: 10,
    cost: 8.00,
    servings: 2,
    imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91b1d753ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=675&q=80',
    categoryIds: ['rapida', 'economia'],
    rating: 4.7,
    ratingCount: 210,
    author: 'Mama Giulia',
    publishedDate: '2023-08-12',
    economyTip: 'Receita perfeita para final de mês: usa ingredientes que você sempre tem no armário.',
    performance: {
      costPerServing: 4.00,
      economyComparison: '90% mais barato que cantina italiana',
      activeTime: 5,
      waitTime: 7
    },
    ingredients: [
      { item: 'espaguete', amount: 250, unit: 'g' },
      { item: 'alho fatiado', amount: 4, unit: 'dentes' },
      { item: 'azeite extra virgem', amount: 0.25, unit: 'xícara' },
      { item: 'Pimenta calabresa', amount: 'a gosto', unit: '' },
      { item: 'Salsinha', amount: 'a gosto', unit: '' }
    ],
    instructions: [
      { text: 'Cozinhe o macarrão em água salgada até ficar al dente.' },
      { text: 'Enquanto isso, doure o alho no azeite em fogo baixo.', tip: 'Cuidado: alho queimado amarga a receita inteira!' },
      { text: 'Adicione a pimenta calabresa.' },
      { text: 'Escorra o macarrão (reserve um pouco da água) e jogue na frigideira com o alho.' },
      { text: 'Misture bem, adicionando um pouco da água do cozimento para dar cremosidade.' }
    ],
    substitutions: {
      main: { original: 'Espaguete', replace: 'Qualquer massa longa (Linguine, Fettuccine)' },
      fat: { original: 'Azeite', replace: 'Manteiga (vira pasta na burro) - sabor diferente mas delicioso' },
      dietary: { label: 'Sem Glúten', instruction: 'Use macarrão de arroz ou milho.' }
    },
    equipment: {
      mandatory: ['Panela grande para água', 'Frigideira larga', 'Escorredor']
    },
    troubleshooting: [
      { problem: 'Ficou seco', solution: 'Você jogou fora toda a água do cozimento. A água com amido é essencial para o molho.' },
      { problem: 'Alho amargou', solution: 'O fogo estava muito alto. O alho deve dourar lentamente.' }
    ],
    nutrition: { 
       calories: '450 kcal',
       protein: '12g',
       carbs: '65g',
       fat: '18g',
       fiber: '3g'
    },
    foodSafety: {
      prep: ['Use bastante água para cozinhar o macarrão.'],
      conservation: 'Consumo imediato. Reaquecer massa com óleo costuma deixá-la oleosa.'
    },
    faq: [
      { question: 'Posso usar alho pronto picado?', answer: 'Pode, mas o sabor do alho fresco fatiado na hora é infinitamente superior.' },
      { question: 'Qual a quantidade certa de sal na água?', answer: 'A água deve ter gosto de água do mar. Aproximadamente 1 colher de sopa rasa para cada 2 litros.' },
      { question: 'Serve para congelar?', answer: 'Não. Macarrão alho e óleo perde a textura se congelado. Faça apenas a quantidade para comer na hora.' },
      { question: 'O que é "al dente"?', answer: 'É quando a massa está cozida mas ainda oferece uma leve resistência ao morder. Não está mole.' },
      { question: 'Posso adicionar queijo?', answer: 'Tradicionalmente não leva, mas um parmesão ralado na hora fica delicioso!' }
    ]
  },
  {
    id: '5',
    title: 'Bolo de Banana com Casca',
    description: 'Um bolo úmido, delicioso e que aproveita 100% da fruta. Economia inteligente.',
    time: 45,
    prepTime: 10,
    cookTime: 35,
    cost: 12.00,
    servings: 8,
    imageUrl: 'https://images.unsplash.com/photo-1596223575327-99a5be4babed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=675&q=80',
    categoryIds: ['zero-waste', 'economia'],
    rating: 4.6,
    ratingCount: 56,
    author: 'Bela Gil Cover',
    publishedDate: '2023-07-30',
    economyTip: 'Aproveita a fruta inteira. Zero lixo.',
    performance: {
      costPerServing: 1.50,
      economyComparison: 'Metade do preço de bolo de padaria',
      activeTime: 10,
      waitTime: 35
    },
    ingredients: [
      { item: 'bananas maduras com casca', amount: 2, unit: 'unid.' },
      { item: 'farinha de trigo', amount: 2, unit: 'xícaras' },
      { item: 'açúcar', amount: 1, unit: 'xícara' },
      { item: 'leite', amount: 0.5, unit: 'xícara' },
      { item: 'óleo', amount: 0.5, unit: 'xícara' },
      { item: 'ovos', amount: 2, unit: 'unid.' },
      { item: 'fermento', amount: 1, unit: 'col. sopa' }
    ],
    instructions: [
      { text: 'Lave bem as bananas com uma esponja limpa.' },
      { text: 'Corte as bananas com casca em rodelas.' },
      { text: 'Bata no liquidificador: ovos, óleo, leite e as bananas até virar um creme.' },
      { text: 'Em uma tigela, misture a farinha e o açúcar.' },
      { text: 'Junte o creme do liquidificador aos secos e misture bem.' },
      { text: 'Adicione o fermento por último.' },
      { text: 'Asse em forno médio (180°C) por cerca de 35 minutos.' }
    ],
    substitutions: {
      dietary: { label: 'Sem Lactose', instruction: 'Use água ou suco de laranja no lugar do leite.' }
    },
    equipment: {
      mandatory: ['Liquidificador', 'Forma com furo no meio', 'Tigela grande']
    },
    troubleshooting: [
      { problem: 'Bolo solou', solution: 'Fermento velho ou forno frio. Preaqueça o forno sempre!' },
      { problem: 'Ficou amargo', solution: 'A banana não estava madura o suficiente. A casca verde amarga.' }
    ],
    nutrition: { 
       calories: '280 kcal',
       protein: '4g',
       carbs: '42g',
       fat: '11g',
       fiber: '4g'
    },
    foodSafety: {
      prep: ['Higienize muito bem a casca com água e sabão neutro ou solução clorada.'],
      conservation: '3 dias fora da geladeira.'
    },
    faq: [
      { question: 'Sente o gosto da casca?', answer: 'Não! Se a banana estiver bem madura (com pontinhos pretos), o sabor fica indistinguível de um bolo comum.' },
      { question: 'Posso usar farinha integral?', answer: 'Sim, pode substituir 50% ou 100% da farinha, mas o bolo ficará um pouco mais denso.' },
      { question: 'Como saber se está assado?', answer: 'Faça o teste do palito: espete no centro, se sair limpo, está pronto.' },
      { question: 'Posso colocar canela?', answer: 'Deve! Banana e canela combinam perfeitamente. Adicione 1 colher de chá na massa.' },
      { question: 'Preciso tirar os fiapos da banana?', answer: 'Não precisa, tudo será batido no liquidificador.' }
    ]
  },
  {
    id: '6',
    title: 'Torta de Liquidificador Econômica',
    description: 'Sem leite e usando sardinha: a receita salvadora de jantares.',
    time: 35,
    prepTime: 10,
    cookTime: 25,
    cost: 15.00,
    servings: 6,
    imageUrl: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=675&q=80',
    categoryIds: ['emergencia', 'economia'],
    rating: 4.4,
    ratingCount: 42,
    author: 'Vó Maria',
    publishedDate: '2023-10-05',
    performance: {
      costPerServing: 2.50,
      economyComparison: 'Refeição completa por preço de lanche',
      activeTime: 10,
      waitTime: 25
    },
    ingredients: [
      { item: 'farinha de trigo', amount: 2, unit: 'xícaras' },
      { item: 'água (ou caldo)', amount: 2, unit: 'xícaras' },
      { item: 'óleo', amount: 0.5, unit: 'xícara' },
      { item: 'ovos', amount: 3, unit: 'unid.' },
      { item: 'fermento', amount: 1, unit: 'col. sopa' },
      { item: 'sardinha', amount: 1, unit: 'lata' },
      { item: 'seleta de legumes', amount: 1, unit: 'lata' }
    ],
    instructions: [
      { text: 'Bata no liquidificador: água, óleo, ovos e uma pitada de sal.' },
      { text: 'Acrescente a farinha aos poucos batendo sempre. Adicione o fermento no final.' },
      { text: 'Despeje metade da massa em uma forma untada.' },
      { text: 'Coloque o recheio de sardinha e legumes picados.' },
      { text: 'Cubra com o restante da massa.' },
      { text: 'Asse por 30-35 minutos a 200°C.' }
    ],
    substitutions: {
      main: { original: 'Sardinha', replace: 'Sobras de frango, Carne moída, Atum ou apenas Legumes' }
    },
    equipment: {
      mandatory: ['Liquidificador', 'Assadeira retangular']
    },
    troubleshooting: [
      { problem: 'Massa ficou crua no meio', solution: 'Forma muito pequena (massa alta). Use uma forma maior.' }
    ],
    nutrition: { 
       calories: '310 kcal',
       protein: '10g',
       carbs: '38g',
       fat: '14g',
       fiber: '2g'
    },
    foodSafety: {
      prep: ['Verifique a validade da lata de sardinha. Se estufada, descarte.'],
      conservation: 'Geladeira por 3 dias.'
    },
    faq: [
      { question: 'A massa com água fica ruim?', answer: 'Fica um pouco menos rica que com leite, mas fica muito leve e crocante. Se quiser, use um caldo de galinha para dar sabor.' },
      { question: 'Posso usar farinha com fermento?', answer: 'Pode, aí não precisa adicionar o fermento extra.' },
      { question: 'Preciso refogar a sardinha?', answer: 'Não precisa. Como ela já vem cozida e o forno vai assar tudo, pode colocar direto da lata (escorra o óleo).' },
      { question: 'Posso congelar a torta pronta?', answer: 'Sim! Corte em pedaços e congele. Para esquentar, coloque no forno ou airfryer para voltar a crocância.' },
      { question: 'O recheio afunda?', answer: 'Se o recheio for muito pesado ou molhado, pode afundar. Seque bem os legumes antes.' }
    ]
  },
  {
    id: '7',
    title: 'Arroz "Frito" de Ontem',
    description: 'O famoso Yakimeshi simplificado para aproveitar o arroz que sobrou na geladeira.',
    time: 10,
    prepTime: 5,
    cookTime: 5,
    cost: 3.00,
    servings: 2,
    imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb74b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=675&q=80',
    categoryIds: ['zero-waste', 'rapida'],
    rating: 4.8,
    ratingCount: 150,
    author: 'Chef Express',
    publishedDate: '2023-11-10',
    performance: {
      costPerServing: 1.50,
      economyComparison: 'Salva o almoço com R$ 3,00',
      activeTime: 10,
      waitTime: 0
    },
    ingredients: [
      { item: 'arroz cozido', amount: 2, unit: 'xícaras' },
      { item: 'ovos batidos', amount: 2, unit: 'unid.' },
      { item: 'cenoura ralada', amount: 0.5, unit: 'unid.' },
      { item: 'Cebolinha', amount: 'a gosto', unit: '' },
      { item: 'Shoyu', amount: 'opcional', unit: '' }
    ],
    instructions: [
      { text: 'Refogue a cenoura em um pouco de óleo.' },
      { text: 'Empurre a cenoura para o lado e frite os ovos mexidos na mesma panela.' },
      { text: 'Misture tudo e adicione o arroz.' },
      { text: 'Frite por 2 minutos mexendo sempre.', tip: 'O segredo é fogo alto para o arroz não empapar.' },
      { text: 'Finalize com shoyu e cebolinha.' }
    ],
    substitutions: {
      main: { original: 'Arroz', replace: 'Macarrão cozido picado (Yakisoba pobre)' }
    },
    equipment: {
      mandatory: ['Frigideira grande (Wok é ideal)']
    },
    troubleshooting: [
      { problem: 'Virou uma pasta', solution: 'O arroz estava quente ou você usou arroz recém-feito. O segredo é usar arroz GELADO.' }
    ],
    nutrition: { 
       calories: '290 kcal',
       protein: '9g',
       carbs: '45g',
       fat: '8g',
       fiber: '2g'
    },
    foodSafety: {
      prep: ['Arroz velho pode criar bactérias. Só use se foi guardado na geladeira logo após o almoço anterior.'],
      conservation: 'Consumo imediato.'
    },
    faq: [
      { question: 'Posso fazer com arroz fresco?', answer: 'Pode, mas espalhe ele em uma assadeira e deixe esfriar na geladeira por 30min antes. Arroz quente vira papa.' },
      { question: 'Preciso de panela Wok?', answer: 'Não, qualquer frigideira larga serve. O importante é ter espaço para mexer.' },
      { question: 'Quanto de Shoyu eu coloco?', answer: 'Vá devagar! O shoyu é salgado. Coloque 1 colher de sopa, misture e prove.' },
      { question: 'Posso colocar carne?', answer: 'Deve! Sobras de churrasco picadinhas ficam incríveis aqui.' },
      { question: 'Serve como prato principal?', answer: 'Sim, tem carboidrato (arroz), proteína (ovos) e vegetais. É completo.' }
    ]
  },
  {
    id: '8',
    title: 'Pão de Queijo de Frigideira',
    description: 'Matar a vontade de pão de queijo em 8 minutos? Temos!',
    time: 8,
    prepTime: 3,
    cookTime: 5,
    cost: 6.00,
    servings: 1,
    imageUrl: 'https://images.unsplash.com/photo-1615486794611-9a7008719d36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=675&q=80',
    categoryIds: ['rapida', 'emergencia'],
    rating: 4.9,
    ratingCount: 512,
    author: 'Minas Trend',
    publishedDate: '2023-06-15',
    performance: {
      costPerServing: 6.00,
      economyComparison: 'Mais barato que na lanchonete',
      activeTime: 3,
      waitTime: 5
    },
    ingredients: [
      { item: 'goma de tapioca', amount: 2, unit: 'col. sopa' },
      { item: 'ovo', amount: 1, unit: 'unid.' },
      { item: 'requeijão ou cottage', amount: 1, unit: 'col. sopa' },
      { item: 'muçarela picada', amount: 1, unit: 'fatia' },
      { item: 'Sal', amount: 'a gosto', unit: '' }
    ],
    instructions: [
      { text: 'Misture a tapioca, o ovo e o requeijão em uma tigela pequena.' },
      { text: 'Adicione o sal e o queijo picado.' },
      { text: 'Despeje em uma frigideira antiaderente pequena untada.' },
      { text: 'Dobre ao meio quando firmar (como omelete) ou doure dos dois lados.' },
      { text: 'Sirva quente para o queijo derreter.' }
    ],
    substitutions: {
      main: { original: 'Tapioca', replace: 'Polvilho azedo (fica mais parecido com o original, mas precisa hidratar)' }
    },
    equipment: {
      mandatory: ['Frigideira antiaderente pequena', 'Espátula']
    },
    troubleshooting: [
      { problem: 'Grudou tudo', solution: 'Frigideira sem antiaderente ou fogo muito alto.' }
    ],
    nutrition: { 
       calories: '240 kcal',
       protein: '11g',
       carbs: '22g',
       fat: '12g',
       fiber: '0g'
    },
    foodSafety: {
      prep: ['Use ovos frescos.'],
      conservation: 'Consumo imediato.'
    },
    faq: [
      { question: 'É a mesma coisa que crepioca?', answer: 'Quase! A diferença é que esta receita leva mais queijo na massa e requeijão, ficando com textura mais puxa-puxa.' },
      { question: 'Posso guardar a massa na geladeira?', answer: 'Pode por até 24h em pote fechado. Misture antes de usar.' },
      { question: 'Posso fazer na sanduicheira?', answer: 'Pode! Fica parecendo um waffle de pão de queijo. Unte bem a sanduicheira.' },
      { question: 'Qual o melhor queijo?', answer: 'Queijo meia cura ou parmesão fresco dão o sabor mais autêntico de pão de queijo.' },
      { question: 'Posso fazer sem ovo?', answer: 'Não, o ovo é o que dá a liga nessa receita rápida.' }
    ]
  }
];