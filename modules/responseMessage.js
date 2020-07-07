module.exports = {
    NULL_VALUE: "필요한 값이 없습니다",
    OUT_OF_VALUE: "파라미터 값이 잘못되었습니다",
    
    //토큰
    EMPTY_TOKEN:"헤더에 토큰이 없습니다.",
    EXPIRED_TOKEN:"토큰이 만료됨.",
    INVALID_TOKEN:"유효하지 않은 토큰",

    // 회원가입
    CREATED_USER: "회원 가입 성공",
    DELETE_USER: "회원 탈퇴 성공",
    ALREADY_ID: "이미 사용중인 아이디입니다.",
    
    // 로그인
    LOGIN_SUCCESS: "로그인 성공",
    LOGIN_FAIL: "로그인 실패",
    NO_USER: "존재하지 않는 회원입니다.",
    MISS_MATCH_PW: "비밀번호가 맞지 않습니다.",
    
    // 프로필 조회
    READ_PROFILE_SUCCESS: "프로필 조회 성공",

    // place
    SEARCH_PLACE_SUCCESS: "장소 조회 성공",
    NO_PLACE: "장소 없음",
    POST_PLACE:"장소 글쓰기 완료",

    // api
    SEARCH_NAVER_MAP: "네이버 맵 장소 조회 성공",

    //DB에러
    DB_ERROR: "DB에러",
    //그룹 신청
    apply_SUCCESS : "그룹 신청 성공",
    apply_ERROR : "그룹 신청 실패",

    //그룹 리스트 불러오기
    CALL_GROUP_LIST : "그룹 리스트 불러오기 성공",

    // 신청대기 갯수 불러오기
    CALL_APPLYCOUNT_SUCCESS : "대기목록 갯수 불러오기 성공",
    CALL_APPLYCOUNT_FAIL: "대기목록 갯수 불러오기 실패",

    //서버에러
    INTERNAL_SERVER_ERROR:"서버 내부 에러",

    //CATEGORY
    READ_CATEGORY:"카테 고리 불러오기 성공",
    NO_READ_CATEGORY:"카테고리 불러오기 실패",

    //TAG
    READ_TAG:"태그 읽어오기 성공",
    NO_MATCHED_CATEGORY_TAG:"입력한 기본 정보 태그와 카테고리 태그 정보와 맞지 않음",
    NO_MATCHED_CATEGORY_INFO_TAG:"입력한 유용한 정보 태그와 카테고리 태그 정보와 맞지 않음",

    //SUBWAY
    READ_SUBWAY:"지하철 조회 성공",

    SEARCH_API:"API데이터 가져오기 성공",

    //GROUP
    INVALID_GROUP_USER:"일치하지 않는 유저 그룹.",

    //ADMIN
    CALL_MYWAITUSERLIST_SUCCESS: "내 그룹 대기유저 불러오기 성공",
    CALL_MYWAITUSERLIST_FAIL: "내 그룹 대기유저 불러오기 실패",
    EDIT_MYWAITUSERSTATE_SUCCESS: "내 그룹 대기유저 승인 성공",
    EDIT_MYWAITUSERSTATE_FAIL: "내 그룹 대기유저 승인 실패",
    DELETE_MYWAITUSER_SUCCESS: "내 그룹 대기유저 거절 성공",
    DELETE_MYWAITUSER_FAIL: "내 그룹 대기유저 거절 실패"
};