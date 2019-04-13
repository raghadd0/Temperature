
am4core.useTheme(am4themes_animated);

var temperatures = {
    "EUROPE": [
        ["Albania", -5.59, -5.59, -5.59, -5.59, -5.59, 1.11, 0.96, 0.96, 0.96, 0.96, 0.96, 1.48, -1.71, -1.14, -0.57, -0.84],
 
        ["Austria", -0.87, 0.43, 0.26, -0.62, -0.83, -0.08, -0.1, 0.62, 0.58, -0.39, 0.53, 0.22, 0.27, 0.86, 0.89, 0.75],
 
        ["Belgium",  1.53, 1.93, 2.29, 1.94, 2.53, 1.74, 2.07, 1.78, 1.76, 1.18, 2.93, 2.29, 0.92, 2.63, -5.37, -4.61],
 
        ["Bulgaria", 1.21, -0.43, -2.21, -1.56, -1.45, -1.08, -0.05, -1.34, 0.13, -0.81, -0.93, -1.67, -0.77, -1.06, -0.51, 0.14],
 
        ["Croatia", -0.39, 0.58, 0.68, -0.33, -0.62, 0.41, 1.01, 0.77, 0.89, -0.13, 0.79, 1.12, 0.51, 1.13, -0.22, -2.08],
 
        ["Denmark",  0.62, 1.59, 0.41, 0.83, 1.39, 1.49, 1.18, 1.27, 0.83, -0.84, 1.14, 0.46, 0.56, 1.95, 1.49, 1.33],
 
        ["Estonia",  4.33, 3.74, 3.27, 3.51, 3.15, 4.32, 3.41, 3.65, 2.55, 1.72, 3.51, 2.08, 3.13, 3.5, 3.78, 3.06],
 
        ["Finland",  0.19, 0.32, 0.55, 0.69, 1.33, 1.06, 1.38, 1.57, 0.74, -0.31, 2.03, 0.14, 1.84, 2.01, 2.43, 1.63],
 
        ["France",  0.63, 0.64, 1.56, 0.38, 0.48, 1.17, 0.72, 0.31, 0.92, 0.02, 1.44, 0.69, -0.01, 1.33, 1.06, 0.64],
 
        ["Greece", 1.88, 0.92, 0.86, 0.53, 0.48, 1.13, 1.56, 1.53, 2.76, 2.05, 0.91, 1.99, -4.31, 3.41, 2.5, 0.07],
 
        ["Hungary",  1.35, 2.63, 1.49, 1.01, -0.04, 1.92, 2.99, 2.51, 2.41, 1.79, 2.25, 2.69, 2.59, 2.66, 2.69, 2.43],
 
        ["Iceland", 1.03, 1.23, 2.01, 1.59, 0.83, 1.07, 1.82, 1.18, 1.54, 2.03, 0.9, 1.8, 1.17, 2.31, 0.82, 2.37],
 
        ["Ireland", 0.28, 0.46, 0.93, 0.64, 0.52, 0.84, 1.23, 0.43, 0.45, -0.33, 0.55, 0.26, 0.29, 0.82, 0.04, 0.65],
 
        ["Italy",  2.22, 1.87, 1.93, 1.14, -0.64, 1.51, 1.66, 1.96, 2.14, 1.63, 2.24, 2.47, 1.83, 2.09, 2.22, 2.3],
 
        ["Netherlands", 1.25, 1.42, 1.27, 0.99, 1.58, 2.42, 1.82, 1.2, 1.21, -0.16, 1.42, 0.84, 0.52, 2.31, 1.43, 1.34],
 
        ["Norway",  0.69, 1.38, 0.77, 1.38, 1.19, 1.42, 1.17, 1.11, 1.01, -0.53, 1.8, 0.59, 1.09, 2.02, 1.65, 1.53],
 
        ["Poland",  0.42, 1.67, 0.82, 0.41, 0.73, 0.93, 1.74, 1.54, 0.46, -1.14, 0.64, 0.22, -0.07, 1.16, 0.87, 1.39],
 
        ["Russia", 0.48, 0.74, 0.81, 0.46, 0.77, -0.14, 1.57, 1.27, 0.27, 0.33, 0.89, 1.51, -2.22, -2.98, 2.25, 0.13],
 
        ["Serbia",  0.97, 1.7, 0.88, 0.63, -0.07, 0.84, 1.97, 2.05, 1.59, 2.09, 1.91, 2.24, 2.45, 2.39, 2.69, 2.16],
 
        ["Slovakia",  0.61, 1.36, 0.72, 0.4, 0.13, 0.92, 1.71, 1.83, 1.39, 0.81, 1.43, 1.71, 1.62, 3.01, 2.31, 2.74],
 
       ["Spain",  0.46, 0.38, 1.07, 0.64, 1.36, 1.51, -0.62, -0.89, 0.75, 0.57, 0.73, 0.34, 0.38, 1.37, 0.64, 1.74],
 
        ["Sweden", 0.59, 1.48, 0.82, 0.86, 1.22, 1.43, 1.2, 0.38, 0.13, -1.55, 0.85, 0.11, 0.42, 1.59, 1.42, -0.29],
 
        ["Switzerland", 0.74, 1.33, 1.41, 0.54, 0.39, 0.96, 1.24, 0.76, 1.08, -0.13, 1.65, 0.86, 0.21, 1.81, 1.7, 0.34],
 
        ["Ukraine",  0.51, 1.9, -0.04, 0.48, -0.94, 0.47, 1.08, 4.14, 2.33, 2.07, 0.89, 1.51, 2.09, 1.56, 2.09, 2.31]
    ],
 
    "AFRICA": [
        ["Algeria",  2.72, 1.51, 2.68, 1.43, 1.82, 2.62, 1.64, 1.72, 3.03, 1.88, 2.16, 2.45, -0.54, 3.03, 1.52, 3.32],
 
        ["Angola", 0.86, 1.81, 0.79, 0.18, 0.64, 1.38, 1.98, 0.65, 0.65, 0.09, 3.67, 5.14, 5.14, 2.62, 1.91, 2.57],
 
 
        ["Cameroon", 0.33, 1.02, 0.57, 1.56, 1.14, -1.78, 0.84, 0.47, 0.71, 3.01, -0.46, 0.62, 0.93, 0.3, 0.55, 0.96],
 
        ["Chad",  0.95, 1.15, 1.21, 1.41, 0.42, 1.9, 1.14, 0.13, 1.52, 1.98, 1.16, 0.87, 1.77, 1.53, 0.86, 1.33],
 
        ["Congo", 0.49, 1.54, 1.67, 0.73, 1.14, 0.57, 0.95, 0.96, 1.13, 1.28, 0.91, 1.2, 0.89, 0.79, 1.12, 1.37],
 
        ["Egypt",  0.1, 0.23, 0.72, 0.71, -0.01, 0.91, 0.68, 0.93, 0.79, 2.17, 0.14, 0.57, -0.01, 1.56, 1.43, 1.1],
 
 
        ["Ghana", 2.47, 1.91, 0.78, 1.11, 0.8, 1.92, 1.58, 0.65, 0.87, 1.23, 0.7, 0.88, 1.52, 0.19, 0.84, 1.36],
 
        ["Kenya",  0.54, 0.87, 0.83, 0.92, 0.98, 0.99, 0.91, 0.83, 1.23, 1.19, 1.18, 0.93, 0.94, 1.07, 1.44, 1.24],
 
        ["Libya",  0.49, -1.42, 0.04, 2.46, 1.01, 0.23, 0.75, 0.72, 0.57, 1.13, -7.21, 3.03, 1.2, -1.33, 1.39, -0.68],
 
        ["Mali",  0.82, 1.89, 0.88, 1.33, 1.09, 0.76, 1.44, 0.48, 0.73, 1.58, 1.43, 0.86, 0.37, 0.56, 1.22, 1.26],
 
        ["Mauritania", 0.44, 0.48, 0.86, 0.78, 0.22, 1.12, -1.03, 1.56, 1.13, 2.14, 1.52, 0.51, 1.93, 0.71, 1.43, 1.63],
 
        ["Morocco",  1.57, 1.21, 1.47, 1.36, 1.41, 1.99, 1.03, 1.02, 2.15, 2.06, 1.76, 1.55, 1.08, 1.42, 1.35, 1.97],
 
        ["Mozambique", 0.33, 0.49, 0.92, 0.94, 1.18, 0.65, 1.53, 0.97, 0.79, 1.86, 3.11, 0.17, -0.58, 0.23, 1.09, 1.44],
 
        ["Namibia", 0.01, 1.26, 1.96, 1.12, 1.05, -0.09, -0.25, 1.42, 0.59, 1.02, -0.66, 0.66, 1.24, 0.87, 2.64, 1.88],
 
        ["Niger",  0.14, 0.97, 0.48, 0.77, 1.44, 1.45, 0.61, 0.17, 1.22, 1.31, 1.02, 0.66, 1.23, 0.94, 0.71, 1.27],
 
        ["Nigeria", 0.66, 0.19, 0.51, 0.37, 1.01, -0.05, 1.91, 0.23, 1.36, 1.59, 1.55, 0.74, 1.38, 1.72, 1.46, 1.53],
 
        ["South Africa",  0.31, 1.28, 1.45, 1.57, 1.11, 1.08, 0.51, 0.58, 0.86, 1.29, 0.56, 1.16, 1.59, 0.97, 1.63, 1.73],
 
        ["Tanzania", -0.79, 0.53, 1.06, 0.57, 1.11, 1.01, 0.79, 0.12, 0.72, 1.02, 0.57, 0.62, 0.44, 0.38, 0.43, 0.51],
 
        ["Tunisia",  2.48, 1.56, 2.47, 0.9, 2.38, 2.1, 1.86, 2.04, 2.08, 1.82, 1.6, 2.61, 1.71, 2.36, 2.29, 2.36],
 
        ["Zambia",  2.88, 1.77, 0.54, -0.14, 3.77, -1.06, 1.69, 0.24, 0.72, 2.36, 3.51, 0.63, 1.03, 1.08, 1.81, 4.54],
 
    ],
 
    "AMERICA": [
        ["Argentina", 0.25, -0.21, -0.17, 0.33, -0.01, 0.19, -0.3, -0.05, 0.65, 0.06, 0.22, 0.66, 0.29, 0.31, 0.27, -0.53],
 
        ["Belize", 0.58, 0.94, 0.92, 0.5, 1.14, 0.84, 0.98, 0.68, 0.78, 0.75, 0.68, 0.47, 0.95, 0.66, 1.19, 1.23],
 
        ["Bolivia", 0.92, 1.49, 1.04, 0.86, 1.04, 1.27, 0.69, 0.81, 1.79, 0.84, 0.53, 2.75, 2.11, 1.52, 1.68, 2.01],
 
        ["Brazil", 0.73, 0.37, 0.23, -1.12, 0.39, -0.63, 0.44, -0.03, -0.18, 0.34, 0.26, 0.16, 0.68, -1.71, -2.25, -0.23],
 
        ["Canada", 0.72, -0.45, 0.08, -0.28, 0.54, 1.04, 0.12, -0.32, -0.44, 1.03, 0.04, 0.63, -0.19, -0.31, 0.67, 1.03],
 
        ["Chile", 1.08, 0.61, 1.05, 1.53, 2.13, 2.56, 1.22, 2.06, 2.06, 1.2, 1.04, 1.56, 1.28, 1, 1.74, 1.76],
 
        ["Colombia", -0.31, -0.26, -0.03, -0.45, 0.01, -0.58, -0.48, -0.66, -3.99, 0.06, -0.17, 0.12, 0.27, 0.42, 0.83, 0.62],
 
        ["Costa Rica",  0.98, 1.02, 1.07, 0.72, 0.55, 0.73, 0.86, 0.63, 1.16, 1.12, 0.46, 0.79, 1.07, 1.21, 1.51, 1.16],
 
        ["Cuba",  -0.02, 0.12, 0.44, -0.29, -0.22, 0.02, 0, -0.28, 0.12, 0.07, -0.27, -0.12, -0.73, 0.67, 1.81, 1.19],
 
        ["Greenland",  1.63, 1.44, 2.53, 1.86, 2.32, 1.66, 1.71, 1.52, 1.59, 2.81, 1.11, 0.68, 0.88, 1.44, 1.14, 2.75],
 
        ["Jamaica", 0.86, 0.97, 1.02, 0.93, 1.04, 0.94, 0.91, 0.21, 1.16, 0.84, 0.31, 0.97, 1.14, 1.31, 1.41, 1.32],
 
        ["Mexico", 1.16, 1.17, 1.67, 1.24, 1.29, 1.76, 1.39, 1.08, 1.79, 1.17, 1.95, 1.63, 1.6, 1.64, 1.96, 2.07],
 
 
        ["Peru",  0.25, 0.63, 0.16, 1.17, 0.32, 0.88, -0.21, 0.19, 0.43, 0.48, -0.02, 0.42, 0.49, 1.06, 1.32, 1.43],
 
 
    ],
    "ASIA": [
        ["Armenia", -6.27, -6.48, -3.68, -0.06, -7.24, -1.48, -1.65, -3.22, -3.04, -0.34, -3.41, -1.92, -2.47, -4.29, 0.52, 0.26],
 
        ["Burma", 1.02, 1.14, 0.22, 0.67, 1.26, 1.56, 0.99, 0.73, 1.33, 1.45, 0.62, 0.64, 0.94, 1.16, 0.9, 0.44],
 
        ["China",  0.88, 1.11, 0.91, 1.01, 0.73, 1.34, 1.47, 0.96, 1.09, 0.88, 0.68, 0.52, 0.01, 1.06, 0.81, -0.18],
 
        ["Georgia", 2.17, 2.08, 0.88, 1.77, 0.89, 0.57, -1.65, -1.06, 0.08, 1.46, -0.01, 0.46, -0.38, 0.72, -0.58, -0.94],
 
        ["India",  0.53, 0.75, 0.59, 0.59, -0.07, 1.03, 0.48, 0.47, 0.56, 0.86, 0.7, 0.94, 0.81, 0.86, -1.73, -0.16],
 
 
        ["Iraq", 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, -7.47, 2.85, 2.85, 2.85, -13.1, 1.82, 2.41, 2.29],
 
        ["Japan",  -0.01, 1.23, 0.91, 1.5, 0.63, 1.39, 1.51, 1.34, 1.4, 2.04, 1.19, 1.19, 1.37, 1.22, 1.67, 1.97],
 
        ["Kazakhstan",  1.8 ,2.18, 2.08, 2.01, 1.14,, 2.04, 0.49, 2.14, 2.62, 1.97, 0.26, 1.11, 2.77, 0.63, 2.2, 2.41],
 
        ["Korea, South", 0.65, -0.07, 0.07, 0.79, 0.53, 0.32, 3.63, 0.76, 0.69, 0.42, -0.04, -0.27, 0.02, 1.36, -0.72, 0.59],
 
        ["Kyrgyzstan", 1.01, 2.86, 1.84, 2.84, 3.44, 3.84, 3.31, 2.43, 2.25, 2.94, 2.64, 2.29, 2.97, 1.86, 2.92, 3.66],
 
        ["Lebanon", 1.16, 0.46, 1.16, -3.93, 0.02, 0.21, 0.28, 1.6, 0.99, 1.74, 0.63, 1.3, 1.32, 1.04, 1.84, 2.37],
 
        ["Malaysia", 0.41, 0.64, 0.41, 0.4, 0.39, 0.38, 0.31, 0.13, 0.39, 0.58, 0.35, 0.47, 0.86, -0.42, 0.94, 1.07],
 
        ["Mongolia", 1.12, 1.18, 0.24, 1.14, -0.86, 0.8, 2.32, 1.18, 0.44, 0.2, -0.26, -0.86, 0.41, 0.96, 1.51, 0.51],
 
        ["Nepal",  -1.07, -0.02, 6.07, 4.28, 0.43, 0.43, 4.98, 5.73, 5.73, 5.73, 5.73, 3.63, -4.62, 2.22, 2.13, 2.67],
 
        ["Oman",  0.63, -1.12, 2.27, 1.88, 1.91, 2.68, 2.18, 1.68, 3.67, 3.64, 2.48, 2.82, 3.09, 2.02, 2.81, 2.74],
 
        ["Pakistan",  0.92, 0.02, 5.79, 3.63, -0.4, 1.08, 0.98, 0.98, 0.94, 1.69, 1.4, 0.58, -4.67, 1.16, 0.94, -2.29],
 
        ["Philippines", 0.15, 0.16, 0.01, -0.22, -0.09, 0.29, 0.14, -0.08, -0.04, 0.33, -0.31, 0.04, 0.08, -0.07, 0.06, 0.53],
 
        ["Saudi Arabia", 0.69, 0.68, 1.87, 0.09, 1.46, 1.84, -0.73, 0.88, -0.11, 3.17, 0.68, 1.51, 3.43, -0.6, 3.13, 1.96],
 
        ["United Arab Emirates", .54, 1.23, 1.16, 2.54, 2.19, 1.71, -0.89, 1.11, 1.92, 1.25, 1.82, 2.08, 0.71, 1.69, 1.51, 2.39],
 
        ["Vietnam",  0.24, 0.42, 0.73, 0.05, 0.11, 0.53, 0.24, -0.14, 0.41, 0.76, -0.47, 0.45, 0.29, 0.31, -1.95, 1.08]
    ],
 
    "OCEANIA": [
        ["Australia",  -0.21, 0.19, 0.11, -0.02, 0.28, -0.06, 0.26, -0.21, 0.41, 0.01, -0.18, -0.18, 0.56, 0.48, 0.27, 0.41],
 
        ["Fiji", 0.17, 0.71, 0.07, 0.19, 0.21, 0.11, 0.51, 0.04, -0.41, 0.42, 0.42, 0.18, 0.38, 0.19, -0.02, 0.45],
 
        ["French Polynesia", 0.22, 0.55, 0.36, 0.28, 0.19, 0.48, 0.32, 0.07, 0.51, 0.29, 0.22, -0.09, 0.01, -0.05, 0.37, 0.45],
 
        ["New Zealand",  0.65, 0.69, 0.47, 0.04, 0.84, 0.01, 0.26, 0.34, -0.26, 0.53, 0.21, 0.62, 1.62, 0.79, 0.37, 0.64],
 
        ["Tuvalu", 2.23, 2.33, 2.38, 2.21, 2.32, 2.35, 2.23, 1.86, 2.23, 2.03, 2.12, 1.77, 2.38, 2.34, 2.36, 2.64],
    ]
 }
 

