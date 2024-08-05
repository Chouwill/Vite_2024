<script setup>
import { ref, reactive } from "vue";

// 使用reactive
// 1.v-for 渲染資料
// 2. 3、4項功能需有這些屬性
// 3.控制特定商品數量，可用v-for(自定義參數)，但須與使用的@click函式參數一樣
// 4.修改功能同上


const todos = reactive([
  {
    name: "珍珠奶茶",
    describe: "香濃奶茶搭配QQ珍珠",
    price: 50,
    quantity: 0,
    status: false,
    editName: "",
  },
  {
    name: "冬瓜檸檬",
    describe: "香濃奶茶搭配QQ珍珠",
    price: 45,
    quantity: 18,
    status: false,
    editName: "",
  },
  {
    name: "翡翠檸檬",
    describe: "綠茶與檸檬的完美結合",
    price: 55,
    quantity: 34,
    status: false,
    editName: "",
  },
  {
    name: "四季春茶",
    describe: "香醇四季春茶，回甘無比",
    price: 45,
    quantity: 10,
    status: false,
    editName: "",
  },
  {
    name: "阿薩姆奶茶",
    describe: "阿薩姆紅茶搭配香醇鮮奶",
    price: 50,
    quantity: 25,
    status: false,
    editName: "",
  },
  {
    name: "檸檬冰茶",
    describe: "檸檬與冰茶的清新組合",
    price: 45,
    quantity: 20,
    status: false,
    editName: "",
  },
  {
    name: "芒果綠茶",
    describe: "芒果與綠茶的獨特風味",
    price: 55,
    quantity: 18,
    status: false,
    editName: "",
  },
  {
    name: "抹茶拿鐵",
    describe: "抹茶與鮮奶的絕配",
    price: 60,
    quantity: 20,
    status: false,
    editName: "",
  },
]);

const add = (item) => {
  // function(自訂義參數item)
  item.quantity++;
};
const deleteFun = (item) => {
  if (item.quantity > 0) {
    item.quantity--;
  }
  return 0;
};

const toggle = (item) => {
  // 觸發修改按鈕
  console.log(todos.status);

  item.status = !item.status;
  item.editValue = item.name; // 初始化編輯值為當前名稱
};
const editFun = (item) => {
  console.log(item.name);
  item.name = item.editName;
  item.status = false;
};
</script>
<template>
  <div class="prodlist">
    <table>
      <thead>
        <tr>
          <th scope="col">品項</th>
          <th scope="col">描述</th>
          <th scope="col">價格</th>
          <th scope="col">庫存</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(obj, idx) in todos" :key="idx">
          <td>
            {{ obj.name }}
            <button @click="toggle(obj)">
              <font-awesome-icon icon="fa-solid fa-pen-to-square" />
            </button>
            <input type="text" v-show="obj.status" v-model="obj.editName" />
            <!--陣列要有這個status屬性，才可以個別被控制-->
            <button @click="editFun(obj)">儲存</button>
          </td>
          <td>
            <small>{{ obj.describe }}</small>
          </td>
          <td>{{ obj.price }}</td>
          <td>
            <button @click="deleteFun(obj)">-</button>
            {{ obj.quantity }}
            <button @click="add(obj)">+</button>
            <!-- 確保被綁定的函式參數，與 v-for(參數)一樣 -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.prodlist {
  display: flex;
  justify-content: center;
  align-items: center;
}
td {
  height: 90px;
}
</style>
