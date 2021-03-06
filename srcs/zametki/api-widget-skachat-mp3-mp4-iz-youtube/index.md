---
title: Скачать mp3 или видео с YouTube. Бесплатный API виджет
created: 2021-09-12T19:12:00
layout: post
categories:
  - Заметки
tags:
  - Заметки
  - YouTube
  - API
  - Виджет
encrypt: false
---

Бесплатный виджет (API) для разработчиков. Скачивание музыки и видео из YouTube в один клик + реальные кейсы

<!--more-->

Иногда бывает что нужно скачать какой-то ролик из YouTube, но нет времени или желания запускать сторонний софт или тот-же YouTube-dl и не хочется тратить время на поиски сторонних сервисов неизвестного качества. Хочется чтобы нажал и готово!
Именно эту задачу решает виджет от сервиса https://yt-download.org/. Вы можете просто зайти на сервис, ввести ссылку на видео и получить варианты скачивания в mp3 или mp4 формате.

А при чём тут разработчики, можете сказать вы. Сервис дает возможность разместить свои кнопки для скачивания видео где угодно с помощью обычного iframe. Таким образом, вы можете создать свой сервис для скачивания видео из ютуба и его монетизировать или же просто добавить новый функционал на свой сайт или расширение. Есть два формата виджетов, полный - показывает превью видео, длительность, название и кнопки для скачивания, минимальный - показывает только кнопки с размером и битрейтом видео или mp3 файла. И всё это работает без длительных ожиданий и долгой кновертации. Подборка музыки длиной в 1 час конвертировалась всего около 1 минуты.

# Реальные кейсы использования API
## Кейс 1
Вы хотите создать свой сервис по скачиванию видео и музыки с YouTube. Создаёте простой сайт, да хоть на WordPress и встраиваете маленький iframe, передавая ID видео из ютуба, добавляете любимую партнерку с рекламой и пушами, всё.

```html
<iframe src="https://www.yt-download.org/api/button/mp3/iiMrs3vOm_w" width="100%" height="100%" allowtransparency="true" scrolling="no" style="border:none"></iframe>
```

### Как это выглядит:
<iframe src="https://www.yt-download.org/api/button/mp3/oExqVIPO6Lo" width="100%" height="100%" allowtransparency="true" scrolling="no" style="border:none"></iframe>

>Видео:

<iframe src="https://www.yt-download.org/api/button/videos/oExqVIPO6Lo" width="100%" height="100%" allowtransparency="true" scrolling="no" style="border:none"></iframe>

## Кейс 2
Вы хотите создать своё расширние для добавления кнопок скачиваия видео и музыки с ютуба. К сожалению, но гугл запретил расширениям вмешиваться в работу сервисов гугла, таки дела. Но если сильно хочется, можно попробовать создать расширение с определением погоды по коту а после прохождения проверки, добавить новый функционал в своё расширение. Но это не точно.

## Кейс 3 (не кейс)
Вы просто хотите удобно скачивать видео и музыку с ютуба, не скачивая ничего лишнего и без сторонних сервисов. В таком случае, можете просто скачать мой юзерскрипт для ютуба - https://pcmyonelove.github.io/yt-mp3-and-mp4.user.js и пользоваться :) После этого у вас появятся две новые кнопки (а может и три) над комментариями с желанными фичами.

# Документация

## Только кнопки

URL для встраивания: https://www.yt-download.org/api/button/{ftype}/{YouTube_video_ID}

> Переменная **ftype:**
mp3 = MP3
videos = MP4
merged = WEBM / MKV

Пример IFrame:
```html
<iframe src="https://www.yt-download.org/api/button/mp3/iiMrs3vOm_w" width="100%" height="100%" allowtransparency="true" scrolling="no" style="border:none"></iframe>
```

## Виджет

URL для встраивания: https://www.yt-download.org/api/widget/{ftype}/{YouTube_video_ID}

> Переменная **ftype:**
mp3 = MP3
videos = MP4
merged = WEBM / MKV

Пример IFrame:
```html
<iframe src="https://www.yt-download.org/api/widget/mp3/iiMrs3vOm_w" width="100%" height="100%" allowtransparency="true" scrolling="no" style="border:none"></iframe>
```

TODO: Добавить приятный бонус по кастомизации кнопок для читателей блога ;)