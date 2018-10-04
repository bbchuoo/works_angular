import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myself',
  templateUrl: './myself.component.html',
  styleUrls: ['./myself.component.css']
})
export class MyselfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name ='姓名：徐永佳';
  HTMLCSS='運用HTML5與CSS做網頁美術樣式';
  Bootstrap='Ｂootstrap響應式設計';
  jQuery='使用jQuery撰寫網頁動態效果與使用者互動，搭配ajax與後端連結使用';
  angular='angular達到模組化各自區分工作方便維護';
  Cocos2d='學過Cocos2d-x撰寫遊戲 ';
  sketch='Sketch繪圖';
  Node= '基本後端知識Node.js、Mysql';
  private myself = require("./img.jpg");

}
