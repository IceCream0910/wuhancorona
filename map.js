
mapboxgl.accessToken = 'pk.eyJ1IjoiaWNlY3JlYW0wOTEwIiwiYSI6ImNrNmFkNjV5bjBjZm8zcHJ6MTV0OW0wamIifQ.ihNhyKaC6K6yO09WyU7LjQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/icecream0910/ck6f1lye23yte1ilfcftdcdym',
  center: [127.4362, 33.7791],
  zoom: 5.7

});


/* Add geolocate control to the map.
map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: false
},
trackUserLocation: false
})
);
*/

var geojson_hospital = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.831248, 37.642304]
    },
    properties: {
      title: '명지병원(2)',
      description: '(20-01-26 세번째 확진자) 54세 한국인 남성 격리 병원<br>(20-02-05 17번 확진자) 본 병원에 격리 조치.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.098167, 37.613044]
    },
    properties: {
      title: '서울의료원(4)',
      description: '(20-01-30 다섯번째 확진자) 32세 한국인 남성으로 본 병원에 격리 조치<br>(20-01-30 7번째 확진자) 28세 한국인 남성으로 본 병원에 격리 조치<br>(20-01-31 9번째 확진자) 5번 확진자의 접촉자로 자택에 머물다 확진 판정 받고 서울의료원으로 이송. (20-02-05 19번 확진자) 36세 한국인 남성으로 서울의료원으로 격리 조치.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.999714,37.578241]
    },
    properties: {
      title: '서울대병원(4)',
      description: '(20-01-30 여섯번째 확진자) 56세 한국인 남성으로 본 병원에 격리 조치<br>(20-01-31 10, 11번 확진자) 6번 환자의 가족으로 서울대병원에 격리 조치<br>(20-02-05 21번 확진자) 해당 병원에 격리 조치.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.959568, 35.964991]
    },
    properties: {
      title: '원광대학교병원',
      description: '(20-01-31 8번째 확진자) 62세 한국인 여성으로 본 병원에 격리'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.123389, 37.351563]
    },
    properties: {
      title: '분당서울대병원(4)',
      description: '(20-01-27 네번째 확진자) 1월 26일 분당 서울대 병원으로 격리되어 코로나 바이러스 검사 실시 후 확진 판정.(퇴원)<br>(20-02-01 12번 확진자) 본 병원으로 격리.<br>(20-02-02 14번 확진자) 본 병원으로 격리.<br>(20-02-07 25번 확진자) 본 병원으로 격리.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [127.005580, 37.567226]
    },
    properties: {
      title: '국립중앙의료원(3)',
      description: '(20-01-24 두번째 확진자) 격리 병원(퇴원)<br>(20-02-02 13번 확진자) 본 병원에 격리 조치<br>(20-02-06 23번 확진자) 해당 병원에 격리 조치.'
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
      title: '전남대학교병원(2)',
      description: '(20-02-04 16번 확진자) [1월 27일 오후 6시] 광주21세기병원에서 전원됐으나 중국 방문 이력이 없어 의심환자 미분류 및 21세기 병원으로 재이동. [2월 3일] 증세 악화로 응급실 격리병동으로 이송. [2월 4일] 격리 중 확진 판정.<br>(20-02-05 18번 확진자) 본 병원으로 격리 조치.'
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [126.926592, 35.138675]
    },
    properties: {
      title: '조선대학교병원',
      description: '(20-02-04 16번 확진자) [1월 27일 오후 6시] 광주21세기병원에서 전원됐으나 중국 방문 이력이 없어 의심환자 미분류 및 21세기 병원으로 재이동. [2월 3일] 증세 악화로 응급실 격리병동으로 이송. [2월 4일] 격리 중 확진 판정.<br>(20-02-05 18번 확진자) 본 병원으로 격리 조치.'
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
  }]
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
      coordinates: [126.86827700000003,37.5496053]
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
      description: '(20-01-24 두번째 확진자) 1월 23일 선별 진료를 통해 유증상자로 분류 후 확진 판정'
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
      title: '한양대학교병원 응급실',
      description: '(20-02-05 17번 확진자) [1월 26일] 오후 증상발현되어 한양대 응급실 방문/진료(보호자 대기실, 진료처치룸 이용). 검사결과 단순발열로 택시 타고 밤 9시 귀가.'
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
      description: '(20-02-05 17번 확진자) [1월 27일 오후 3시 12분] 구리종료약국에서 약 처방.'
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
                  description: '(20-02-05 17번 확진자) <br>[1월 24일 오후 2시 22분] KTX로 동대구역 도착해 수성구 소재의 본가 방문. <br>[1월 25일] 북구 소재의 처갓집 방문 후 동대구역에서 SRT로 귀경.'
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
                                          title: 'ㅍ레지던트 호텔',
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
                                                    description: '(20-02-07 25번 확진자) 거주지 시흥시 매화동으로 확인.'
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
                                                  }]
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

/* 동선 polyline은 아직 개발중이에요. 빨리 추가할게요.
map.on('load', function() {
        map.addSource('route', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        [126.813586,37.4150002],
                        [126.44069569999999,37.4601908]
                    ]
                }
            }
        });
        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#888',
                'line-width': 3
            }
        });
    });
    */
