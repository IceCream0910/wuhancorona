


$( document ).ready( function() {
    /*toastr.options = {
                      closeButton: true,
                      progressBar: false,
                      showMethod: 'slideDown',
                      timeOut: 5000
                  };
                  toastr.info('최근 국내 확진자가 다수 발생함에 따라 보건당국의 역학조사가 일부 지연되고 있습니다. 정보가 공개되는 대로 업데이트하고 있으니 양해 부탁드리며 개인 위생 수칙을 준수하여 지역사회 확산 저지에 기여하여 주시기 바랍니다.', '확진자 급증에 따른 업데이트 지연');
*/

angular.module("myApp", [])


.controller('mainCtrl', function($scope, getCoronaNewsArticles){
  
  getCoronaNewsArticles.getNewsArticles(function(response){
    $scope.articles = response.data.articles;   
  });  
})

.service('getCoronaNewsArticles', function($http){
   this.getNewsArticles = function(callback){
  $http.get('https://newsapi.org/v2/everything?q=코로나19&apiKey=d60ec4ccad4e46678ce633f1b4dfa2b1&pageSize=50&sortBy=publishedAt')
     .then(callback);
     
   };
  
})



    document.getElementById("map").style.display = 'block';
    $('.container').removeClass('modal-open');
    document.getElementById("prevent").style.display = 'none';
  } );

  $('.js-click-map').click(function(){
    $('.container').removeClass('modal-open');
    document.getElementById("map").style.display = 'block';
    document.getElementById("prevent").style.display = 'none';
    $('.container').removeClass('modal-place-open');
    document.getElementById("placePopupBtn").style.display = 'block';
    document.getElementById("geocoder").style.display = 'block';


});

$('.js-click-dashboard').click(function(){
  $('.container').addClass('modal-open');
  document.getElementById("map").style.display = 'none';
  document.getElementById("prevent").style.display = 'none';
  $('.container').removeClass('modal-place-open');
  document.getElementById("placePopupBtn").style.display = 'none';
document.getElementById("geocoder").style.display = 'none';

});

$('.js-click-prevent').click(function(){
  $('.container').removeClass('modal-open');
  document.getElementById("map").style.display = 'none';
  document.getElementById("prevent").style.display = 'block';
  $('.container').removeClass('modal-place-open');
  document.getElementById("placePopupBtn").style.display = 'none';
document.getElementById("geocoder").style.display = 'none';
document.getElementById('first').src = "https://youtube.com/embed/rTfY1xB-Drc?loop=1&showinfo=0&controls=1";
document.getElementById('second').src = "https://youtube.com/embed/1LpaRylW6LM?loop=1&showinfo=0&controls=1";
document.getElementById('third').src = "https://youtube.com/embed/EBrtOAAkEcE?loop=1&showinfo=0&controls=1";
document.getElementById('forth').src = "https://youtube.com/embed/4ufdg6v4Jh4?loop=1&showinfo=0&controls=1";





});

// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'categories');
        data.addColumn('number', 'people');
        data.addRows([
          ['기타', 2004],
          ['대남병원', 119],
          ['신천지대구교회', 2992],
          ['이스라엘성지순례', 51],
          ['천안시운동시설', 80],
          ['확진자접촉', 82]
        ]);

        // Set chart options
        var options = {'backgroundColor': 'transparent'};




        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);

      }

      //여기까지 구글차트

function openplacepopup() {
  $('.container').addClass('modal-place-open');
  document.getElementById("placePopupBtn").style.display = 'none';
}

function closeplacepopup() {
  $('.container').removeClass('modal-place-open');
  document.getElementById("placePopupBtn").style.display = 'block';
}


const tabs = document.querySelectorAll('.tab');

tabs.forEach(clickedTab =>{
  clickedTab.addEventListener('click', () =>{
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    clickedTab.classList.add('active');
  });
});





// 여기서부터 지도 코드
mapboxgl.accessToken = 'pk.eyJ1IjoiaWNlY3JlYW0wOTEwIiwiYSI6ImNrNmFkNjV5bjBjZm8zcHJ6MTV0OW0wamIifQ.ihNhyKaC6K6yO09WyU7LjQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/icecream0910/ck6f1lye23yte1ilfcftdcdym',
  center: [127.4362, 33.7791],
  zoom: 5.7

});




function flyTarget(el) {
  var targetLat = el.getAttribute('data-lat');
  var targetLong =el.getAttribute('data-long');
map.flyTo({
center: [targetLat,targetLong-0.01],
zoom: 14,
essential: true // this animation is considered essential with respect to prefers-reduced-motion
});
}


var geocoder = new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
mapboxgl: mapboxgl,
placeholder: "장소 검색 (Beta)"
});
document.getElementById('geocoder').appendChild(geocoder.onAdd(map));


var geojson_hospital = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.831248, 37.642304]
    },
    properties: {
      title: '명지병원(6)',
      description: '(20-01-26 세번째 확진자) 54세 한국인 남성 격리 병원<br>(20-02-05 17번/28번/김포A, B/성남 확진자) 본 병원에 격리 조치.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.098167, 37.613044]
    },
    properties: {
      title: '서울의료원',
      description: '(20-01-31 7번/02-05 19번/02-19 56번/02-20 121번/송파A.B 확진자/20-01-30 5번/787번/794번/797번/2470번/2840번 확진자) 해당 병원에 격리 조치.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.999714,37.578241]
    },
    properties: {
      title: '서울대병원',
      description: '(20-01-30 여섯번째 확진자) 56세 한국인 남성으로 본 병원에 격리 조치<br>(20-01-31 10, 11번 확진자) 6번 환자의 가족으로 서울대병원에 격리 조치<br>(20-02-05 21번 확진자) 해당 병원에 격리 조치.<br>(20-02-16 29번 확진자) [2월 16일] 해당병원에 격리 조치.<br>(20-02-16 30번 확진자) 29번 환자의 아내로 해당 병원에 격리 조치.<br>(627번,1567번,1675번,2666번 확진자) 격리 치료.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.959568, 35.964991]
    },
    properties: {
      title: '원광대학교병원(2)',
      description: '(20-01-31 8번째 확진자) 62세 한국인 여성으로 본 병원에 격리<br>(전주 확진자) 격리.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.123389, 37.351563]
    },
    properties: {
      title: '분당서울대병원(6)',
      description: '(20-01-27 네번째 확진자) 1월 26일 분당 서울대 병원으로 격리되어 코로나 바이러스 검사 실시 후 확진 판정.(퇴원)<br>(20-02-01 12번 확진자) 본 병원으로 격리.<br>(20-02-02 14번 확진자) 본 병원으로 격리.<br>(20-02-07 25번 확진자) 본 병원으로 격리.<br>(20-02-18 32번 확진자) [2월 18일] 자가 격리 중 양성 확인되어 격리 입원.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.005580, 37.567226]
    },
    properties: {
      title: '국립중앙의료원',
      description: '(20-01-24 두번째 확진자) 격리 병원(퇴원)<br>(20-02-02 13번/02-06 23번/02-19 40번/02-21 서울 서초구/924번/1788번 확진자) 검사 결과 양성 확인되어 격리 입원치료.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.149085, 37.392769]
    },
    properties: {
      title: '국군수도병원(2)',
      description: '(20-02-02 15번 확진자) 격리 조치 병원<br>(20-02-05 20번 확진자) 격리 조치 병원'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.668652, 37.478787]
    },
    properties: {
      title: '인천의료원',
      description: '(20-01-19 첫번째 확진자) 35세 중국인 여성 격리 병원(퇴원)'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.921549, 35.142085]
    },
    properties: {
      title: '전남대병원(4)',
      description: '(20-02-04 16번 확진자) [1월 27일 오후 6시] 광주21세기병원에서 전원됐으나 중국 방문 이력이 없어 의심환자 미분류 및 21세기 병원으로 재이동. [2월 3일] 증세 악화로 응급실 격리병동으로 이송. [2월 4일] 격리 중 확진 판정.<br>(20-02-05 18번/02-21 210번, 239번, 2477번 확진자) 본 병원으로 격리 조치.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.926592, 35.138675]
    },
    properties: {
      title: '조선대학교병원(4)',
      description: '(22,126,164,589번 확진자) 해당 병원에 격리 조치.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.260411, 37.017228]
    },
    properties: {
      title: '경기도립의료원안성병원(2)',
      description: '(20-02-09 26, 27번 확진자) [2월 9일] 검사 실시하여 결과 양성 확인 후 경기도 지정 감염병관리기관으로 이송돼 격리 치료중.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.5406159, 35.8596492]
    },
    properties: {
      title: '대구의료원(10)',
      description: '(20-02-18 31~36번 확진자/20-02-19 42, 45, 46, 47, 53번 확진자) 검사 결과 양성 확인 후 해당 병원에서 격리 치료.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.605098, 35.865977]
    },
    properties: {
      title: '경북대학교병원(5)',
      description: '(20-02-18 37, 38번 확진자/20-02-19 44, 49, 65번 확진자) 검사 결과 양성 확인 후 해당 병원에서 격리 치료.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.196749, 35.858329]
    },
    properties: {
      title: '동국대학교경주병원(3)',
      description: '(20-02-18 39번 확진자/20-02-19 41번 확진자/경주A) 검사 결과 양성 확인 후 해당 병원에서 격리 치료.'
    }
  },            
   {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.209615, 35.845427]
    },
    properties: {
      title: '계명대동산병원(2)',
      description: '(20-02-19 43, 51번 확진자) 검사 결과 양성 확인 후 해당 병원에서 격리 치료.'
    }
  },           
            
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.564375, 35.956719]
    },
    properties: {
      title: '칠곡경북대병원',
      description: '(20-02-19 48번 확진자) 해당 병원에서 격리치료.'
    }
  },     
             
   {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.584788, 35.847300]
    },
    properties: {
      title: '영남대학교병원',
      description: '(20-02-19 50번 확진자) 해당 병원에서 격리치료.'
    }
  },      
             
   {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.354906, 36.034891]
    },
    properties: {
      title: '포항의료원(4)',
      description: '(20-02-19 54, 55번 확진자/20-02-20 85번/207번 확진자) 해당 병원에서 격리치료.'
    }
  },           
         
   {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.140564, 35.847185]
    },
    properties: {
      title: '전북대병원',
      description: '(20-02-20 113번 확진자) 해당 병원에서 격리치료.'
    }
  },  

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.732302, 36.568139]
    },
    properties: {
      title: '안동의료원(2)',
      description: '(20-02-19 상주시/02-21 예천군 확진자) 해당 병원에서 격리치료.'
    }
  }, 

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.545227, 33.467085]
    },
    properties: {
      title: '제주대병원',
      description: '(20-02-20 제주A, 02-21 제주B 확진자) 해당 병원에서 격리치료.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.059186, 35.187235]
    },
    properties: {
      title: '부산의료원',
      description: '(부산-1,2,5,8,9,10,11,12,13,14,16 확진자) 해당 병원에서 격리치료.'
    }
  },  

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.566484, 35.198809]
    },
    properties: {
      title: '마산의료원',
      description: '(20-02-21 진주A/02-22 합천C 확진자) 해당 병원에서 격리치료.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.093825, 35.176235]
    },
    properties: {
      title: '경상대병원',
      description: '(20-02-21 합천A,B 확진자) 해당 병원에서 격리치료.'
    }
  }, 

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.019032, 35.100541]
    },
    properties: {
      title: '부산대병원',
      description: '(부산-3,D 확진자) 해당 병원에서 격리치료.'
    }
  }, 

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.172511, 36.841942]
    },
    properties: {
      title: '단국대천안병원',
      description: '(세종A 확진자) 해당 병원에서 격리치료.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.428964, 35.519956]
    },
    properties: {
      title: '울산대병원',
      description: '(울산A 확진자) 해당 병원에서 격리치료.'
    }
  },  

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.126481, 36.122657]
    },
    properties: {
      title: '김천의료원',
      description: '(242번, 244번 확진자) 해당 병원에서 격리치료.'
    }
  },  

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.700859, 36.547089]
    },
    properties: {
      title: '안동병원',
      description: '(384번 확진자) 선별진료소 방문 후 격리.'
    }
  }, 
             
   {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.139075, 37.445169]
    },
    properties: {
      title: '성남시의료원',
      description: '(성남-2,3 확진자) 양성판정 받아 격리 조치.'
    }
  },           

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.744754, 37.874939]
    },
    properties: {
      title: '강원대병원',
      description: '(512번 확진자) 양성판정 받아 격리 조치.'
    }
  },   

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.432747, 37.282582]
    },
    properties: {
      title: '이천의료원',
      description: '(847번 확진자) 양성판정 받아 격리 조치.'
    }
  },   

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.779701, 37.754836]
    },
    properties: {
      title: '경기도립의료원 파주병원',
      description: '(907번 확진자) 양성판정 받아 격리 조치.'
    }
  },   

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.065290, 37.587893]
    },
    properties: {
      title: '삼육서울병원',
      description: '(935번/1254번 확진자) 양성판정 받아 격리 조치.'
    }
  },   

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.924528, 37.493332]
    },
    properties: {
      title: '서울보라매병원',
      description: '(996번 확진자) 양성판정 받아 격리 조치.<br>(1295번 확진자) [2월 24일] 오후 1시 선별진료소 방문 검사.<br>(1532번, 1611번, 1767번 확진자) 격리.'
    }
  },   

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.988756, 37.564925]
    },
    properties: {
      title: '서울백병원',
      description: '(1295번 확진자) 양성판정 받아 격리 조치'
    }
  },   

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.833216, 37.511965]
    },
    properties: {
      title: '서울시립서남병원',
      description: '(1710번 확진자) 양성판정 받아 격리 조치'
    }
  },   

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.884947, 37.492224]
    },
    properties: {
      title: '고대구로병원',
      description: '(1768번 확진자) 양성판정 받아 격리 조치'
    }
  },   

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.884947, 37.492224]
    },
    properties: {
      title: '인천 길병원',
      description: '(2641번 확진자) 양성판정 받아 격리 조치'
    }
  },   

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.772290, 37.655252]
    },
    properties: {
      title: '상계백병원',
      description: '(1675번 확진자) [2월 17일] 오후 8시 30분경 응급실 방문. [2월 20일] 선별진료소 방문. [2월 23일] 오후 6시 35분경 응급실 방문. [2월 24일] 오후 3시 54분경 선별진료소 검사.<br>(2818번 확진자) [2월 25일] 오후 8시경 선별진료소 방문. <br>(2469번, 2666번, 2818번 확진자) 격리.'
    }
  },

  

]
};


