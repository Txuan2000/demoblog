import { Component, OnInit } from '@angular/core';
import Konva from 'konva';

@Component({
  selector: 'app-rxjs-fantasy',
  templateUrl: './rxjs-fantasy.component.html',
  styleUrls: ['./rxjs-fantasy.component.scss']
})
export class RxjsFantasyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // first we need to create a stage
    var stage = new Konva.Stage({
      container: 'container',   // id of container <div>
      width: window.innerWidth,
      height: window.innerHeight - 20
    });

    // then create layer
    var layer = new Konva.Layer();

    // create our shape
    var circle = new Konva.Circle({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4
    });

    this.loadImage('/assets/img/character.jpg', layer);
    // add the shape to the layer
    layer.add(circle);

    // add the layer to the stage
    stage.add(layer);

    // draw the image
    layer.draw();
  }
  loadImage (url: string, layer: Konva.Layer) {
    var imageObj = new Image();
      imageObj.onload = function () {
        var yoda = new Konva.Image({
          x: 50,
          y: 50,
          image: imageObj,
          width: 106,
          height: 118,
        });

        // add the shape to the layer
        layer.add(yoda);
      };
      imageObj.src = url;
  }

}
