1 event : truyền như 1 props

//SAI
<button onClick={onClick()}>Click me!</button>

//ĐÚNG
<button onClick={onClick}>Click me!</button>

- NẾU TRUYỀN PARAMS

//SAI
<button onClick={onClick(MindX)}>Click me!</button>

//ĐÚNG
<button onClick={() => onClick(MindX)}>Click me!</button>;

2: state : thay đổi -> làm cho component bị re-render

'render' :
1 :initial render <render lần đầu tiên> : vảo web, refresh page
2 :re-render <render lại> : cập nhật giao diện

- state :

  1.  làm cho component re-render ? tại sao cần re-render -> update UI,
  2.  state độc lập, và chỉ sử dụng dc trong 1 components,
      3, cách cập nhật state vs object

: khi cập nhật các bạn fai copy object ?
tại sao cần copy -> state thay đổi -> làm cho component re-render -> UI ms được cập nhật