var geojson_place = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [121.80628828704357,31.1490694115591]
    },
    properties: {
      title: '상하이항공 FM828',
      description: '(20-01-24 두번째 확진자) 상하이 -> 인천 항공편 FM828, 좌석 70A 탑승'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.86827700000003,37.5496053]
    },
    properties: {
      title: '강서구보건소',
      description: '(20-01-24 두번째 확진자) 1월 23일 선별 진료를 통해 유증상자로 분류 후 확진 판정'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [114.21853322535755,30.77093202627814]
    },
    properties: {
      title: '중국남방항공 CZ6079',
      description: '(20-01-19 첫번째 확진자) 1월 19일 오후 12:11 항공편 탑승'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.794442, 37.558723]
    },
    properties: {
      title: '김포국제공항',
      description: '(20-01-24 두번째 확진자) 1월 22일 우한 -> 상하이 -> 김포 경로로 입국. 능동감시 대상 포함,'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.05732009999997,37.05201149999999]
    },
    properties: {
      title: '365연합의원',
      description: '(20-01-27 네번째 확진자) [1월 21일] 의료기관 이용. [1월 25일] 해당 의료기관 재방문'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [120.3831232,36.2666745]
    },
    properties: {
      title: '청도항공 QW9901(2)',
      description: '(20-01-31 7번째 확진자) [1월 23일 22:20] 칭다오항공 QW9901 (청도→인천)<br>(20-01-31 8번째 확진자) 7번째 확진자와 동일한 비행기로 입국'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [113.22083329999998,28.1966667]
    },
    properties: {
      title: '아시아나항공 OZ322',
      description: '(20-01-30 5번 확진자) 33세 한국인 남성으로, 중국 우한 인근 장사공항에서 24일 아시아나항공(OZ322) 편으로 인천공항으로 입국'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [114.2124493,30.776617]
    },
    properties: {
      title: '대한항공 KE882',
      description: '(20-01-27 네번째 확진자) 우한 -> 인천 항공편 이용.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.02794819999997,37.524355]
    },
    properties: {
      title: '글로비성형외과 의원',
      description: '(20-01-26 세번째 확진자) [1월 22일] 오후 1시경 해당 의료기관에서 치료를 받는 지인의 진료에 동행. [1월 24일] 점심, 다시 지인 진료에 재동행.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.01592170000004,37.5243968]
    },
    properties: {
      title: 'GS 한강잠원 1호점',
      description: '(20-01-26 세번째 확진자) 1월 23일 점심시간 한강에 산책을 나와 해당 편의점 이용.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.05869899999993,37.07905100000001]
    },
    properties: {
      title: '송탄터미널',
      description: '(20-01-27 네번째 확진자) 1월 20일 공항버스로 본 위치까지 이동'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.04913390000002,37.50299260000001]
    },
    properties: {
      title: '호텔 뉴브(Hotel Newv)',
      description: '(20-01-26 세번째 확진자) 1월 22일 해당 호텔에 투숙'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.4522185,37.4651805]
    },
    properties: {
      title: '공항버스 8834번',
      description: '(20-01-27 네번째 확진자) 20일 오후 5시 30분 공항버스 이용해 평택 송탄터미널로 이동.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.03247799999997,37.527737]
    },
    properties: {
      title: '한일관 압구정점(2)',
      description: '(20-01-26 세번째 확진자) [1월 23일] 본 음식점 방문, 접촉자 4명 확인.<br>(20-01-30 6번째 확진자) 세번째 확진자와 함께 식사했으나 격리 아닌 능동감시대상으로 포함.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.01704829999994,37.5925601]
    },
    properties: {
      title: 'CGV 성신여대입구(발병 전 추정)',
      description: '(20-01-30 5번째 확진자) 지인과 함께 1월 25일 CGV성신여대입구에서 영화를 관람. '
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.0503248,37.524819]
    },
    properties: {
      title: '본죽 청담프리마점',
      description: '(20-01-26 세번째 확진자) [1월 23일]본 음식점 방문, 접촉자(2명확인)'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.77693350000006,37.6740054]
    },
    properties: {
      title: '본죽 일산정발산점',
      description: '(20-01-26 세번째 확진자) [1월 24일 오후 2시] 본 식당 방문'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.8121754,37.6778604]
    },
    properties: {
      title: '스타벅스 일산식사점',
      description: '(20-01-26 세번째 확진자) [1월 24일 오후 4시] 본 카페 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.02953419999994,37.5639923]
    },
    properties: {
      title: '선녀보살(성동구)',
      description: '(20-01-30 5번 확진자) [1월 26일] 서울시 성동구 소재 역술인(선녀보살 방문)'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.00976600000001,37.5895897]
    },
    properties: {
      title: '두꺼비마트(성북구)',
      description: '(20-01-30 5번 확진자) [1월 26일] 성북구 소재 숙소에 머물며 해당 슈퍼마켓 방문'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.01522069999999,37.59033]
    },
    properties: {
      title: '선호케어',
      description: '(20-01-30 5번 확진자) [1월 27일 오전] 해당 마사지숍 이용.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.01889830000005,37.5920573]
    },
    properties: {
      title: '돈암동떡볶이',
      description: '(20-01-30 5번 확진자) [1월 27일 오후] 해당 음식점 이용.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.00996580000003,37.589227]
    },
    properties: {
      title: '럭키후레쉬마트',
      description: '(20-01-30 5번 확진자) [1월 27일 오후] 슈퍼마켓 이용'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.09194309999998,37.589035]
    },
    properties: {
      title: '이가네바지락칼국수(면목동)',
      description: '(20-01-30 5번 확진자) [1월 28일] 해당 음식점 이용'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.04654329999994,37.523674]
    },
    properties: {
      title: '와이즈웨딩',
      description: '(20-01-30 5번 확진자) [1월 28일] 본 웨딩숍 방문'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.99981019999996,37.5863828]
    },
    properties: {
      title: '명륜교회(2)',
      description: '(20-01-30 6번 확진자) [1월 26일] 자택 근처 교회에서 새벽 및 오전 예배 참석, 교회 식당에서 점심식사 후 오후 예배 참석.<br>(20-02-05 21번 확진자) [1월 29일] 오후 6시 20분 경 자차 이용해 종로구 소재 교회(예배당(본당)) 방문 후 오후 8시 20분 경 자택으로 귀가.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.791968,37.6411412]
    },
    properties: {
      title: '메종드아이디헤어 백석벨라시타점',
      description: '(20-01-31 10,11번 확진자) [1월 30일] 점심쯤 개인차량 이용하여 본 미용실 이용'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.78101570000001,37.4858187]
    },
    properties: {
      title: 'CGV 부천역',
      description: '(20-02-01 12번, 02-02 14번 확진자) [1월 20일 오후 5시 20분 8층 5관 좌석번호 E5~6] 에서 영화 <백두산> 관람. [1월 26일 오후 5시 30분 8층 4관 좌석번호 E13~14]에서 영화 <남산의 부장들> 관람.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.7781024999999337,37.4836803]
    },
    properties: {
      title: '속내과의원',
      description: '(20-02-01 12번, 02-02 14번 확진자) [1월 23일 오후 4시][1월 28일 오후2시] 두 차례 해당 의원 방문.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.7781776,37.4837016]
    },
    properties: {
      title: '서전약국',
      description: '(20-02-01 12번, 02-02 14번 확진자) [1월 28일 오후 3시 50분] 해당 약국 방문'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.76285359999997,37.49839769999999]
    },
    properties: {
      title: '순천향대부천병원',
      description: '(20-02-01 12번, 02-02 14번 확진자) [1월 30일 오후 1시] 해당 병원 방문.'
    }
  },
  
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.96961950000002,37.5536067]
    },
    properties: {
      title: '서울역(3)',
      description: '(20-02-01 12번, 02-02 14번 확진자) [1월 22일 오전 11시 1분]에 출발하는 KTX를 이용해 강릉으로 이동 [1월 23일 오후 2시 27분] 강릉 -> 서울 도착.<br>(20-02-05 17번 확진자) [1월 24일 오전 9시 30분] 귀국 후 공항철도 이용해 서울로 들어옴. [오후 12시 40분] 출발하는 KTX(KTX 463, 7호차) 이용해 같은 날 오후 2시 22분 동대구역 도착.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.89929000000006,37.764152]
    },
    properties: {
      title: '강릉역(2)',
      description: '(20-02-01 12번, 02-02 14번 확진자) [1월 22일 오후 12시 59분]에 서울 -> 강릉 KTX로 이동. [1월 23일 오후 12시 30분] 강릉에서 서울로 출발.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.0438501,37.6834634]
    },
    properties: {
      title: '썬크루즈리조트(2)',
      description: '(20-02-01 12번, 02-02 14번 확진자) [1월 22일 오후4시] 강릉시 소재 숙소로 이동.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.9309464,37.3591354]
    },
    properties: {
      title: '더건강한내과(2)',
      description: '(20-02-01 12번, 02-02 14번 확진자) [1월 25일] 군포 친척집에서 택시 이용해 의료기관 방문'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.9308901,37.3590543]
    },
    properties: {
      title: '현대약국',
      description: '(20-02-01 12번, 02-02 14번 확진자) [1월 25일] 더건강한내과 진료 후 약국 방문'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.00151789999995,37.2675123]
    },
    properties: {
      title: '수원역(2)',
      description: '(20-02-01 12번, 02-02 14번 확진자) [1월 24일] 지하철로 수원역으로 와 택시를 이용해 수원 소재 친척집 방문'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.70814940000002,35.9866939]
    },
    properties: {
      title: '아센휘트니스사우나',
      description: '(20-01-31 8번째 확진자)  [1월 26일 오후 2시 11분 ~ 4시 29분] 군산 일대 대중목욕탕 이용.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.7091256,35.9784314]
    },
    properties: {
      title: '유남진내과',
      description: '(20-01-31 8번째 확진자) [1월 27일] 발열, 기침 등 증상으로 내원하여 약 처방 받고 개인 차량 이용해 귀가'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.71245450000004,35.954685]
    },
    properties: {
      title: '군산의료원',
      description: '(20-01-31 8번째 확진자) [1월 28일] 증상 지속되어 내원해 진료를 받고 의사환자로 분류되어 격리 조치 됐지만 음성 판정으로 자택 귀가'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.70551109999997,35.97602849999999]
    },
    properties: {
      title: '우리떡갈비',
      description: '(20-01-31 8번째 확진자) [1월 29일] 군산 소재 음식점에서 점심식사'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.73486560000003,35.9827419]
    },
    properties: {
      title: '이마트 군산점',
      description: '(20-01-31 8번째 확진자) [1월 29일 오후1시] 이마트 군산점에서 약 3시간 장을 본 것으로 확인.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.01682189999997,37.5918099]
    },
    properties: {
      title: '다이소 성신여대역점',
      description: '(20-01-30 5번 확진자) [1월 26일] 성북구 소재 잡화점 방문'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [122.1165062,33.8386846]
    },
    properties: {
      title: '춘추항공 항공편',
      description: '(20-01-30 중국 내 확진자) [1월 21일] 춘추항공 항공편으로 제주로 입국'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.49135339999998,33.51041350000001]
    },
    properties: {
      title: '제주국제공항',
      description: '(20-01-30 중국 내 확진자) [1월 21일] 제주공항으로 입국. [1월 25일] 숙소에서 시내버스 이용해 제주공항으로 이동 후 중국 양저우로 귀국.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.49161930000002,33.4894038]
    },
    properties: {
      title: '플로라호텔 제이드림',
      description: '(20-01-30 중국 내 확진자) [1월 21]일 차량을 이용해 제주시 연동 소재의 플로라호텔로 이동'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.66743980000001,33.447037]
    },
    properties: {
      title: '에코랜드',
      description: '(20-01-30 중국 내 확진자) [1월 22일 오전] 중국인 10명과 함께 승합차를 이용해 에코랜드 방문'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.6900058,33.4316207]
    },
    properties: {
      title: '산굼부리',
      description: '(20-01-30 중국 내 확진자) [1월 22일] 산굼부리 방문'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.95404800000006,33.5042977]
    },
    properties: {
      title: '우도',
      description: '(20-01-30 중국 내 확진자) [1월 22일] 우도 방문후 점심식사.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.94193900000005,33.4581918]
    },
    properties: {
      title: '성산일출봉',
      description: '(20-01-30 중국 내 확진자) [1월 22일 오후] 성산일출봉 방문 '
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.48642719999998,33.4906618]
    },
    properties: {
      title: '롯데면세점 제주점',
      description: '(20-01-30 중국 내 확진자) [1월 23일] 도보로 롯데면세점에서 쇼핑 '
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.48757649999993,33.48607189999999]
    },
    properties: {
      title: '신라면세점 제주점',
      description: '(20-01-30 중국 내 확진자) [1월 23일 오전] 도보로 신라면세점으로 이동해 쇼핑 후 인근 치킨집에서 점심식사. '
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.46336270000006,33.3576784]
    },
    properties: {
      title: '한라산(1100고지)',
      description: '(20-01-30 중국 내 확진자) [1월 24일] 숙소에서 버스를 이용해 한라산 1100고지 방문.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.47131760000002,33.5090001]
    },
    properties: {
      title: '무지개도로',
      description: '(20-01-30 중국 내 확진자) [1월 24일] 한라산 -> 무지개도로 방문. 해안도로 구경 후 인근 카페에서 점심식사 -> 버스로 숙소 인근으로 이동.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.49070770000003,33.4860985]
    },
    properties: {
      title: '누웨마루 거리',
      description: '(20-01-30 중국 내 확진자) [1월 24일 오후] 숙소 인근 음식점에서 저녁을 먹고 누웨마루 거리 산책.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.63162609999995,37.4617728]
    },
    properties: {
      title: '인천출입국사무소',
      description: '(20-02-01 12번 확진자) [1월 21일 오후12시] 인천출입국사무소 방문'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.65047709999999,37.4636808]
    },
    properties: {
      title: '인천 남구(미추홀구)',
      description: '(20-02-01 12번 확진자) [1월 21일] 택시 타고 인천광역시 남구 소재의 친구 집 방문'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.98722580000003,36.74037130000001]
    },
    properties: {
      title: '경찰인재개발원',
      description: '(20-02-02 13번 확진자) 임시생활시설에서 증상 보여 검사 결과 확진 판정. 1월 31일 귀국한 우한 교민 임시생활시설.<br>(20-02-06 24번 확진자) 임시생활시설에서 생활 중 증상 보여 검사 결과 확진 판정.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.00769850000006,37.55717130000001]
    },
    properties: {
      title: '신라면세점 서울점',
      description: '(20-02-01 12번, 02-02 14번 확진자) [1월 20일] 지하철 이용해 신라면세점 내 구찌, 루이비통 매장 방문.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.9784995,37.295636]
    },
    properties: {
      title: '천천동',
      description: '(20-02-02 15번 확진자) 거주지는 천천동 소재인 것으로 확인. <br>(20-02-05 20번 확진자) 15번 확진자의 가족으로 같은 건물에 거주.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.01017679999995,37.3043448]
    },
    properties: {
      title: '장안구보건소',
      description: '(20-02-02 15번 확진자) [2월 1일] 자가 격리 중 오후 2시경 개인 차량 이용해 선별진료소에서 검사 받고 자택으로 귀가. 검사결과 확진되어 병원으로 이송.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.78036959999997,37.4827854]
    },
    properties: {
      title: '小串王왕중왕(2)',
      description: '(20-02-01 12번, 02-02 14번 확진자) [1월 20일] 오후 11시경 부천시 소재 음식점(양꼬치) 방문'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.78266540000004,37.4840296]
    },
    properties: {
      title: '이마트 부천점(2)',
      description: '(20-02-01 12번, 02-02 14번 확진자) [1월 30일] 16시경 대형마트 방문해 20분 체류'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.03211669999996,37.6905609]
    },
    properties: {
      title: '정동진초당순두부(2)',
      description: '(20-02-01 12번, 20-02-02 14번 확진자) [1월 22일] 18시경 인근 커피숍 방문 후 음식점 방문.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.3878446,34.9935821]
    },
    properties: {
      title: '무안공항',
      description: '(20-02-04 16번 확진자) [1월 19일] 무안공항으로 태국에서 귀국.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.81813169999998,35.1757929]
    },
    properties: {
      title: '광주21세기병원',
      description: '(20-02-04 16번 확진자) [1월 27일] 증상이 나타나 해당 병원 방문해 진료받았고, 같은 병원 입원중인 딸(18번 확진자)과 함께 머물다 오후 6시경 전남대병원으로 이송되었지만 중국 방문 이력이 없어 의심환자 미분류.  [1월 28일 ~ 2월 2일] 격리되지 않은 채 딸 간병 및 본인 진료 위해 입원. [2월 4일] 16번 확진자 발생과 함께 1인실 격리.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.0118524,37.4921876]
    },
    properties: {
      title: '풍미감자탕',
      description: '(20-01-31 8번 확진자) [1월 25일 점심] 해당 음식점에서 식사'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.7817966,37.483597]
    },
    properties: {
      title: '부천종로약국',
      description: '(20-02-01 12번, 02-02 14번 확진자) [1월 27일 오후 3시 경] 약국 방문. (12, 14번 확진자 모두 마스크 착용)'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.97046580000006,37.5490645]
    },
    properties: {
      title: '서울역 북창동순두부',
      description: '(20-02-05 17번 확진자) [1월 24일 점심] 서울역 푸드코트 내 북창동순두부에서 식사.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.0440466,37.5596479]
    },
    properties: {
      title: '한양대학교병원',
      description: '(20-02-05 17번 확진자) [1월 26일] 오후 증상발현되어 한양대 응급실 방문/진료(보호자 대기실, 진료처치룸 이용). 검사결과 단순발열로 택시 타고 밤 9시 귀가. <br>(20-02-19 40번 확진자) [2월 18일] 한양대병원에 내원하여 시행한 영상검사상 폐렴 소견 확인되어 코로나19 검사 실시 결과 양성 판정.<br>(2858번 확진자) 격리조치.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.13911929999995,37.6063384]
    },
    properties: {
      title: '삼성서울가정의원',
      description: '(20-02-05 17번 확진자) [1월 27일] 자택에서 택시로 삼성서울가정의원 이동해 오후 2시 30분 경 진료.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.1391743,37.6063788]
    },
    properties: {
      title: '구리종로약국',
      description: '(20-02-05 17번 확진자) [1월 27일 오후 3시 12분] 구리종로약국에서 약 처방.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.13873899999999,37.5871664]
    },
    properties: {
      title: '이삭토스트 구리장자못점',
      description: '(20-02-05 17번 확진자) [1월 29일] 음식점 이용.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.13840189999996,37.58693960000001]
    },
    properties: {
      title: '프리마트',
      description: '(20-02-05 17번 확진자) [1월 29일] 이삭토스트 -> 프리마트 (도보)로 이동.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.13821410000003,37.58702559999999]
    },
    properties: {
      title: '서울아산내과(구리)',
      description: '(20-02-05 17번 확진자) [2월 3일] 오후 1시 ~ 3시 서울아산내과 방문.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.138253,37.5870803]
    },
    properties: {
      title: '수약국',
      description: '(20-02-05 17번 확진자) [2월 3일] 서울아산내과 -> 수약국에서 약 처방.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.138735,37.5872504]
    },
    properties: {
      title: '본죽 구리토평점',
      description: '(20-02-05 17번 확진자) [2월 3일] 수약국 -> 본죽에서 테이크아웃(도보이동)'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.10323500000004,37.545475]
    },
    properties: {
      title: '광나루역',
      description: '(20-02-05 17번 확진자) [2월 3일] 오후 8시 15분 경 이용.'
    }
  },  {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [127.10306700000001,37.5448436]
      },
      properties: {
        title: '이마트24 광나루역점',
        description: '(20-02-05 17번 확진자) [2월 3일] 이마트 24 방문.'
      }
    },  {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [127.10261700000001,37.543272]
        },
        properties: {
          title: '광나루역.극동아파트(버스정류장)',
          description: '(20-02-05 17번 확진자) [2월 3일] 95번 버스를 타고 구리 소재의 거주지까지 이동.'
        }
      },  {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [127.1323584,37.6012093]
          },
          properties: {
            title: '한양대구리병원',
            description: '(20-02-05 17번 확진자) [2월 4일] 한양대구리병원 선별 진료소 방문(택시이용)해 검사 실시 하고 자가 격리 시작.'
          }
        },  {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [100.75011240000003,13.6899991]
            },
            properties: {
              title: '태국 수완나품 국제공항',
              description: '(20-02-04 16번 확진자) [1월 19일] 가족들과 태국 여행 후 귀국.'
            }
          },
          {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [126.71075719999999,35.0160601]
              },
              properties: {
                title: '나주시',
                description: '(20-02-04 16번 확진자) [1월 25일] 개인 차량 이용해 나주 소재의 친정집 방문 후 귀가.<br>(20-02-06 22번 확진자) [2월 6일] 나주시 소재의 자택에서 자가격리 중 확진 판정.'
              }
            },
            {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [128.62847585231066,35.87966704616757]
                },
                properties: {
                  title: '동대구역',
                  description: '(20-02-05 17번 확진자) <br>[1월 24일 오후 2시 22분] KTX로 동대구역 도착해 수성구 소재의 본가 방문. <br>[1월 25일] 북구 소재의 처갓집 방문 후 동대구역에서 SRT로 귀경.<br>(경주 확진자A) [2월 19일] 오후 7시경 동대구역에서 서경주역(1791, 3호차 21,22번)으로 이동.<br>(경주C 확진자) [2월 14일] 오후 7시 서경주역(무궁화 1791 2호차 39번)으로 이동.'
                }
              },
              {
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [103.99153079999996,1.3644202]
                  },
                  properties: {
                    title: '대한항공 KE646',
                    description: '(20-02-05 17번 확진자) [1월 24일 오전 8시 50분] 싱가포르에서 인천공항으로 귀국.'
                  }
                },
                {
                    type: 'Feature',
                    geometry: {
                      type: 'Point',
                      coordinates: [127.10725030000003,37.4984505]
                    },
                    properties: {
                      title: '헬리오시티',
                      description: '(20-02-05 19번 확진자) 서울 송파구 소재 자택 기거'
                    }
                  },
                  {
                      type: 'Feature',
                      geometry: {
                        type: 'Point',
                        coordinates: [126.88934059999997,37.5206499]
                      },
                      properties: {
                        title: 'GS홈쇼핑 본사',
                        description: '(20-02-05 20번 확진자) 서울 영등포구 소재 GS홈쇼핑 본사 직원으로 확인.'
                      }
                    },
                    {
                        type: 'Feature',
                        geometry: {
                          type: 'Point',
                          coordinates: [127.11890570000004,37.382699]
                        },
                        properties: {
                          title: '분당구',
                          description: '(20-02-05 19번 확진자) [1월 31일] 개인 차량 이용해 성남시 분당구 소재 직장 출근, 오후 12시경 분당구 소재 부모님 댁 방문. 오후 1시경 회사 복귀.'
                        }
                      },
                      {
                          type: 'Feature',
                          geometry: {
                            type: 'Point',
                            coordinates: [127.1247641,37.50885]
                          },
                          properties: {
                            title: '파리바게뜨 헬리오시티점',
                            description: '(20-02-05 19번 확진자) [1월 31일] 오후 7시경 송파구 소재 빵집 방문. [2월 1일] 도보로 오전 9시 40분경 빵집 방문.'
                          }
                        },
                        {
                            type: 'Feature',
                            geometry: {
                              type: 'Point',
                              coordinates: [127.12000519999992,37.49695030000001]
                            },
                            properties: {
                              title: '교촌치킨 가락2호점',
                              description: '(20-02-05 19번 확진자) [1월 31일] 오후 7시 15분경 송파구 소재 치킨집 방문 후 오후 10시 자택으로 귀가.)'
                            }
                          },
                          {
                              type: 'Feature',
                              geometry: {
                                type: 'Point',
                                coordinates: [127.02756729999999,37.5047369]
                              },
                              properties: {
                                title: '르메르디앙서울',
                                description: '(20-02-05 19번 확진자) [2월 1일 오후 12시] 가족 모임 위해 강남구 소재 호텔 방문 후 오후 3시경 자택으로 귀가.'
                              }
                            },
                            {
                                type: 'Feature',
                                geometry: {
                                  type: 'Point',
                                  coordinates: [126.65803359999995,37.3816748]
                                },
                                properties: {
                                  title: '현대프리미엄아울렛 송도점',
                                  description: '(20-02-05 19번 확진자)<br>[2월 1일 오후 4시] 부모님 차량 이용해 대형 쇼핑몰 방문. <br>(지하 1층) 수수가든(16:41∼17:08), 삼성전자(17:09∼17:17), (1층) 폴로(17:20∼17:22), (2층) 올젠(17:25∼17:27), 브룩스브라더스(17:27∼17:38), 갤럭시(17:39∼17:50), 폼스튜디오(17:54∼18:10)'
                                }
                              },
                              {
                                  type: 'Feature',
                                  geometry: {
                                    type: 'Point',
                                    coordinates: [127.11750000000006,37.4952778]
                                  },
                                  properties: {
                                    title: '원가네칼국수',
                                    description: '(20-02-05 19번 확진자) [2월 1일] 오후 7시 30분경 서울시 송파구 소재 음식점 방문 후 자택 귀가.'
                                  }
                                },
                                {
                                    type: 'Feature',
                                    geometry: {
                                      type: 'Point',
                                      coordinates: [127.11274950000006,37.3771388]
                                    },
                                    properties: {
                                      title: '통영별미',
                                      description: '(20-02-05 19번 확진자) [2월 3일] 점심 분당구 수내동 소재 음식점 방문 후 자차 이용해 자택 복귀.'
                                    }
                                  },
                                  {
                                      type: 'Feature',
                                      geometry: {
                                        type: 'Point',
                                        coordinates: [127.03951810000001,37.6026426]
                                      },
                                      properties: {
                                        title: '성북구보건소',
                                        description: '(20-02-05 21번 확진자) [2월 3일] 1월 31일 6번째 확진자의 접촉자로 확인되어 자가 격리 시작 후 보건소 차량 이용해 서울시 소재 성북구보건소 방문한 후 보건소 차량 이용해 자택 귀가. [2월 5일] 보건소 차량 이용해 보건소로 이동후 검사 후 자택 귀가 -> 확진 판정 받고 서울대학교병원으로 이송.'
                                      }
                                    },
                                    {
                                        type: 'Feature',
                                        geometry: {
                                          type: 'Point',
                                          coordinates: [126.97944299999995,37.565622]
                                        },
                                        properties: {
                                          title: '프레지던트 호텔',
                                          description: '(20-02-06 23번 확진자) [2월 2일 오후 12시] 서울시 중구 소재 호텔에서 퇴실.'
                                        }
                                      },
                                      {
                                          type: 'Feature',
                                          geometry: {
                                            type: 'Point',
                                            coordinates: [126.98192740000002,37.5648507]
                                          },
                                          properties: {
                                            title: '롯데백화점 본점',
                                            description: '(20-02-06 23번 확진자) [2월 2일 오후 12:15 ~ 13:19]  서울시 중구 소재 백화점 방문. <br>(4층) 플리츠플리즈(12:25∼12:42), (1층) 텍스 리펀드(12:48∼12:52, 13:15∼13:18) (지하 1층) 창화루(12:55∼13:12)'
                                          }
                                        },
                                        {
                                            type: 'Feature',
                                            geometry: {
                                              type: 'Point',
                                              coordinates: [126.95336199999997,37.542371]
                                            },
                                            properties: {
                                              title: '이마트 마포공덕점',
                                              description: '(20-02-06 23번 확진자) [2월 2일 오후 2:18 ~ 오후 4:09] 마포구 소재 대형마트 방문'
                                            }
                                          },
                                          {
                                              type: 'Feature',
                                              geometry: {
                                                type: 'Point',
                                                coordinates: [126.93677890000004,37.5791158]
                                              },
                                              properties: {
                                                title: '서대문구 소재 숙소',
                                                description: '(20-02-06 23번 확진자) [2월 2일] 대형마트 방문, 백화점 방문 후 숙소로 이동. [2월 3~5일] 숙소에 체류'
                                              }
                                            },
                                            {
                                                type: 'Feature',
                                                geometry: {
                                                  type: 'Point',
                                                  coordinates: [126.83019650000006,35.08229710000001]
                                                },
                                                properties: {
                                                  title: '우리마트',
                                                  description: '(20-02-04 16번 확진자) [1월 25일] 자차 이용해 광주광역시 남구 소재 슈퍼마켓 방문.'
                                                }
                                              },
                                              {
                                                  type: 'Feature',
                                                  geometry: {
                                                    type: 'Point',
                                                    coordinates: [126.813586,37.4150002]
                                                  },
                                                  properties: {
                                                    title: '매화동',
                                                    description: '(20-02-09 25번 확진자) 거주지 시흥시 매화동으로 확인.'
                                                  }
                                                },
                                                {
                                                    type: 'Feature',
                                                    geometry: {
                                                      type: 'Point',
                                                      coordinates: [126.44069569999999,37.4601908]
                                                    },
                                                    properties: {
                                                      title: '인천국제공항',
                                                      description: ''
                                                    }
                                                  },
             {
                                                    type: 'Feature',
                                                    geometry: {
                                                      type: 'Point',
                                                      coordinates: [126.811382, 37.417265]
                                                    },
                                                    properties: {
                                                      title: '매화할인마트',
                                                      description: '(20-02-09 25번 확진자) [2월 5일] 도보로 경기 시흥시 소재 슈퍼마켓 방문'
                                                    }
                                                  },
             {
                                                    type: 'Feature',
                                                    geometry: {
                                                      type: 'Point',
                                                      coordinates: [126.789514, 37.444550]
                                                    },
                                                    properties: {
                                                      title: '신천연합의원 선별진료소',
                                                      description: '(20-02-09 25, 26번 확진자) [2월 7일 오전 9시] 자차 이용하여 시흥시 소재 선별진료소 방문<br>[2월 8일] 오후 2시 자차 이용해 의료기관 방문.<br>(20-02-09 27번 확진자) [2월 5일 15:30 ~ 17:25] 자차 이용해 시흥시 소재 선별진료소 방문 후 자택 귀가.'
                                                    }
                                                  },
             {
                                                    type: 'Feature',
                                                    geometry: {
                                                      type: 'Point',
                                                      coordinates: [126.796396, 37.438150]
                                                    },
                                                    properties: {
                                                      title: '엘마트 시흥점',
                                                      description: '(20-02-09 25,26번 확진자) [2월 7일 오전 10:44 ~ 11:13] 자차 이용하여 슈퍼마켓 방문 후 자택 귀가'
                                                    }
                                                  },
             {
                                                    type: 'Feature',
                                                    geometry: {
                                                      type: 'Point',
                                                      coordinates: [113.576466, 22.158054]
                                                    },
                                                    properties: {
                                                      title: '에어마카오 NX826',
                                                      description: '(20-02-09 27번 확진자) [1월 31일] 오후 8시 40분 마카오에서 인천공항으로 귀국 후 9시 경 택시 이용해 자택으로 이동'
                                                    }
                                                  },
                                                      {
                                                    type: 'Feature',
                                                    geometry: {
                                                      type: 'Point',
                                                      coordinates: [126.809913, 37.432345]
                                                    },
                                                    properties: {
                                                      title: '그옛날손짜장',
                                                      description: '(20-02-09 27번 확진자) [2월 3일] 오후 7시 30분 시흥시 안현동 소재 태양38년전통 그옛날손짜장 방문'
                                                    }
                                                  },
                                                  {
                                                type: 'Feature',
                                                geometry: {
                                                  type: 'Point',
                                                  coordinates: [127.092762, 37.606502]
                                                },
                                                properties: {
                                                  title: '중랑구보건소',
                                                  description: '(20-01-30 5번 확진자) [1월 29일] 부친 차량 이용해 중랑구 보건소에서 검사 받고 자택으로 귀가.'
                                                }
                                              },
                                              {
                                            type: 'Feature',
                                            geometry: {
                                              type: 'Point',
                                              coordinates: [127.018418, 37.591676]
                                            },
                                            properties: {
                                              title: '예쁠레뷰티라인',
                                              description: '(20-01-30 5번 확진자) [1월 28일] 서울시 성동구 소재 미용시설 방문.'
                                            }
                                          },
                                          {
                                        type: 'Feature',
                                        geometry: {
                                          type: 'Point',
                                          coordinates: [126.970442, 37.549065]
                                        },
                                        properties: {
                                          title: '서울역 중앙온누리약국',
                                          description: '(20-02-04 17번 확진자) [1월 24일] 서울역에 있는 약국 방문.'
                                        }
                                      },
                                      {
                                    type: 'Feature',
                                    geometry: {
                                      type: 'Point',
                                      coordinates: [128.625035, 35.842651]
                                    },
                                    properties: {
                                      title: '미니주유소',
                                      description: '(20-02-04 17번 확진자) [1월 25일] 대구 수성구 소재 주유소 방문'
                                    }
                                  },
                                  {
                                type: 'Feature',
                                geometry: {
                                  type: 'Point',
                                  coordinates: [128.627832, 35.880691]
                                },
                                properties: {
                                  title: '스토리웨이 동대구신맞이방스낵점',
                                  description: '(20-02-04 17번 확진자) [1월 25일] 동대구역에 있는 편의점 방문.'
                                }
                              },
                              {
                                type: 'Feature',
                                geometry: {
                                  type: 'Point',
                                  coordinates: [127.026343, 37.587342]
                                },
                                properties: {
                                  title: '고려대학교 안암병원',
                                  description: '(20-02-16 29번 확진자) 안암병원 내원하여 검사 실시 후 양성 확인되어 서울대병원으로 격리.'
                                }
                              },
             {
                                type: 'Feature',
                                geometry: {
                                  type: 'Point',
                                  coordinates: [127.015407, 37.575650]
                                },
                                properties: {
                                  title: '신중호내과의원',
                                  description: '(20-02-16 29번 확진자) [2월 5일] 오후 2시 50분 방문. [2월 7일] 오후 2시 20분 종로구 소재 의료기관 방문.'
                                }
                              },
             {
                                type: 'Feature',
                                geometry: {
                                  type: 'Point',
                                  coordinates: [127.018740, 37.620200]
                                },
                                properties: {
                                  title: '강북서울외과의원',
                                  description: '(20-02-16 29번 확진자) [2월 5일] 오후 3시 20분 방문. [2월 8일] 오전 11시 30분 종로구 소재 의료기관 방문. [2월 10일] 오전 9시 50분 방문. [2월 11일] 오전 11시 방문. [2월 12일] 오전 10시 50분 방문. [2월 15일] 오전 11시 방문.<br><br>(20-02-16 30번 확진자) [2월 10일] 오전 9시경 외과의원 방문.'
                                }
                              },
             {
                                type: 'Feature',
                                geometry: {
                                  type: 'Point',
                                  coordinates: [127.013963, 37.572262]
                                },
                                properties: {
                                  title: '보람약국',
                                  description: '(20-02-16 29번 확진자) [2월 5일] 오후 3시 10분 방문. [2월 10일] 오전 11시 종로구 소재 약국 방문.'
                                }
                              },
             {
                                type: 'Feature',
                                geometry: {
                                  type: 'Point',
                                  coordinates: [127.015321, 37.573293]
                                },
                                properties: {
                                  title: '봄약국',
                                  description: '(20-02-16 29번 확진자) [2월 8일] 오전 11시 40분 종로구 소재 약국 방문. [2월 12일] 오전 11시 5분 방문. '
                                }
                              },
             {
                     type: 'Feature',
                    geometry: {
                      type: 'Point',
                     coordinates: [128.635214, 35.858396]
                    },
                     properties: {
                    title: '새로난한방병원',
                    description: '(20-02-18 31번 확진자) [2월 7일] 전날 교통사고 당한 뒤 오후 5시 외래진료 받고 오후 9시 입원.<br>[2월 8일] 입원중.<br>[2월 9일] 교회 방문 후 오전 9시 30분 자차 이용해 병원으로 복귀.<br>[2월 10~14일] 입원중.<br>[2월 15일] 퀸벨호텔 방문후 복귀.<br>[2월 16일] 오전 9시 20분 교회 방문 후 택시 이용해 복귀.'
                                }
                              },

             {
                     type: 'Feature',
                    geometry: {
                      type: 'Point',
                     coordinates: [128.6276121, 35.8750042]
                    },
                     properties: {
                    title: '부띠끄시티테라스 오피스텔 201호 C클럽',
                    description: '(20-02-18 31번 확진자) [2월 6일] 대구 동구 소재 C클럽 출근.'
                                }
                              },

             {
                     type: 'Feature',
                    geometry: {
                      type: 'Point',
                     coordinates: [128.582389, 35.838970]
                    },
                     properties: {
                    title: '신천지예수교회다대오지성전',
                    description: '신천지를 중심으로 집단 감염 발생.'
                                }
                              },
             
             {
                     type: 'Feature',
                    geometry: {
                      type: 'Point',
                     coordinates: [128.662125, 35.882360]
                    },
                     properties: {
                    title: '퀸벨호텔',
                    description: '(20-02-18 31번 확진자) [2월 15일] 지인과 대구 동구 소재 호텔 뷔페(8층)에서 식사.'
                                }
                              },
             
             {
                     type: 'Feature',
                    geometry: {
                      type: 'Point',
                     coordinates: [128.612246, 35.844609]
                    },
                     properties: {
                    title: '수성구보건소',
                    description: '(20-02-18 31번 확진자) [2월 18일] 오후 3시 지인 차량 이용해 대구 수성구 보건소에서 검사 실시 후 택시로 한방병원 이동 중 다시 보건소로 이동해 오후 6시경 대구의료원으로 이송.'
                                }
                              },
             
    {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.995370, 37.560088]
       },
       properties: {
       title: '중구 소재 회사',
       description: '(20-02-16 30번 확진자) [2월 5~7일] 서울시 중구 소재 회사 출근'
       }
        },
             
     {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.999897, 37.577630]
       },
       properties: {
       title: '서울대병원 외래',
       description: '(20-02-16 30번 확진자) [2월 8일] 서울대학교병원 외래 방문 (09:30 ~ 10:30)'
       }
        },
             
      {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.421170, 37.423644]
       },
       properties: {
       title: '용유도',
       description: '(20-02-16 30번 확진자) [2월 10일] 오전 10시경 지하철 이용해 지인들과 함께 인천시 중구 용유도 방문.'
       }
        },
             
           {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.701198, 37.572926]
       },
       properties: {
       title: '경인아라뱃길',
       description: '(20-02-16 30번 확진자) [2월 10일] 점심식사 후 지하철 이용해 경인아라뱃길 방문.'
       }
        },
             
                  {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.015649, 37.572152]
       },
       properties: {
       title: '동묘앞역',
       description: '(20-02-16 30번 확진자) [2월 10일] 지하철 이용하여 동묘앞역 이동.'
       }
        },    
             
             
        {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.015935, 37.574509]
       },
       properties: {
       title: '단골온누리약국',
       description: '(20-02-16 30번 확진자) [2월 10일] 오후 6시 55분 경 종로구 소재 약국 방문.'
       }
        },  
             
       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.013272, 37.572490]
       },
       properties: {
       title: '명륜진사갈비 서울동묘점',
       description: '(20-02-16 30번 확진자) [2월 13일] 오후 12시경 종로구 소재 식당 방문 (11:58 ~ 13:34)'
       }
        },   
             
        {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.015984, 37.572751]
       },
       properties: {
       title: '스타벅스 동묘앞역점',
       description: '(20-02-16 30번 확진자) [2월 13일] 오후 1시 40분경 종로구 소재 카페 방문(13:43 ~ 15:10)'
       }
        },     
             
       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.005990, 37.576682]
       },
       properties: {
       title: '종로노인종합복지관',
       description: '(20-02-19 56번 확진자) 1월말 경에 종로노인종합복지관 방문. (29번 확진자와의 연관성 조사중)'
       }
        },    
             
       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.969122, 37.581828]
       },
       properties: {
       title: '종로구 보건소',
       description: '(20-02-19 56번 확진자) 폐렴으로 종로구보건소 선별진료소를 거쳐 확진 판정.'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.630224, 35.878282]
       },
       properties: {
       title: '동대구 터미널',
       description: '(20-02-20 113번 확진자) [2월 9일] 오전 7시 30분 ~ 10시 30분까지 동대구 터미널 이용.<br>(부산 확진자D) [2월 18일] 동대구시외버스터미널 출발.<br>(207번 확진자) [2월 16일] 포항으로 출발.<br>(성남 확진자) [2월 20일] 오후 6시경 성남으로 출발.'
       }
        },
        
       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.121693, 35.833388]
       },
       properties: {
       title: 'AXA손해보험 전주보상센터',
       description: '(20-02-20 113번 확진자) [2월 10, 11, 12일] 직장 출근.'
       }
        },

 {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.101762, 35.849505]
       },
       properties: {
       title: 'KS공업사',
       description: '(20-02-20 113번 확진자) [2월 10일] 오후 2시 ~ 3시 지하1층 방문.'
       }
        },

        {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.111001, 35.843625]
       },
       properties: {
       title: '푸라닭 전주하가점',
       description: '(20-02-20 113번 확진자) [2월 10일] 오후 8시 ~ 9시 치킨집 이용.'
       }
        }, 

             {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.149794, 35.805368]
       },
       properties: {
       title: '상진바이크샵',
       description: '(20-02-20 113번 확진자) [2월 13일] 전주 서신동 소재 오토바이점 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.116441, 35.828115]
       },
       properties: {
       title: '안전오토바이 종합랜드',
       description: '(20-02-20 113번 확진자) [2월 13일] 전주 서신동 소재 오토바이점 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.121114, 35.861360]
       },
       properties: {
       title: '원이비인후과 의원',
       description: '(20-02-20 113번 확진자) [2월 14일] 오후 4시 ~ 5시 송천동 소재 이비인후과 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.121210, 35.861374]
       },
       properties: {
       title: '전주종로약국',
       description: '(20-02-20 113번 확진자) [2월 14일] 이비인후과 방문 후 약국 이용.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.121883, 35.834423]
       },
       properties: {
       title: '롯데백화점 전주',
       description: '(20-02-20 113번 확진자) [2월 14일] 입생로랑, 샤넬 및 롯네시네마 7관에서 <인셉션> 관람'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.125064, 35.807788]
       },
       properties: {
       title: '이철헤어커커 전주효자CGV점',
       description: '(20-02-20 113번 확진자) [2월 14일] 전주 효자동 소재 미용시설 이용.'
       }
        }, 

        {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.127513, 35.843710]
       },
       properties: {
       title: '쓰리팝PC방 전북대점',
       description: '(20-02-20 113번 확진자) [2월 16일] 오후 3시 ~ 6시 전북대 인근 PC방 이용.'
       }
        },  

        {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.176032, 35.825982]
       },
       properties: {
       title: '아중리 청혜참치',
       description: '(20-02-20 113번 확진자) [2월 16일] 오후 7시 30분 아중리 청혜참치 방문.'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.120408, 35.854332]
       },
       properties: {
       title: '송천롯데마트',
       description: '(20-02-20 113번 확진자) [2월 16일] 오후 8시 ~ 8시 30분 송천롯데마트 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.557786, 35.836751]
       },
       properties: {
       title: '대구서부터미널',
       description: '(20-02-20 85번 확진자) [2월 17일] 오후 12시 50분경, 대구서부터미널에서 포항으로 이동.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.345336, 36.017935]
       },
       properties: {
       title: '대잠아델리아',
       description: '(20-02-20 85번 확진자) [2월 17일] 오후 1시 40분경, 대잠아델리아 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.375417, 36.060849]
       },
       properties: {
       title: '리플러스 장성점',
       description: '(20-02-20 85번 확진자) [2월 17일] 오후 10시경, 리플러스 장성점 마트 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.374795, 36.053280]
       },
       properties: {
       title: '영일대 해수욕장(버스정류장)',
       description: '(20-02-20 85번 확진자) [2월 18일] 영일대 해수욕장에서 101번 버스 탑승해 죽도시장까지 이동.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.362243, 36.030720]
       },
       properties: {
       title: '죽도시장(버스정류장)',
       description: '(20-02-20 85번 확진자) [2월 18일] 죽도시장에서 108번 버스 환승.'
       }
        }, 

        {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.341973, 36.018169]
       },
       properties: {
       title: '코아이빈후과, 미래건강약국',
       description: '(20-02-20 85번 확진자) [2월 18일] 오후 2시 22분 코아이빈후과 방문 후 44분경, 미래건강약국 방문.'
       }
        },

        {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.361959, 36.017887]
       },
       properties: {
       title: '세명기독병원',
       description: '(20-02-20 85번 확진자) [2월 19일] 개인차량으로 세명기독병원 방문 후 자택 귀가.'
       }
        }, 


      {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.727451, 35.819447]
       },
       properties: {
       title: '경산역',
       description: '(20-02-19 상주시 확진자) [2월 19일] 오후 2시 38분경 경산역 출발.<br>(241번 확진자) [2월 18일] 경산역에서 대전역 출발.'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.114678, 36.123423]
       },
       properties: {
       title: '김천역',
       description: '(20-02-19 상주시 확진자) [2월 19일] 오후 3시 49분경 김천역 경유.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.164258, 36.410390]
       },
       properties: {
       title: '상주역',
       description: '(20-02-19 상주시 확진자) [2월 19일] 오후 4시 30분경 상주역 도착.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.159748, 36.420344]
       },
       properties: {
       title: '상주성모병원',
       description: '(20-02-19 상주시 확진자) [2월 19일] 오후 4시 50분경 성모병원입구에서 체온 측정.'
       }
        },  

      {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.150492, 36.416683]
       },
       properties: {
       title: '상주보건소 선별진료소',
       description: '(20-02-19 상주시 확진자) [2월 19일] 오후 5시 20분경 상주보건소 선별진료소 방문. '
       }
        },   

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.150823, 36.417082]
       },
       properties: {
       title: '상주 행림약국',
       description: '(20-02-19 상주시 확진자) [2월 19일] 행림약국 방문 후 자택 귀가.'
       }
        },   

      {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.452964, 36.657700]
       },
       properties: {
       title: '예천보건소 선별진료소',
       description: '(20-02-21 예천군 확진자) [2월 20일] 예천보건소 선별진료소 방문.'
       }
        },


       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.896249, 35.127322]
       },
       properties: {
       title: '카페소요',
       description: '(20-02-20 126번째 확진자) [2월 18일] 오후 4시경 주월동 소재 카페 <소요> 방문'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.895606, 35.135405]
       },
       properties: {
       title: '최가박당',
       description: '(20-02-20 126번째 확진자) [2월 18일] 오후 11시경 백운동 소재 음식점 최가박당 방문.'
       }
        }, 

      {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.902415, 35.132998]
       },
       properties: {
       title: '광주남구보건소',
       description: '(20-02-20 126번째 확진자) [2월 19일] 남구보건소 방문.<br>(489번 확진자) [2월 22일] 오후 12시 30분경 선별진료소 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.911596, 35.128048]
       },
       properties: {
       title: '사계진미숯불닭갈비 광주봉선점',
       description: '(20-02-20 126번째/02-21 164번째 확진자) [2월 19일] 봉선동 소재 식당 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.905957, 35.125515]
       },
       properties: {
       title: '아이리스PC방 방림점',
       description: '(20-02-20 126번째/02-21 164번째,239번째 확진자) [2월 19일] 봉선동 소재 PC방 방문.'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.889886, 35.152299]
       },
       properties: {
       title: '광주서구보건소',
       description: '(20-02-20 126, 589번째 확진자) [2월 20일] 광주서구보건소 진료(589번 확진자 동행)'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.923194, 35.145610]
       },
       properties: {
       title: '동구보건소',
       description: '(20-02-21 164번째 확진자) [2월 19일] 월산동 학습관 방문 후 동구보건소 방문.'
       }
        },   

      {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.926492, 35.149200]
       },
       properties: {
       title: '동명식빵',
       description: '(20-02-21 210번째 확진자) [2월 16일] 오후 8시 50분경 동명동 소재 빵집 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.913983, 35.173365]
       },
       properties: {
       title: '중흥헬스',
       description: '(20-02-21 210번째 확진자) [2월 17일] 오후 6시 30분경 중흥동 소재 헬스장 방문 후 귀가.<br>2월 18일] 오후 10시경 방문 후 자정 귀가.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.854334, 35.154884]
       },
       properties: {
       title: '치평동 텐토',
       description: '(20-02-21 210번째 확진자) [2월 18일] 오전 11시 30분경 치평동 소재 음식점 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.878982, 35.208997]
       },
       properties: {
       title: '양산동 양떼목장',
       description: '(20-02-21 210번째 확진자) [2월 18일] 오후 7시경 양산동 소재 음식점 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.278230, 34.610367]
       },
       properties: {
       title: '고흥 실버대학',
       description: '(20-02-21 210번째 확진자) [2월 20일] 오전 9시경 자차로 전남 고흥읍 소재 실버대학 출장.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.135658, 34.525779]
       },
       properties: {
       title: '고흥 뚝배기식당',
       description: '(20-02-21 210번째 확진자) [2월 20일] 오전 11시 30분경 전남 고흥 소재 음식점 방문 후 오후 6시 30분 귀가.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.912124, 35.173399]
       },
       properties: {
       title: '북구보건소 선별진료소',
       description: '(20-02-21 210번째 확진자) [2월 20일] 자정 북구보건소 선별진료소 방문하여 검사 후 자가 격리 시작.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.913855, 35.175683]
       },
       properties: {
       title: '포켓볼하우스 오픈스페이스',
       description: '(20-02-21 239번째 확진자) [2월 18일] 오후 8시 40분경 용봉동 소재 포켓볼하우스(오픈스페이스) 방문.'
       }
        },    

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.910849, 35.170002]
       },
       properties: {
       title: '후라이드참잘하는집 전대점',
       description: '(20-02-21 239번째 확진자) [2월 18일] 오후 9시 56분경 중흥동 소재 음식점(후라이드참잘하는집 전대점) 방문하여 포장음식 수령(5분 대기)'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.914267, 35.165124]
       },
       properties: {
       title: '후라이드참잘하는집 전대점',
       description: '(20-02-21 239번째 확진자) [2월 18일] 오후 10시 18분경 중흥동 소재 편의점(CU광주역 행복주택점) 방문 후 자택 귀가'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.098688, 35.005984]
       },
       properties: {
       title: '우리식육식당',
       description: '(20-02-21 239번째 확진자) [2월 20일] 오후 12시 30분경 화순 사평면 사평리 소재 음식점 우리식육식당(전남 화순군 사평면 370-1) 방문'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.916660, 35.161395]
       },
       properties: {
       title: '홈플러스 계림점',
       description: '(20-02-21 239번째 확진자) [2월 20일] 오후 6시경 계림동 소재 대형마트(홈플러스 계림점) 방문 후 귀가'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.638362, 35.899470]
       },
       properties: {
       title: '대구국제공항',
       description: '(20-02-20 제주A 확진자) [2월 18일] 티웨이 항공 TW809 탑승.<br>(20-02-20 제주B 확진자) [2월 16일] 대구국제공항에서 출발해 제주로 입도.'
       }
        },    

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.502993, 33.513040]
       },
       properties: {
       title: 'CU제주용해로점',
       description: '(20-02-20 제주A 확진자) [2월 18일] 오후 8시 40분경 택시로 CU제주용해로점 방문. '
       }
        },   

              {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.485095, 33.489983]
       },
       properties: {
       title: '한라병원 선별진료소',
       description: '(20-02-20 제주A 확진자) [2월 20일] 한라병원 선별진료소 방문.'
       }
        }, 

      {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.444137, 33.286241]
       },
       properties: {
       title: '서귀포 위호텔',
       description: '(20-02-21 제주B 확진자) [2월 17, 19일] 서귀포 소재 WE호텔 근무.'
       }
        },       

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.423082, 33.252003]
       },
       properties: {
       title: '중문신내과의원',
       description: '(20-02-21 제주B 확진자) [2월 19일] 중문신내과의원 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.565406, 33.254428]
       },
       properties: {
       title: '서귀포열린병원',
       description: '(20-02-21 제주B 확진자) [2월 19, 20일] 서귀포열린병원 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [126.428373, 33.255016]
       },
       properties: {
       title: 'CU제주중문오네뜨점',
       description: '(20-02-21 제주B 확진자) [2월 20일] CU제주중문오네뜨점 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.101298, 37.487466]
       },
       properties: {
       title: '수서역',
       description: '(20-02-21 부산-1 확진자) [2월 18일] 수서역에서 SRT타고 부산역으로 출발.(14:00~17:00)'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.042229, 35.115229]
       },
       properties: {
       title: '부산역',
       description: '(20-02-21 부산-1 확진자) [2월 18일] 부산역 도착.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.119137, 35.199104]
       },
       properties: {
       title: '반여동 장산명가',
       description: '(20-02-21 부산-1 확진자) [2월 19일] 오전 11시~12시 40분경 반여동 소재 장산명가 방문.'
       }
        },   

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.125558, 35.205756]
       },
       properties: {
       title: '장산 성당',
       description: '(20-02-21 부산-1 확진자) [2월 19일] 오전 10시~11시 장산 성당 방문.'
       }
        }, 


       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.116698, 35.199541]
       },
       properties: {
       title: '자연드림 반여점',
       description: '(20-02-21 부산-1 확진자) [2월 19일] 오후 12시 53분~1시 30분, 유기농 식품 전문점 방문.'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.119941, 35.202698]
       },
       properties: {
       title: '센텀 내과의원',
       description: '(20-02-21 부산-1 확진자) [2월 20일] 오전 11시 20분 ~ 11시 50분, 센텀 내과의원 방문.'
       }
        },  

      {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.181970, 35.173503]
       },
       properties: {
       title: '부산해운대백병원',
       description: '(20-02-21 부산-1 확진자) [2월 21일] 부산해운대백병원 방문 후 자택 기거.<br>(부산-11 확진자) [2월 18일] 오후 3시 45분부터 4시 40분까지 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.073828, 35.215220]
       },
       properties: {
       title: '전자공고',
       description: '(20-02-21 부산-2 확진자) [2월 18일] 오전 11시 50분~오후 12시 40분 전자공고 운동장 이용.'
       }
        }, 

      {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.081204, 35.219545]
       },
       properties: {
       title: '대성탕',
       description: '(20-02-21 부산-2 확진자) [2월 18일] 오후 1시부터 2시 40분까지 대성탕(목욕탕) 이용.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.084164, 35.198336]
       },
       properties: {
       title: '동래밀면 본점',
       description: '(20-02-21 부산-2 확진자) [2월 18일] 오후 3시 10분~4시 40분, 동래밀면 본점 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.086084, 35.205803]
       },
       properties: {
       title: '복산동 행정복지센터',
       description: '(20-02-21 부산-2 확진자) [2월 18일] 오후  4시 20분부터 10분간 복산동 주민센터 방문.'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.083637, 35.204852]
       },
       properties: {
       title: '동래구청 복지정책과',
       description: '(20-02-21 부산-2 확진자) [2월 18일] 오후 5시부터 20분까지 동래구청 복지정책과 방문.'
       }
        }, 

        {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.077126, 35.215985]
       },
       properties: {
       title: '온천교회',
       description: '부산 확진자 다수 방문.'
       }
        }, 

        {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.119051, 35.154387]
       },
       properties: {
       title: '피자몰 광안리점',
       description: '(20-02-21 부산-2 확진자) [2월 20일] 오후 1시 40분 ~ 3시, 광안리 소재 피자몰 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.120726, 35.198026]
       },
       properties: {
       title: 'GS25 꿈에그린점',
       description: '(20-02-21 부산-2 확진자) [2월 20일] GS25 동래꿈에그린점 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.080164, 35.204381]
       },
       properties: {
       title: '대동병원 선별진료소',
       description: '(20-02-21 부산-2 확진자) [2월 21일] 대동병원 선별진료소 방문.'
       }
        }, 


      {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.079803, 35.204549]
       },
       properties: {
       title: '가까운약국',
       description: '(20-02-21 부산-2 확진자) [2월 21일] <가까운약국> 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.081163, 35.204297]
       },
       properties: {
       title: '메가마트 동래점',
       description: '(20-02-21 부산-2 확진자) [2월 21일] 메가마트 동래점 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.098633, 35.199459]
       },
       properties: {
       title: '얼쑤대박터지는집 동래점',
       description: '(20-02-21 부산-2 확진자) [2월 21일] 음식점 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.079854, 35.211385]
       },
       properties: {
       title: '동래구 보건소',
       description: '부산 내 확진자 다수 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.264352, 36.273366]
       },
       properties: {
       title: '계룡역',
       description: '(20-02-19 계룡시 확진자) [2월 17일] 대전역에서 계룡역 도착.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.256727, 36.274807]
       },
       properties: {
       title: '맛나감자탕 계룡본점',
       description: '(20-02-19 계룡시 확진자) [2월 17일] 맛나감자탕 계룡본점 방문.'
       }
        },

        {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.241536, 36.282520]
       },
       properties: {
       title: '늘푸른목장식당',
       description: '(20-02-19 계룡시 확진자) [2월 18일] 늘푸른목장식당 방문.'
       }
        }, 

        {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.235973, 36.288471]
       },
       properties: {
       title: '향한리가는길에',
       description: '(20-02-19 계룡시 확진자) [2월 18일] <향한리가는길에> 방문.'
       }
        },   

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.242266, 36.288896]
       },
       properties: {
       title: '김밥천국',
       description: '(20-02-19 계룡시 확진자) [2월 19일] 김밥천국 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.417777, 36.362561]
       },
       properties: {
       title: '대전병원 선별진료소',
       description: '(20-02-19 계룡시 확진자) [2월 19일] 대전병원 선별진료소에서 진료.'
       }
        },

        {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.159829, 35.566468]
       },
       properties: {
       title: '왕비세탁소',
       description: '(20-02-21 합천A 확진자) [2월 18일] 왕비세탁소 방문.'
       }
        },

      {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.154939, 35.568384]
       },
       properties: {
       title: '세운할인마트',
       description: '(20-02-21 합천A 확진자) [2월 18일] 세운할인마트 방문.'
       }
        },  

      {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.162587, 35.567116]
       },
       properties: {
       title: '합천 시외버스 터미널',
       description: '(20-02-21 합천A 확진자) [2월 19일] 합천 시외버스 터미널 방문.<br>(20-02-21 합천B 확진자) [2월 16일] 합천 시외버스 터미널 도착.'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.156550, 35.568023]
       },
       properties: {
       title: '합천 보건소',
       description: '(20-02-21 합천A 확진자) [2월 19일] 합천 보건소 진료.'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.161325, 35.567495]
       },
       properties: {
       title: '소정약국',
       description: '(20-02-21 합천A 확진자) [2월 19일] 소정약국 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.139512, 35.762724]
       },
       properties: {
       title: '가야면사무소',
       description: '(20-02-21 합천B 확진자) [2월 18일] 가야면사무소 20분간 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.138579, 35.762706]
       },
       properties: {
       title: '야천1구 경로당',
       description: '(20-02-21 합천B 확진자) [2월 18일] 야천1구 경로당 방문.'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.163660, 35.568030]
       },
       properties: {
       title: '합천참정형외과',
       description: '(20-02-21 합천C 확진자) [2월 15일] 합천참정형외과 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.162204, 35.568443]
       },
       properties: {
       title: '김경호내과',
       description: '(20-02-21 합천C 확진자) [2월 20일] 김경호내과 방문.'
       }
        }, 

 {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.064809, 35.176295]
       },
       properties: {
       title: '부산시교육청',
       description: '(부산 확진자C) [2월 21일] 오후 1시 30분부터 30분간 부산시 교육청(검정고시 신청부스) 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.115170, 35.160697]
       },
       properties: {
       title: '수영구 슈가스팟',
       description: '(부산 확진자C) [2월 21일] 오후 2시부터 3시경 수영구 광안동 소재 슈가스팟 건물 방문.'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.113196, 35.160835]
       },
       properties: {
       title: '부산한서병원 선별진료소',
       description: '(부산 확진자C) [2월 21일] 오후 3시부터 5시 40분, 부산(BHS) 한서병원 선별진료소 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.160547, 35.164793]
       },
       properties: {
       title: '해운대시외버스터미널',
       description: '(부산 확진자D) [2월 18일] 오후 8시 40분, 해운대시외버스터미널 도착.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.203441, 35.186468]
       },
       properties: {
       title: '신선지국밥',
       description: '(부산 확진자D) [2월 18일] 오후 9시부터 1시간 동안 음식점에서 식사.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.175792, 35.173830]
       },
       properties: {
       title: '베스킨라빈스 해운대좌동점',
       description: '(부산 확진자D) [2월 18일] 오후 10시 20분부터 10분간 아이스크림점 방문.'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.178640, 35.164109]
       },
       properties: {
       title: '해운대보건소 선별진료소',
       description: '(부산 확진자D) [2월 21일] 오후 5시 45분경 해운대보건소 선별진료소에서 진료후 자택 귀가.<br>(부산 확진자E) [2월 21일] 오후 7시 40분경 자차로 선별진료소에서 진료.'
       }
        },    

        {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.119805, 35.201312]
       },
       properties: {
       title: '청산곱창',
       description: '(부산 확진자E) [2월 19일] 오후 6시반, 해운대구 선수촌로 소재 청산곱창 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.119353, 35.203818]
       },
       properties: {
       title: '스타벅스 수영강변점',
       description: '(부산 확진자E) [2월 19일] 오후 8시반, 스타벅스 수영강변점 방문.'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.121797, 35.202014]
       },
       properties: {
       title: '세븐일레븐 반여선수촌점',
       description: '(부산 확진자E) [2월 19일] 오후 10시 50분경 반여선수촌 세븐일레븐 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.123605, 35.203456]
       },
       properties: {
       title: '세븐일레븐 반여선수촌점',
       description: '(부산 확진자E) [2월 19일] 오후 11시 30분경 CU반여선수촌점 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.434196, 36.332326]
       },
       properties: {
       title: '대전역',
       description: '(241번째 확진자) [2월 18일] 경산역에서 대전역 도착.'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.449351, 36.335629]
       },
       properties: {
       title: '불난뚱땡이',
       description: '(241번째 확진자) [2월 18일] 오후 8시경 자양동 소재 불난뚱땡이(음식점) 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.449351, 36.335629]
       },
       properties: {
       title: '불난뚱땡이',
       description: '(241번째 확진자) [2월 18일] 오후 8시경 자양동 소재 불난뚱땡이(음식점) 방문.'
       }
        },
        
       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.447762, 36.337698]
       },
       properties: {
       title: '매직코인노래연습장',
       description: '(241번째 확진자) [2월 18일] 오후 9시 30분부터 11시까지 자양동 소재 코인노래방 방문.<br>[2월 19일] 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.449456, 36.338686]
       },
       properties: {
       title: 'GS25 우송IT센터점',
       description: '(241번째 확진자) [2월 18일] 오후 11시 30분부터 GS25우송IT센터점 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.449456, 36.338686]
       },
       properties: {
       title: 'GS25 우송IT센터점',
       description: '(241번째 확진자) [2월 18일] 오후 11시 30분부터 GS25우송IT센터점 방문.'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.449266, 36.338782]
       },
       properties: {
       title: '1983더그레이커피숍',
       description: '(241번째 확진자) [2월 19일] 오후 3시 10분경 자양동 소재 커피숍 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.427789, 36.327637]
       },
       properties: {
       title: '레스모아 중앙점',
       description: '(241번째 확진자) [2월 19일] 중구 은행동 소재 업소 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.426869, 36.328556]
       },
       properties: {
       title: '토마토(중구)',
       description: '(241번째 확진자) [2월 19일] 중구 은행동 소재 업소 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.428116, 36.329026]
       },
       properties: {
       title: '원더플레이스(중구)',
       description: '(241번째 확진자) [2월 19일] 중구 은행동 소재 업소 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.427936, 36.327697]
       },
       properties: {
       title: '인생사진(중구)',
       description: '(241번째 확진자) [2월 19일] 중구 은행동 소재 업소 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.425347, 36.328472]
       },
       properties: {
       title: '에메필(중구)',
       description: '(241번째 확진자) [2월 19일] 중구 은행동 소재 업소 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.427416, 36.327809]
       },
       properties: {
       title: '섹시쿠키 대전은행점',
       description: '(241번째 확진자) [2월 19일] 중구 은행동 소재 업소 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.421522, 36.327125]
       },
       properties: {
       title: '중앙로 지하상가',
       description: '(241번째 확진자) [2월 19일] 중앙로 지하상가 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.454827, 36.311854]
       },
       properties: {
       title: '대전 동구보건소',
       description: '(241번째 확진자) [2월 20/21일] 각각 방문, 검사 실시.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.449565, 36.340482]
       },
       properties: {
       title: '우리동네DC아울렛자양점',
       description: '(241번째 확진자) [2월 21일] 우리동네DC아울렛자양점 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.280779, 36.463017]
       },
       properties: {
       title: '쑥티식당',
       description: '(세종A 확진자) [2월 19일] 쑥티식당 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.018744, 36.778476]
       },
       properties: {
       title: '아산 항아리보쌈',
       description: '(세종A 확진자) [2월 21일] 항아리보쌈 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.362948, 36.036658]
       },
       properties: {
       title: '중앙상가 애슐리',
       description: '(207번 확진자) [2월 17일] 중앙상가 애슐리 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.365557, 36.035029]
       },
       properties: {
       title: '달콤커피 죽도시장점',
       description: '(207번 확진자) [2월 17일] 달콤커피 죽도시장점 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.359088, 36.025112]
       },
       properties: {
       title: '동원성',
       description: '(207번 확진자) [2월 17일] 동원성에서 식사.'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.364912, 36.031666]
       },
       properties: {
       title: '김밥나라(오거리)',
       description: '(207번,E 확진자) [2월 18일] 김밥나라에서 식사.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.396211, 35.992428]
       },
       properties: {
       title: '포항남구보건소',
       description: '(207번,C 확진자) [2월 20일] 포항남구보건소 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.360372, 36.025222]
       },
       properties: {
       title: '어림지',
       description: '(포항C 확진자) [2월 16일] 어림지 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.345033, 35.999782]
       },
       properties: {
       title: '매직PC방',
       description: '(포항C 확진자) [2월 17일] 매직PC방 방문 후 귀가.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.345871, 35.996375]
       },
       properties: {
       title: '맘스터치 연일점',
       description: '(포항C 확진자) [2월 18일] 맘스터치 연일점 방문.'
       }
        }, 

      {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.374110, 36.060095]
       },
       properties: {
       title: '바디라인 피트니스',
       description: '(포항D 확진자) [2월 16일] 바디라인 피트니스 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.349156, 36.011109]
       },
       properties: {
       title: '포항우체국',
       description: '(포항D 확진자) [2월 18일] 포항우체국 출근'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.372315, 36.066697]
       },
       properties: {
       title: '라라코스트',
       description: '(포항E 확진자) [2월 18일] 라라코스트 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.347175, 36.011452]
       },
       properties: {
       title: '호텔팰리스',
       description: '(포항E 확진자) [2월 18,20일] 호텔팰리스 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.366402, 36.032990]
       },
       properties: {
       title: '홍성철성형외과',
       description: '(포항E 확진자) [2월 20일] 홍성철성형외과 (4층) 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.366832, 36.033008]
       },
       properties: {
       title: '독일약국',
       description: '(포항E 확진자) [2월 20일] 독일 약국 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.380461, 36.070717]
       },
       properties: {
       title: '포항북구보건소',
       description: '(포항F 확진자) [2월 19,20일] 북구보건소 근무.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.392358, 36.080566]
       },
       properties: {
       title: 'CU포항인성점',
       description: '(포항F 확진자) [2월 19일] CU포항인성점 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.392485, 36.079387]
       },
       properties: {
       title: '장성동 진할인마트',
       description: '(포항F 확진자) [2월 21일] 진할인마트 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.594805, 35.868168]
       },
       properties: {
       title: '인플라워',
       description: '(경주A 확진자) [2월 19일] 오후 6시 10분경 대구 동성로 소재 꽃집 방문.'
       }
        },

      {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [128.598189, 35.868411]
       },
       properties: {
       title: '스시라스또',
       description: '(경주A 확진자) [2월 19일] 오후 6시 20분경 대구 동성로 소재 식당 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.201189, 35.868795]
       },
       properties: {
       title: '스시라스또',
       description: '(경주A 확진자) [2월 19일] 오후 8시 15분경 대구에서 도착 후 도보로 귀가.'
       }
        },  

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.202268, 35.866639]
       },
       properties: {
       title: '현곡 준PC방',
       description: '(경주A 확진자) [2월 20일] 오전 10시부터 오후 2시까지 현곡면 소재 PC방 이용.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.324179, 35.714609]
       },
       properties: {
       title: '외동 경북의원',
       description: '(경주B 확진자) [2월 12일] 오후 3시경 외동 경북의원 내원.<br>[2월 14일] 오후 4시 2차 내원.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.324555, 35.714574]
       },
       properties: {
       title: '입실약국',
       description: '(경주B 확진자) [2월 12일] 오후 3시 16분경 약 처방.<br>[2월 14일] 오후 4시 30분경 약 처방.'
       }
        }, 

      {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.290838, 35.696094]
       },
       properties: {
       title: '서진산업',
       description: '(경주B 확진자) [2월 12~14일, 17~19일] 서진산업 출근.'
       }
        }, 

        {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.201189, 35.868795]
       },
       properties: {
       title: '서경주역',
       description: '(경주A, C 확진자) [2월 19일 20:15 A확진자 도착]<br>[2월 14일 20:15 C확진자 도착).'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.216997, 35.867395]
       },
       properties: {
       title: '사랑의소아과, 예송약국',
       description: '(경주C 확진자) [2월 21일] 오전 10시 30분경 사랑의소아과 진료 후 같은 건물 예송약국에서 약 처방.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.199296, 35.875179]
       },
       properties: {
       title: '수억상사',
       description: '(경주D 확진자) [2월 20~22일] 현곡면 소재 고물상 출근.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.157147, 35.901069]
       },
       properties: {
       title: '용담매운탕',
       description: '(경주D 확진자) [2월 20일] 오후 12시 용담매운탕 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.204997, 35.871671]
       },
       properties: {
       title: '경원홈마트',
       description: '(경주D 확진자) [2월 21일] 오전 10시 50분경 경원홈마트 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.186150, 35.843034]
       },
       properties: {
       title: '청송얼음골막걸리',
       description: '(경주D 확진자) [2월 21일] 오후 5시 30분경 퇴근 후 현곡면 소재 청송얼음골막걸리 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.226257, 35.883035]
       },
       properties: {
       title: '새천년떡집',
       description: '(경주E 확진자) [2월 20일] 오전 8시 30분경 자차로 새천년떡집 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.227952, 35.883077]
       },
       properties: {
       title: '웅진북클럽 경주지역국',
       description: '(경주E 확진자) [2월 20~21일] 출근.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.211502, 35.886967]
       },
       properties: {
       title: '자매미나리밭',
       description: '(경주E 확진자) [2월 20일] 점심 회식.'
       }
        },  

      {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.176738, 35.881423]
       },
       properties: {
       title: '커피명가',
       description: '(경주E 확진자) [2월 20일] 오후 2시 30분경 카페 커피명가 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.210411, 35.842192]
       },
       properties: {
       title: '스틸룸',
       description: '(경주E 확진자) [2월 20일] 오후 8시 30분경 스틸룸 식당 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.231065, 35.877436]
       },
       properties: {
       title: '용강국밥',
       description: '(경주E 확진자) [2월 21일] 점심 용강국밥 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [129.232113, 35.880608]
       },
       properties: {
       title: '테이크5',
       description: '(경주E 확진자) [2월 21일] 오후 1시경 테이크5 방문.'
       }
        }, 

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.102276, 35.817148]
       },
       properties: {
       title: '다솔아동병원&다솜약국',
       description: '(전주 확진자) [2월 16일] 다솔아동병원과 같은 건물 다솜약국 방문.'
       }
        },  

        {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.114272, 35.806575]
       },
       properties: {
       title: '홈플러스 전주효자점',
       description: '(전주 확진자) [2월 16일] 전주 효자동 소재 홈플러스 방문.'
       }
        },

       {
       type: 'Feature',
       geometry: {
       type: 'Point',
       coordinates: [127.116245, 35.830870]
       },
       properties: {
       title: '지리산 한방병원',
       description: '(전주 확진자) [2월 20일] 지리산 한방병원 방문.'
       }
        }, 

       {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.382737, 36.102904]
    },
    properties: {
      title: '순천향대구미병원',
      description: '(구미A 확진자) [2월 21일] 검체 채취 후 검사 의뢰<br>[2월 22일] 양성 판정 후 자가격리.'
    }
  },       

      {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.717370, 37.864481]
    },
    properties: {
      title: '춘천고속버스터미널',
      description: '(춘천A 확진자) [2월 15, 16일] 15일 춘천 버스터미널에서 고속버스를 이용해 대구로 이동 후 16일 귀가.'
    }
  },   

      {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.555959, 35.889882]
    },
    properties: {
      title: '이마트 트레이더스 비산점',
      description: '(춘천A 확진자) [2월 16일] 대구 트레이더스 방문.'
    }
  },  

        {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.488369, 36.629023]
    },
    properties: {
      title: '육거리시장',
      description: '(청주 확진자) [2월 17일] 청주시 석교동 육거리 시장 주차장 ~ 떡집골목 이용.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.507674, 36.628334]
    },
    properties: {
      title: '금천동 종합문구',
      description: '(청주 확진자) [2월 17일] 청주시 금천동 소재 문구점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.516125, 36.620369]
    },
    properties: {
      title: '롯데마트 상당점',
      description: '(청주 확진자) [2월 18일] 용암동 소재 롯데마트 방문.'
    }
  },

    {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.568680, 36.778026]
    },
    properties: {
      title: '송원칼국수',
      description: '(청주 확진자) [2월 19일] 증평군 증평읍 소재 송원칼국수 방문.'
    }
  },

      {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.504915, 36.633924]
    },
    properties: {
      title: '델리퀸 금천점',
      description: '(청주 확진자) [2월 19일] 델리퀸 금천점 방문.'
    }
  },


  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.167432, 37.440048]
    },
    properties: {
      title: '삼척볼링센터',
      description: '(청주 확진자) [2월 17일] 방문.'
    }
  },

