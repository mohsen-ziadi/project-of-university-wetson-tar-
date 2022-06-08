function wetson() {
   let wR1 = $("#w-R1").val();
   let wR2 = $("#w-R2").val();
   let wR3 = $("#w-R3").val();
   let wR4 = $("#w-R4").val();
   let wResult;
   if (wR1 == "") {
      wResult = wR2 / wR4 * wR3;
      console.log(wResult);
   } else if (wR2 == "") {
      wResult = wR1 / wR3 * wR4;
      console.log(wResult);
   } else if (wR3 == "") {
      wResult = wR4 / wR2 * wR1;
      console.log(wResult);
   } else if (wR4 == "") {
      wResult = wR3 / wR1 * wR2;
      console.log(wResult);
   }
   $("#w-result").html(wResult);
}

function tar(){
   let tR1 = $("#t-R1").val();
   let tR2 = $("#t-R2").val();
   let tL1 = $("#t-L1").val();
   let tL2 = $("#t-L2").val();
   let tResult;
   if (tR1 == "") {
      tResult = tL1 / tL2 * tR2;
      console.log(tResult);
   } else if (tR2 == "") {
      tResult = tL2 / tL1 * tR1;
      console.log(tResult);
   } else if (tL1 == "") {
      tResult = tR1 / tR2 * tL2;
      console.log(tResult);
   } else if (tL2 == "") {
      tResult = tR2 / tR1 * tL1;
      console.log(tResult);
   }
   $("#t-result").html(tResult);
}