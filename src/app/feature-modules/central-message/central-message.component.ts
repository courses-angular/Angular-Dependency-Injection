import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  HostBinding,
  OnInit, Renderer2, TemplateRef,
  ViewChild,
  ViewContainerRef, ViewRef
} from '@angular/core';
import {CentralMessageService} from './central-message.service';
import {Observable} from 'rxjs';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';
import {IMessage} from './central-message-types';
import {map} from 'rxjs/operators';
import {AbstractCentralMessage} from './abstract-central-message';

@Component({
  selector: 'yl-central-message',
  templateUrl: './central-message.component.html',
  styleUrls: ['./central-message.component.scss']
})
export class CentralMessageComponent implements OnInit, AfterViewInit {
  @HostBinding() style = 'position:absolute;left:0;top:0;width:100%';
  messages$: Observable<IMessage[]>;
  // @ViewChild('alertMessage') alertMsg: ElementRef;
  // @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;


  constructor(private centralMessageService: AbstractCentralMessage, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.messages$ = this.centralMessageService.messages$;


  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.renderer.removeChild(this.container, this.alertMsg.nativeElement);
    // }, 3000);


  }


  remove(message: IMessage): void {
    this.centralMessageService.removeMessage(message);
  }

}