{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.167222, 37.439958]
    },
    properties: {
      title: '세븐일레븐 삼척삼원',
      description: '(청주 확진자) [2월 17일] 방문.'
    }
  },

{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.164271, 37.443038]
    },
    properties: {
      title: '오션PC방',
      description: '(청주 확진자) [2월 17,18,20,21일] 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.163697, 37.443576]
    },
    properties: {
      title: '만치만치',
      description: '(청주 확진자) [2월 17일] 방문.'
    }
  },


  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.116410, 37.521121]
    },
    properties: {
      title: '역전할머니맥주 동해천곡점(&세븐일레븐 동해중앙점)',
      description: '(청주 확진자) [2월 19일 세븐일레븐 동해중앙점도 방문]<br>[17,18,19,20일] 방문.'
    }
  },

    {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.114024, 37.520772]
    },
    properties: {
      title: '맥도날드 동해DT점',
      description: '(청주 확진자) [2월 18일] 방문.'
    }
  },

      {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.164741, 37.447259]
    },
    properties: {
      title: '데일리커피숍',
      description: '(청주 확진자) [2월 18일] 방문.'
    }
  },

      {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.163447, 37.443831]
    },
    properties: {
      title: 'CU삼척대학로점',
      description: '(청주 확진자) [2월 18일] 방문.'
    }
  },

        {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.164591, 37.442641]
    },
    properties: {
      title: '모닝캄',
      description: '(청주 확진자) [2월 19일] 방문.'
    }
  },

          {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.164243, 37.442586]
    },
    properties: {
      title: '김밥천국 삼척점',
      description: '(청주 확진자) [2월 19일] 방문.'
    }
  },


    {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.162887, 37.446209]
    },
    properties: {
      title: '성내동사무소',
      description: '(청주 확진자) [2월 19일] 방문.'
    }
  },

      {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.164239, 37.442894]
    },
    properties: {
      title: 'GS25 삼척남양점',
      description: '(청주 확진자) [2월 19일] 방문.'
    }
  },

        {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.163512, 37.442969]
    },
    properties: {
      title: '아이비스PC방',
      description: '(청주 확진자) [2월 19일] 방문.'
    }
  },

   {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.152185, 37.439478]
    },
    properties: {
      title: 'GS25 삼척원당점',
      description: '(청주 확진자) [2월 20일] 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.163448, 37.444148]
    },
    properties: {
      title: '놀부부대찌개 강원삼척점',
      description: '(청주 확진자) [2월 20일] 방문.'
    }
  },

    {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.164290, 37.443036]
    },
    properties: {
      title: '그랑프리당구장',
      description: '(청주 확진자) [2월 20일] 방문.'
    }
  },

      {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.1692608, 37.431306]
    },
    properties: {
      title: '신한은행 성남공단금융센터',
      description: '(송파A 확진자) [2월 18~21일] 오전 8시경 출근.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.124506, 37.485603]
    },
    properties: {
      title: '배스킨라빈스 파크하비오점',
      description: '(송파A 확진자) [2월 18~22일] 오전 9시 20분경 개인사업장 출근.<br>(송파B 확진자) [2월 18일] 오전 11시 30분경 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.122422, 37.480743]
    },
    properties: {
      title: '미아리우동',
      description: '(송파A 확진자) [2월 18일] 오후 3시 37분경 미아리우동 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.049840, 37.524841]
    },
    properties: {
      title: '르피에드 분양사무소',
      description: '(송파A 확진자) [2월 18일] 오후 4시부터 1시간동안 청담동 오피스텔 분양사무소 르피에드 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.124498, 37.485621]
    },
    properties: {
      title: '하나약국',
      description: '(송파A 확진자) [2월 18일] 오후 6시 12분 문정2동 소재 하나약국 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.127030, 37.483404]
    },
    properties: {
      title: '문정 계경순대국',
      description: '(송파A 확진자) [2월 19일] 오후 5시 46분경 문정2동 계경순대국에서 저녁식사 후 자차로 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.125964, 37.484685]
    },
    properties: {
      title: '문정 교동짬뽕',
      description: '(송파A 확진자) [2월 20일] 오후 7시 20분경 문정2동 소재 교동짬뽕에서 자차로 8시 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.106552, 37.514532]
    },
    properties: {
      title: '송파구보건소',
      description: '(송파A/794번/797번 확진자) 코로나 19 검사 실시.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.127145, 37.412913]
    },
    properties: {
      title: '성남종합버스터미널',
      description: '(성남 확진자) [2월 20일] 오후 9시 45분경 동대구터미널에서 출발한 버스를 타고 성남종합버스터미널 도착 후 마을 8-1번 승차.'
    }
  },

   {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.125261, 36.802361]
    },
    properties: {
      title: '쌍용주공7단지',
      description: '(천안 확진자) [2월 23일] 오전 10시 30분부터 오후 1시까지 어머니집 체류.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.111540, 36.805665]
    },
    properties: {
      title: '불당동 대동다숲 아파트 ',
      description: '(천안 확진자) 본인 자택.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.109630, 36.805495]
    },
    properties: {
      title: '찰스리헤어테크 불당점',
      description: '(천안 확진자) [2월 23일] 오후 3시부터 4시까지 불당동 대동다숲 내 찰스리 미용실 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.085442, 36.797187]
    },
    properties: {
      title: '상도종합건설',
      description: '(천안 확진자) [2월 24일] 오전 8시 30분부터 11까지 회사 출근.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.125700, 36.799779]
    },
    properties: {
      title: '본정형외과',
      description: '(천안 확진자) [2월 24일] 오전 11시부터 1시간동안 쌍용2동 소재 정형외과 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.119157, 36.802545]
    },
    properties: {
      title: '삼성라온내과',
      description: '(천안 확진자) [2월 24일] 오후 12시부터 20분간 쌍용3동 소재 내과 의원 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.119231, 36.802662]
    },
    properties: {
      title: '얌샘김밥',
      description: '(천안 확진자) [2월 24일] 오후 12시 40분부터 20분간 쌍용3동 소재 김밥집 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.131150, 36.797270]
    },
    properties: {
      title: '천안충무병원 선별진료소',
      description: '(천안 확진자) [2월 24일] 오후 2시부터 4시 30분까지 천안충무병원 선별진료소 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.146591, 37.406956]
    },
    properties: {
      title: '파리바게트 분당상탑점',
      description: '(성남 확진자) [2월 20일] 밤에 파리바게트 분당상탑점에서 빵 구입 후 도보로 야탑3동 소재 자택으로 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.045880, 37.738727]
    },
    properties: {
      title: '의정부역',
      description: '(포천 확진자) [2월 16일] 오후 10시 50분경 의정부역에서 소요산역 향하는 지하철 탑승'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.061085, 37.948045]
    },
    properties: {
      title: '소요산역',
      description: '(포천 확진자) [2월 16일] 의정부역에서 도착.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.061857, 37.947427]
    },
    properties: {
      title: 'CU 소요산점',
      description: '(포천 확진자) [2월 16일] 오후 11시 40분경 편의점에서 물품 구매.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.068071, 38.024960]
    },
    properties: {
      title: '전곡 블루가이미용실',
      description: '(포천 확진자) [2월 17일] 오후 6시 30분경 부대 퇴근 후 전곡 블루가이미용실에서 이발.'
    }
  },


