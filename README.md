# Assistive Gesture

## Why??

## How To Install (library 예정)

npm install assistive-gesture

## How To Use (development)

```
// 리포지토리를 클론 혹은 다운로드 하였다면 npm install을 실행하여 depency를 설치합니다.
npm install

// 개발을 하거나 샘플을 확인하려면 아래의 명령어를 실행합니다.
npm run start

// 유닛 테스트와 단대단 테스트 실행은 아래의 명령어를 실행합니다.
npm run test:unit / npm run test:e2e

// 구현부를 수정한 후 사용할 경우 아래의 명령어를 실행합니다.
// 'dist' 디렉토리에 번들링 된 파일을 사용하고자 하는 프로젝트의 자원 경로에 복사합니다.
npm run build

```

Vue.js 같은 프레임워크에서는 아래와 같이 사용합니다.

```
<template>
  <div id="target"></target>
</template>
<script>
import AssistiveGesture from 'assistive-gesture';
import 'assistive-gesture/dist/assistive-gesture.css';
export default {
  mounted() {
    AssistiveGesture.init('target');
  }
}
...
```

## Option properties

| option | type | required? | default | description |
|--------|------|-----------|---------|-------------|
| element | HTMLElement | yes | none | 엘리먼트 |

## Custom Style Guide

```
```

## Path Alias

```
js: src = '@'
scss: src = '~@'
```
