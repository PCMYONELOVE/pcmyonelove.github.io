$(document).on('copy',function(){
    showMessage('Хочешь скопировать пост? Просто поделись с друзьями. Так удобней. ',8000);
});
$('.waifu-tool .fa-home').click(function(){
    try{
        if(typeof(ajax)==="function")
            ajax(window.location.protocol+'//'+window.location.hostname+'/',"pagelink");
        else
            window.location = window.location.protocol+'//'+window.location.hostname+'/';}
    catch(e){}
});

var model_p = 22;
var basePath = window.location.protocol+'//'+window.location.hostname + (window.location.port ? ':' + window.location.port : '');

$('.waifu-tool .fa-drivers-license-o').click(function(){
    //loadlive2d('live2d',xb.thome+'/waifu/api.php?p='+model_p+'&model=rand');
    loadlive2d('live2d', basePath+'/images/waifu/'+model_p+'/config.json');
    if(model_p===22){
        model_p = 33;
        showMessage('Немного устала помогать, пойду чесать ушки :3',4000);
    }else{
        model_p = 22;
        showMessage('Я вернулась!',4000);
    }
});

$('.waifu-tool .fa-comments').click(function(){
    showHitokoto();
});

$('.waifu-tool .fa-street-view').click(function (){
    // if(model_p===22) loadlive2d('live2d',basePath+'/waifu/api.php?p=33&model=rand'); else loadlive2d('live2d',basePath+'/waifu/api.php?p=22&model=rand');
    loadlive2d('live2d',basePath+'/images/waifu/'+model_p+'/config.json');
    showMessage('Как тебе моё новое платье?',4000);
});

$('.waifu-tool .fa-info-circle').click(function (){
    //window.open('https://www.fczbl.vip/946.html');
	window.open(basePath + '/live2d-manual-na-russkom-live2d-js-dev/');
});

$('.waifu-tool .fa-camera').click(function (){
    showMessage('Это очень мило?',5000);
    window.Live2D.captureName = model_p+'.png';
    window.Live2D.captureFrame = true;
});

$('.waifu-tool .fa-close').click(function(){
    sessionStorage.setItem('waifu-dsiplay','none');
    showMessage('Возможно, однажды ты повстречаешь важных людей.',2000);
    window.setTimeout(function(){$('.waifu').hide();},1000);
});

//loadlive2d('live2d',basePath+'/waifu/api.php?p=33&model=default');
loadlive2d('live2d',basePath+'/images/waifu/'+model_p+'/config.json');

function showHitokoto(){
    /* $.post("https://www.fczbl.vip/api/hitokoto/",function(result){
        showMessage(result);
    }); */
	// $.post("/inc/hitokoto.php?mode=text",function(result){
 //        showMessage(result);
	// 	result = result.split('/');
	// 	jQuery(".random-quote2　span").eq(0).html(result[0]);
	// 	jQuery(".random-quote2　span").eq(1).html(result[1]);
 //    });
}

function showMessage(a,b){
    if(b==null) b = 10000;
    jQuery(".waifu-tips").hide().stop();
    jQuery(".waifu-tips").html(a);
    jQuery(".waifu-tips").fadeTo("10",1);
    jQuery(".waifu-tips").fadeOut(b);
}

(function(){
    var text;
    var SiteIndexUrl = window.location.protocol+'//'+window.location.hostname+'/';
    if(window.location.href == SiteIndexUrl){
        var now = (new Date()).getHours();
        if(now>23||now<=5){
            text = 'Ты сова или из Сахалина? Всё ещё не спишь так поздно.';
        }else if(now>5&&now<=7){
            text = 'Утречка! Хороший день вот-вот начнётся.';
        }else if(now>7&&now<=11){
            text = 'Доброго утречка! Работай хорошо, но не засиживайся и не забудь погулять.';
        }else if(now>11&&now<=14){
            text = 'Полдень пришёл! Пора перекусить блинчиками с джемом!';
        }else if(now>14&&now<=17){
            text = 'Заскучать днём легко. Достиг ли ты желаемого сегодня?';
        }else if(now>17&&now<=19){
            text = 'Уже поздно! Декорации заката за окном очень красивые, самые красивые, но закат красный ~';
        }else if(now>19&&now<=21){
            text = 'Вечер в радость! Как прошёл твой денёк?';
        }else if(now>21&&now<=23){
            text = 'Уже так поздно, сделай ночной перерыв на вкусняшки, спокойной ночи ~';
        }else{
            text = 'Эй ~ Приди и подразни меня!';
        }
    }else{
        if(document.referrer!==''){
            var referrer = document.createElement('a');
            referrer.href = document.referrer;
            var domain = referrer.hostname.split('.')[1];
            if(window.location.hostname==referrer.hostname){
                text = 'Коничива! <span style="color:#0099cc;">『'+document.title.split(' - ')[0]+'』</span>';
            }else if(domain=='baidu') {
                text = 'Привет! Друг из поисковика Baidu <br> Тебе нужен пост <span style="color:#0099cc;">'+referrer.search.split('&wd=')[1].split('&')[0]+'</span> Нашел меня?';
            }else if(domain=='so') {
                text = 'Привет! Друг из поисковика 360 <br> Тебе нужен пост <span style="color:#0099cc;">'+referrer.search.split('&q=')[1].split('&')[0]+'</span> Нашел меня?';
            }else if(domain=='google') {
                text = 'Привет! Друг из гугла <br> Велкам, ты открыл пост <span style="color:#0099cc;">『'+document.title.split(' - ')[0]+'』</span>';
            }else{
                text = 'Привет! Новый <span style="color:#0099cc;">'+referrer.hostname+'</span> друг. Friends++;';
            }
        }else{
            text = 'Welcome! <span style="color:#0099cc;">『'+document.title.split(' - ')[0]+'』</span>';
        }
    }
    $(".waifu").animate({top:$(window).height()-250},800);
    showMessage(text,8000);
})();

