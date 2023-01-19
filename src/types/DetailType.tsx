export interface DetailType {
    adult : ;
    backdrop_path : ;
    belongs_to_collection :{
        id : ;
        name : ;
        poster_path : ;
        backdrop_path : ;
    };
    budget : ;
    genres :[
        {
            id : ;
            name : ;
        }
    ];
    homepage : ;
    id : ;
    imdb_id : ;
    original_language : ;
    original_title : ;
    overview : ;
    popularity : ;
    poster_path : ;
    production_companies :[
        {
            id :number;
            logo_path :string;
            name :string;
            origin_country :string;
        }
    ];
    production_countries :[
        {
            iso_3166_1 : ;
            name : ;
        }
    ];
    release_date : ;
    revenue : ;
    runtime : ;
    spoken_languages :[
        {
            english_name : ;
            iso_639_1 : ;
            name : ;
        }
    ];
    status : ;
    tagline : ;
    title : ;
    video : ;
    vote_average : ;
    vote_count : ;
}


{/** API 결과 값

"adult": false,
"backdrop_path": "/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
"belongs_to_collection": {
    "id": 531330,
    "name": "탑 건 시리즈",
    "poster_path": "/wtpIx0Gsra1IGHH8af5kNK90Xy8.jpg",
    "backdrop_path": "/eNupRRVv0a4dkVTxOMvG7LhNBaq.jpg"
},
"budget": 170000000,
"genres": [
    {
        "id": 28,
        "name": "액션"
    },
    {
        "id": 18,
        "name": "드라마"
    }
],
"homepage": "",
"id": 361743,
"imdb_id": "tt1745960",
"original_language": "en",
"original_title": "Top Gun: Maverick",
"overview": "최고의 파일럿이자 전설적인 인물 매버릭은 자신이 졸업한 훈련학교 교관으로 발탁된다. 그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. 매버릭의 지휘 아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자 매버릭은 자신이 가르친 동료들과 함께 마지막이 될지 모를 하늘 위 비행에 나서는데...",
"popularity": 585.986,
"poster_path": "/jeqXUwNilvNqNXqAHsdwm5pEfae.jpg",
"production_companies": [],
"production_countries": [
    {
        "iso_3166_1": "US",
        "name": "United States of America"
    }
],
"release_date": "2022-05-24",
"revenue": 1488732821,
"runtime": 131,
"spoken_languages": [
    {
        "english_name": "English",
        "iso_639_1": "en",
        "name": "English"
    }
],
"status": "Released",
"tagline": "한순간의 실수도 용납되지 않는 하늘 위, 가장 압도적인 비행이 시작된다",
"title": "탑건: 매버릭",
"video": false,
"vote_average": 8.331,
"vote_count": 5687

*/}