{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.068397, 38.026214]
    },
    properties: {
      title: '메가커피 전곡점',
      description: '(포천 확진자) [2월 17일] 오후 7시 7분경 커피구입.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.067724, 38.025312]
    },
    properties: {
      title: '롯데리아 전곡점',
      description: '(포천 확진자) [2월 17일] 오후 7시 57분경 햄버거 구매.'
    }
  },

   {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.079831, 38.101124]
    },
    properties: {
      title: 'GS25 연천전곡점',
      description: '(포천 확진자) [2월 17일] 오후 8시 13분경 물품 구매.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.052970, 37.892037]
    },
    properties: {
      title: '생고기제작소 동두천점',
      description: '(포천 확진자) [2월 18일] 오후 8시 3분경 동두천 소재 음식점에서 식사 후 하사 자차로 숙소도착.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.068642, 38.024919]
    },
    properties: {
      title: '마왕족발 전곡점',
      description: '(포천 확진자) [2월 21일] 오후 3시 40분경 마왕족발 전곡점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.068013, 38.026795]
    },
    properties: {
      title: '전곡대륙정육점',
      description: '(포천 확진자) [2월 21일] 오후 4시경 전곡대륙정육점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.066891, 38.028039]
    },
    properties: {
      title: '전곡국민마트',
      description: '(포천 확진자) [2월 21일] 오후 4시 15분경 전곡국민마트 방문.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.068197, 38.025619]
    },
    properties: {
      title: '할매순대국 전곡점',
      description: '(포천 확진자) [2월 22일] 오전 10시 15분경 연천 소재 할매순대국 식당에서 식사.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.533327, 35.836858]
    },
    properties: {
      title: '대구 파라다이스 컨벤션',
      description: '(파주A 확진자) [2월 16일] 오전 11시 30분부터 오후 12시 50분까지 파라다이스 컨벤션 웨딩홀 및 뷔페 식사.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.134300, 37.463389]
    },
    properties: {
      title: '횡성휴게소(강릉방향)',
      description: '(파주A 확진자) [2월 16일] 자차로 강릉집으로 이동 중 횡성휴게소 경유.'
    }
  },

   {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.773326, 37.654422]
    },
    properties: {
      title: '일산화이트치과',
      description: '(파주A 확진자) [2월 17일] 오전 11시 46분경 일산 화이트 치과 방문.'
    }
  },

