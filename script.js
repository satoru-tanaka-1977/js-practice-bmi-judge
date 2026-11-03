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
// 身長(cm)をmに直してBMIを計算する
const bmi = weight / ((height / 100) * (height / 100));

// BMIの数値に応じて判定を入れる変数
let status = "";
if (bmi < 18.5) {
    status = "痩せ型";
} else if (bmi < 25) {
    status = "標準";
} else {
    status = "肥満";
}

// 計算したBMIの結果を画面に表示する（小数点第1位まで）
resultDiv.textContent = `あなたのBMIは${bmi.toFixed(1)}です。体型は${status}です。`;
});