var startYear = 2000;
var endYear = 2016;
var currentYear = 1995;
var colorSet = new am4core.ColorSet();

var chart = am4core.create("chartdiv", am4charts.RadarChart);
chart.numberFormatter.numberFormat = "+#.0°C|#.0°C|0.0°C";
chart.hiddenState.properties.opacity = 0;

chart.startAngle = 270 - 180;
chart.endAngle = 270 + 180;

chart.radius = am4core.percent(60);
chart.innerRadius = am4core.percent(40);

// year label goes in the middle
var yearLabel = chart.radarContainer.createChild(am4core.Label);
yearLabel.horizontalCenter = "middle";
yearLabel.verticalCenter = "middle";
yearLabel.fill = am4core.color("#673AB7");
yearLabel.fontSize = 30;
yearLabel.text = String(currentYear);

// zoomout button
var zoomOutButton = chart.zoomOutButton;
zoomOutButton.dx = 0;
zoomOutButton.dy = 0;
zoomOutButton.marginBottom = 15;
zoomOutButton.parent = chart.rightAxesContainer;

// scrollbar
chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.parent = chart.rightAxesContainer;
chart.scrollbarX.orientation = "vertical";
chart.scrollbarX.align = "center";

// vertical orientation for zoom out button and scrollbar to be positioned properly
chart.rightAxesContainer.layout = "vertical";
chart.rightAxesContainer.padding(120, 20, 120, 20);