{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.792036, 37.645147]
    },
    properties: {
      title: '고양조은약국',
      description: '(파주A 확진자) [2월 17일] 오후 12시 57분경 고양조은약국 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.716265, 37.773948]
    },
    properties: {
      title: '탄현면 일굼터',
      description: '(파주A 확진자) [2월 17일] 오후 1시부터 6시까지 회사 오후근무<br>(파주B 확진자) [2월 17~21일] 오전 9시부터 오전 6시까지 회사 근무.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.888717, 37.749280]
    },
    properties: {
      title: '강릉의료원 선별진료소',
      description: '(파주A 확진자) [2월 22일] 오후 1시부터 오후 9시 30분까지 강릉시의료원 선별진료소 방문해 1차 검사결과 양성 판정.<br>(512번 확진자) [2월 22일] 오전 9시 50분경 강릉의료원 선별진료소 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.785100, 37.869658]
    },
    properties: {
      title: '홈플러스 파주문산점',
      description: '(파주B 확진자) [2월 22일] 오전 10시경 홈플러스 파주문산점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.783947, 37.856334]
    },
    properties: {
      title: 'GS25 문산점',
      description: '(파주B 확진자) [2월 22일] 오후 12시경 GS25 문산점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.872481, 37.849523]
    },
    properties: {
      title: '천하약국(법원읍)',
      description: '(파주B 확진자) [2월 22일] 오후 3시 11분경 법원읍 소재 천하약국 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.780296, 37.838297]
    },
    properties: {
      title: '문산 플러스마트',
      description: '(파주B 확진자) [2월 22일] 오후 4시 38분부터 4시 49분까지 문산 플러스마트 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.870897, 37.893683]
    },
    properties: {
      title: '풍작플랜지',
      description: '(파주C 확진자) [2월 17~21일] 구내식당에서 중식, 석식 조리 및 준비, 식수인원 20명.'
    }
  },


