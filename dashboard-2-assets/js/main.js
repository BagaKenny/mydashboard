// Get colors from CSS variables
const getColorVariable = (color) => {
    //getComputedStyle() est une méthode permettant de prendre des valeurs
    //définit sur css sur javascript, en ensuite on prends sa valeur avec getPROPERTY()
    //Ensuite eon lui enlève les espaces
    return getComputedStyle(document.documentElement).getPropertyValue(`--color-${color}`).trim();
    console.log(colorPrimary)
    
}
const colorPrimary = getColorVariable('primary'),
 colorAccent = getColorVariable('accent'),
 colorDefault = getColorVariable('default'),
 colorCard = getColorVariable('card'),
 colorLabel = getColorVariable('label');

// Create chartist line chart
const lineChartData = {
    //Series gère l'activité et ses changements, plus le nombre est grand plus il sera grand, long ou foncé
    //Ceux-ci peuvent être plusieurs
    series: [
        [0, 10, 4, 13, 10, 25, 10, 12, 0],
    ],
    //Label c'est ce sont les comparants
    labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep']
};

const lineChart2Data = {
    series: [
        [0, 20, 4, 40, 14, 25, 10, 12, 0],
    ],
    labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep']
};


const lineChartOptions = {
    showArea : true,
    showLabels: true,
    fullWidth: true,
    high: 60,
    low: 0,
    chartPadding: {
        top: 0,
        right: 30,
        bottom: 0,
        left: -20,
    },
    axisX: {
        show: true,
        showLabel: true,
    },
    axisY: {
        showLabel: false,
        showGrid: false,
    }
}

const chartColors = [
    colorPrimary,
    colorAccent
]


const handleCreated = (ctx, index) => {
    const color = chartColors[index - 1];
    const defs = ctx.svg.elem('defs');


    //area dégradé
    defs
    .elem('linearGradient', {
        id: "areaGradient",
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1,
    })
    .elem("stop", {
        offset: 0,
        "stop-color": "rgba(255, 255, 255, 0.1)"
    })
    .parent()
    .elem("stop", {
        offset: 0.9,
        "stop-color": "rgba(255, 255, 255, 0)"
    })
    .parent();

    //grid dégradé
       defs
       .elem('linearGradient', {
           id: "gridGradient",
           gradientUnits: "userSpaceOnUse",
           x1: 0,
           y1: 0,
           x2: 1,
           y2: 240,
       })
       .elem("stop", {
           offset: 0.4,
           "stop-color": "rgba(255, 255, 255, 0)",
       })
       .parent()
    .elem("stop", {
        offset: 1,
        "stop-color": "rgba(255, 255, 255, 0.1)"
    })
    .parent();

        //ligne dégradé
        defs
        .elem('linearGradient', {
            id: "lineGradient" + index, 
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 0,
        })
        .elem("stop", {
            offset: 0,
            "stop-color": colorCard,
        })
        .parent()
        .elem("stop", {
            offset: 0.25,
            "stop-color": color,
        })
        .parent()
        .elem("stop", {
            offset: 0.75,
            "stop-color": color,
        })
        .parent()
     .elem("stop", {
         offset: 1,
         "stop-color": colorCard,
     })
     .parent();
}


//Ici on appel une nouvelle instance du chartist avec chartist.Line()
//ensuite on selectionne la class css qui contient le style de la courbe (couleur et stroke)
//on y inclus les objets avec les données
const lineChart1 = new Chartist.Line(
    '.line-chart',
    lineChartData,
    lineChartOptions,
);

lineChart1.on('created', (ctx) => handleCreated(ctx, 1));

const lineChart2 = new Chartist.Line(
    '.line-chart-2',
    lineChart2Data,
    lineChartOptions,
);

lineChart2.on('created', (ctx) => handleCreated(ctx, 2));
// Add event handle to draw point

// Add event handle to draw gradients

// Initialise line chart

// Initialise line chart

// Create Maps
