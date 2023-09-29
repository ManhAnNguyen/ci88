day8 : side effect with useEffect

8.1 side effect là gi?:

- logic thực thi ngoài phạm vi của component
  vd :

  - chưa có account -> redirect -> login
  - xử lí http <>
  - xử lí timer (setTimeOut : delay sau 1 khoảng tgian, setInterval : thực thi sau mỗi lần)
  - xử lí những event

- cách dùng useEffect
  useEffect(a,b) : nhận vào 2 tham số

  - tham số a : callback -> là 1 function,function này là tham số của hàm khác
  - tham số b (optional) : array dependencies

- mount và unmounts?
  mount : insert vao DOM
  unmount : remove khoi DOM

- cleanUp function? -> function dọn dẹp

  - dọn dẹp cái gỉ : dọn dẹp các event mà đang lắng nghe, hoặc các tác vụ bất đồng bộ
  - tại sao cần dọn dẹp? : tránh memory leak

- ví dụ useEffect <scroll>

  - trong component A, cần viết đoạn logic để bắt 1 event scroll

- life circle <vòng đời>
  - mèo : sinh ra -> phát triển -> chết đi
  - con người : sinh ra -> phát triển -> chết đi
  - vòng đời component : mount -> updation (re-render) -> unmount

2 cách viết component

- class : class component : life circle
- function : functional component : k có life circle : useEffect

- hook; 16.8 mới có hook (useState,useEffect)
