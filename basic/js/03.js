$('#list a[target]').css('color', 'red')
// target 속성이 있는 a 요소
$('#list a[href^=https]').css('border', '5px solid green')
// href 속성이 https로 시작하는 a 요소
$('#list a[href$=net]').css('border', '5px solid blue')
// href 속성이 net으로 끝나는 a 요소
