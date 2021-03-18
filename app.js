// ブロックのサイズ
const BLOCK_SIZE = 30;
// テトロミノのサイズ
const TETRO_SIZE = 4
let can = document.getElementById("can");
// getContext()メソッドは、グラフィックを描画するためのメソッドやプロパティをもつオブジェクトを返す。
let con = can.getContext("2d");

// con.fillStyle="red";
// con.fillRect(0,0,BLOCK_SIZE,BLOCK_SIZE);

let tetro = [
  [0,0,0,0],
  [1,1,0,0],
  [0,1,1,0],
  [0,0,0,0],
]; 

for(let y=0; y<TETRO_SIZE; y++){
  for(let x=0; x<TETRO_SIZE; x++){
  if (tetro[y][x] == 1){
    let px = x * BLOCK_SIZE
    let py = y * BLOCK_SIZE
    // ブロックを赤く塗りつぶす
    con.fillStyle="red";
    // 場所
    con.fillRect(px,py,BLOCK_SIZE,BLOCK_SIZE);
    //枠を描く
    con.strokeStyle = "black"
    con.strokeRect(px,py,BLOCK_SIZE,BLOCK_SIZE);


  }
    

  }

}

  