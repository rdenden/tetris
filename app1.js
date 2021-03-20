// ブロックのサイズ
const BLOCK_SIZE = 30;
// テトロミノのサイズ
const TETRO_SIZE = 4
let can = document.getElementById("can");
// getContext()メソッドは、グラフィックを描画するためのメソッドやプロパティをもつオブジェクトを返す。
let con = can.getContext("2d");

// con.fillStyle="red";
// con.fillRect(0,0,BLOCK_SIZE,BLOCK_SIZE);

// テトロミノ本体
let tetro = [
  [0,0,0,0],
  [1,1,0,0],
  [0,1,1,0],
  [0,0,0,0],
]; 
//テトロミノの座標
let tetro_x = 0;
let tetro_y = 0;



// テトロミノを表示する関数
const drawTetro = () => {

  for(let y=0; y<TETRO_SIZE; y++){
    for(let x=0; x<TETRO_SIZE; x++){
      if (tetro[y][x] == 1){
        let px = (tetro_x + x) * BLOCK_SIZE
        let py = (tetro_y + y) * BLOCK_SIZE
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
}

drawTetro();


// キーボードが押された時に=以下の処理がなされる
document.onkeydown = (e) => {



  switch(e.keyCode){
    case 37:    //左
    tetro_x--;
    break;
    case 38:    //上
    tetro_y--;
    break;
    case 39:    //右
    tetro_x++
    break;
    case 40:    //下
    tetro_y++;
    break;
    case 32:    //スペース
    break    
    

  }
  drawTetro();


}
  