
var apiKey = 'AIzaSyCcx6V_hKT9RRHINxUib0sxNdGax3_s9-k';
var url = 'https://www.googleapis.com/youtube/v3/search';

function search() {

    // Clear the DOM
    $('#results').html('');
    $('#buttons').html('');

    // Get form input

    var query = $('#query').val();

    // GET REQUEST

    $.get(
        url, {
            part: 'snippet, id',
            q: "#힘내라대구",
            type: 'video',
            maxResults: 10,
            key: apiKey
        },
        function (data) {
            console.log(data);
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;

            $.each(data.items, function (index, item) {
                var output = buildOutput(item);
                // Display Results
                $('#results').append(output);
            });
        }
    )
}

function buildOutput(item) {

    var videoId = item.id.videoId;

    return `<iframe style="display: inline-block;
  border-radius: 15px;
  height: 139px;
  width: 250px;
  margin-top:10px;
          margin-left:20px;
          margin-right: 10px;
          margin-bottom: 30px;
        text-decoration: none;" src="https://www.youtube.com/embed/${videoId}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
`;
}


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


.controller('angelCtrl', function($scope, getAngelNewsArticles){
  
  getAngelNewsArticles.getNewsArticles(function(response){
    $scope.articles = response.data.articles;   
  });  
})

.service('getAngelNewsArticles', function($http){
   this.getNewsArticles = function(callback){
  $http.get('https://newsapi.org/v2/everything?q=%EB%A7%88%EC%8A%A4%ED%81%AC%20%EA%B8%B0%EB%B6%80&apiKey=d60ec4ccad4e46678ce633f1b4dfa2b1&pageSize=6')
     .then(callback);
     
   };
  
})



.controller('mainCtrl', function($scope, getCoronaNewsArticles){
  
  getCoronaNewsArticles.getNewsArticles(function(response){
    $scope.articles = response.data.articles;   
  });  
})