$(window).resize(function(){
    $(".waifu").css('top',window.innerHeight-250);
});

$("#live2d").mouseover(function(){
    msgs = ["Что ты творишь?","Мышь ... Мышь неуместна!","Мяу мяу мяу?","Lolicon что это?","Развратник~","Кто стащил моего плюшевого медведя?"];
    var i = Math.floor(Math.random()*msgs.length);
    showMessage(msgs[i]);
});

jQuery(document).ready(function($){
    $('.search-box').mouseover(function(){
        showMessage('Не найдёшь нужный пост? Попробуй поискать на сайте!');
    });
    $('#search').focus(function(){
        showMessage('Введи то, что ищещь и тыкни Enter на клавиатуре!');
    });
    $('.desc a h2,.desc a span,.color-logo a,.back-index,.waifu-tool .fa-home,#kratos-primary-menu .fa-home').mouseover(function(){
        showMessage('Нажми на неё, чтобы вернуться в начало!');
    });
    $('#footer p a i.fa-weibo').mouseover(function(){
        showMessage('Торчишь на Вейбо? Не проходи мимо!');
    });
    $('#footer p a i.fa-envelope').mouseover(function(){
        showMessage('Я отвечу вовремя!');
    });
    $('#footer p a i.fa-twitter').mouseover(function(){
        showMessage('Twitter? Он ещё существует?');
    });
    $('#footer p a i.fa-facebook-official').mouseover(function(){
        showMessage('Эмм.. Говорят если сидеть в полнолуние на Фейсбуке в гараже, можно получить больше симпатий. Гаражный дух Цукерберга любит тебя!');
    });
    $('#footer p a i.fa-github').mouseover(function(){
        showMessage('GayHub! Мне просто.. интересно было))');
    });
    $('#wechat-img').mouseover(function(){
        showMessage('Это мой QR-код WeChat ~');
    });
    $('.gotop-box').mouseover(function(){
        showMessage('Возращаешься к истокам поста?');
    });
    $('.waifu-tool .fa-comments').mouseover(function(){
        showMessage('Угадаешь, что я хочу сказать?');
    });
    $('.waifu-tool .fa-drivers-license-o').mouseover(function(){
        if(model_p===22) showMessage('Я хочу встретиться с моей сестрой.'); else showMessage('Что? Я не достаточно хороша, хочешь вернуть 33?');
    });
    $('.waifu-tool .fa-street-view').mouseover(function(){
        showMessage('Вам нравится играть со своими ушками?');
    });
    $('.waifu-tool .fa-camera').mouseover(function(){
        showMessage('Ты хочешь сфотать меня? Один два три.. сыыыыр ~');
    });
    $('.waifu-tool .fa-info-circle').mouseover(function(){
        showMessage('Хочешь узнать обо мне побольше?');
    });
    $('.waifu-tool .fa-close').mouseover(function(){
        showMessage('Настало время прощания?');
    });
    $(document).on("click","h2 a",function(){
        showMessage('Нагрузка <span style="color:#0099cc;">'+$(this).text()+'</span>Средний ... пожалуйста, подождите',600);
    });
    $(document).on("mouseover","h2 a",function(){
        showMessage('Взляни на <span style="color:#0099cc;">'+$(this).text()+'</span> Почему так?');
    });
    $(document).on("mouseover",".prev",function(){
        showMessage('Зелаешь постичь прошлое?');
    });
    $(document).on("mouseover",".next",function(){
        showMessage('Хочешь заглянуть в будущее?');
    });
    $(document).on("mouseover",".kratos-post-content a",function(){
        showMessage('Перейти в <span style="color:#0099cc;">'+$(this).text()+'</span>. Сходить в маркет.');
    });
    $(document).on("mouseover","#submit",function(){
        showMessage('Твой первый коммент проверят местные Ёкаи. Будь терпеливым~');
    });
    $(document).on("mouseover",".OwO-logo",function(){
        showMessage('Ищёщь способ лучше выразить свои эмоции?');
    });
    $(document).on("mouseover",".nav-previous",function(){
        showMessage('Тапни на линк, чтобы вернуться!');
    });
    $(document).on("mouseover",".nav-next",function(){
        showMessage('Жмякни, чтобы двигаться вперед!');
    });
    $(document).on("mouseover",".comment-reply-link",function(){
        showMessage('Есть что ответить?');
    });
    $(document).on("mouseover",".Donate",function(){
        showMessage('Хочешь помочь мне? Ты такой тёплый человек.~');
    });
    $(document).on("mouseover",".Love",function(){
        showMessage('Кажеться, ты мне нравишься~ Разрешаю погладить ушки!');
    });
    $(document).on("mouseover",".must-log-in",function(){
        showMessage('Войди в обитель, чтобы продолжить путешествия по моей земле~');
    });
    $(document).on("mouseover",".Share",function(){
        showMessage('О годных вещах и событиях должны знать все.');
    });
    $(document).on("click","#author",function(){
        showMessage("Поведай мне своё имя!");
    });
    $(document).on("click","#email",function(){
        showMessage("Оставь здесь свой электронный ключ!");
    });
    $(document).on("click","#url",function(){
        showMessage("Скажи мне, где твой дом, чтобы я могла придти в гости!");
    });
    $(document).on("click","#comment",function(){
        showMessage("Заполняй это поле с вниманием и заботой! 喵~");
    });
});

