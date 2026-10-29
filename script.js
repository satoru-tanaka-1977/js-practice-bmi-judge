// ボタンと入力欄、結果表示の場所を取得する
const calcBtn = document.getElementById("calc-btn");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultDiv = document.getElementById("result");

// ボタンがクリックされたときの処理
calcBtn.addEventListener("click",function() {
    // ここに判定ロジックを書いていきます！
    console.log("ボタンが押されました");

// 身長の入力欄から文字を取り出して、計算できる数字に変換する
const height = Number(heightInput.value);
// 体重の入力欄から文字を取り出して、計算できる数字に変換する
const weight = Number(weightInput.value);
})