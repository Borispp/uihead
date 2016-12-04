# UI Head
====================

## Навигация
* [Автоматизированные задачи](#Автоматизированные-задачи)
* [Файловая структура](#Файловая-структура)
* [Как все работает?](#Как-все-работает)
    - [Задачи](#Задачи)
    - [Группы задач](#Группы-задач)
* [Системные требования](#Системные-требования)
* [Установка](#Установка)
* [Проблемы](#Проблемы)
* [TODO](#TODO)

## Автоматизированные задачи
- Компиляция [stylus](http://learnboost.github.io/stylus/)
- Компиляция [CoffeeScript](http://coffeescript.org/)
- Компиляция [Jade](http://jade-lang.com/)-шаблонов
- Сборка спрайтов и генерация стиля для них. Я писал [статью](http://habrahabr.ru/post/227945/) о том, как это все работает.
- Добавление вендорных префиксов к свойствам
- Минификация css и js
- Оптимизация картинок

## Файловая структура
Первый уровень проекта — папки `builder`, `src` и `built`.

`builder` — папка в которой лежит `gulpfile` с тасками для `gulp`, где будут лежать `node-модули` и откуда буду запускаться все команды в консоли.

В папке `src` лежат все исходные файлы проекта, а папка `built` создается и изменяется автоматически при выполнении команд `gulp-а`.

**Содержимое папки `src`**
- `assets`
    + `styles` — стили проекта
    + `images` — картинки проекта, включая `content` папку для картинок в контенте
    + `scripts` — скрипты
- `templates`
    + `pages` — шаблоны страниц
    + `blocks` — блоки из которых будут собираться страницы.


## Как все работает?
В `gulpfile.coffee` описаны таски, которые выполняют те или иные действия. Таски можно вызывать по отдельности и группами. Вызов группами — самый частый юзкейс.
Все `gulp`-плагины загружаются автоматически из `package.json` с помощью плагина `gulp-load-plugins`. Это позволяет уменьшить объем `gulpfile.coffee`.
`Gulp` в процессе работы берет файл из 1 папки, выполняет с ним необходимые операции и сохраняет в другой папке. Для удобства, все пути к файлам я вынес в переменные и храню их в файле `config.yml`.

### Задачи
* `sprite` — генерация спрайта на основе картинок, который лежат в папке `config.paths.src.sprites.images.all`
* `stylus` — компиляция `.styl`
* `images` — перенос картинок в `built` папку
* `jade` — компиляция `.jade`-шаблонов
* `autoprefixer` — добавление вендорных префиксов (настройки по-умолчанию)
* `scripts:min` — минификация скриптов
* `styles:min` — минификация стилей
* `images:min` — оптимизация картинок
* `watch` — отслеживание изменений в файлах и запуск необходимого таска

### Группы задач
* `default` - компилирует шаблоны, скрипты, стили, собирает спрайты. Но делает это всего 1 раз;
* `dev` — Включает в себя сам `default` и задачу `watch`, которая начинает отслеживать изменения в файлах и запускает необходимые таски по отдельности, в зависимости от файла, который изменился;
* `minify` — сжимает файлы и оптимизирует картинки, которые были созданы после работы `default`;
* `prod` — таск который запускается на сервере или перед заливкой на сервер. Он выполняет группу `default` и после этого запускает `minify`;


## Системные требования
* node.js
* gulp

## Установка
Если у вас не установлен `node.js`, [скачайте](http://nodejs.org) и установите.
<br>
Вместе с `node.js` у вас установится пакетный менеджер `npm`.
<br>
Теперь установите `gulp`, введя в консоли команду `npm i -g gulp` (понадобятся права администратора).
<br>
После этих шагов, можно приступать к установке зависимостей в самом проекте.
<br>
Скачайте и распакуйте архив с шаблоном, в консоли откройте папку `builder` и введите `npm i`. Пойдет процесс скачивания и установки всех перечисленных в `package.json` модулей. После завершения установки, можно напечатать `gulp` в консоли и отработает группа задач `default`

## Проблемы
При запуске `gulp` система может выдат ошибку о том: `Couldn't find preset "es2015" relative to directory`. Решение — установить переменную NODE_PATH:
`export NODE_PATH="/usr/local/lib/node_modules/"`
