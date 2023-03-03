<script setup>
//Import des éléments de vue 
import { reactive } from 'vue';

// Import d'un type de graphique barChart
import { Bar } from 'vue-chartjs'

// Import des objets du graphique de la bibliothèque ChartJs
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

// Eléments utilisés par le graphique
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


// Propriétés du graphique utilisés dans le template
// On définit pour chacune son type de données et sa valeur par défaut
// On peut utiliser une grande variété de types, voire des objets
const propChart = defineProps({
    chartId: { type: String, default: 'bar-chart' }, // Id du graphique
    datasetIdKey: { type: String, default: 'label' }, // Id du dataSet
    width: { type: Number, default: 350 }, // Largeur du graphe
    height: { type: Number, default: 700 }, // Hauteur du graphe
    cssClasses: { type: String, default: '' }, // Classes css utilisées
    styles: { type: Object, default: () => { } }, // Styles utilisés
    plugins: { type: Object, default: () => { } }  // plugins utilisés
})

// Données injectées dans le graphique
let chartData = reactive({
    // Etiquette de l'axe
    labels: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
    // Valeurs des données du graphique
    datasets: [{
        // Etiquette du je de données à projeter
        label: 'données 01',
        // Valeurs des données
        data: [5282, 5241, 5399, 5078, 5060, 4588, 4905, 4549, 4351, 4719, 4714, 4674, 4828],
        // Couleur des barres en regard des valeurs
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
        ],
        // Couleur de la bordure de chaque barre
        borderColor: [
            'rgba(255, 99, 132)',
            'rgba(255, 159, 64)',
            'rgba(255, 205, 86)',
            'rgba(75, 192, 192)',
            'rgba(54, 162, 235)',
        ],
        borderWidth: 1
    }]
})

// Options du graphique
// Les principales utilisées, ils en existe d'autres
// voir documentation
let chartOptions = reactive({
    // Aspect responsive du graphique
    responsive: true,
    // Maintien du ratio
    maintainAspectRation: false,

    // Type de projection utilisée
    // x : verticale
    // y : horizontale
    indexAxis: 'x',

    // Echelles du graphique
    scales: {
        // axe des ordonnées
        y: {
            // Valeur max des y
            suggestedMax: 10000,
            ticks: {
                // Police
                font: {
                    size: 16
                }
            }
        },
        // axe des abscisses
        x: {
            ticks: {
                // Police
                font: {
                    size: 16
                }
            }
        },
    },

    // Les plugins
    plugins: {
        // Légende des données
        legend: {
            // label des données
            labels: {
                color: 'green',
                font: {
                    size: 16
                }
            }
        },
        title: {
            // Affichage du titre
            display: true,
            // Libellé du graphique
            text: "Chartjs - BarChart",
            // Couleur du texte
            color: 'blue',
            // Police du texte
            font: {
                size: 16
            }
        }
    }

})


</script>

<template>
    <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
        :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>

<style scoped></style>