// category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";

var categoryAxisRenderer = categoryAxis.renderer;
var categoryAxisLabel = categoryAxisRenderer.labels.template;
categoryAxisLabel.location = 0.5;
categoryAxisLabel.radius = 28;
categoryAxisLabel.relativeRotation = 90;

categoryAxisRenderer.minGridDistance = 13;
categoryAxisRenderer.grid.template.radius = -25;
categoryAxisRenderer.grid.template.strokeOpacity = 0.05;
categoryAxisRenderer.grid.template.interactionsEnabled = false;

categoryAxisRenderer.ticks.template.disabled = true;
categoryAxisRenderer.axisFills.template.disabled = true;
categoryAxisRenderer.line.disabled = true;

categoryAxisRenderer.tooltipLocation = 0.5;
categoryAxis.tooltip.defaultState.properties.opacity = 0;

// value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = -3;
valueAxis.max = 6;
valueAxis.strictMinMax = true;
valueAxis.tooltip.defaultState.properties.opacity = 0;
valueAxis.tooltip.animationDuration = 0;
valueAxis.cursorTooltipEnabled = true;
valueAxis.zIndex = 10;

var valueAxisRenderer = valueAxis.renderer;
valueAxisRenderer.axisFills.template.disabled = true;
valueAxisRenderer.ticks.template.disabled = true;
valueAxisRenderer.minGridDistance = 30;
valueAxisRenderer.grid.template.strokeOpacity = 0.05;


