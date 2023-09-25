day 7: list and conditional rendering

7a : list

7a.1 : nhắc lại 1 chút 1 vài method của array

- filter : trả ra 1 mảng mới, và các phần tử trong mảng fai thỏa mãn điều kiện nào đỡ
  VD:
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const filteredNum = nums.filter((item, index) => item > 4);

console.log(filteredNum);

- map : trả ra 1 mảng mới,các phẩn tử thay đổi dựa trên điều kiện
  VD:
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const newNums = nums.map((item, index) => item \* 2);

console.log(newNums)

- đi sâu vào key 1 chút? tại sao cần:

* để react phân biệt các item vs nhau
* nếu k có key: sort -> thì react kb

7b conditional : <điều kiện> rendering <rendering> -> rendering theo điều kiện