{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.874575, 37.848622]
    },
    properties: {
      title: '천현농협 하나로마트',
      description: '(파주C 확진자) [2월 21일] 오후 1시 23분경 천현농협 하나로마트에서 쓰레기봉투 구입.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.085868, 35.230794]
    },
    properties: {
      title: '터줏집돼지국밥',
      description: '(부산-8 확진자) [2월 19일] 오후 1시경 부산대학앞 돼지국밥집 방문.'
    }
  },


{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.086654, 35.230605]
    },
    properties: {
      title: '스타벅스 부산대점',
      description: '(부산-8 확진자) [2월 19일] 오후 1시 40분경 도보로 스타벅스 부산대점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.086278, 35.233004]
    },
    properties: {
      title: '시골통돼지볶음',
      description: '(부산-8 확진자) [2월 20일] 오후 1시 10분경 시골통돼지볶음 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.087161, 35.229605]
    },
    properties: {
      title: '이솝페이블',
      description: '(부산-8 확진자) [2월 20일] 오후 2시 15분경 이솝페이블 방문.'
    }
  },

   {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.078332, 35.212664]
    },
    properties: {
      title: '동래봄산부인과',
      description: '(부산-8 확진자) [2월 20일] 오후 4시 20분경 동래구 소재 산부인과 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.074256, 35.206302]
    },
    properties: {
      title: '맥도날드 부산온천SKDT점',
      description: '(부산-8 확진자) [2월 20일] 자차로 오후 9시 20분경 맥도날드 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.078781, 35.213079]
    },
    properties: {
      title: 'OX PC방',
      description: '(부산-9 확진자) [2월 20일] 오전 8시 40분부터 9시 5분까지 PC방 이용.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.072256, 35.211755]
    },
    properties: {
      title: '동심가마트',
      description: '(부산-9 확진자) [2월 21일] 오후 10시 15분경 동심가마트 이용.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.791531, 35.020448]
    },
    properties: {
      title: '미풍해장국 나주혁신점',
      description: '(부산-10 확진자) [2월 18일] 오후 1시경 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.795787, 35.018121]
    },
    properties: {
      title: '한국인터넷진흥원',
      description: '(부산-10 확진자) [2월 18일] 오후 1시 30분경 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.039868, 35.113493]
    },
    properties: {
      title: '밀양돼지국밥 부산역점',
      description: '(부산-10 확진자) [2월 18일] 오후 7시 42분경 밀양돼지국밥 부산역점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.125087, 35.175108]
    },
    properties: {
      title: '센텀스카이비즈&삼촌밥런치펍',
      description: '(부산-10 확진자) [2월 19,20일] 사무실 출근(선템중학교 정류장 하차) [2월 20일] 점심은 같은 건물 1층 식당 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.131682, 35.172959]
    },
    properties: {
      title: '센텀가야밀면',
      description: '(부산-10 확진자) [2월 20일] 오후 6시 30분경 식당 방문.'
    }
  },

   {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.996791, 37.480328]
    },
    properties: {
      title: '복돼지네 옛날 생돼지김치찌개',
      description: '(188번 확진자) [2월 14일] 서초구 방배동 소재 식당 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.028622, 37.488345]
    },
    properties: {
      title: '삼성디지털프라자 서초점',
      description: '(188번 확진자) [2월 20일] 오전 10시경 서초2동 소재 삼성디지털프라자 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.624034, 35.883977]
    },
    properties: {
      title: '대구파티마병원',
      description: '(335번 확진자) [2월 20일] 오후 2시부터 3시에 검체 채취 후 3시부터 병원진료.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.941342, 35.960121]
    },
    properties: {
      title: '삼산아파트',
      description: '(335번 확진자) [2월 16일] 오후 12시부터 4시까지 친구집에서 식사.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.700770, 36.562263]
    },
    properties: {
      title: '굿네이버스 좋은마음센터 경북북부지부',
      description: '(384번 확진자) [2월 14,17,18,19일] 옥동 소재 회사 근무.'
    }
  },


