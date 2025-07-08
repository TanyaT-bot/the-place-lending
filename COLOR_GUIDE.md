# 🎨 Руководство по изменению цвета сайта

## 📍 Где изменить цвет

Откройте файл `styles.css` и найдите строки **4-8**:

```css
/* CSS Variables - ИЗМЕНИТЕ ЦВЕТ ЗДЕСЬ! */
:root {
    --main-color: #ff6b35;        /* Основной цвет (оранжевый) */
    --main-color-dark: #e85d04;   /* Темный оттенок основного цвета */
    --main-color-light: #ff8c5a;  /* Светлый оттенок основного цвета */
}
```

## 🎯 Как изменить

Просто замените `#ff6b35` на любой другой цвет! Вот популярные варианты:

### 🔴 Красные оттенки (как Supreme)
```css
--main-color: #ff0000;        /* Яркий красный */
--main-color-dark: #cc0000;   /* Темно-красный */
--main-color-light: #ff3333;  /* Светло-красный */
```

### 🔵 Синие оттенки (как Nike)
```css
--main-color: #0066cc;        /* Синий */
--main-color-dark: #004499;   /* Темно-синий */
--main-color-light: #3399ff;  /* Светло-синий */
```

### 🟢 Зеленые оттенки (как Stussy)
```css
--main-color: #00cc66;        /* Зеленый */
--main-color-dark: #00994d;   /* Темно-зеленый */
--main-color-light: #33ff99;  /* Светло-зеленый */
```

### 🟣 Фиолетовые оттенки (как Palace)
```css
--main-color: #9933cc;        /* Фиолетовый */
--main-color-dark: #772299;   /* Темно-фиолетовый */
--main-color-light: #bb66ff;  /* Светло-фиолетовый */
```

### 🟡 Желтые оттенки (как Vans)
```css
--main-color: #ffcc00;        /* Желтый */
--main-color-dark: #cc9900;   /* Темно-желтый */
--main-color-light: #ffdd33;  /* Светло-желтый */
```

### ⚫ Черно-белые оттенки (минимализм)
```css
--main-color: #ffffff;        /* Белый */
--main-color-dark: #cccccc;   /* Серый */
--main-color-light: #ffffff;  /* Белый */
```

## 🌈 Как найти свой цвет

1. **Google Color Picker**: https://g.co/kgs/8XqYqY
2. **Coolors**: https://coolors.co/
3. **Adobe Color**: https://color.adobe.com/

## 💡 Советы

- **Основной цвет** (`--main-color`) - это ваш главный цвет
- **Темный оттенок** (`--main-color-dark`) - для градиентов и теней
- **Светлый оттенок** (`--main-color-light`) - для подсветки

## ✅ После изменения

1. Сохраните файл `styles.css`
2. Обновите страницу в браузере
3. Весь сайт автоматически изменит цвет!

## 🚀 Отправка на GitHub

```bash
git add .
git commit -m "Change site color to [ваш цвет]"
git push
``` 