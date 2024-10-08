https://tages-task.vercel.app/  

## Описание проекта

Этот проект представляет собой реализацию страницы со списком товаров, созданную на основе VueJS и Pinia с использованием TypeScript. Данные о товарах и материалах загружаются из JSON-файлов. Приложение позволяет сортировать товары по цене и фильтровать их по материалу. Также реализована возможность добавления товаров в избранное и корзину с хранением данных в `localStorage`.

## Стек технологий

- **VueJS 3** — Основной фреймворк для разработки фронтенда.
- **Pinia** — Управление состоянием приложения.
- **TypeScript** — Строгая типизация и улучшенная поддержка разработки.
- **CSS** — Семантичная адаптивная верстка по методологии БЭМ.

## Функционал

1. **Семантичная адаптивная верстка**: Верстка страницы выполнена по методологии БЭМ, с использованием семантических HTML-элементов. Приложение адаптировано для работы на различных устройствах.

2. **Сортировка и фильтрация товаров**: 
   - Сортировка по цене: возрастание и убывание.
   - Фильтрация по материалу: металл, дерево.

3. **Добавление товаров в избранное и корзину**:
   - Товары могут быть добавлены в избранное или корзину с помощью соответствующих кнопок.
   - Данные избранного и корзины сохраняются в `localStorage`.

## Установка и запуск проекта

### Локально
Склонируйте репозиторий:
   ```bash
   git clone https://github.com/VladSolyankin/tages_task.git
   cd tages_task
   npm run dev
   ```
