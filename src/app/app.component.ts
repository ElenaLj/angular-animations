import { animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor: 'tomato',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'orange',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => normal', animate(300)),
    ]),
    trigger('wildState', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(100px)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(0)'
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0) scale(0.5))'
      })),
      transition('normal <=> highlighted', animate(300)),
      transition('highlighted => normal', animate(300)),
      transition('shrunken <=> *',
        [
          style({
            backgroundColor: 'yellow'
          }),
          animate(1000, style({
            borderRadius: '50px'
          })),
          animate(500)
        ]),
    ]),
    trigger('listOne', [
      state('in', style({
        opacity: '1',
        transform: 'translateX(0)'
      })),
      transition('void <=> *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(200),
      ]),
      transition('* <=> void', [
        animate(200, style({
          Transform: 'translateX(100px)',
          opacity: 0,
        })),
      ]),
    ]),
    trigger('listTwo', [
      state('in', style({
        opacity: '1',
        transform: 'translateX(0)'
      })),
      transition('void <=> *', [
        animate(200, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3,
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.5
          }),
          ,
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          }),
        ])),
      ]),
      transition('* <=> void', [
        animate(200, style({
          transform: 'translateX(100px)',
          opacity: 0,
        })),
      ]),
      transition('* <=> void', [
        group([
          animate(300, style({
            color: 'red',
          })),
          animate(800, style({
            tranform: 'translateX(100px)',
            opacity: 0
          }))
        ])
      ]),
    ]),
  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';

  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item) {
    this.list.push(item);
  }

  onAnimate() {
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
    console.log('button works!')
  }
}