jQuery(document).ready(function($){
    window.setInterval(function(){showMessage(showHitokoto());},25000);
    var stat_click = 0;
    $("#live2d").click(function(){
        if(!ismove){
            stat_click++;
            if(stat_click>6) {
                msgs = ["Уже всё?","Это уже.. "+stat_click+" двойное прикосновение?! ","Непристойное нападение.. Ах! Помогите!","OH，My ladygaga","110. Здесь есть метаморфоза, которая коснулась меня.(ó﹏ò｡)"];
                var i = Math.floor(Math.random()*msgs.length);
            }else{
                msgs = ["Да ... Я случайно ударила его.","Я убегаю, убегаю, убегаю!~~","Если вы коснетесь меня снова, я сообщу в Японскую в полицию!","Не трогай меня, отвали!","Я не могу позволить себе, но могу ли я позволить себе это?","Не трогай меня, бака!","Почему ты меня трогаешь? Осторожнее мистер, иначе я вас укушу!"];
                var i = Math.floor(Math.random()*msgs.length);
            }
        s = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.75,-0.1,-0.2,-0.3,-0.4,-0.5,-0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random()*s.length);
        var i2 = Math.floor(Math.random()*s.length);
            $(".waifu").animate({
            left:(document.body.offsetWidth-210)/2*(1+s[i1]),
            top:(window.innerHeight-240)-(window.innerHeight-240)/2*(1-s[i2])
            },
            {
                duration:500,
                complete:showMessage(msgs[i])
            });
        }else{
            ismove = false;
        }
    });
});

var ismove = false;
jQuery(document).ready(function($){
    var box=$('.waifu')[0];
    var topCount = 20;
    box.onmousedown=function(e){
        var Ox=e.offsetX;
        var Oy=e.offsetY;
        var Ch=document.documentElement.clientHeight;
        var Cw=document.documentElement.clientWidth;
        document.onmousemove=function(e){
            var Cx=e.clientX;
            var Cy=e.clientY;
            box.style.left=Cx-Ox+"px";
            box.style.top=Cy-Oy+"px";
            if(box.offsetLeft<0){
                box.style.left=0;
            }
            else if(box.offsetLeft+box.offsetWidth>Cw){
                box.style.left=Cw-box.offsetWidth+"px";
            }
            if(box.offsetTop-topCount<0){
                box.style.top=topCount+"px";
            }
            else if(box.offsetTop+box.offsetHeight-topCount>Ch){
                box.style.top=Ch-(box.offsetHeight-topCount)+"px";
            }
            ismove = true;
        };
        document.onmouseup=function(e){
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
});