// series
var series = chart.series.push(new am4charts.RadarColumnSeries());
series.columns.template.width = am4core.percent(90);
series.columns.template.strokeOpacity = 0;
series.dataFields.valueY = "value" + currentYear;
series.dataFields.categoryX = "country";
series.tooltipText = "{categoryX}:{valueY.value}";

// this makes columns to be of a different color, depending on value
series.heatRules.push({ target: series.columns.template, property: "fill", minValue: -3, maxValue: 6, min: am4core.color("#673AB7"), max: am4core.color("#F44336"), dataField: "valueY" });

// cursor
var cursor = new am4charts.RadarCursor();
chart.cursor = cursor;
cursor.behavior = "zoomX";

cursor.xAxis = categoryAxis;
cursor.innerRadius = am4core.percent(40);
cursor.lineY.disabled = true;

cursor.lineX.fillOpacity = 0.2;
cursor.lineX.fill = am4core.color("#000000");
cursor.lineX.strokeOpacity = 0;
cursor.fullWidthLineX = true;

// year slider
var yearSliderContainer = chart.createChild(am4core.Container);
yearSliderContainer.layout = "vertical";
yearSliderContainer.padding(0, 38, 0, 38);
yearSliderContainer.width = am4core.percent(100);

var yearSlider = yearSliderContainer.createChild(am4core.Slider);
yearSlider.events.on("rangechanged", function () {
    updateRadarData(startYear + Math.round(yearSlider.start * (endYear - startYear)));
})
yearSlider.orientation = "horizontal";
yearSlider.start = 0.5;

