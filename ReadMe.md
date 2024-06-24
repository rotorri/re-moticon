# Re-moticon
### Rebirth + Emoticon
*~ 리모티콘, 그시절 이모티콘의 재림 ~*

<img src="img/sad.gif">

![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Frotorri%2Fre-moticon%2F&count_bg=%23FFD212&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=%2F%EC%95%A0%ED%99%98&edge_flat=false)

## 소개
안녕하세요. 개발자 로토리입니다. 이번엔 뭘 했냐면...

그시절 갠홈 세대를 위해, 그 당시에 사용했던 이모티콘을 갠홈에서도 출력할 수 있게 하는 라이브러리인, 일명 **리모티콘**을 만들어보았습니다.

이 라이브러리의 코드는 chatGPT의 도움을 받아 작성되었습니다.


## 동작
html 본문에 '**/애환**' 과 같이 텍스트가 있는 경우, 페이지가 로드되면 해당 문구가 이모티콘으로 치환됩니다.

마치 그 **옛날 메신저 이모티콘**처럼요!


현재 레포지토리에 미리 등록된 이모티콘만 호출이 가능합니다.

## 사용 방법
자신의 html 페이지에 
```html
<script src="https://rotorri.github.io/re-moticon/script.js"></script>
```
위 코드를 넣습니다.

끝입니다.

페이지를 새로고침 하여 이모티콘이 잘 치환 되는지 확인해보세요.


## 등록 된 이모티콘 예약어 목록

|예약어|이미지||예약어|이미지|
|:---:|:---:|---|:---:|:---:|
|/애환|<img src="img/sad.gif">||/뿎|<img src="img/ang.png">|
|/콩|<img src="img/22.png">||/ㅋㄲㅈㅁ|<img src="img/22.png">|
|/절|<img src="img/zul.gif">||/우삼|<img src="img/u3.gif">|
|/조삼|<img src="img/jo3.jpg">||/껌|<img src="img/gum.gif">|
|/꺄|<img src="img/emb.gif">||/뽀뽀|<img src="img/chu.gif">|
|/끄|<img src="img/ew.png">||/굿|<img src="img/good.gif">|
|/삠|<img src="img/bim.png">||/짞|<img src="img/clap.gif">|
|/ㅠ|<img src="img/cry.gif">||/춤|<img src="img/dance.gif">|
|/ㄱ-|<img src="img/r-.jpg">||/ㅃ|<img src="img/sup.gif">|
|/킥|<img src="img/lol.jpg">||/땅|<img src="img/noo.gif">|
|/도망|<img src="img/run.gif">||/근엄|<img src="img/seri.gif">|
|/붂|<img src="img/shy.gif">||/담|<img src="img/smoke.gif">|
|/피식|<img src="img/psk.png">||/헉|<img src="img/omg.gif">|
|/착잡|<img src="img/ff.gif">||/어이|<img src="img/jp.gif">|
|/뭐야|<img src="img/he.gif">||/하지|<img src="img/yara.png">|
|/컥|<img src="img/wtf.gif">|


## 사용 범위
어떠한 홈페이지에서 사용해도 상관 없습니다. 별도의 제한 없이 무료로 공개 배포하는 소스이므로 자유롭게 사용하여주세요. 소스의 일부를 수정하여 개인적으로 사용하여도 괜찮습니다. 다만 수정된 소스를 재배포하는 경우 현재의 레포지토리 출처를 남겨주세요.

## (고급) css 제어
호출된 이모티콘의 크기나 css 속성을 제어하려면 `.re-moticon` 클래스를 통해 제어해주세요.

이모티콘 이미지에는 기본적으로 `width:auto` 속성이 인라인으로 적용되어 호출됩니다.


## 이모티콘 추가 문의
준비중입니다.