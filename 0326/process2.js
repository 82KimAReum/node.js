process.stdin.resume();
//stdin.resume() stdin활성화

process.stdin.setEncoding('utf8');
//data 가 새로 들어오면 data enent 발생
process.stdin.on('data',function(chunk){
//들어온 데이터는 chunk
    process.stdout.write('srt-->'+chunk);
});

//data가 들어오지 않으면  end event 발생:ctrl +d( windows에서 안됨)
process.stdin.on('end',function(){
    process.stdout.write('program is over');
})