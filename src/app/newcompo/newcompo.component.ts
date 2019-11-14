import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FriendsService } from '../friends.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '.app-newcompo',
  template: `
  <strong>INTERPOLATION</strong>
  <h2>Bonjour à toi {{ name }} !</h2>
  <h2> Tu as {{ age }} ans.</h2>
  <strong>BINDINGS ou LIENS CSS et STYLE</strong>
  <br>
  <br>
  <input [disabled]="isDisabled" [id]= "testId" type="text" value="Bonjour"/>
  <h1>Bonjour à tous !</h1>
  <strong>BINDINGS ou LIENS CSS et STYLE Lier des events</strong>
  <br>
  <br>
  <button (click)="onClick($event)">Touch me</button> {{ bienvenue }}
  <input #myTxt type="text" /> <button (click)="logText(myTxt.value)">Envoyer</button>
  <br>
  <br>
  <strong>STRUCTURAL DIRECTIVES modif DOM</strong>
  <br>
  <br>
  <strong>ngIf</strong>
  <h1 *ngIf="showTitle; else otherTitle">Bonjour les amis !</h1>
  <ng-template #otherTitle> <h1>Bonjour les Trolls !!</h1> </ng-template>
  <strong>ngSwitch</strong>
  <br>
  <div [ngSwitch]="friend">
    <div *ngSwitchCase="'Sébastien'">Je suis Sébastien !</div>
    <div *ngSwitchCase="'Lohann'">Je suis Lohann !</div>
    <div *ngSwitchCase="'Emma'">Je suis Emma !</div>
    <div *ngSwitchDefault>Je ne vous connais pas !</div>
  </div>
  <br>
  <strong> ngFor</strong>
  <div *ngFor='let friend of amis'>
    <ul type='circle'>
      <li>{{ friend }}</li>
    </ul>
  </div>
  <strong>Input & Output</strong>
  <p>{{ 'Mon amie Justine a ' + friendAge + 'ans. '}}</p>
  <button (click)="eventName()">Nom de mon amie</button>
  <br>
  <br>
  <strong>PIPES</strong>
  <ul>
    <li> {{ identity | slice: 1 }}</li>
    <li> {{ pi | number: "3.1-5" }}</li>
    <li> {{ stats | percent }}</li>
  </ul>
  <strong>Comment utiliser les services</strong>
  <h2>Liste de nos amis</h2>
  <ul *ngFor="let friend of friends">
    <li>{{ friend.name }} - {{ friend.age }} ans. Tu es un(e) {{ friend.sexe }}.</li>
  </ul>
  `,
  styles: []


})
export class NewcompoComponent implements OnInit {
  public friends = [];
  public identity = 'Alex';
  public pi = '3.14';
  public stats = 0.34;
  public name = 'Séb';
  public age = 43;
  public testId = 'Salut';
  public isDisabled = false;
  public bienvenue = '';
  public showTitle = true;
  public friend = 'Fabienne';
  public amis = ['Fabienne', 'Sébastien', 'Lohann', 'Emma'];
  // tslint:disable-next-line: no-input-rename
  @Input('parentData') public friendAge;
  @Output() public friendName = new EventEmitter();

  // tslint:disable-next-line: variable-name
  constructor(private _friendsService: FriendsService) { }

  ngOnInit() {
    this._friendsService.getFriends().subscribe(data => (this.friends = data));
  }

  eventName() {
    this.friendName.emit('Justine'); }

  onClick(event) {
    console.log(event);
    this.bienvenue = 'Salut à tous !'; }

  logText(value) {
    // tslint:disable-next-line: no-trailing-whitespace
    console.log(value); } 

   }
