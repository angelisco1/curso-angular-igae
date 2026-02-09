import { Component, signal } from '@angular/core';
import { Cmp01DataBinding } from './cmp01-data-binding/cmp01-data-binding';
import { Cmp02Pipes } from './cmp02-pipes/cmp02-pipes';
import { Cmp03Signals } from "./cmp03-signals/cmp03-signals";
import { Cmp04InputOutput } from "./cmp04-input-output/cmp04-input-output";
import { Cmp05ControlFlujo } from "./cmp05-control-flujo/cmp05-control-flujo";
import { Cmp06Formularios } from "./cmp06-formularios/cmp06-formularios";
import { Cmp07Servicios } from "./cmp07-servicios/cmp07-servicios";
import { Cmp08Observables } from "./cmp08-observables/cmp08-observables";
import { Cmp09Http } from "./cmp09-http/cmp09-http";



@Component({
  selector: 'app-root',
  imports: [
    Cmp01DataBinding,
    Cmp02Pipes,
    Cmp03Signals,
    Cmp04InputOutput,
    Cmp05ControlFlujo,
    Cmp06Formularios,
    Cmp07Servicios,
    Cmp08Observables,
    Cmp09Http
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