.service('getCoronaNewsArticles', function($http){
   this.getNewsArticles = function(callback){
  $http.get('https://newsapi.org/v2/everything?q=코로나19&apiKey=d60ec4ccad4e46678ce633f1b4dfa2b1&pageSize=100&sortBy=publishedAt')
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
search();


});

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
      title: '서울의료원(7)',
      description: '(20-01-31 7번/02-05 19번/02-19 56번/02-20 121번/송파A.B 확진자/20-01-30 5번 확진자) 해당 병원에 격리 조치.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.999714,37.578241]
    },
    properties: {
      title: '서울대병원(6)',
      description: '(20-01-30 여섯번째 확진자) 56세 한국인 남성으로 본 병원에 격리 조치<br>(20-01-31 10, 11번 확진자) 6번 환자의 가족으로 서울대병원에 격리 조치<br>(20-02-05 21번 확진자) 해당 병원에 격리 조치.<br>(20-02-16 29번 확진자) [2월 16일] 해당병원에 격리 조치.<br>(20-02-16 30번 확진자) 29번 환자의 아내로 해당 병원에 격리 조치.'
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
      title: '분당서울대병원(5)',
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
      title: '국립중앙의료원(5)',
      description: '(20-01-24 두번째 확진자) 격리 병원(퇴원)<br>(20-02-02 13번/02-06 23번/02-19 40번/02-21 서울 서초구 확진자) 검사 결과 양성 확인되어 격리 입원치료.'
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
      title: '전남대학교병원(4)',
      description: '(20-02-04 16번 확진자) [1월 27일 오후 6시] 광주21세기병원에서 전원됐으나 중국 방문 이력이 없어 의심환자 미분류 및 21세기 병원으로 재이동. [2월 3일] 증세 악화로 응급실 격리병동으로 이송. [2월 4일] 격리 중 확진 판정.<br>(20-02-05 18번/02-21 210번, 239번 확진자) 본 병원으로 격리 조치.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.926592, 35.138675]
    },
    properties: {
      title: '조선대학교병원(3)',
      description: '(20-02-06 22번/02-21 126번째/02-21 164번째 확진자) 해당 병원에 격리 조치.'
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
      description: '(20-02-19 54, 55번 확진자/20-02-20 85번/포항B 확진자) 해당 병원에서 격리치료.'
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
      description: '(부산A,B,E,H 확진자) 해당 병원에서 격리치료.'
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
      description: '(부산C,D 확진자) 해당 병원에서 격리치료.'
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
      description: '(20-02-05 17번 확진자) [1월 26일] 오후 증상발현되어 한양대 응급실 방문/진료(보호자 대기실, 진료처치룸 이용). 검사결과 단순발열로 택시 타고 밤 9시 귀가. <br>(20-02-19 40번 확진자) [2월 18일] 한양대병원에 내원하여 시행한 영상검사상 폐렴 소견 확인되어 코로나19 검사 실시 결과 양성 판정.'
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
       description: '(20-02-20 113번 확진자) [2월 9일] 오전 7시 30분 ~ 10시 30분까지 동대구 터미널 이용.<br>(부산 확진자D) [2월 18일] 동대구시외버스터미널 출발.<br>(포항B 확진자) [2월 16일] 포항으로 출발.<br>(성남 확진자) [2월 20일] 오후 6시경 성남으로 출발.'
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
       title: '남구보건소',
       description: '(20-02-20 126번째 확진자) [2월 19일] 남구보건소 방문.'
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
       title: '서구보건소',
       description: '(20-02-20 126번째 확진자) [2월 20일] 서구보건소 진료.'
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
       description: '(20-02-21 부산A 확진자) [2월 18일] 수서역에서 SRT타고 부산역으로 출발.(14:00~17:00)'
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
       description: '(20-02-21 부산A 확진자) [2월 18일] 부산역 도착.'
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
       description: '(20-02-21 부산A 확진자) [2월 19일] 오전 11시~12시 40분경 반여동 소재 장산명가 방문.'
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
       description: '(20-02-21 부산A 확진자) [2월 19일] 오전 10시~11시 장산 성당 방문.'
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
       description: '(20-02-21 부산A 확진자) [2월 19일] 오후 12시 53분~1시 30분, 유기농 식품 전문점 방문.'
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
       description: '(20-02-21 부산A 확진자) [2월 20일] 오전 11시 20분 ~ 11시 50분, 센텀 내과의원 방문.'
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
       description: '(20-02-21 부산A 확진자) [2월 21일] 부산해운대백병원 방문 후 자택 기거.'
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
       description: '(20-02-21 부산B 확진자) [2월 18일] 오전 11시 50분~오후 12시 40분 전자공고 운동장 이용.'
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
       description: '(20-02-21 부산B 확진자) [2월 18일] 오후 1시부터 2시 40분까지 대성탕(목욕탕) 이용.'
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
       description: '(20-02-21 부산B 확진자) [2월 18일] 오후 3시 10분~4시 40분, 동래밀면 본점 방문.'
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
       description: '(20-02-21 부산B 확진자) [2월 18일] 오후  4시 20분부터 10분간 복산동 주민센터 방문.'
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
       description: '(20-02-21 부산B 확진자) [2월 18일] 오후 5시부터 20분까지 동래구청 복지정책과 방문.'
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
       description: '(20-02-21 부산B,H 확진자) 예배.'
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
       description: '(20-02-21 부산B 확진자) [2월 20일] 오후 1시 40분 ~ 3시, 광안리 소재 피자몰 방문.'
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
       description: '(20-02-21 부산B 확진자) [2월 20일] GS25 동래꿈에그린점 방문.'
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
       description: '(20-02-21 부산B 확진자) [2월 21일] 대동병원 선별진료소 방문.'
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
       description: '(20-02-21 부산B 확진자) [2월 21일] <가까운약국> 방문.'
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
       description: '(20-02-21 부산B 확진자) [2월 21일] 메가마트 동래점 방문.'
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
       description: '(20-02-21 부산B 확진자) [2월 21일] 음식점 방문.'
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
       description: '(20-02-21 부산B 확진자) [2월 21일] 동래구보건소 방문.'
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
       description: '(포항B 확진자) [2월 17일] 중앙상가 애슐리 방문.'
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
       description: '(포항B 확진자) [2월 17일] 달콤커피 죽도시장점 방문.'
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
       description: '(포항B 확진자) [2월 17일] 동원성에서 식사.'
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
       description: '(포항B,E 확진자) [2월 18일] 김밥나라에서 식사.'
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
       description: '(포항B,C 확진자) [2월 20일] 포항남구보건소 방문.'
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
      description: '(송파A 확진자) [2월 23일] 오후 5시 20분경 선별진료소에서 코로나19 검사 실시.'
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
      description: '(파주A 확진자) [2월 22일] 오후 1시부터 오후 9시 30분까지 강릉시의료원 선별진료소 방문해 1차 검사결과 양성 판정.'
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
      description: '(부산H 확진자) [2월 19일] 오후 1시경 부산대학앞 돼지국밥집 방문.'
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
      description: '(부산H 확진자) [2월 19일] 오후 1시 40분경 도보로 스타벅스 부산대점 방문.'
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
      description: '(부산H 확진자) [2월 20일] 오후 1시 10분경 시골통돼지볶음 방문.'
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
      description: '(부산H 확진자) [2월 20일] 오후 2시 15분경 이솝페이블 방문.'
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
      description: '(부산H 확진자) [2월 20일] 오후 4시 20분경 동래구 소재 산부인과 방문.'
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
      description: '(부산H 확진자) [2월 20일] 자차로 오후 9시 20분경 맥도날드 방문.'
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



map.on('load', function() {
map.addSource('lines', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'properties': {
'color': '#960823'
},
'geometry': {
'type': 'LineString',
'coordinates': [
//1번확진자
[114.21853322535755,30.77093202627814],
  [126.44069569999999,37.4601908],
[126.668652, 37.478787],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#FF860D'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //2번확진자
[121.80628828704357,31.1490694115591], //우한에서 오는 항공기
[126.794442, 37.558723], //김포공항
[126.86827700000003,37.5496053], //김포공항
[127.005580, 37.567226], //인천의료원
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#E80CC9' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //3번 확진자
[126.44069569999999,37.4601908], //인천공
[127.02794819999997,37.524355],//성형외과
[127.04913390000002,37.50299260000001], //호텔뉴브
[127.01592170000004,37.5243968],// gs
[127.03247799999997,37.527737], //한일관
[127.0503248,37.524819], //본죽
[127.02794819999997,37.524355],//성형외과
[126.77693350000006,37.6740054], //본죽 일산
[126.8121754,37.6778604], //스타벅스 일산
[126.831248, 37.642304], //명지병원
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#5D7FC2' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //4번확진자
  [114.21853322535755,30.77093202627814],
    [126.4522185,37.4651805],
[127.05869899999993,37.07905100000001],
[127.05732009999997,37.05201149999999],
[127.123389, 37.351563],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#FF3A32' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //5번째 확진자
  [126.44069569999999,37.4601908], //인천공
  [127.01704829999994,37.5925601], //cgv성신
[127.01682189999997,37.5918099], //다이소성신
[127.02953419999994,37.5639923], //선녀보살
[127.01522069999999,37.59033], //선호케어
[127.00976600000001,37.5895897],//두꺼비마트
[127.01889830000005,37.5920573], //돈암동떡볶이
[127.00976600000001,37.5895897], //럭키후레쉬마트
[127.018415, 37.591684], //예쁠레 뷰티
[127.09194309999998,37.589035], //이가네
[127.04654329999994,37.523674], //와이즈
[127.092762, 37.606502], //중랑구보건소 
[127.098167, 37.613044], //서울의료원
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#0CC27D' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //6번째 확진자
[127.03247799999997,37.527737],
[126.99981019999996,37.5863828],
[126.999714,37.578241],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#A17CE8' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //7번째 확진자
[120.3831232,36.2666745],
[126.44069569999999,37.4601908],
[127.098167, 37.613044],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#65C287' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //8번째 확진자
[120.3831232,36.2666745],
[126.44069569999999,37.4601908],
[127.0118524,37.4921876],
[126.70814940000002,35.9866939],
[126.7091256,35.9784314],
[126.71245450000004,35.954685],
[126.70551109999997,35.97602849999999],
[126.73486560000003,35.9827419],
[126.959568, 35.964991],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#BFB149' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //10,11번째 확진자
[126.791968,37.6411412],
[126.999714,37.578241],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#BF2200' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //12,14번째 확진자......
[127.00769850000006,37.55717130000001],
[126.78101570000001,37.4858187],
[126.78036959999997,37.4827854],
[126.63162609999995,37.4617728],
[126.65047709999999,37.4636808],
[126.96961950000002,37.5536067],
[128.89929000000006,37.764152],
[129.0438501,37.6834634],
[129.03211669999996,37.6905609],
[126.7781024999999337,37.4836803],
[127.00151789999995,37.2675123],
[126.9309464,37.3591354],
[126.9308901,37.3590543],
[126.78101570000001,37.4858187],
  [127.00769850000006,37.55717130000001],
[126.7817966,37.483597],
[126.7781776,37.4837016],
[126.76285359999997,37.49839769999999],
[126.78266540000004,37.4840296],
[127.123389, 37.351563],

]
}
},
{
'type': 'Feature',
'properties': {
'color': '#8C5F91' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //13번째 확진자
[126.98722580000003,36.74037130000001],
[127.005580, 37.567226],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#013A46' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //15번째 확진자
[126.44069569999999,37.460190],
[126.9784995,37.295636],
[127.01017679999995,37.3043448],
[127.149085, 37.392769],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#917F8D' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //16번째 확진자
[100.75011240000003,13.6899991],
[126.3878446,34.9935821],
[126.83019650000006,35.08229710000001],
[126.71075719999999,35.0160601],
[126.81813169999998,35.1757929],
[126.921549, 35.142085],
[126.81813169999998,35.1757929],
[126.921549, 35.142085],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#407965' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //제주관광객 확진자
[122.1165062,33.8386846],
[126.49135339999998,33.51041350000001],
[126.49161930000002,33.4894038],
[126.66743980000001,33.447037],
[126.6900058,33.4316207],
[126.95404800000006,33.5042977],
[126.94193900000005,33.4581918],
[126.48642719999998,33.4906618],
[126.48757649999993,33.48607189999999],
[126.46336270000006,33.3576784],
[126.47131760000002,33.5090001],
[126.49070770000003,33.4860985],

]
}
},
{
'type': 'Feature',
'properties': {
'color': '#C36F91' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //17 확진자
[103.99153079999996,1.3644202],
[126.44069569999999,37.4601908],
[126.96961950000002,37.5536067],
[126.97046580000006,37.5490645], //북창동순두부
[126.970442, 37.549065],
[128.62847585231066,35.87966704616757], //동대구역
[128.625035, 35.842651],
[128.627832, 35.880691],
  [127.1323584,37.6012093],
  [127.13911929999995,37.6063384],
  [127.1391743,37.6063788],
  [127.13873899999999,37.5871664],
  [127.13840189999996,37.58693960000001],
  [127.13821410000003,37.58702559999999],
  [127.138253,37.5870803],
  [127.138735,37.5872504],
  [127.10323500000004,37.545475],
  [127.10306700000001,37.5448436],
  [127.10261700000001,37.543272],
  [127.1323584,37.6012093],
  [126.831248, 37.642304],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#25796B' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //18 확진자
[126.81813169999998,35.1757929],
[126.921549, 35.142085],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#CCAB1A' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //19 확진자
  [126.44069569999999,37.4601908],
  [127.11890570000004,37.382699],
  [127.1247641,37.50885],
  [127.12000519999992,37.49695030000001],
  [127.02756729999999,37.5047369],
  [126.65803359999995,37.3816748],
  [127.11750000000006,37.4952778],
  [127.11274950000006,37.3771388],
  [127.098167, 37.613044],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#C28966' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //20 확진자
[126.88934059999997,37.5206499],
[126.9784995,37.295636],
[127.01017679999995,37.3043448],
[127.149085, 37.392769],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#CC572C' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //21 확진자
[126.99981019999996,37.5863828],
[127.03951810000001,37.6026426],
[126.999714,37.578241],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#906500' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //22 확진자
[126.71075719999999,35.0160601],
[126.926592, 35.138675],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#906500' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //22 확진자
[126.71075719999999,35.0160601],
[126.926592, 35.138675],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#014146' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //23 확진자
[126.97944299999995,37.565622],
[126.98192740000002,37.5648507],
[126.93677890000004,37.5791158],
[126.95336199999997,37.542371],
[126.93677890000004,37.5791158],
[127.005580, 37.567226],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#058F1F' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //24 확진자
[126.44069569999999,37.4601908],
[126.98722580000003,36.74037130000001],
[127.005580, 37.567226],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#00ECCC' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //25 확진자
[126.811382, 37.417265],
[126.789514, 37.444550],
[126.796396, 37.438150],
[126.789514, 37.444550],
[127.260411, 37.017228],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#461F01' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //26 확진자
[126.789514, 37.444550],
[126.796396, 37.438150],
[126.789514, 37.444550],
[127.260411, 37.017228],
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#4C7D8F' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //27 확진자
[113.576466, 22.158054],
[126.44069569999999,37.4601908],
[126.809913, 37.432345],
[126.789514, 37.444550],
[127.260411, 37.017228],
]
}
},
  {
'type': 'Feature',
'properties': {
'color': '#ffc836'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //29 확진자
[127.015407, 37.575650],  //신중호 
[127.013963, 37.572262], //보람
 [127.018740, 37.620200], //강북
 [127.015407, 37.575650], //신중호 
   [127.018740, 37.620200],//강북
 [127.015321, 37.573293], //봄약국
    [127.018740, 37.620200],//강북
  [127.013963, 37.572262],//보람
[127.018740, 37.620200],//강북
[127.015321, 37.573293],//봄약국
[127.018740, 37.620200],  //강북
[127.026343, 37.587342], //고려대 안암병원
[126.999714,37.578241], //서울대병원
]
}
},
{
'type': 'Feature',
'properties': {
'color': '#4a7d00' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //30 확진자
[126.995370, 37.560088],
[126.999897, 37.577630],
[127.018740, 37.620200],
[126.421170, 37.423644],
[126.701198, 37.572926],
  [127.015649, 37.572152],
  [127.015935, 37.574509],
  [127.013272, 37.572490],
  [127.015984, 37.572751],
  [126.995370, 37.560088],
  [127.018740, 37.620200],
  [127.015935, 37.574509],
  [127.026343, 37.587342],
  [126.999714, 37.578241],
]
}
},
  
  {
'type': 'Feature',
'properties': {
'color': '#ed7014' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //31 확진자
  [128.6276121, 35.8750042], //C클럽
[128.635214, 35.858396], //새로난한방병원
[128.582389, 35.838970], //남구 신천지대구교회
  [128.635214, 35.858396], //새로난한방병원
[128.662125, 35.882360], // 퀸벨호텔
  [128.635214, 35.858396], //새로난한방병원
  [128.582389, 35.838970], //남구 신천지대구교회
  
[128.612246, 35.844609], //수성구보건소
[128.5406159,35.8596492], //대구의료원 격리
]
}
},
  
  {
'type': 'Feature',
'properties': {
'color': '#9b0c33' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //40 확진자
  [127.0440466, 37.55964796],
  [127.005580, 37.56722],
]
}
},
  
    {
'type': 'Feature',
'properties': {
'color': '#8a5b85'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //56 확진자
  [127.005990, 37.576682],
  [126.969122, 37.581828],
  [127.098167, 37.613044],
  
]
}
},

    {
'type': 'Feature',
'properties': {
'color': '#327ce0'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //85 확진자
[128.557786, 35.836751], //대구서부터미널
[129.345336, 36.017935], //대잠아델리아
[129.375417, 36.060849], //리플러스 장성점
[129.374795, 36.053280], //영일대 해수욕장(버스정류장)
[129.362243, 36.030720], //죽도시장(버스정류장)
[129.341973, 36.018169], //코아이빈후과, 미래건강약국
[129.361959, 36.017887], //세명기독병원
[129.354906, 36.034891], //포항의료원
  
]
}
},


    {
'type': 'Feature',
'properties': {
'color': '#0ac682'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //113 확진자
[128.630224, 35.878282], //동대구 터미널 [2월 9일]
//빽다방 위치확인중
//왕중왕짜장 위치확인중
[127.121693, 35.833388], //axa손해보험(직장) [2월 10일]
[127.101762, 35.849505], //ks공업사 [2월 10일]
[127.121693, 35.833388], //axa손해보험(직장) [2월 10일] 
[127.111001, 35.843625], //푸라닭 전주하가점
[127.121693, 35.833388], //axa손해보험(직장) [2월 11, 12일]
//세븐일레븐 위치확인중
[127.149794, 35.805368], //상진바이크샵
[127.116441, 35.828115], //안전오토바이종합랜드
[127.121114, 35.861360], //원이비인후과 의원
[127.121210, 35.861374],//전주종로약국
[127.121883, 35.834423], //롯데백화점 입생로랑, 샤넬롯데시네마 7관 인셉션
[127.125064, 35.807788], //이철헤어커커 전주효자CGV점
[127.127513, 35.843710],//쓰리팝 PC방
//스타벅스 송천동 위치확인중
[127.176032, 35.825982], //아중리 청혜참치 
[127.120408, 35.854332], //송천롯데마트
[127.140564, 35.847185], //전북대병원 격리
]
}
},

