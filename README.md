# Список задач с использованием React и Mobx.
Список задач с использованием библиотеки React, в качестве стейт-менеджера использован Mobx. <br>
Возможности:
* Добавление новой задачи (если длина не превышает ограничение 25 символов);
* Отображение списка добавленных задач;
* Удаление задач из списка;
* Переключение статуса задачи ("В работе", "Выполненные") при клике на её название;
* Фильтрация по типу ("Все", "Выполненные", "В работе");
* Отображение счетчика задач.

## Демо
Посмотреть можно по ссылке: <a href="https://todolist-vadmitriev.web.app/">todolist-vadmitriev.web.app</a>

## Установка
```console
git clone https://github.com/vadmitriev/ToDoList.git
```
``` console
cd todolist
```

С использованием Nodejs локально:
``` console
npm install
```
```console
npm run start
```

С использованием Docker-контейнера:
```console
docker build -t todolist .
```
``` console
docker run --publish 3000:3000 todolist
```
