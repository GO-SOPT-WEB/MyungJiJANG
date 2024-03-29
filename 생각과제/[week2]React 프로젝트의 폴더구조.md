# 💟 React 프로젝트의 폴더구조는 어떻게 설계하는것이 좋을까???

## 1. **Presntation Component - Container Component ↔ Custom hook ↔ Atomic를** 비교해보자!

### 1.1) Presntation Component - Container Component

> 이 두개의 패턴을 도입하면 재사용성을 높일 수 있다. 로직이 포함되지 않은 presentational 컴포넌트는그저 받아온 정보를 화면에 표현할 뿐이므로 presentational 컴포넌트가 다른 컴포넌트를 알 필요가 없다는 점에서 의존도가 낮아 다양한 container 컴포넌트와 조합하여 재사용할 수 있다는 장점이 있다.<br>
> 그리고 구조에 대한 이해가 쉬워진다. 기능과 UI를 명확히 분리되므로 개발자 입장에서 코드 구조에 대한 이해가 쉬워진다.
> <br>마지막으로 마크업 작업이 편하다.presentational 컴포넌트는 layout 컴포넌트로 활용하여
> 반복되는 마크업 작업을 줄여줄 수 있다는 장점을 갖고 있다.
> <br>
> 깊고 자세한 내용은 [presentational and container](https://tecoble.techcourse.co.kr/post/2021-04-26-presentational-and-container/) 참고하면 된다!

### 1.2) Custom Hook Pattern

> 이것은 메인 로직이 커스텀 훅(Hook)으로 전달되고, 훅은 사용자가 접근할 수 있다.
> 또한 훅은 여러 내부 로직(States, Hnadlers)을 포함하여 컴포넌트의 제어가 쉬워지고, 사용자에게 더 많은 통제권을 준다.
> <br> 장점은 많은 제어권을 부여하여 사용자는 훅과 JSX컴포넌트 사이에 로직을 추가하여 기본 컴포넌트의 동작을 바꿀 수 있다는 점이다.

### 1.3) atomic 디자인 패턴

> 이것은 인터페이스를 작고 단순한 요소로 분리하는 개념이고 아토믹 디자인 패턴은 Aoms(원자), Molecules(분자), Organisms(유기체), Templates(템플릿)으로 구성되어지고 최종적으로는 Pages 단위가 된다.
> <br>즉, 일관된 UI를 만들고 유지보수성을 향상시켜준다는 장점이 있다. 또 재사용 가능한 설계시스템과 컴포넌트들을 혼합해 일관성 있고 재사용의 효율을 높이는 디자인을 할 수 있다는 장점이 있다. 그리고 레이아웃과 디자인이 쉽고 작은 컴포넌트, 큰 컴포넌트를 삭제 추가 수정이 쉽다. 페이지를 처음부터 설계하는 시도가 있어, 페이지의 레이아웃의 이해가 오래가고, 팀 프로젝트 시 제 멋대로가 되는 스타일 가이드를 최소화시킨다는 것이 가장 큰 장점이다.

## 2. 어떤 방식을 언제 택해야 좋은 것일까?

> 각각의 방식은 각기다른 장단점을 가지고 있기에 상황에 맞게, 프로젝트에 맞게 선택하는 것이 중요하다.
> <br>커스텀 훅 디자인은 로직의 쉬운 재활용이 가능하지만 컴포넌트와 로직의 긴밀한 동작 방식을 이해하지 못하면 코드를 이해하기 어렵고, 아토믹 디자인은 컴포넌트 재활용을 골자로 편리한 웹 개발을 위해 고안된 디자인 패턴이나, 잘게 쪼개진 구성으로 인해 유지보수가 불편할 수도 있다는 단점이 있다. Compound Components Pattern은 이 패턴은 불필요한 prop drilling 없이 Expressive하고 Declarative한 컴포넌트를 만들 수 있게 도와준다. 만약 좀 더 customizable하고 관심사를 분리하도록 하고 싶다면 이 패턴을 고려해보아야 한다. 하지만 너무 UI 자유도가 크다. 이렇게 큰 자유도는 예상치 못한 행동을 유발할 수도 있기에 유저의 사용도에 의존하는 프로젝트면 큰 자유도는 경계해야한다.Props Getters Pattern도 사용하기 쉽다는 장점이 있지만 추상화되어 잘보이지 않는 다는 단점이 있다. 따라서 내부의 로직변화가 매우 변동이 많지만 팀원이 자세한 로직변화를 알아차리는 게 쉽지 않다면 이 패턴은 사용하기 어려울 것 같다.

## 3. 프론트엔드에게 디자인 패턴이란 어떤 존재일까?

> 프론트엔드에게 디자인 패턴이란 한번쯤 깊이 고민해볼 중요한 문제라고 생각한다. 협업에 있어 방법론대로 개발하는 것이 가독성 , 유지보수성, 재사용 측면에서 중요한데 이를 위해서는 디자인 패턴에 대해 고민해봐야할 필요가 있다.
> 사실 디자인 패턴이라는 말자체는 이번에 처음 들어밨는데 이미 웹잼을 하면서 다 경험해보고 고민해봤던 문제였다. 본격적인 개발 전 폴더 구조 및 컴포넌트 분리에 대해 며칠을 회의했고 가장 좋은 방법을 찾기 위해 이야기를 많이 했던 것 같다!<br>오늘 이야기한 디자인 패턴 이외에도 더 많은 것들이 있으니 시간이 되면 꼼꼼하게 정리해서 더 나은 협업을 위해 노력하는 프론트엔드 개발자로 성장하고 싶다!