{
'type': 'Feature',
'properties': {
'color': '#b23337'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //상주시 확진자
[128.727451, 35.819447], //경산역
[128.114678, 36.123423], //김천역
[128.164258, 36.410390], //상주역
[128.159748, 36.420344], //상주성모병원
[128.150492, 36.416683], //상주보건소
[128.150823, 36.417082], //행림약국
[128.732302, 36.568139], //안동의료원

]
}
},

{
'type': 'Feature',
'properties': {
'color': '#2405b6'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //예천군 확진자
[126.44069569999999, 37.4601908], //경산역
[128.452964, 36.657700], //예천보건소
[128.732302, 36.568139], //안동의료원

]
}
},

{
'type': 'Feature',
'properties': {
'color': '#29d381'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //126번째 확진자
[126.896249, 35.127322], //카페소요
[126.895606, 35.135405], //백운동 최가박당
[126.902415, 35.132998], //남구보건소
[126.911596, 35.128048], //사계진미숯불닭갈비
[126.905957, 35.125515], //아이리스pc 봉선
[126.889886, 35.152299], //서구보건소
[126.926592, 35.138675], //조선대학교병원
]
}
},

{
'type': 'Feature',
'properties': {
'color': '#29d381'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //126번째 확진자
[126.923194, 35.145610], //카페소요
[126.911596, 35.128048], //백운동 최가박당
[126.905957, 35.125515], //남구보건소
[126.911596, 35.128048], //사계진미숯불닭갈비
[126.905957, 35.125515], //아이리스pc 봉선
[126.889886, 35.152299], //서구보건소
[126.926592, 35.138675], //조선대학교병원
]
}
},

