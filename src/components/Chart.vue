<script setup>
import { reactive, ref, onMounted } from 'vue';
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJs, Title, Tooltip, Legend, ArcElement, CategoryScale, Chart } from 'chart.js'

Chart.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

const propChart = defineProps({
    chartId: { type: String, default: 'doughnut-chart' },
    datasetIdKey: { type: String, default: 'label' },
    width: { type: Number, default: 500 },
    height: { type: Number, default: 500 },
    cssClasses: { type: String, default: '' },
    styles: { type: String, default: () => { } },
    plugins: { type: String, default: () => { } },
})

const chartData = reactive({
    labels: ["val1", "val2", "val3", "val4"],
    datasets: [
        {
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1
        }
    ]
})


const chartOptions = reactive({
    plugins: {
        title: {
            //affiche titre
            display: true,
            //libellé du graphique 
            text: "Présence de lumière pendant l'accident",
            //couleur du text
            color: "black",
            font: {
                size: 16
            }
        }
    },

    responsive: true,
    maintainAspectRatio: false


})

let liste = ref();
let listeLuminosite = new Set()

onMounted(async () => {
    fetch('https://accidentvelo.jmfino.fr/json.php')
        .then(response => response.json())
        .then(response => {
            liste = response
            // console.log(liste);
            liste.forEach(accident => {
                listeLuminosite.add(accident[9])
            })
            listeLuminosite.delete("luminosite")
            // console.log(listeInter)
            chartData.labels = Array.from(listeLuminosite)
            console.log(chartData.labels)
            // chartData.labels.sort()
            let cpt = []
            chartData.labels.forEach((inter) => {
                let nb = 0
                liste.forEach((acc) => {
                    if (inter == acc[9])
                        nb++
                })
                cpt.push(nb)
            })
            chartData.datasets[0].data = cpt
            console.log(cpt);

            let bgColor = [];
            let bdColor = [];
            cpt.forEach(function (val) {
                let c1 = couleur(0, 255)
                let c2 = couleur(0, 255)
                let c3 = couleur(0, 255)
                let tr = 0.5
                let color = 'rgba(' + [c1, c2, c3, tr].join(',') + ")"
                bgColor.push(color)
                let border = 'rgba(' + [c1, c2, c3, tr].join(',') + ")"
                bdColor.push(color)
            })
            chartData.datasets[0].backgroundColor = bgColor;
            chartData.datasets[0].borderColor = bdColor;

        })
        .catch(error => console.log('erreur Ajax'))


})

const couleur = (min, max) => {
    return Math.floor(Math.random() * (max - min));
}
</script>
        
<template>
    <Doughnut :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
        :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>