{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.675810, 36.574171]
    },
    properties: {
      title: '안동터미널',
      description: '(384번 확진자) [2월 14일] 오후 7시 20분경 동대구터미널행 버스 탑승.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.698801, 36.566061]
    },
    properties: {
      title: '성모이비인후과(옥동)&프라자약국',
      description: '(384번 확진자) [2월 19일] 오전 9시 10분경 옥동 소재 이비인후과 진료 후 1층 프라자약국 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.702836, 36.548105]
    },
    properties: {
      title: '안동자동차검사소',
      description: '(385번 확진자) [2월 18일] 오후 12시 50분경 수상동 소재 안동자동차검사소에서 접수 예약 후 집으로 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.228443, 36.763299]
    },
    properties: {
      title: '무지개식당',
      description: '(386, 387, 388번 확진자) [2월 16일] 오후 7시 30분경 천안시 소재 무지개식당에서 식사.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.735920, 36.569506]
    },
    properties: {
      title: '가톨릭상지대 구내서점',
      description: '(386번 확진자) [2월 17~21일] 가톨릭상지대학교 구내서점에서 근무.'
    }
  },

   {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.698422, 36.560580]
    },
    properties: {
      title: '안동한우곱창',
      description: '(386번 확진자) [2월 18일] 오후 6시경 옥동 소재 식당에서 식사 후 대리운전으로 귀가.'
    }
  },

{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.724431, 36.579213]
    },
    properties: {
      title: '천주교 안동교구청',
      description: '(388번 확진자) [2월 17~20일] 근무.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.729029, 36.567319]
    },
    properties: {
      title: '영희식당',
      description: '(388번 확진자) [2월 19일] 점심 목성동 소재 영희식당에서 식사.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.700276, 36.560843]
    },
    properties: {
      title: '착한낙지 옥동점',
      description: '(388번 확진자) [2월 20일] 오후 6시경 착한낙지 옥동점에서 식사.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.700117, 36.559494]
    },
    properties: {
      title: '하프플로어 카페',
      description: '(388번 확진자) [2월 20일] 오후 8시경 옥동 소재 카페에서 차마심.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.906285, 35.133221]
    },
    properties: {
      title: '뚜에이오',
      description: '(489번 확진자) [2월 19일] 오전 11시 30분경 주월동 소재 카페 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.857286, 35.142389]
    },
    properties: {
      title: '파파샤브',
      description: '(489번 확진자) [2월 19일] 오후 7시 50분경 쌍촌동 소재 식당 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.858193, 35.138979]
    },
    properties: {
      title: '엔탑PC방',
      description: '(489번 확진자) [2월 19일] 오후 9시경 금호동 소재 피시방 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.891520, 35.223732]
    },
    properties: {
      title: '우치공원&동물원',
      description: '(489번 확진자) [2월 20일] 오후 3시 30분경 지인 차량으로 우치공원 및 동물원에서 2시간 머무름.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.874563, 35.179629]
    },
    properties: {
      title: '만랩커피 광주운암점',
      description: '(489번 확진자) [2월 20일] 오후 8시 10분경 운암동 소재 카페 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.124611, 37.411018]
    },
    properties: {
      title: '분당구보건소',
      description: '(성남-2,3 확진자) 보건소 진료.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.338134, 36.029867]
    },
    properties: {
      title: '동해 해물찜',
      description: '(506,507번 확진자) [2월 16일] 오후 6시 16분경 식사.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.349520, 36.012644]
    },
    properties: {
      title: '그랜드에비뉴',
      description: '(506번 확진자) [2월 17일] 오후 12시 30분경 6층 왕돈까스 식사 후 1시 30분경 홈플러스 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.364374, 36.034020]
    },
    properties: {
      title: '농협은행 포항시지부',
      description: '(506번 확진자) [2월 18일] 오후 12시 27분경 죽도동 소재 농협은행 포항시지부 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.366083, 36.034821]
    },
    properties: {
      title: '다이소 죽도시장점',
      description: '(506번 확진자) [2월 18일] 오후 12시 40분경부터 1시간동안 다이소 죽도시장점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.323124, 36.019101]
    },
    properties: {
      title: 'GS25 포항지곡점',
      description: '(506,507번 확진자) 각각 [2월 19일] [2월 18일] GS25 편의점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.317002, 36.032633]
    },
    properties: {
      title: '지곡그린의원&그린약국',
      description: '(506번 확진자) [2월 20일] 오전 9시 20분경 지곡그린의원과 같은 건물의 그린약국 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.339819, 36.015793]
    },
    properties: {
      title: '포항성모병원 선별진료소',
      description: '(506,507번 확진자) [2월 22일] 택시로 오전 8시 40분경부터 11시 50분까지 성모병원 선별진료소 검사 후 자가격리.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.322317, 36.012086]
    },
    properties: {
      title: 'APCTP',
      description: '(507번 확진자) [2월 17일] 오전 8시 30분 도보로 지곡동 소재의 APCTP(Asia Pacific Center for Theoretical Physics) 출근, 오후 6시 30분 공대 물리관 제3공학관 친구 만난 후 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.339822, 36.027532]
    },
    properties: {
      title: '등촌샤브칼국수 포항이동점',
      description: '(507번 확진자) [2월 18일] 오후 12시 15분경 이동 소재 등촌샤브칼국수 점심식사.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.416144, 35.971020]
    },
    properties: {
      title: '참뼈해장국',
      description: '(507번 확진자) [2월 18일] 오후 12시 15분경 이동 소재 등촌샤브칼국수 점심식사.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.934636, 37.781270]
    },
    properties: {
      title: '송정공군휴양소 WA마트',
      description: '(512번 확진자) [2월 22일] 오전 11시 5분경 국군복지단 송정콘도 내 WA마트 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.721716, 35.822965]
    },
    properties: {
      title: '최용식이비인후과의원&명보온누리약국',
      description: '(548번 확진자) [2월 15일] 오후 3시경 옥산동 소재 이비인후과 방문 후 같은 건물 약국 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.723134, 35.819132]
    },
    properties: {
      title: '홈마트 옥산점',
      description: '(548번 확진자) [2월 18일] 오후 4시경 홈마트 옥산점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.734929, 35.821881]
    },
    properties: {
      title: '스카이탁구교실',
      description: '(532번 확진자) [2월 19일] 오후 3시부터 8시까지 중방동 소재 탁구교실 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.740708, 35.819018]
    },
    properties: {
      title: '두레장터',
      description: '(532번 확진자) [2월 21일] 오후 1시경 상방동 소재 두레장터 방문.'
    }
  },


  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.819159, 35.913568]
    },
    properties: {
      title: '참조은이비인후과의원&국민약국',
      description: '(571번 확진자) [2월 17일] 오전 9시 45분경 하양읍 소재 이비인후과 방문 후 같은건물 국민약국 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.893324, 35.120827]
    },
    properties: {
      title: '광주 진월초등학교',
      description: '(589번 확진자) [2월 19일] 오전 10시경 진월동 소재 진월초등학교 이동.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.910437, 35.132803]
    },
    properties: {
      title: '르시엘블루',
      description: '(589번 확진자) [2월 19일] 오후 12시경 주월동 소재 음식점에서 식사 후 진월초등학교로 복귀.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.889888, 35.152274]
    },
    properties: {
      title: '사과나무카페',
      description: '(589번 확진자) [2월 20일] 오후 12시 30분경 서구청 내 카페 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.880240, 35.125657]
    },
    properties: {
      title: '메디팜큰사랑약국',
      description: '(589번 확진자) [2월 20일] 오후 1시 20분경 자차로 풍암동 소재 약국 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.880143, 35.125522]
    },
    properties: {
      title: '이삭토스트 광주풍암점',
      description: '(589번 확진자) [2월 20일] 메디팜큰사랑약국 방문 후 같은 건물 이삭토스트 광주풍암점 방문해 포장 수령 후 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.833923, 35.954196]
    },
    properties: {
      title: '옹심이칼국수 와촌점',
      description: '(615번 확진자) [2월 20일] 오전 11시 50분경 옹심이칼국수 와촌점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.827104, 35.932428]
    },
    properties: {
      title: 'GS25 하양공단점',
      description: '(615번 확진자) [2월 21일] 오전 8시 21분경 GS25 하양공단점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.835985, 35.945076]
    },
    properties: {
      title: '대동반점',
      description: '(615번 확진자) [2월 21일] 오전 11시 50분경 와촌면 소재 대동반점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.819338, 35.913354]
    },
    properties: {
      title: '하양보건지소',
      description: '(626번 확진자) [2월 19일] 오후 3시 30분 하양보건지소 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.816081, 35.911502]
    },
    properties: {
      title: '앤유PC방',
      description: '(626번 확진자) [2월 19일] 오후 4시부터 8시까지 하양읍 소재 앤유PC방 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.815369, 35.911589]
    },
    properties: {
      title: 'CU 하양센트럴파크점',
      description: '(626번 확진자) [2월 20,21일] 각각 오후 7시, 8시경 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.916556, 37.633896]
    },
    properties: {
      title: '은평성모병원',
      description: '(627번 확진자) [2월 11, 13, 14일] 폐렴소견으로 입원한 남편(754번 확진자) 간병.<br>(1254번 확진자) [2월 9~17일] 입원.<br>(1532번 확진자) [2월 6~14일] 입원.<br>(1567번 확진자) [2월 11일] 방문.'
    }

  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.918552, 37.632884]
    },
    properties: {
      title: '은평G마트',
      description: '(627번 확진자) [2월 13일] 오전 11시 16분경 은평구 소재 마트 방문.'
    }
  },

    {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.928830, 37.610874]
    },
    properties: {
      title: '연세큰숲내과',
      description: '(627번 확진자) [2월 14일] 오전 9시 41분경 은평구 대조동 소재 내과 방문.'
    }
  },


{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.928775, 37.610717]
    },
    properties: {
      title: '밝은약국(은평)',
      description: '(627번 확진자) [2월 14일] 연세큰숲내과 진료 후 밝은약국 방문.'
    }
  },


  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.929440, 37.611389]
    },
    properties: {
      title: '나이비인후과',
      description: '(627번 확진자) [2월 17일] 오후 7시 17분경 은평구 불광동 소재 이비인후과 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.929440, 37.611389]
    },
    properties: {
      title: '파리바게트 구기점',
      description: '(627번 확진자) [2월 18일] 오후 1시경 파리바게트 종로구기점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.967491, 37.568359]
    },
    properties: {
      title: '강북삼성병원',
      description: '(627번 확진자) [2월 21일] 오전 10시 57분 음압격리실 진료 후 5시 입원.<br>(1611번 확진자) [2월 24일] 방문 검사.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.764557, 35.840461]
    },
    properties: {
      title: '새하나마트',
      description: '(730번 확진자) [2월 20일] 오후 5시 10분경 압량읍 소재 새하나마트 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.774108, 35.835819]
    },
    properties: {
      title: '파리바게트 신대부적점',
      description: '(730번 확진자) [2월 20일] 오후 5시 18분경 압량읍 소재 파리바게트 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.914120, 37.531768]
    },
    properties: {
      title: '국회의사당',
      description: '(787번 확진자) [2월 19일] 국회 토론회 참석.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.914120, 37.531768]
    },
    properties: {
      title: '한국교원단체총연합회',
      description: '(787번 확진자) [2월 21일] 오후 6시경 한국교총연합회 출근.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.013767, 37.481169]
    },
    properties: {
      title: '백년옥(본관)',
      description: '(787번 확진자) [2월 21일] 오후 12시경 서초동 소재 백년옥 본관'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.727616, 35.832078]
    },
    properties: {
      title: '365소비센터',
      description: '(837번 확진자) [2월 21일] 오후 8시경 정평동 소재 365소비센터 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.727714, 35.832024]
    },
    properties: {
      title: '류앤강이비인후과의원',
      description: '(837번 확진자) [2월 22일] 오전 9시 17분경 정평동 소재 이비인후과 방문.'
    }
  },


{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.727615, 35.832227]
    },
    properties: {
      title: '정다운약국',
      description: '(837번 확진자) [2월 22일] 오전 9시 25분경 정평동 소재 약국 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.967618, 37.527891]
    },
    properties: {
      title: 'LS용산타워',
      description: '(847번 확진자) [2월 20일] 직장 출근 후 증상 악화.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.967618, 37.527891]
    },
    properties: {
      title: 'LS용산타워',
      description: '(847번 확진자) [2월 20일] 직장 출근 후 증상 악화되어 근처 이비인후과에서 독감 검사.'
    }
  },