{
'type': 'Feature',
'properties': {
'color': '#9b4605'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //210번째 확진자
[128.582389, 35.838970], //신천지
[126.926492, 35.149200], //동명식빵
[126.913983, 35.173365], //중흥헬스
[126.854334, 35.154884], //치평동 텐토
[126.878982, 35.208997], //양산동 양떼목장
[126.913983, 35.173365], //중흥헬스
[127.278230, 34.610367], //고흥 실버대학
[127.135658, 34.525779], //고흥 뚝배기식당
[126.912124, 35.173399], //북구보건소
[126.921549, 35.142085], //전남대병원
]
}
},

{
'type': 'Feature',
'properties': {
'color': '#af64b3'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //164번째 확진자
[126.923194, 35.145610], //동구보건소
[126.911596, 35.128048], //사계진미숯불닭갈비
[126.905957, 35.125515], //아이리스pc 봉선
[126.926592, 35.138675], //조선대병원
]
}
},
  

  {
'type': 'Feature',
'properties': {
'color': '#af64b3'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //239번째 확진자
[126.913855, 35.175683], //오픈스페이스 포켓볼하우스
[126.910849, 35.170002], //후라이드참잘하는집 전대점
[126.914267, 35.165124], //Cu광주역 행복주택점
[126.905957, 35.125515], //아이리스pc
// 보성군 문덕면 소재 버섯농장
[127.098688, 35.005984], //우리식육식당
[126.916660, 35.161395], //홈플러스 계림점
[126.921549, 35.142085], //전남대병원


]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#bf96b6'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //제주A 확진자
[128.638362, 35.899470], //대구국제공항
[126.502993, 33.513040], //CU제주용해로점
[126.485095, 33.489983], //제주한라병원 선별
[126.545227, 33.467085], //제주대병원
]
}
},


  {
'type': 'Feature',
'properties': {
'color': '#da5b2e'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //제주B 확진자
[128.638362, 35.899470], //대구국제공항
[126.444137, 33.286241], //서귀포 위호텔
[126.423082, 33.252003], //중문신내과의원
[126.565406, 33.254428], //서귀포 열린병원
[126.428373, 33.255016], //CU제주중문오네뜨점
[126.565406, 33.254428], //서귀포 열린병원
[126.545227, 33.467085], //제주대병원
]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#4c7e55'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //부산A 확진자
[127.101298, 37.487466], //수서역
[129.042229, 35.115229], //부산역
//자택 기거
[129.125558, 35.205756], //장산 성당
[129.119137, 35.199104], //반여동 장산명가
[129.116698, 35.199541], //자연드림 반여점
//자택 기거
[129.119941, 35.202698], //센텀 내과의원
//자택 기거
[129.181970, 35.173503], //부산해운대백병원
[129.059186, 35.187235], //부산의료원
]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#e551fe'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //부산B 확진자
[129.073828, 35.215220], //전자공고운동장
[129.081204, 35.219545], //대성탕
[129.084164, 35.198336], //동래밀면 본점
[129.086084, 35.205803], //복산동행정복지센터
[129.083637, 35.204852], //동래구청(복지정책과)
//명륜역 인근마트 방문 후 자택기거
[129.077126, 35.215985], //온천교회
[129.119051, 35.154387], //피자몰 광안리점
[129.120726, 35.198026], //GS25꿈에그린점
[129.080164, 35.204381], //대동병원 선별
[129.079803, 35.204549], //가까운약국
[129.081163, 35.204297], //메가마트 동래점
[129.098633, 35.199459], //얼쑤대박터지는집 동래점
[129.079854, 35.211385], //동래구보건소
[129.059186, 35.187235], //부산의료원
]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#213a97'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //진주A,B 확진자
[128.582389, 35.838970], //신천지
[128.566484, 35.198809], //마산의료원
]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#eb3b6f'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //계룡시 확진자
[127.264352, 36.273366], //계룡역
[127.256727, 36.274807], //맛나감자탕 계룡본점
[127.241536, 36.282520], //늘푸른목장식당
[127.235973, 36.288471], //향한리가는길에
[127.242266, 36.288896], //김밥천국
[127.417777, 36.362561], //대전병원 선별
[127.149085, 37.392769], //국군수도병원
]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#327e7a'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //합천A 확진자
[128.582389, 35.838970], //신천지
[128.159829, 35.566468], //왕비세탁소
[128.154939, 35.568384], //세운할인마트
[128.162587, 35.567116], //합천 시외버스 터미널
[128.156550, 35.568023], //합천보건소
[128.161325, 35.567495], //소정약국
[128.093825, 35.176235], //경상대병원 격리
]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#fc0534'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //합천B 확진자
[128.582389, 35.838970], //신천지
[128.162587, 35.567116], //합천 시외버스 터미널
[128.139512, 35.762724], //가야면사무소
[128.138579, 35.762706], //야천1구경로당
[128.093825, 35.176235], //경상대병원 격리

]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#2a5684'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //합천C 확진자
[128.162587, 35.567116], //합천 시외버스 터미널
[128.163660, 35.568030], //합천참정형외과
[128.162204, 35.568443], //김경호내과
[128.566484, 35.198809], //마산의료원 격리

]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#3476c3'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //부산C 확진자
[129.064809, 35.176295], //부산교육청
[129.115170, 35.160697], //수영구 슈가스팟
[129.113196, 35.160835], //부산한서병원 선별
[129.019032, 35.100541], //부산대병원 격리
]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#60b015'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //부산C 확진자
[128.630224, 35.878282], //동대구시외터미널
[129.160547, 35.164793], //해운대시외터미널
[129.203441, 35.186468], //신선지국밥
[129.175792, 35.173830], //베라 해운대좌동
//cu,자이마트 확인중
[129.178640, 35.164109], //해운대보건소 선별
[129.019032, 35.100541], //부산대병원
]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#60b015'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //부산C 확진자
[128.630224, 35.878282], //동대구시외터미널
[129.160547, 35.164793], //해운대시외터미널
[129.203441, 35.186468], //신선지국밥
[129.175792, 35.173830], //베라 해운대좌동
//cu,자이마트 확인중
[129.178640, 35.164109], //해운대보건소 선별
[129.019032, 35.100541], //부산대병원
]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#4442f1'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //부산E 확진자
[129.119805, 35.201312], //청산곱창
[129.119353, 35.203818], //스타벅스수영강변
[129.121797, 35.202014], //세븐일레븐 반여선수촌 
[129.123605, 35.203456], //cu반여선수촌점
[129.178640, 35.164109], //해운대보건소 선별
[129.059186, 35.187235], //부산의료원
]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#4442f1'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //241 확진자
[128.727451, 35.819447], //경산역
[127.434196, 36.332326], //대전역
[127.449351, 36.335629], //불난뚱땡이 
[127.447762, 36.337698], //매직코인노래연습장
[127.449456, 36.338686], //GS25 우송IT센터점
[127.449266, 36.338782], //1983더그레이커피숍
[127.427789, 36.327637], //레스모아 중앙점
[127.426869, 36.328556], //토마토
[127.428116, 36.329026], //원더플레이스
[127.427936, 36.327697], //인생사진
[127.425347, 36.328472], //에메필
[127.427416, 36.327809], //섹시쿠키 대전은행점
//케이스닥터
[127.421522, 36.327125], //중앙로 지하상가
[127.447762, 36.337698], //매직코인노래연습장
//아지트PC방(자양동)
[127.454827, 36.311854], //대전 동구보건소
[127.449565, 36.340482], //우리동네DC아울렛자양
[127.415538, 36.316891], //충남대병원 격리

]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#93b485'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //세종A 확진자
[128.582389, 35.838970], //남구 신천지대구교회
[127.280779, 36.463017], //쑥티식당
[127.018744, 36.778476], //아산항아리보쌈
[127.172511, 36.841942], //단국대천안병원
]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#697b34'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //포항B 확진자
[128.582389, 35.838970], //남구 신천지대구교회
[128.630224, 35.878282], //동대구시외터미널
//신천지 포항교회(장성동)
[129.362948, 36.036658], //중앙상가 애슐리
[129.365557, 36.035029], //달콤커피 죽도시장점
[129.359088, 36.025112], //동원성
[129.364912, 36.031666], //김밥나라
//맥도날드(중앙상가)
[129.396211, 35.992428], //포항남구보건소
[129.354906, 36.034891], //포항의료원
]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#5fb9eb'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //포항c 확진자
[129.360372, 36.025222], //어림지
[129.345033, 35.999782], //매직PC방
[129.345871, 35.996375], //맘터 연일점
[129.396211, 35.992428], //포항남구보건소


]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#ac696b'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //포항d 확진자
[129.374110, 36.060095], //바디라인 피트니스
[129.349156, 36.011109], //포항우체국
]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#b014ad'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //포항e 확진자
[129.364912, 36.031666], //김밥나라
[129.372315, 36.066697], //라라코스트
[129.347175, 36.011452], //호텔팰리스
[129.366402, 36.032990], //홍성철성형외과
[129.366832, 36.033008], //독일 약국
[129.347175, 36.011452], //호텔팰리스
]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#9d4adc'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //포항f 확진자
[129.380461, 36.070717], //포항북구보건소근무
[129.392358, 36.080566], //cu포항인성점
[129.392485, 36.079387], //진할인마트 장성동
]
}
},

  {
'type': 'Feature',
'properties': {
'color': '#3c1ca9'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //경주A 확진자
//대구 동성로 KB ATM
[128.594805, 35.868168], //인플라워
[128.598189, 35.868411], //스시라스또
[128.62847585231066,35.87966704616757], //동대구
[129.201189, 35.868795], //서경주역
[129.202268, 35.866639], //현곡 준PC방
[129.196749, 35.858329], //동국대 선별,음압
]
}
},

 {
'type': 'Feature',
'properties': {
'color': '#1addac'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //경주B 확진자
[129.324179, 35.714609], //외동 경북의원
[129.324555, 35.714574], //입실약국
[129.290838, 35.696094], //서진산업 출근

]
}
},

 {
'type': 'Feature',
'properties': {
'color': '#56cc0b'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //경주C 확진자
[128.62847585231066,35.87966704616757], //동대구
[129.201189, 35.868795], //서경주역
//신천지 경주교회
[129.216997, 35.867395], //사랑의소아과,예송약국
]
}
},


