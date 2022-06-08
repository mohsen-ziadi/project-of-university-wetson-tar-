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
