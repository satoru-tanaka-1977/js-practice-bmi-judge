// ボタンと入力欄、結果表示の場所を取得する
const calcBtn = document.getElementById("calc-btn");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultDiv = document.getElementById("result");

// ボタンがクリックされたときの処理
calcBtn.addEventListener("click", function () {
  // ここに判定ロジックを書いていきます！
  console.log("ボタンが押されました");

  // 身長の入力欄から文字を取り出して、計算できる数字に変換する
  const height = Number(heightInput.value);
  // 体重の入力欄から文字を取り出して、計算できる数字に変換する
  const weight = Number(weightInput.value);

  // バリデーション（入力チェック）
  // もし身長か体重が空欄、または0以下なら処理を中断する
  if (!height || !weight || height <= 0 || weight <= 0) {
    resultDiv.textContent = "正しい身長と体重を入力してください。";
    return; // ここで処理を終わらせる（下の計算に進まない）
  }

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