{
'type': 'Feature',
'properties': {
'color': '#cd12fe'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //경주D 확진자
[129.199296, 35.875179], //수억상사
[129.157147, 35.901069], //용담매운탕
[129.199296, 35.875179], //수억상사
//범진자원, 성호기업
[129.196749, 35.858329], //동국대 선별(아들데려다줌)
[129.199296, 35.875179], //수억상사
[129.204997, 35.871671], //경원홈마트
[129.186150, 35.843034], //청송얼음골막걸리
]
}
},

{
'type': 'Feature',
'properties': {
'color': '#a16729'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //경주E 확진자
[129.226257, 35.883035], //새천년떡집
[129.227952, 35.883077], //웅진북클럽 경주지역국
[129.211502, 35.886967], //자매미나리밭
[129.176738, 35.881423], //커피명가
[129.227952, 35.883077], //웅진북클럽 경주지역국
[129.210411, 35.842192], //스틸룸
[129.231065, 35.877436], //용강국밥
[129.232113, 35.880608], //테이크5
[129.227952, 35.883077], //웅진북클럽 경주지역국
]
}
},


{
'type': 'Feature',
'properties': {
'color': '#244e41'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //구미A 확진자
[128.597594, 35.866242], //끌리다
[128.382737, 36.102904], //순천향구미병원
]
}
},

