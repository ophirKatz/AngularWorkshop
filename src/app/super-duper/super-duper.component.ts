import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Inject,
  Optional
} from '@angular/core';
import { NotProvidedService } from './not-provided.service';

@Component({
  selector: 'app-super-duper',
  templateUrl: './super-duper.component.html',
  styleUrls: [
    './super-duper.component.css',
    // './shared-styles.css'
  ],
  // providers: [NotProvidedService]
})
export class SuperDuperComponent implements OnInit, AfterViewInit {

  public valueInner: string;

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('header') header: ElementRef;

  constructor(@Optional() @Inject(NotProvidedService) private service?: NotProvidedService) {
    console.log(`Because <NotProvidedService> is not provided, the injected service should be null: ${service}`);
  }

  ngOnInit(): void {
    console.log(`ViewChild field at OnInit lifecycle: ${this.header}`);
  }

  ngAfterViewInit(): void {
    console.log(`ViewChild field at AfterViewInit lifecycle: ${this.header.nativeElement.innerText}`);
  }

  @Input() public set value(v: string) {
    this.valueInner = v;
    this.changed.emit(v);
  }

  public get value(): string {
    return this.valueInner;
  }

}