chart.data = generateRadarData();

function generateRadarData() {
    var data = [];
    var i = 0;
    for (var continent in temperatures) {
        var continentData = temperatures[continent];

        continentData.forEach(function (country) {
            var rawDataItem = { "country": country[0] }

            for (var y = 2; y < country.length; y++) {
                rawDataItem["value" + (startYear + y - 2)] = country[y];
            }

            data.push(rawDataItem);
        });

        createRange(continent, continentData, i);
        i++;

    }
    return data;
}


function updateRadarData(year) {
    if (currentYear != year) {
        currentYear = year;
        yearLabel.text = String(currentYear);
        series.dataFields.valueY = "value" + currentYear;
        chart.invalidateRawData();
    }
}

function createRange(name, continentData, index) {

    var axisRange = categoryAxis.axisRanges.create();
    axisRange.axisFill.interactionsEnabled = true;
    axisRange.text = name;
    // first country
    axisRange.category = continentData[0][0];
    // last country
    axisRange.endCategory = continentData[continentData.length - 1][0];

    // every 3rd color for a bigger contrast
    axisRange.axisFill.fill = colorSet.getIndex(index * 3);
    axisRange.grid.disabled = true;
    axisRange.label.interactionsEnabled = false;

    var axisFill = axisRange.axisFill;
    axisFill.innerRadius = -0.001; // almost the same as 100%, we set it in pixels as later we animate this property to some pixel value
    axisFill.radius = -20; // negative radius means it is calculated from max radius
    axisFill.disabled = false; // as regular fills are disabled, we need to enable this one
    axisFill.fillOpacity = 1;
    axisFill.togglable = true;

    axisFill.showSystemTooltip = true;
    axisFill.readerTitle = "click to zoom";
    axisFill.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    axisFill.events.on("hit", function (event) {
        var dataItem = event.target.dataItem;
        if (!event.target.isActive) {
            categoryAxis.zoom({ start: 0, end: 1 });
        }
        else {
            categoryAxis.zoomToCategories(dataItem.category, dataItem.endCategory);
        }
    })

    // hover state
    var hoverState = axisFill.states.create("hover");
    hoverState.properties.innerRadius = -10;
    hoverState.properties.radius = -25;

    var axisLabel = axisRange.label;
    axisLabel.location = 0.5;
    axisLabel.fill = am4core.color("#ffffff");
    axisLabel.radius = 0;
    axisLabel.relativeRotation = 0;
}

var slider = yearSliderContainer.createChild(am4core.Slider);
slider.start = 1;
slider.events.on("rangechanged", function () {
    var start = slider.start;

    chart.startAngle = 270 - start * 179 - 1;
    chart.endAngle = 270 + start * 179 + 1;

    valueAxis.renderer.axisAngle = chart.startAngle;
})