{
'type': 'Feature',
'properties': {
'color': '#649a6f'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //춘천A 확진자
[127.717370, 37.864481], //춘천고속터미널
[128.582389, 35.838970], //신천지대구교회
[128.555959, 35.889882], //트레이더스 비산점
//세명동 소재 신천지 부속기관
]
}
},

{
'type': 'Feature',
'properties': {
'color': '#649a6f'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //청주 확진자
[127.488369, 36.629023], //육거리시장
[127.507674, 36.628334], //금천동종합문구
[127.516125, 36.620369], //롯데마트상당
[127.568680, 36.778026], //송원칼국수
//충북 식자재마트
[127.504915, 36.633924], //델리퀸 금천점
//GS편의점(주공9단지)
]
}
},


{
'type': 'Feature',
'properties': {
'color': '#510f3a'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //삼척A 확진자
[129.167432, 37.440048], //삼척볼링센터
[129.167222, 37.439958], //세븐일레븐삼척삼원
[129.164271, 37.443038], //오션Pc방
[129.163697, 37.443576], //만치만치
[129.116410, 37.521121], //역전할머니맥주동해천곡&세븐일레븐 동해중앙
[129.164271, 37.443038], //오션Pc방
[129.114024, 37.520772], //맥날 동해DT
[129.164741, 37.447259], //데일리커피숍
[129.163447, 37.443831], //CU삼척대학로점
[129.116410, 37.521121], //세븐일레븐 동해중앙
[129.164591, 37.442641], //모닝캄
[129.164243, 37.442586], //김밥천국 삼척점
[129.162887, 37.446209], //성내동사무소
//가고파사진관
[129.164239, 37.442894], //Gs삼척남양
[129.163512, 37.442969], //아이비스pc
[129.116410, 37.521121], //역전할머니맥주동해천곡
[129.164271, 37.443038], //오션Pc방
[129.152185, 37.439478], //GS삼척원당
[129.163448, 37.444148], //놀부부대찌개 삼척점
[129.164271, 37.443038], //오션Pc방
[129.164290, 37.443036], //그랑프리당구장
]
}
},

