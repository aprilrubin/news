// Q&A: Code adapted from https://jsfiddle.net/macloo/b2g81y5d/13/

let answers = document.querySelectorAll('dd');
let questions = document.querySelectorAll('dt');


function hideAll() {
  answers.forEach(function(el) {
    el.style.display = 'none';
  });
}

// hide all answers using function
hideAll();

questions.forEach(function(el) {
  el.onclick = () => {
    if (el.nextSibling.nextSibling.style.display === 'none') {
      hideAll();
      el.nextSibling.nextSibling.style.display = 'block';
    } else {
      hideAll();
    }
  };
});


// Highchart
Highcharts.chart('chart', {
    chart: {
        plotBackgroundColor: null,
        backgroundColor: 'rgba(0,0,0,0)',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Where do Americans get their local news? (2018)'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'News',
        colorByPoint: true,
        data: [{
            name: 'TV',
            y: 41
        }, {
            name: 'Social media',
            y: 15
        }, {
            name: 'News website/app',
            y: 23
        }, {
            name: 'Print',
            y: 13
        }, {
            name: 'Radio',
            y: 8
        }]
    }]
});

// Cliparts: Code adapted from https://jsfiddle.net/macloo/chu0dfo6/

let textDivs = document.querySelectorAll('.theText');
let outerDivs = document.querySelectorAll('.clipart');

textDivs.forEach(function(el) {
  el.classList.add('disappear');
});

outerDivs.forEach(function(el) {
  el.addEventListener('click', function() {
    let textDiv = this.firstElementChild;
    if (textDiv.classList.contains('disappear')) {
      textDiv.classList.remove('disappear');
      textDiv.classList.add('appear');
    } else {
      textDiv.classList.remove('appear');
      textDiv.classList.add('disappear');
    }
  });
});

window.onload = function() {
   scrolly();
};