{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.902075, 37.566323]
    },
    properties: {
      title: '마포구보건소',
      description: '(847번 확진자) [2월 24일] 마포구보건소에서 코로나19 검사.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.902075, 37.566323]
    },
    properties: {
      title: '노브랜드 경산사동점',
      description: '(851번 확진자) [2월 21일] 오후 2시경 노브랜드 경산사동점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [129.340186, 35.660826]
    },
    properties: {
      title: 'OK포인트마트 펜타힐즈로점',
      description: '(852번 확진자) [2월 15~22일] 오후 11시부터 오전 9시까지 근무.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.091995, 36.993726]
    },
    properties: {
      title: '사랑외과의원',
      description: '(907번 확진자) [2월 20일] 오후 4시경 사랑외과의원 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.092135, 36.993721]
    },
    properties: {
      title: '평택프라자약국',
      description: '(907번 확진자) [2월 20일] 오후 4시 10분경 평택프라자약국 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.123439, 37.496311]
    },
    properties: {
      title: '서울경찰병원',
      description: '(907번 확진자) [2월 21일] 오전 7시 20분 서울경찰병원 정기검진.<br>(1370번 확진자) [2월 19일] 오전 7시 30분 경찰병원근무.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.056546, 37.083023]
    },
    properties: {
      title: '송탄보건소',
      description: '(907번 확진자) [2월 21일] 오전 10시 송탄보건소 출근 및 금인지도 관내 출장(34개소).'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.897891, 37.475907]
    },
    properties: {
      title: '성내과',
      description: '(924번 확진자) [2월 21일] 오후 2시 53분경 독산동 소재 내과 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.908807, 37.492738]
    },
    properties: {
      title: '강남성심병원',
      description: '(924번 확진자) [2월 21일] 오후 5시경 선별진료소 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.895924, 37.457056]
    },
    properties: {
      title: '희명병원',
      description: '(924번 확진자) [2월 24일] 오전 9시 50분경 희명병원 방문 후 보건소 검사.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.900560, 37.455705]
    },
    properties: {
      title: '금천구보건소',
      description: '(924번 확진자) [2월 24일] 오전 선별진료소 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.057208, 37.665305]
    },
    properties: {
      title: '김재면내과',
      description: '(996번 확진자) [2월 24일] 오전 9시경 마들역 김재면내과 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.057356, 37.665354]
    },
    properties: {
      title: '미션약국',
      description: '(996번 확진자) [2월 24일] 오전 10시 30분경 미션약국 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.056991, 37.654564]
    },
    properties: {
      title: '노원구보건소',
      description: '(996번 확진자) [2월 24일] 오후 1시경 노원구보건소 선별진료소에서 검사 후 자가격리.<br>(2740번 확진자) [2월 27일] 오전 8시경 선별진료소 검사.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.114582, 37.511817]
    },
    properties: {
      title: '현대그린마트',
      description: '(1118번 확진자) [2월 24일] 오후 8시 15분경 방이동 소재 현대그린마트 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.732564, 35.812048]
    },
    properties: {
      title: 'GS25 옥곡동화점',
      description: '(1188번 확진자) [2월 20일] 오후 3시 20분부터 15분간 편의점 이용.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.734446, 35.812593]
    },
    properties: {
      title: '피자마루 경산옥곡점',
      description: '(1188번 확진자) [2월 20일] 오후 10시 5분경 피자마루 경산옥곡점 방문 후 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.732654, 35.812942]
    },
    properties: {
      title: '파리바게트 경산서부점',
      description: '(1188번 확진자) [2월 22일] 오후 4시 5분경 옥곡동 소재 파리바게트 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.735323, 35.810857]
    },
    properties: {
      title: '미니스톱 경산옥곡대로점',
      description: '(1188번 확진자) [2월 23일] 오후 1시 5분경 편의점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.735041, 35.823230]
    },
    properties: {
      title: '혈통샵',
      description: '(1189번 확진자) [2월 14,15일] 각각 오후 4시부터 5시, 12시부터 4시까지 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.727349, 35.832746]
    },
    properties: {
      title: '청호목욕탕',
      description: '(1189번 확진자) [2월 15일] 오후 5시부터 2시간동안 청호목욕탕 방문 후 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.730556, 35.834391]
    },
    properties: {
      title: '연세속시원연합내과의원',
      description: '(1189번 확진자) [2월 17일] 오후 2시 30분경부터 4시간동안 정평동 소재 내과의원 진료 후 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.726232, 35.824230]
    },
    properties: {
      title: '봉현이네봉평메밀',
      description: '(1192번 확진자) [2월 13일] 오후 3시경 옥산동 소재 식당 방문 후 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.717566, 35.820038]
    },
    properties: {
      title: '하스커피',
      description: '(1192번 확진자) [2월 15일] 오후 5시 30분경 옥산동 소재 카페 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.715568, 35.824152]
    },
    properties: {
      title: '춘하추동',
      description: '(1192번 확진자) [2월 15일] 오후 7시경 옥산동 소재 식당, 봄여름가을겨울(춘하추동) 방문 후 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.758900, 35.804446]
    },
    properties: {
      title: '우즈베이커리포레스트',
      description: '(1192번 확진자) [2월 16일] 오후 2시 30분경 우즈베이커리포레스트 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.768625, 35.816406]
    },
    properties: {
      title: '장난감백화점 아이토이',
      description: '(1192번 확진자) [2월 16일] 오후 4시경 갑제동 소재 완구점 방문 후 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.734736, 35.822942]
    },
    properties: {
      title: '정이비인후과의원',
      description: '(1192번 확진자) [2월 21일] 오후 5시경 사동 소재 이비인후과의원 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.754771, 35.811459]
    },
    properties: {
      title: '밝은약국(경산)&스마일명품찹쌀꽈배기',
      description: '(1192번 확진자) [2월 21일] 오후 5시 10분경 사동 소재 약국 방문 후 같은 건물 꽈배기집 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.755035, 35.811716]
    },
    properties: {
      title: '대백마트 사동점',
      description: '(1192번 확진자) [2월 21일] 오후 5시 30분경 대백마트 방문 후 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.721713, 35.822981]
    },
    properties: {
      title: '윤종수내과의원&명보온누리약국',
      description: '(1196번 확진자) [2월 17일] 오전 9시 10분경 옥산동 소재 내과의원 진료 후 같은건물 약국 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.742530, 35.805984]
    },
    properties: {
      title: '유스파유마트(백천)',
      description: '(1197번 확진자) [2월 19일] 오후 4시경 백천동 소재 마트 방문 후 귀가.'
    }
  },


  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.738647, 35.804166]
    },
    properties: {
      title: '백천평안내과의원&푸른솔약국',
      description: '(1197번 확진자) [2월 22일] 오전 11시 30분경 백천동 소재 내과의원 방문 후 귀가.<br>(1197번 확진자) [2월 14일] 1198번 확진자 오전 9시 30분경 진료 후 같은 건물 약국 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.734657, 35.822539]
    },
    properties: {
      title: '3H스마트지압침대',
      description: '(1198번 확진자) [2월 12일] 오전 11시 30분경 중방동 소재 3H스마트침대 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.736738, 35.823946]
    },
    properties: {
      title: '나비엘경산갤러리',
      description: '(1198번 확진자) [2월 12, 13일] 각각 오후 2시, 오전 10시 30분경 중방동 소재 갤러리 방문 후 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.742445, 35.801511]
    },
    properties: {
      title: '드림마트 백천점',
      description: '(1198번 확진자) [2월 14일] 오후 2시경 드림마트 백천점 방문 후 귀가.'
    }
  },

{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.737346, 35.830270]
    },
    properties: {
      title: 'CU 경산중방대로점',
      description: '(1199번 확진자) [2월 23일] 오후 4시 3분경 편의점 방문 후 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.736152, 35.823922]
    },
    properties: {
      title: '경북신경외과의원',
      description: '(1200번 확진자) [2월 19일] 오후 2시 34분경 진료.<br>[2월 20일] 오후 3시 19분경 진료.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.737150, 35.825724]
    },
    properties: {
      title: '경산대경영상의학과의원',
      description: '(1200번 확진자) [2월 20일] 오후 4시경 진료.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.755912, 35.813502]
    },
    properties: {
      title: '오케이마트 사동점',
      description: '(1208번 확진자) [2월 21일] 오후 1시경 오케이마트 사동점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [128.758080, 35.816111]
    },
    properties: {
      title: '나들가게코사마트 대구경북본점',
      description: '(1208번 확진자) [2월 23일] 오후 4시경 사동소재 나들가게코사마트 방문 후 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.124954, 37.540483]
    },
    properties: {
      title: '교보문고 천호점',
      description: '(1246번 확진자) [2월 19일] 오후 1시경 천호동 소재 교보문고 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.124954, 37.540483]
    },
    properties: {
      title: '교보문고 천호점',
      description: '(1246번 확진자) [2월 19일] 오후 1시경 천호동 소재 교보문고 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.143748, 37.552553]
    },
    properties: {
      title: '스타벅스 명일역점',
      description: '(1246번 확진자) [2월 21일] 오후 2시경 스타벅스 명일역점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.125534, 37.529237]
    },
    properties: {
      title: '강동구보건소',
      description: '(1246번 확진자) [2월 24일] 오전 11시경 강동구보건소 검사.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.907540, 37.605143]
    },
    properties: {
      title: '서울재활병원',
      description: '(1253번 확진자) [2월 20~21일] 오전 8시 30분경 서울재활병원 출근해 작업치료 업무. '
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.917327, 37.619726]
    },
    properties: {
      title: '별난제과점',
      description: '(1253번 확진자) [2월 22일] 오후 7시 30분경 갈현동 소재 별난제과점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.916463, 37.611252]
    },
    properties: {
      title: '홈플러스익스프레스 구산역점',
      description: '(1253번 확진자) [2월 22일] 오후 8시경 홈플러스익스프레스 구산역점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.910347, 37.605687]
    },
    properties: {
      title: '메디팜새경약국',
      description: '(1253번 확진자) [2월 23일] 오전 11시경 역촌동 소재 약국 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.905103, 37.604290]
    },
    properties: {
      title: '서울서북병원',
      description: '(1253번 확진자) [2월 24일] 오후 2시경 서북병원 선별진료소 방문 후 기숙사 복귀.<br>(1532번 확진자) [2월 25일] 코로나19 검사 실시.<br>(1767, 1768번 확진자) 검사 실시.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.921863, 37.611224]
    },
    properties: {
      title: '모아가정의학과',
      description: '(1254번 확진자) [2월 8일] 오전 10시경 대조동 소재 가정의학과 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.928852, 37.602452]
    },
    properties: {
      title: '은평구보건소',
      description: '(1254번 확진자) [2월 25일] 오후 2시 보건소 방문해 검사 시행(구급차로 이동)'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.081912, 37.510819]
    },
    properties: {
      title: '요리하는 남자',
      description: '(1370번 확진자) [2월 20일] 오후 4시 50분 잠실동 소재 레스토랑에 물건만 두고 나온 후 5시 30분 다시 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.081116, 37.511467]
    },
    properties: {
      title: '스타벅스 잠실새내역점',
      description: '(1370번 확진자) [2월 20일] 오후 5시경 스타벅스 잠실새내역점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.082410, 37.510898]
    },
    properties: {
      title: '샤크VR',
      description: '(1370번 확진자) [2월 20일] 오후 7시 50분경 잠실동 소재 VR카페 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.117705, 37.491684]
    },
    properties: {
      title: '롯데마트 송파점',
      description: '(1370번 확진자) [2월 22일] 오후 5시 20분경 버스로 롯데마트(1층 입구 화장품코너) 이용.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.118382, 37.494854]
    },
    properties: {
      title: '화포식당 가락점',
      description: '(1370번 확진자) [2월 23일] 오후 11시 50분경 동료차로 식당 방문 후 밤 12시 30분 자택 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.121394, 37.494313]
    },
    properties: {
      title: '스타벅스 가락시장역점',
      description: '(1370번 확진자) [2월 24일] 오후 2시 22분경 택시로 스타벅스 가락시장역점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.870758, 37.548034]
    },
    properties: {
      title: '서울중앙혈액원',
      description: '(1567번 확진자) [2월 19일] 오전 7시 20분, 버스로 출근.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.870079, 37.548294]
    },
    properties: {
      title: 'GS25 염창E편한점',
      description: '(1567번 확진자) [2월 19,20,24,25일] 도보로 편의점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.962347, 37.563755]
    },
    properties: {
      title: '한국청소년활동진흥원',
      description: '(1567번 확진자) [2월 19일] 출장.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.920275, 37.619062]
    },
    properties: {
      title: '헌혈의집 연신내센터',
      description: '(1567번 확진자) [2월 23일] 오전 9시 출장.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.828488, 37.539710]
    },
    properties: {
      title: '이마트 신월점',
      description: '(1567번 확진자) [2월 24일] 오후 6시 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.829994, 37.539787]
    },
    properties: {
      title: '강서경찰서',
      description: '(1567번 확진자) [2월 25일] 출장.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.832160, 37.539740]
    },
    properties: {
      title: '금화왕돈까스',
      description: '(1567번 확진자) [2월 25일] 도보로 신월동 소재 돈까스 집 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.829782, 37.628642]
    },
    properties: {
      title: '고양경찰서',
      description: '(1567번 확진자) [2월 25일] 출장.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.865862, 37.517548]
    },
    properties: {
      title: '양천구보건소',
      description: '(1567번 확진자) [2월 25일] 오후 7시 40분경 양천구보건소 방문해 검사.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.839150, 37.541793]
    },
    properties: {
      title: '자메이카휘트니스',
      description: '(1567번 확진자) [2월 26일] 오후 4시경 자전거로 화곡동 소재 휘트니스 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.840308, 37.541034]
    },
    properties: {
      title: '크린토피아 화곡역점',
      description: '(1567번 확진자) [2월 26일] 자전거로 신월초 부근 크린토피아 방문해 세탁물 수령.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.126926, 37.466000]
    },
    properties: {
      title: '양관모의원',
      description: '(성남-2 확진자) [2월 24일] 오전 9시 57분경 자차로 복정동 소재 양관모의원에서 치료.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.125193, 37.418553]
    },
    properties: {
      title: '대박집',
      description: '(성남-2,3 확진자) [2월 24일] 성남-3과 함께 성남시청 후문앞 식당에서 식사 후 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.128593, 37.461220]
    },
    properties: {
      title: '블루핸즈',
      description: '(성남-2 확진자) [2월 26일] 블루핸즈에서 자차정비.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.127197, 37.462062]
    },
    properties: {
      title: '선굼터 복정점',
      description: '(성남-2 확진자) [2월 26일] 오후 7시 45분경 복정동 식당에서 음식포장 후 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.148420, 37.479895]
    },
    properties: {
      title: '스타필드 위례점',
      description: '(성남-2 확진자) [2월 22일] 오후 4시 22분경 위례 소재 스타필드에서 스무디킹, 영풍문고, 일렉트로마트 방문'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.773115, 37.656677]
    },
    properties: {
      title: '서울가정의학과&은약국',
      description: '(1611번 확진자) [2월 17, 19일] 장항동 소재 서울가정의학과 방문 후 같은건물 은약국 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.775732, 37.656774]
    },
    properties: {
      title: '국민건강보험공단',
      description: '(1611번 확진자) [2월 21일] 오후 12시경 KT건물 5층 건강보험공단 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.772290, 37.655252]
    },
    properties: {
      title: '웨스턴돔',
      description: '(1611번 확진자) [2월 24일] 자차로 장항동 웨스턴돔 직장 출근.'
    }
  },


  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.042207, 37.516256]
    },
    properties: {
      title: '강남구보건소',
      description: '(1710번 확진자) [2월 23,25일] 23일 오후 2시 1차방문해 진단검사 예약 후 25일 선별진료소에서 검사 실시.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.676828, 37.517705]
    },
    properties: {
      title: '가정중앙시장역',
      description: '(2021번 확진자) [2월 20일] 오전 7시 30분경 인천 2호선에서 공항철도 검암역으로 출발.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.673839, 37.569043]
    },
    properties: {
      title: '검암역',
      description: '(2021번 확진자) [2월 20일] 검암역 환승해 서울역으로 출발해 하차.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.986176, 37.560964]
    },
    properties: {
      title: '명동역',
      description: '(2021번 확진자) [2월 20일] 4호선 명동역 인근 회사 출근.'
    }
  },

   {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.041000, 37.513677]
    },
    properties: {
      title: 'GS25 논현보람점',
      description: '(2468번 확진자) [2월 23일] 오후 10시 35분경 집 근처 편의점 방문.'
    }
  },
  

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.520149, 34.951027]
    },
    properties: {
      title: '한빛산부인과&하나로약국',
      description: '(2477번 확진자) [2월 26일] 오전 9시 50분경 도보로 순천시 연향동 소재 산부인과 방문 후 같은건물 약국 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.519818, 34.951915]
    },
    properties: {
      title: '에뛰드하우스 순천연향점',
      description: '(2477번 확진자) [2월 26일] 오전 10시 40분경 도보로 연향동 소재 화장품 매장 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.535634, 34.943120]
    },
    properties: {
      title: '뱀부스 카페',
      description: '(2477번 확진자) [2월 26일] 오후 1시 30분부터 5시 30분까지 자차로 순천시 해룡면 소재 카페 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.749141, 34.736509]
    },
    properties: {
      title: '여수 낭만포차',
      description: '(2477번 확진자) [2월 26일] 오후 7시경 여수 낭만포차 방문 및 사주팔자 점포 방문 후 오후 9시경 귀가.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.525130, 34.961133]
    },
    properties: {
      title: '순천병원 선별진료소',
      description: '(2477번 확진자) [2월 27일] 오후 12시경 자가용으로 선별진료소 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.700805, 37.445260]
    },
    properties: {
      title: '인천자생한방병원',
      description: '(2641번 확진자) [2월 24~27일] 24일 오전 진료 후 입원. 입원 중 증상 발현.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.730411, 37.447811]
    },
    properties: {
      title: '인천 남동구보건소',
      description: '(2641번 확진자) [2월 27일] 선별진료소 방문해 검사 실시.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.073731, 37.617746]
    },
    properties: {
      title: '이마트24 태릉입구역점',
      description: '(2740번 확진자) [2월 24일] 오후 11시 45분경 편의점 방문.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.934141, 37.522019]
    },
    properties: {
      title: '여의도 대교아파트',
      description: '(2840번 확진자) 숙소 이용. '
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.930728, 37.526019]
    },
    properties: {
      title: '박선영김밥',
      description: '(2840번 확진자) [2월 20, 24일 오후 5시 30분] 점심에 식당 방문. '
    }
  },


  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.931026, 37.526212]
    },
    properties: {
      title: '통영굴찜',
      description: '(2840번 확진자) [2월 21일] 오전 11시 30분경 방문. '
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.927716, 37.524285]
    },
    properties: {
      title: '칠미식당',
      description: '(2840번 확진자) [2월 21일] 오후 5시 30분경 저녁 식사.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.936262, 37.517768]
    },
    properties: {
      title: '여의도성모병원',
      description: '(2840번 확진자) [2월 26일] 오후 1시 30분경 선별진료소 검사.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.007348, 37.509430]
    },
    properties: {
      title: '뉴코아아울렛 강남점',
      description: '(2858번 확진자) [2월 26일] 오후 6시 40분경 뉴코아아울렛 정문 진입해 무빙워크 타고 나감.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.033411, 37.483596]
    },
    properties: {
      title: '서초구보건소',
      description: '(2858번 확진자) [2월 26,27일] 26일 오후 8시 6분 검사 실시해 27일 오후 8시 50분 1차 양성판정.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.085915, 37.552787]
    },
    properties: {
      title: '능동꿈맞이어린이집',
      description: '(2858번 확진자) [2월 26일] 오전 10시경 어린이집 상담'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.096097, 37.554873]
    },
    properties: {
      title: '경원유치원',
      description: '(2858번 확진자) [2월 26일] 오전 11시경 어린이집 상담'
    }
  },









  ]
};

geojson_hospital.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker_hospital';


  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 20 }) // add popups
      .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
    .addTo(map);
});

geojson_place.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker_place';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 20 }) // add popups
      .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
    .addTo(map);

});