{
'type': 'Feature',
'properties': {
'color': '#ac8284'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //송파A 확진자
[127.1692608, 37.431306], //신한은행 성남공단금융센터
[127.124506, 37.485603], //배라 송파파크하비오
[127.122422, 37.480743], //미아리우동(포장)
[127.049840, 37.524841], //르피에드 분양사무소
[127.124506, 37.485603], //배라 송파파크하비오
[127.124498, 37.485621], //문정 하나약국
[127.1692608, 37.431306], //신한은행 성남공단금융센터
[127.124506, 37.485603], //배라 송파파크하비오
[127.127030, 37.483404], //문정 계경순대국
[127.1692608, 37.431306], //신한은행 성남공단금융센터
[127.125964, 37.484685], //문정 교동짬뽕
[127.1692608, 37.431306], //신한은행 성남공단금융센터
[127.124506, 37.485603], //배라 송파파크하비오
[127.106552, 37.514532], //송파구보건소
[127.098167, 37.613044], //서울의료원
]
}
},

{
'type': 'Feature',
'properties': {
'color': '#052d3e'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //성남 확진자
[128.630224, 35.878282],
[127.127145, 37.412913],
[127.146591, 37.406956],
[126.831248, 37.642304], 

]
}
},

{
'type': 'Feature',
'properties': {
'color': '#a72601'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //송파B 확진자
[127.124506, 37.485603],
[127.098167, 37.613044], 

]
}
},

