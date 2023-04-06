import { useEffect } from "react";
const { kakao } = window;
function Kakao() {
  useEffect(() => {
    var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.//위도 경도 순
      center: new kakao.maps.LatLng(37.27680826575521, 127.0412322006258), //지도의 중심좌표.//위도 경도 순
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    var markerPosition = new kakao.maps.LatLng(
      37.27680826575521,
      127.0412322006258
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
    var iwContent =
        '<div style="padding:5px;">참조은 교회 <br><a href="https://map.kakao.com/link/map/참조은 교회,37.27680826575521,127.0412322006258" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/참조은 교회,37.27680826575521,127.0412322006258" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwPosition = new kakao.maps.LatLng(37.27680826575521, 127.0412322006258); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);

    function setZoomable(zoomable) {
      map.setZoomable(zoomable);
    }
    setZoomable(false); // 확대 , 축소 못하도록
  }, []);
  return <div id="map" style={{ width: "1000px", height: "500px" }}></div>;
  return <div id="map" style={{ width: "85%", height: "500px" }}></div>;
}

export default Kakao;
