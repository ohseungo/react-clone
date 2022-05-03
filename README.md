# WORDLE Clone

https://wordle-react-clone.netlify.app/

The clone project of [WORDLE](https://www.nytimes.com/games/wordle/index.html), the popular web-based word-guessing game. Built with React, Typescript and Redux

## Overview

![screenshot](/screenshot.png)

## Tech Stack

### Frontend ( Only )

- React
- Typescript
- Redux

## Troubleshooting

### 화면 내 키보드 버튼과 실제 키보드 사용을 번갈아 할 경우 키 입력이 꼬이던 현상

- 원인 : 화면 내 키보드 버튼의 focus 가 풀리지 않은 상태로 Enter 버튼 입력시 버튼 Click 이벤트와 키보드 Enter 이벤트가 동시 발생
- 해결법 : onClick 이벤트 이후 해당 버튼 focus 해제

```javascript
const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
  if (onClick) onClick(value);
  event.currentTarget.blur();
};
```

- 이 자체만으로는 현상 파악이 쉬웠으나 아래 현상과 겹쳐서 일어나 정확한 현상과 원인 파악이 어려웠음

<br/>
<br/>

### 키보드 사용시 현재 입력 중인 단어가 Update 되지 않던 상황

- 원인 : 잘못된 이벤트 추가 방식 사용 (keyup)
- useEffect 내에서 키보드 이벤트 추가와 유사하게 콜백 함수를 다루는 로직 사용 시 해당 콜백함수가 이전 state 를 계속 참조하게 되지 않는지 유의해야한다.
- 콜백함수가 useEffect 가 아닌 컴포넌트 내부에서 초기화될 경우 useEffect 내에서 사용하는 콜백 함수는 계속해서 리렌더링 이전 component 의 state 를 참조하게 될 수 있다.

<br/>

- 해결법 1 : useEffect 내에서 사용하는 콜백 함수의 선언은 마찬가지로 useEffect 내에서 선언한다.
- 가장 이상적인 해결방법이지만 함수가 복잡해질 수록 구현 자체가 어려워진다.
- 해결법 2 : useRef 를 사용하여 항상 최신 콜백 함수를 참조하게 만든다.
- useRef 에 저장한 콜백 함수를 감싼 외부 함수를 핸들러로 넘겨 이벤트 추가가 갱신되지 않더라도 항상 리렌더링 이후 최신 콜백 함수를 실행하게 한다.

```javascript

  const savedHandler = useRef<any>();
  savedHandler.current = keyPressEventListener;

  useEffect(() => {
    const refKeyPressEventListener = (e: any) => savedHandler.current(e);

    window.addEventListener("keyup", refKeyPressEventListener);

    return () => {
      window.removeEventListener("keyup", refKeyPressEventListener);
    };
  }, []);

```
