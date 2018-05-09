//F5로 양식 다시제출 안하게 하기
//PRG패턴
// post-Redirect-Get pattern
//PRG패턴: user가 브라우저에서 refresh(F5)를 누르면 post요청이 중복해서 서버로 전송되는 현상
//"양식 다시 제출하는 창"(나오지 않게)처리하기 
//post후 화면을 다른 화면으로 redirect처리함
//상태 코드 :302 로 바꾸기
//헤더필드: Location추가
//response.writeHead(302,{'Location':'https://www.google.co.kr'})

