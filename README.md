# React rating component

The React Rating Box is a customizable TailwindCSS-based component designed to display ratings interactively. It evaluates three criteria: Good, Normal, and Bad. This versatile component is perfect for various applications, such as product reviews, feedback forms, and interactive rating systems.

## Installation

Use the package manager npm .

```bash
npm i react-rating-box
```
![Desktop 2024 06 12 - 16 16 02 02](https://github.com/Malek-O/react-rating-box/assets/116006550/f1f56bd4-c883-4d63-b71f-bfe5f0d6dd16)

## Basic Usage

```javascript
import { useState } from "react"
import { RatingBox, RatingWrapper } from "react-rating-component"
const theme = {
  base: {
    bg: "bg-[#1E2124]",
    boxBg: "bg-[#3d3f3d]"
  },
  bad: {
    bg: "bg-[#2E2727]",
    boxBg: "bg-[#834747]",
    fadeBg: "bg-[#482D2D]"
  },
  normal: {
    bg: "bg-[#2C2213]",
    boxBg: "bg-[#947342]",
    fadeBg: "bg-[#564121]"
  },
  good: {
    bg: "bg-[#2C3532]",
    boxBg: "bg-[#6D8A74]",
    fadeBg: "bg-[#354639]"
  },
}
function App() {
      const [value, setValue] = useState(0);

      <div className="flex justify-center flex-col">
        <RatingWrapper theme={theme} className="p-3 rounded-lg shadow-lg gap-2" rating={value} onRating={(rate) => setValue(rate)}>
          <RatingBox className="p-2 rounded-sm" />
        </RatingWrapper>
      </div>
}
export default App

```

## RatingWrapper Props

| Name          | type     | info                                                                                                                              |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ``rating``    | number   | this is required filed, can accept from 1 to 5 in order to display the rating boxes                                                            |
| ``className`` | string   | optional, you can add tailwind classes                                                                                            |
| ``onRating``  | function | it will return the rating value once the box is clicked                                                                           |
| ``theme``     | object   | this is required object should take 4 properties base,bad,noraml and good, you can follow the structure as specifed in basic usage |


## RatingBox Props

| Name         | type    | info             |
| ------------ | ------- | ---------------- |
| ``readOnly`` | boolean | false by default |

## License

[MIT](https://choosealicense.com/licenses/mit/)
