import React, { useEffect, useState } from "react";

function BMI() {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [bmi, setBMI] = useState(0);
  const weightElement = (document.getElementById("w") as HTMLInputElement) || 0;
  const heightElement = (document.getElementById("h") as HTMLInputElement) || 0;
  //   viết hàm tính BMI bằng công thức cân nặng chia bình phương chiều cao
  const handleClick = () => {
    setWeight(Number(weightElement.value)); // 50
    setHeight(Number(heightElement.value)); // 1.6
    // NaN // 18.8
    console.log(bmi); // 0 //NaN // 18.8

    // phan loai bmi

    // ooms
  };
  useEffect(() => {
    const result = document.querySelector("#result") as HTMLElement;

    console.log(111111, weight / (height * height));

    setBMI(weight / (height * height));
    if (weight / (height * height) >= 18.5 && weight / (height * height) < 25) {
      result.innerHTML = "Underweight";
    }
    if (weight / (height * height) >= 25 && weight / (height * height) < 30) {
      result.innerHTML = "Overweight";
    }
    if (weight / (height * height) >= 30 && weight / (height * height) < 35) {
      result.innerHTML = "Mũm mĩm 1";
    }
    if (weight / (height * height) >= 35 && weight / (height * height) < 40) {
      result.innerHTML = "Mũm mĩm 2";
    }
    if (weight / (height * height) >= 40) {
      result.innerHTML = "Mũm mĩm quas";
    }
    if (weight / (height * height) < 18.5) {
      //   console.log("Underweight");
      result.innerHTML = "ooms";
    }
  }, [weight]);

  return (
    <div>
      <input id="w" type="number" placeholder="weight" />
      <input id="h" type="number" placeholder="height" />
      <p id="result"></p>
      <button onClick={handleClick}>EHEHEHEHEHE</button>
    </div>
  );
}

export default BMI;