{
'type': 'Feature',
'properties': {
'color': '#03b679'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //천안 확진자
[127.125261, 36.802361], //천안주공7단지
[127.111540, 36.805665], //불당동 대동다숲
[127.109630, 36.805495], //찰스리헤어테크불당
//정원부동산 개업
[127.085442, 36.797187], //상도종합건설
[127.125700, 36.799779], //본정형외과
[127.119157, 36.802545], //삼성라온내과
[127.119231, 36.802662], //얌샘김밥
[127.125261, 36.802361], //천안주공7단지
[127.131150, 36.797270], //천안충무병원 선별
]
}
},

{
'type': 'Feature',
'properties': {
'color': '#d1a4ba'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //포천 확진자
[127.045880, 37.738727], //의정부역
[127.061085, 37.948045], //소요산역
[127.061857, 37.947427], //CU소요산점
[127.068071, 38.024960], //전곡 블루가이미용실
[127.068397, 38.026214], //메가커피 전곡점
[127.067724, 38.025312], //롯데리아 전곡점
[127.079831, 38.101124], //gs25 연천전곡점
//육군5사단 영외마트
[127.052970, 37.892037], //생고기제작소 동두천점
[127.068642, 38.024919], //마왕족발 전곡점
[127.068013, 38.026795], //전곡대륙정육점
[127.066891, 38.028039], //전곡국민마트
[127.068197, 38.025619], //할매순대국 전곡점
]
}
},

{
'type': 'Feature',
'properties': {
'color': '#69f3b5'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //파주A 확진자
[128.533327, 35.836858], //대구파라다이스컨벤션
[128.134300, 37.463389], //횡성휴게소(강릉방향)
[126.773326, 37.654422], //일산화이트치과
[126.792036, 37.645147], //고양조은약국
[126.716265, 37.773948], //탄현면 일굼터
[128.888717, 37.749280], //강릉의료원
]
}
},

{
'type': 'Feature',
'properties': {
'color': '#0d0c67'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //파주B 확진자
[126.716265, 37.773948], //탄현면 일굼터
[126.785100, 37.869658], //홈플러스 파주문산점
//코끼리약국
//메가MGC커피
[126.783947, 37.856334], //gs25문산점
[126.872481, 37.849523], //천하약국(법원읍)
[126.780296, 37.838297], //문산 플러스마트
]
}
},

{
'type': 'Feature',
'properties': {
'color': '#b87e1c'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //파주C 확진자
[126.870897, 37.893683], //풍작플랜지
[126.874575, 37.848622], //천현농협 하나로마트
]
}
},


{
'type': 'Feature',
'properties': {
'color': '#5f4b6d'
},
'geometry': {
'type': 'LineString',
'coordinates': [
  //부산H 확진자
[129.085868, 35.230794], //터줏집돼지국밥
[129.086654, 35.230605], //스타벅스 부산대점
[129.077126, 129.077126], //온천교회
[129.086278, 35.233004], //시골통돼지볶음
[129.087161, 35.229605], //이솝페이블
[129.078332, 35.212664], //동래봄산부인과
[129.074256, 35.206302], //맥도날드부산온천SKDT점
[129.077126, 35.215985], //온천교회
[129.059186, 35.187235], //부산의료원
]
}
},



]
}
});


map.addLayer({
'id': 'lines',
'type': 'line',
'source': 'lines',
'paint': {
'line-width': 2,
// Use a get expression (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-get)
// to set the line-color to a feature property value
'line-color': ['get', 'color']
}
});
});

