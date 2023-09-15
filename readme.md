day4 : jsx and props

4.1 : JSX
jsx : k phải là HTML, cú pháp mở rộng của js giúp cta viết code ngắn gọn hơn(thay thế create element)

jsx -> createElement -> object

fragment : <></> : bọc các jsx -> 1 parent bản chất jsx là object, 1 function ko thể return 2 object
hiển thị dynamic content vs jsx, {}
style trong jsx

rule of jsx
1 : k thể return nhiều hơn 1 jsx (bọc vào 1 thằng to)
2 : class -> classNames
3 : bắt buộc <H1> (SAI), <h1> (ĐÚNG)

4.2 : PROPS :
kỹ thuật giúp truyền dữ liệu từ parent -> child;
props bản chất là object và có thể destructing props
